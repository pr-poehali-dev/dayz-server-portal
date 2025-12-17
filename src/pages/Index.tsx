import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const serverStats = {
    online: 47,
    maxPlayers: 60,
    uptime: '99.8%',
    ping: '25ms'
  };

  const topPlayers = [
    { rank: 1, name: 'Ghost_Survivor', kills: 342, deaths: 89, kd: 3.84 },
    { rank: 2, name: 'NightRaider', kills: 298, deaths: 102, kd: 2.92 },
    { rank: 3, name: 'LoneWolf_42', kills: 267, deaths: 95, kd: 2.81 },
    { rank: 4, name: 'ZombieHunter', kills: 245, deaths: 88, kd: 2.78 },
    { rank: 5, name: 'SilentKiller', kills: 221, deaths: 79, kd: 2.80 }
  ];

  const downloads = [
    {
      title: 'DayZ SA Launcher',
      description: 'Основной лаунчер для подключения к серверу',
      size: '45 MB',
      icon: 'Rocket',
      url: 'https://example.com/dayz-launcher.exe'
    },
    {
      title: 'Модпак сервера',
      description: 'Обязательные моды для игры на нашем сервере',
      size: '2.3 GB',
      icon: 'Package',
      url: 'https://example.com/server-modpack.zip'
    },
    {
      title: 'Discord',
      description: 'Присоединяйся к нашему сообществу',
      size: 'Web',
      icon: 'MessageSquare',
      url: 'https://discord.gg/your-server'
    },
    {
      title: 'Правила (PDF)',
      description: 'Полный свод правил сервера',
      size: '1.2 MB',
      icon: 'FileText',
      url: 'https://example.com/server-rules.pdf'
    }
  ];

  const news = [
    {
      date: '15.12.2025',
      title: 'Обновление карты: новая военная база',
      description: 'Добавлена крупная военная база на севере карты с эксклюзивным лутом',
      tag: 'Обновление'
    },
    {
      date: '10.12.2025',
      title: 'Сезонное событие: Зимнее выживание',
      description: 'Повышенная сложность выживания, новые зимние предметы одежды',
      tag: 'Событие'
    },
    {
      date: '05.12.2025',
      title: 'Улучшена производительность сервера',
      description: 'Оптимизация работы сервера, уменьшен пинг для всех игроков',
      tag: 'Техническое'
    }
  ];

  const rules = [
    {
      title: 'Общие правила',
      content: 'Запрещены читы, эксплойты, оскорбления. Уважайте других игроков. Администрация имеет право забанить без предупреждения за нарушение правил.'
    },
    {
      title: 'Правила PvP',
      content: 'Разрешён бандитизм и грабежи. Запрещено убийство новичков в прибрежных городах. KOS разрешён только в военных зонах и на севере карты.'
    },
    {
      title: 'Строительство баз',
      content: 'Максимум 2 базы на клан. Запрещено строительство в военных зонах и городах. База должна иметь минимум 2 входа.'
    },
    {
      title: 'Раидинг',
      content: 'Рейды разрешены 24/7. Запрещено глитчить через стены. Использование взрывчатки разрешено только для взлома замков и врат.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Crosshair" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold">DayZ Server</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('info')} className="hover:text-primary transition-colors">
                О сервере
              </button>
              <button onClick={() => scrollToSection('downloads')} className="hover:text-primary transition-colors">
                Загрузки
              </button>
              <button onClick={() => scrollToSection('news')} className="hover:text-primary transition-colors">
                Новости
              </button>
              <button onClick={() => scrollToSection('rules')} className="hover:text-primary transition-colors">
                Правила
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button className="hidden md:flex" onClick={() => window.open('https://discord.gg/your-server', '_blank')}>
              <Icon name="Users" className="mr-2" size={18} />
              Discord
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-20 pb-20">
        <div className="w-full">
          <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden animate-fade-in">
            <img 
              src="https://i.ytimg.com/vi/GI0aLqktl9A/maxresdefault.jpg" 
              alt="DayZ Server" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary backdrop-blur-sm">
                <Icon name="Circle" className="mr-1 fill-green-500 text-green-500" size={12} />
                Онлайн: {serverStats.online}/{serverStats.maxPlayers}
              </Badge>
              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <Button size="lg" className="text-lg px-8" onClick={() => window.open('steam://connect/your-server-ip:port', '_blank')}>
                  <Icon name="Play" className="mr-2" size={20} />
                  Начать играть
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 backdrop-blur-sm" onClick={() => scrollToSection('downloads')}>
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать моды
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            <Card className="text-center animate-scale-in">
              <CardContent className="pt-6">
                <Icon name="Users" className="mx-auto mb-2 text-primary" size={32} />
                <div className="text-3xl font-bold">{serverStats.online}/{serverStats.maxPlayers}</div>
                <div className="text-sm text-muted-foreground">Игроков онлайн</div>
              </CardContent>
            </Card>
            <Card className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6">
                <Icon name="Activity" className="mx-auto mb-2 text-secondary" size={32} />
                <div className="text-3xl font-bold">{serverStats.uptime}</div>
                <div className="text-sm text-muted-foreground">Аптайм</div>
              </CardContent>
            </Card>
            <Card className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <Icon name="Gauge" className="mx-auto mb-2 text-primary" size={32} />
                <div className="text-3xl font-bold">{serverStats.ping}</div>
                <div className="text-sm text-muted-foreground">Средний пинг</div>
              </CardContent>
            </Card>
            <Card className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="pt-6">
                <Icon name="Shield" className="mx-auto mb-2 text-secondary" size={32} />
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="info" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Информация о сервере</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Server" className="text-primary" />
                  Характеристики сервера
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Карта:</span>
                  <span className="font-semibold">Chernarus+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Слоты:</span>
                  <span className="font-semibold">60 игроков</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Режим:</span>
                  <span className="font-semibold">PvP/PvE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Перспектива:</span>
                  <span className="font-semibold">1PP/3PP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Сложность:</span>
                  <span className="font-semibold">Хардкор</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Рестарты:</span>
                  <span className="font-semibold">Каждые 4 часа</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Package" className="text-secondary" />
                  Особенности сервера
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Расширенный набор оружия и экипировки',
                    'Кастомные военные зоны с уникальным лутом',
                    'Система баз и рейдов',
                    'Экономика с трейдерами',
                    'Автомобили и вертолёты',
                    'Активная администрация и events'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="stats" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Статистика и рейтинг</h2>
          <Card>
            <CardHeader>
              <CardTitle>Топ-5 игроков</CardTitle>
              <CardDescription>Рейтинг по K/D соотношению</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2">Ранг</th>
                      <th className="text-left py-3 px-2">Игрок</th>
                      <th className="text-center py-3 px-2">Убийств</th>
                      <th className="text-center py-3 px-2">Смертей</th>
                      <th className="text-center py-3 px-2">K/D</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPlayers.map((player) => (
                      <tr key={player.rank} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                        <td className="py-4 px-2">
                          <Badge variant={player.rank === 1 ? "default" : "secondary"}>
                            #{player.rank}
                          </Badge>
                        </td>
                        <td className="py-4 px-2 font-semibold">{player.name}</td>
                        <td className="py-4 px-2 text-center text-primary">{player.kills}</td>
                        <td className="py-4 px-2 text-center text-muted-foreground">{player.deaths}</td>
                        <td className="py-4 px-2 text-center font-bold text-secondary">{player.kd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="downloads" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Загрузки</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {downloads.map((download, index) => (
              <Card key={index} className="hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon name={download.icon as any} className="text-primary group-hover:scale-110 transition-transform" size={24} />
                      </div>
                      <div>
                        <CardTitle className="group-hover:text-primary transition-colors">{download.title}</CardTitle>
                        <CardDescription className="group-hover:text-foreground/80 transition-colors">{download.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="group-hover:border-primary group-hover:text-primary transition-colors">{download.size}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all" 
                    variant="outline"
                    onClick={() => window.open(download.url, '_blank')}
                  >
                    <Icon name="Download" className="mr-2 group-hover:animate-bounce" size={18} />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Новости и обновления</h2>
          <div className="space-y-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge>{item.tag}</Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Правила сервера</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {rules.map((rule, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {rule.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {rule.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты и поддержка</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:border-primary transition-colors cursor-pointer group">
              <CardHeader>
                <Icon name="MessageSquare" className="mx-auto text-primary group-hover:scale-110 transition-transform" size={48} />
                <CardTitle>Discord</CardTitle>
                <CardDescription>Общайся с игроками</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" onClick={() => window.open('https://discord.gg/your-server', '_blank')}>
                  Присоединиться
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:border-secondary transition-colors cursor-pointer group">
              <CardHeader>
                <Icon name="Send" className="mx-auto text-secondary group-hover:scale-110 transition-transform" size={48} />
                <CardTitle>Telegram</CardTitle>
                <CardDescription>Быстрая поддержка</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" onClick={() => window.open('https://t.me/your-support', '_blank')}>
                  Написать
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:border-primary transition-colors cursor-pointer group">
              <CardHeader>
                <Icon name="Mail" className="mx-auto text-primary group-hover:scale-110 transition-transform" size={48} />
                <CardTitle>Email</CardTitle>
                <CardDescription>Официальные запросы</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" onClick={() => window.location.href = 'mailto:support@your-server.com'}>
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-card/50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Crosshair" className="text-primary" size={24} />
            <span className="font-bold text-xl">DayZ Server</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 DayZ Server. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;