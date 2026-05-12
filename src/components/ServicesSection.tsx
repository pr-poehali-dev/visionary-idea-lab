import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "QrCode",
    title: "Генерация кодов маркировки",
    description:
      "Выпускаем коды маркировки в системе Честный знак для любых товарных групп: одежда, обувь, молочная продукция, вода, табак и другие. Работаем с любыми объёмами — от нескольких штук до тысяч единиц.",
  },
  {
    icon: "FileText",
    title: "Оформление УПД",
    description:
      "Помогаем правильно оформить универсальный передаточный документ с кодами маркировки. Исключаем ошибки при передаче товара между участниками оборота и проверяем корректность данных перед отправкой.",
  },
  {
    icon: "HeadphonesIcon",
    title: "Техническая поддержка",
    description:
      "Решаем любые технические проблемы с Честным знаком: ошибки при регистрации, сбои в передаче данных, вопросы по оборудованию. Отвечаем быстро и доступным языком — без технического жаргона.",
  },
  {
    icon: "BookOpen",
    title: "Подключение к системе",
    description:
      "Помогаем с регистрацией в системе Честный знак с нуля: оформление УКЭП, подключение к ЭДО, настройка оборудования для считывания и печати кодов маркировки.",
  },
  {
    icon: "RefreshCw",
    title: "Ввод и вывод из оборота",
    description:
      "Корректно оформляем ввод маркированного товара в оборот и его вывод при продаже через кассу или для собственных нужд. Следим за актуальностью статусов кодов в системе.",
  },
  {
    icon: "ShieldCheck",
    title: "Проверка и аудит",
    description:
      "Проверяем корректность ваших процессов маркировки, выявляем нарушения до прихода проверки. Составляем рекомендации и помогаем устранить ошибки в учёте кодов.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наша экспертиза
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          В чем мы <span className="text-primary">сильны</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Полный спектр услуг по работе с Честным знаком — от подключения до ежедневного сопровождения. Берём на себя всё, чтобы вы занимались бизнесом.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} className="h-6 w-6" fallback="Star" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
