import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Елена М.",
    role: "Семейный спор",
    text: "Татьяна Викторовна помогла мне в сложном бракоразводном процессе. Благодаря её профессионализму удалось разрешить вопросы раздела имущества и определения места жительства ребёнка в мою пользу. Рекомендую!",
  },
  {
    name: "Андрей К.",
    role: "Наследственное дело",
    text: "Обратился по вопросу оспаривания завещания. Татьяна Викторовна провела тщательный анализ ситуации, разработала стратегию и добилась положительного решения суда. Очень благодарен за работу.",
  },
  {
    name: "ООО «Стройресурс»",
    role: "Арбитражный спор",
    text: "Сотрудничаем с адвокатом Ушаковой по арбитражным делам. Профессиональный подход, внимание к деталям и отличное знание законодательства. Все споры решены в нашу пользу.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-gold" />
            <span className="text-sm font-semibold tracking-widest text-gold uppercase">
              Отзывы
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Что говорят наши клиенты</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <Quote className="mb-4 h-8 w-8 text-gold/30" />
              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t.text}
              </p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="font-serif text-base font-bold text-card-foreground">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
