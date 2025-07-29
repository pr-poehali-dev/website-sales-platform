import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const portfolioProjects = [
  {
    id: 1,
    title: "Интернет-магазин премиум класса",
    description: "Современный e-commerce с собственным конструктором продуктов",
    image: "/img/8ed7fc58-598b-4c81-b242-2c818e6db96b.jpg",
    tags: ["E-commerce", "React", "Конструктор"]
  },
  {
    id: 2, 
    title: "Образовательная платформа",
    description: "Интерактивная система обучения с визуальным редактором курсов",
    image: "/img/2f2b16e0-4d62-446d-89d8-0eb5e81f36bc.jpg",
    tags: ["EdTech", "Дизайн", "Интерактив"]
  },
  {
    id: 3,
    title: "Корпоративный портал",
    description: "Комплексное решение для управления бизнес-процессами",
    image: "/img/b82ced12-e328-426f-a51f-6080632487cc.jpg", 
    tags: ["Корпорат", "CRM", "Автоматизация"]
  }
];

const services = [
  {
    icon: "Code2",
    title: "Веб-разработка",
    description: "Создаем современные сайты с уникальным дизайном и функционалом"
  },
  {
    icon: "Palette",
    title: "UI/UX дизайн", 
    description: "Проектируем интуитивные интерфейсы, которые конвертируют"
  },
  {
    icon: "Wrench",
    title: "Конструктор сайтов",
    description: "Собственный drag&drop редактор для быстрого создания страниц"
  },
  {
    icon: "Rocket",
    title: "Техподдержка",
    description: "Полное сопровождение проекта от идеи до запуска и далее"
  }
];

const pricing = [
  {
    name: "Начальный",
    price: "5 000",
    period: "проект",
    description: "Идеально для небольших проектов",
    features: [
      "Адаптивный дизайн",
      "До 5 страниц",
      "Базовая SEO оптимизация", 
      "Месяц техподдержки"
    ],
    popular: false
  },
  {
    name: "Профи", 
    price: "10 000",
    period: "проект",
    description: "Для серьезного бизнеса",
    features: [
      "Уникальный дизайн",
      "До 15 страниц",
      "Интеграции и автоматизация",
      "CMS система",
      "3 месяца техподдержки"
    ],
    popular: true
  },
  {
    name: "ВИП",
    price: "13 000", 
    period: "проект",
    description: "Максимальный функционал",
    features: [
      "Эксклюзивный дизайн",
      "Неограниченно страниц",
      "Конструктор для клиента",
      "Мобильное приложение",
      "Год техподдержки"
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Анна Петрова",
    company: "CEO, TechStart",
    text: "Потрясающая работа! Наш новый сайт увеличил конверсию на 340%. Конструктор позволяет нам быстро вносить изменения самостоятельно.",
    rating: 5
  },
  {
    name: "Михаил Сидоров", 
    company: "Директор, БизнесПро",
    text: "Профессиональный подход на всех этапах. Команда не только создала красивый сайт, но и обучила нас работе с системой.",
    rating: 5
  },
  {
    name: "Елена Волкова",
    company: "Основатель, CreativeHub", 
    text: "Восхищена результатом! Сайт полностью отражает философию нашего бренда. Рекомендую всем, кто ценит качество.",
    rating: 5
  }
];

export default function Index() {
  const [activeDemo, setActiveDemo] = useState('desktop');

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-electric rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold font-inter">WebStudio</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</a>
          </div>
          
          <Button className="bg-gradient-electric hover:opacity-90">
            Начать проект
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-gradient-creative text-white border-none">🚀 Собственный конструктор сайтов</Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-inter mb-6 bg-gradient-creative bg-clip-text text-transparent">
              Создаем сайты<br />будущего
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Веб-студия с собственным конструктором. Даем клиентам полный контроль 
              над их сайтом через интуитивный drag&drop редактор.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-electric hover:opacity-90 px-8 py-6 text-lg">
                <Icon name="Rocket" size={20} className="mr-2" />
                Создать сайт
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="animate-scale-in">
            <div className="bg-card rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
              <div className="flex justify-center gap-4 mb-6">
                {['desktop', 'tablet', 'mobile'].map((device) => (
                  <Button
                    key={device}
                    variant={activeDemo === device ? "default" : "outline"}
                    onClick={() => setActiveDemo(device)}
                    className="capitalize"
                  >
                    <Icon 
                      name={device === 'desktop' ? 'Monitor' : device === 'tablet' ? 'Tablet' : 'Smartphone'} 
                      size={16} 
                      className="mr-2" 
                    />
                    {device === 'desktop' ? 'Десктоп' : device === 'tablet' ? 'Планшет' : 'Мобильный'}
                  </Button>
                ))}
              </div>
              
              <div className="relative">
                <div className={`mx-auto transition-all duration-500 ${
                  activeDemo === 'desktop' ? 'w-full' : 
                  activeDemo === 'tablet' ? 'w-2/3' : 'w-1/3'
                } bg-gradient-to-br from-vibrant-purple to-vibrant-pink rounded-xl p-6 text-white`}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold mb-2">Конструктор в действии</h3>
                    <p className="text-white/80 text-sm mb-4">Drag & Drop редактор</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-8 bg-white/20 rounded"></div>
                      <div className="h-8 bg-white/20 rounded"></div>
                      <div className="h-4 bg-white/20 rounded col-span-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-inter mb-4">Наше портфолио</h2>
            <p className="text-xl text-muted-foreground">Проекты, которыми мы гордимся</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-electric opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Посмотреть
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-inter">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-inter mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный цикл создания веб-проектов</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-electric rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-inter mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-inter mb-4">Тарифы</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий план для вашего проекта</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-electric text-white border-none">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="font-inter text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">₽ / {plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-vibrant-emerald" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-electric hover:opacity-90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-inter mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нашей работе</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-creative text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold font-inter mb-4">Готовы создать свой сайт?</h2>
          <p className="text-xl mb-8 opacity-90">Свяжитесь с нами и получите персональное предложение</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-electric rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={16} className="text-white" />
              </div>
              <span className="text-xl font-bold font-inter">WebStudio</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 WebStudio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}