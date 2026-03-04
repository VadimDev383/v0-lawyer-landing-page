import { Heart, Landmark, Briefcase, ShieldCheck, Building2, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Семейные споры",
    description:
      "Разводы, раздел имущества, определение места жительства ребёнка, алименты и другие семейные вопросы.",
  },
  {
    icon: Landmark,
    title: "Наследственные дела",
    description:
      "Оформление наследства, оспаривание завещания, восстановление сроков принятия наследства.",
  },
  {
    icon: Briefcase,
    title: "Арбитражные споры",
    description:
      "Защита интересов бизнеса в арбитражных судах, взыскание задолженностей, корпоративные споры.",
  },
  {
    icon: ShieldCheck,
    title: "Защита в суде",
    description:
      "Представительство в судах общей юрисдикции по гражданским, административным и уголовным делам.",
  },
  {
    icon: Building2,
    title: "Сопровождение бизнеса",
    description:
      "Юридический аудит, разработка договоров, консультации по налоговому и трудовому праву.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-gold" />
            <span className="text-sm font-semibold tracking-widest text-gold uppercase">
              Услуги
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Направления юридической помощи</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground lg:text-lg">
            Комплексная правовая поддержка для физических лиц и бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:border-gold/30 hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-gold/5 transition-transform group-hover:scale-150" />
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5">
                  <service.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-gold"
                >
                  Подробнее
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
