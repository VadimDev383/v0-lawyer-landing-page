import { Award, Users, Lock, BookOpen } from "lucide-react"

const stats = [
  {
    icon: BookOpen,
    title: "Более 10 лет практики",
    description: "Глубокая экспертиза в различных отраслях права",
  },
  {
    icon: Award,
    title: "300+ выигранных дел",
    description: "Доказанный результат и высокий процент успешных исходов",
  },
  {
    icon: Users,
    title: "Индивидуальный подход",
    description: "Персональная стратегия для каждого клиента",
  },
  {
    icon: Lock,
    title: "Конфиденциальность",
    description: "Полная защита персональных данных и адвокатская тайна",
  },
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-20">
          {/* Left column */}
          <div className="flex-1">
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="h-px w-8 bg-gold" />
              <span className="text-sm font-semibold tracking-widest text-gold uppercase">
                Об адвокате
              </span>
            </div>

            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">Ваш надёжный защитник в мире права</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
              Ушакова Татьяна Викторовна — адвокат с многолетним опытом успешной практики в
              области семейного, наследственного и арбитражного права. Член Адвокатской
              палаты г. Москвы.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
              Каждое дело для меня — это не просто юридическая задача, а судьба человека.
              Я гарантирую вовлечённость, прозрачность и максимальное усилие для достижения
              результата.
            </p>
          </div>

          {/* Right column — stat cards */}
          <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-gold/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5">
                  <stat.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-serif text-base font-bold text-card-foreground">
                  {stat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
