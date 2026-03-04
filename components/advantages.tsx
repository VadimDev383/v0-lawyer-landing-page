import { Lock, Eye, Target, Trophy } from "lucide-react"

const advantages = [
  {
    icon: Lock,
    title: "Гарантия конфиденциальности",
    description:
      "Адвокатская тайна защищена законом. Вся информация о вашем деле остаётся строго конфиденциальной.",
  },
  {
    icon: Eye,
    title: "Прозрачные условия",
    description:
      "Чёткая стоимость услуг, понятный договор и полная отчётность на каждом этапе работы.",
  },
  {
    icon: Target,
    title: "Стратегия под каждый случай",
    description:
      "Индивидуальный план действий с учётом всех нюансов вашего дела и ваших целей.",
  },
  {
    icon: Trophy,
    title: "Работа на результат",
    description:
      "Высокий процент успешных дел благодаря тщательной подготовке и глубокому анализу.",
  },
]

export function Advantages() {
  return (
    <section id="advantages" className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-gold" />
            <span className="text-sm font-semibold tracking-widest text-gold uppercase">
              Преимущества
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Почему клиенты выбирают нас</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, idx) => (
            <div
              key={item.title}
              className="group relative rounded-xl border border-navy-light/30 bg-navy-light/20 p-8 transition-all hover:border-gold/30 hover:bg-navy-light/40"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10">
                <item.icon className="h-7 w-7 text-gold" />
              </div>
              <span className="absolute top-6 right-6 font-serif text-4xl font-bold text-primary-foreground/5">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-lg font-bold text-primary-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
