import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Долго боялась подключаться к Честному знаку — казалось, это что-то очень сложное. Ребята всё объяснили понятным языком, помогли с регистрацией и первым выпуском кодов. Теперь работаем без проблем!",
    name: "Анастасия",
    role: "Владелец магазина одежды",
  },
  {
    quote:
      "Поставщик требовал УПД с кодами маркировки, а наш бухгалтер не знал как это оформить. Обратились в 1C Matrix — всё сделали за несколько часов. Теперь постоянно пользуемся их услугами.",
    name: "Сергей",
    role: "Оптовый поставщик обуви",
  },
  {
    quote:
      "Пришла проверка и нашла ошибки в учёте маркировки. 1C Matrix помогли разобраться с проблемами и выстроить правильный процесс. Теперь у нас всё в порядке и я сплю спокойно.",
    name: "Наталья",
    role: "Директор молочного производства",
  },
  {
    quote:
      "Работаем с командой уже больше года. Большие объёмы кодов, много номенклатуры — они справляются со всем оперативно. Персональный менеджер всегда на связи, даже в выходные.",
    name: "Дмитрий",
    role: "Логистическая компания",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Сотни предпринимателей уже решили вопросы с маркировкой с нашей помощью. Читайте, что говорят клиенты.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}