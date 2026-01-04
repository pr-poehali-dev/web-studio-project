import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      id: 1,
      title: 'Идея',
      description: 'Анализируем ваш бизнес и формулируем концепцию проекта',
      icon: 'Lightbulb',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Дизайн',
      description: 'Создаём уникальный визуальный стиль и прототипы страниц',
      icon: 'Palette',
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 3,
      title: 'Разработка',
      description: 'Воплощаем дизайн в код с использованием современных технологий',
      icon: 'Code',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 4,
      title: 'Тестирование',
      description: 'Проверяем работу всех функций и исправляем недочёты',
      icon: 'TestTube',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 5,
      title: 'Запуск',
      description: 'Публикуем сайт в сеть и передаём вам готовый продукт',
      icon: 'Rocket',
      color: 'from-green-500 to-green-600'
    }
  ];

  const services = [
    {
      title: 'Корпоративные сайты',
      description: 'Презентабельные веб-решения для бизнеса любого масштаба',
      icon: 'Building2'
    },
    {
      title: 'Интернет-магазины',
      description: 'Удобные платформы для онлайн-торговли с интеграцией платежей',
      icon: 'ShoppingCart'
    },
    {
      title: 'Лендинги',
      description: 'Продающие одностраничные сайты с высокой конверсией',
      icon: 'FileText'
    },
    {
      title: 'Веб-приложения',
      description: 'Сложные интерактивные системы и сервисы',
      icon: 'Layout'
    }
  ];

  const team = [
    { name: 'Алексей Иванов', role: 'Арт-директор', icon: 'User' },
    { name: 'Мария Петрова', role: 'UX/UI дизайнер', icon: 'User' },
    { name: 'Дмитрий Сидоров', role: 'Frontend разработчик', icon: 'User' },
    { name: 'Елена Козлова', role: 'Backend разработчик', icon: 'User' }
  ];

  const portfolio = [
    { title: 'Интернет-магазин электроники', category: 'E-commerce', color: 'bg-purple-100' },
    { title: 'Корпоративный сайт банка', category: 'Финансы', color: 'bg-pink-100' },
    { title: 'Платформа онлайн-обучения', category: 'EdTech', color: 'bg-orange-100' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                WebStudio
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">О студии</a>
              <a href="#process" className="text-gray-700 hover:text-purple-600 transition-colors">Процесс</a>
              <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors">Портфолио</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Услуги</a>
              <a href="#team" className="text-gray-700 hover:text-purple-600 transition-colors">Команда</a>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Связаться
              </Button>
            </div>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent leading-tight">
                Создаём сайты, которые работают на вас
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Современная веб-студия полного цикла. От идеи до запуска — воплощаем ваш цифровой продукт с нуля
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8">
                  Обсудить проект
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 text-lg px-8">
                  Смотреть портфолио
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">О нашей студии</h2>
              <p className="text-lg text-gray-600 mb-8">
                WebStudio — это команда профессионалов с опытом более 5 лет в веб-разработке. 
                Мы создали более 100 успешных проектов для компаний из разных сфер бизнеса.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
                  <div className="text-gray-600">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-600 mb-2">5+</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Процесс разработки</h2>
              <p className="text-lg text-gray-600">От идеи до запуска — визуализация каждого этапа</p>
            </div>

            <div className="max-w-6xl mx-auto mb-12">
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-green-500 transform -translate-y-1/2 hidden md:block"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className="flex flex-col items-center cursor-pointer"
                      onMouseEnter={() => setActiveStep(index)}
                      onClick={() => setActiveStep(index)}
                    >
                      <div
                        className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 transform transition-all duration-300 ${
                          activeStep === index ? 'scale-125 shadow-2xl' : 'scale-100 shadow-lg'
                        }`}
                      >
                        <Icon name={step.icon as any} className="text-white" size={32} />
                      </div>
                      <div className="text-center">
                        <h3 className={`font-bold mb-2 transition-colors ${activeStep === index ? 'text-purple-600' : 'text-gray-800'}`}>
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Card className="max-w-3xl mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm animate-scale-in">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={steps[activeStep].icon as any} className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{steps[activeStep].title}</h3>
                    <p className="text-gray-600 text-lg">{steps[activeStep].description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="portfolio" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
              <p className="text-lg text-gray-600">Наши последние проекты</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {portfolio.map((project, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border-0">
                  <div className={`h-48 ${project.color} group-hover:scale-110 transition-transform duration-300`}></div>
                  <CardContent className="p-6">
                    <div className="text-sm text-purple-600 font-semibold mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
              <p className="text-lg text-gray-600">Полный спектр веб-разработки</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 bg-white hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon name={service.icon as any} className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Наша команда</h2>
              <p className="text-lg text-gray-600">Профессионалы своего дела</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={member.icon as any} className="text-white" size={40} />
                    </div>
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Готовы начать проект?</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto mb-4">
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </p>
              <p className="text-lg opacity-75">
                Первая консультация — бесплатно!
              </p>
            </div>

            <ContactForm />

            <div className="mt-16 text-center">
              <p className="text-lg mb-6 opacity-90">Или свяжитесь с нами напрямую:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="mailto:info@webstudio.ru" className="inline-flex">
                  <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8">
                    <Icon name="Mail" className="mr-2" size={20} />
                    info@webstudio.ru
                  </Button>
                </a>
                <a href="tel:+79991234567" className="inline-flex">
                  <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8">
                    <Icon name="Phone" className="mr-2" size={20} />
                    +7 (999) 123-45-67
                  </Button>
                </a>
              </div>
              <div className="flex justify-center space-x-6">
                <a href="#" className="hover:scale-110 transition-transform">
                  <Icon name="Github" size={28} />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <Icon name="Linkedin" size={28} />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <Icon name="Twitter" size={28} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 WebStudio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;