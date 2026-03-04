import { Scale } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy-dark py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2.5">
            <Scale className="h-5 w-5 text-gold" />
            <span className="font-serif text-base font-bold text-primary-foreground">
              Адвокат Ушакова Т.В.
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#about" className="text-xs text-primary-foreground/50 transition-colors hover:text-gold">
              Об адвокате
            </a>
            <a href="#services" className="text-xs text-primary-foreground/50 transition-colors hover:text-gold">
              Услуги
            </a>
            <a href="#advantages" className="text-xs text-primary-foreground/50 transition-colors hover:text-gold">
              Преимущества
            </a>
            <a href="#testimonials" className="text-xs text-primary-foreground/50 transition-colors hover:text-gold">
              Отзывы
            </a>
            <a href="#contact" className="text-xs text-primary-foreground/50 transition-colors hover:text-gold">
              Контакты
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/30">
            {"\u00A9"} {new Date().getFullYear()} Адвокат Ушакова Татьяна Викторовна. Все
            права защищены.
          </p>
          <p className="mt-1 text-xs text-primary-foreground/20">
            Информация на сайте не является публичной офертой
          </p>
        </div>
      </div>
    </footer>
  )
}
