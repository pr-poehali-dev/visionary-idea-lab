import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const cases = [
  {
    title: "Молочный завод «Рассвет»",
    category: "Молочная продукция",
    icon: "Milk",
    description:
      "Подключили завод к системе Честный знак с нуля: регистрация, настройка оборудования, обучение сотрудников. Выпустили первые 50 000 кодов и настроили процесс передачи по цепочке поставок.",
    tags: ["Молоко", "50 000+ кодов", "Подключение с нуля"],
    metric: "50 000+",
    metricLabel: "кодов выпущено",
  },
  {
    title: "Сеть магазинов «Ботинок»",
    category: "Обувь",
    icon: "ShoppingBag",
    description:
      "Перевели оптовые закупки на ЭДО с маркировкой. Настроили оформление УПД при приёмке товара от поставщиков, сократили время обработки одной партии с 2 часов до 15 минут.",
    tags: ["Обувь", "УПД", "ЭДО"],
    metric: "15 мин",
    metricLabel: "вместо 2 часов",
  },
  {
    title: "ИП Соколова — магазин одежды",
    category: "Лёгкая промышленность",
    icon: "Shirt",
    description:
      "Помогли небольшому ИП разобраться с обязательной маркировкой одежды. Провели консультацию, помогли получить УКЭП, выпустили первые коды и сопровождали на всех этапах.",
    tags: ["Одежда", "Малый бизнес", "Старт с нуля"],
    metric: "1 день",
    metricLabel: "до первых кодов",
  },
  {
    title: "Дистрибьютор воды «АкваТрейд»",
    category: "Питьевая вода",
    icon: "Droplets",
    description:
      "Автоматизировали учёт кодов маркировки при отгрузке воды дистрибьюторам. Настроили интеграцию с 1С, устранили ошибки в остатках и обучили персонал склада.",
    tags: ["Вода", "1С интеграция", "Склад"],
    metric: "0 ошибок",
    metricLabel: "после настройки",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши кейсы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Реальные задачи, которые мы решили для клиентов. От небольшого ИП до производственного завода.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border hover:border-primary shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 p-10 flex items-center justify-center">
                <div className="p-6 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Icon name={item.icon} className="h-16 w-16 text-primary" fallback="Package" />
                </div>
                <div className="absolute top-4 right-4 text-right">
                  <div className="text-3xl font-bold text-primary">{item.metric}</div>
                  <div className="text-xs text-muted-foreground">{item.metricLabel}</div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{item.category}</p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
