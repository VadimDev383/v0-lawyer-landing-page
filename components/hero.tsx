import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs font-medium tracking-wide text-gold">
              Более 10 лет практики
            </span>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">Профессиональная юридическая защита</span>{" "}
            <span className="text-gold">в Москве</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70 lg:text-xl">
            Адвокат Ушакова Татьяна Викторовна. Опыт более 10 лет. Защита ваших
            интересов в суде и досудебном порядке.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-base font-semibold text-navy-dark transition-all hover:bg-gold-light"
            >
              Получить консультацию
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-7 py-3.5 text-base font-medium text-primary-foreground transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/5"
            >
              Наши услуги
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-gold">300+</p>
              <p className="mt-1 text-xs text-primary-foreground/50">Выигранных дел</p>
            </div>
            <div className="h-10 w-px bg-primary-foreground/15" />
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-gold">10+</p>
              <p className="mt-1 text-xs text-primary-foreground/50">Лет опыта</p>
            </div>
            <div className="h-10 w-px bg-primary-foreground/15" />
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-gold">98%</p>
              <p className="mt-1 text-xs text-primary-foreground/50">Довольных клиентов</p>
            </div>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative flex-shrink-0">
          <div className="relative h-[400px] w-[320px] overflow-hidden rounded-2xl border-2 border-gold/20 lg:h-[480px] lg:w-[380px]">
            <Image
              src="/images/lawyer-portrait.jpg"
              alt="Адвокат Ушакова Татьяна Викторовна"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl border border-gold/20 bg-navy-light/90 px-5 py-3 backdrop-blur-sm">
            <p className="text-xs font-medium text-primary-foreground/60">Московская коллегия адвокатов</p>
            <p className="font-serif text-sm font-semibold text-gold">Член Адвокатской палаты г. Москвы</p>
          </div>
        </div>
      </div>
    </section>
  )
}
