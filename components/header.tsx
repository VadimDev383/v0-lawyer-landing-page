"use client"

import { useState } from "react"
import { Scale, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Об адвокате", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Контакты", href: "#contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-navy-light/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <Scale className="h-7 w-7 text-gold" />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold tracking-wide text-primary-foreground">
              Адвокат Ушакова
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy-dark transition-all hover:bg-gold-light lg:inline-block"
        >
          Консультация
        </a>

        <button
          type="button"
          className="text-primary-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-navy-light/30 bg-navy lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-navy-light/20 py-3 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-lg bg-gold px-5 py-2.5 text-center text-sm font-semibold text-navy-dark transition-all hover:bg-gold-light"
            >
              Консультация
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
