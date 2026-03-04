import { PhoneCall, ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="bg-navy py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
          <PhoneCall className="h-7 w-7 text-gold" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
          <span className="text-balance">Получите консультацию уже сегодня</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/60 lg:text-lg">
          Первая консультация поможет оценить перспективы вашего дела и определить
          оптимальную стратегию защиты ваших интересов.
        </p>
        <a
          href="#contact"
          className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-navy-dark transition-all hover:bg-gold-light"
        >
          Записаться на консультацию
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
