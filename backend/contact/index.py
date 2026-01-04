import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def handler(event: dict, context) -> dict:
    '''API для обработки заявок с формы обратной связи и отправки email'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }

    body = event.get('body', '{}')
    data = json.loads(body)

    name = data.get('name', '')
    email = data.get('email', '')
    phone = data.get('phone', '')
    message = data.get('message', '')

    if not all([name, email, phone, message]):
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'All fields are required'})
        }

    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    contact_email = os.environ.get('CONTACT_EMAIL')

    if not all([smtp_host, smtp_user, smtp_password, contact_email]):
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'SMTP settings not configured'})
        }

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта от {name}'
    msg['From'] = smtp_user
    msg['To'] = contact_email

    html_body = f'''
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #8B5CF6; margin-bottom: 20px;">Новая заявка с сайта</h2>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
            <p style="margin: 10px 0;"><strong>Имя:</strong> {name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:{email}">{email}</a></p>
            <p style="margin: 10px 0;"><strong>Телефон:</strong> <a href="tel:{phone}">{phone}</a></p>
          </div>
          <div style="background-color: #fff; padding: 15px; border-left: 4px solid #8B5CF6;">
            <p style="margin: 0;"><strong>Сообщение:</strong></p>
            <p style="margin-top: 10px; white-space: pre-wrap;">{message}</p>
          </div>
        </div>
      </body>
    </html>
    '''

    text_body = f'''
Новая заявка с сайта

Имя: {name}
Email: {email}
Телефон: {phone}

Сообщение:
{message}
    '''

    part1 = MIMEText(text_body, 'plain')
    part2 = MIMEText(html_body, 'html')
    msg.attach(part1)
    msg.attach(part2)

    try:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Email sent successfully'
            })
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': 'Failed to send email',
                'details': str(e)
            })
        }
