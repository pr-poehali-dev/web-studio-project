import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/3face339-ab64-422b-92a1-d53ff717e239', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Заявка отправлена!',
          description: 'Мы свяжемся с вами в ближайшее время.',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить заявку. Попробуйте позже.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-white">
            Ваше имя *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Иван Петров"
            className="bg-white/90 border-white/20 text-gray-900 placeholder:text-gray-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-white">
            Телефон *
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (999) 123-45-67"
            className="bg-white/90 border-white/20 text-gray-900 placeholder:text-gray-500"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-white">
          Email *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="example@mail.com"
          className="bg-white/90 border-white/20 text-gray-900 placeholder:text-gray-500"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-white">
          Сообщение *
        </label>
        <Textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Расскажите о вашем проекте..."
          rows={5}
          className="bg-white/90 border-white/20 text-gray-900 placeholder:text-gray-500"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-white text-purple-600 hover:bg-gray-100 text-lg font-semibold"
      >
        {isSubmitting ? (
          <>
            <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
            Отправка...
          </>
        ) : (
          <>
            <Icon name="Send" className="mr-2" size={20} />
            Отправить заявку
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;