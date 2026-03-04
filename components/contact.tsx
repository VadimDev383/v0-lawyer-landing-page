"use client"

import { useState, type FormEvent } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function Contact() {
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // placeholder form handler
  }

  return (
    <section id="contact" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-gold" />
            <span className="text-sm font-semibold tracking-widest text-gold uppercase">
              Контакты
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Свяжитесь с нами</span>
          </h2>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Contact info */}
          <div className="flex-1">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-navy/5">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Телефон
                  </p>
                  <p className="mt-1 font-serif text-lg font-bold text-card-foreground">
                    +7 (495) 000-00-00
                  </p>
                  <p className="text-xs text-muted-foreground">Пн-Пт 9:00 - 19:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-navy/5">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Электронная почта
                  </p>
                  <p className="mt-1 font-serif text-lg font-bold text-card-foreground">
                    info@advokat-ushakova.ru
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-navy/5">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Адрес офиса
                  </p>
                  <p className="mt-1 font-serif text-lg font-bold text-card-foreground">
                    г. Москва, ул. Примерная, д. 1, офис 100
                  </p>
                  <p className="text-xs text-muted-foreground">м. Арбатская, 5 мин. пешком</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="flex-1">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card p-8 shadow-sm"
            >
              <h3 className="font-serif text-xl font-bold text-card-foreground">
                Оставьте заявку
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Мы свяжемся с вами в ближайшее время
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-card-foreground"
                  >
                    Ваше имя
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-card-foreground"
                  >
                    Телефон
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-card-foreground"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Опишите кратко вашу ситуацию..."
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                  />
                </div>

                <label className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-input accent-gold"
                  />
                  <span className="text-xs leading-relaxed text-muted-foreground">
                    Я даю согласие на обработку персональных данных в соответствии с
                    Политикой конфиденциальности
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!agreed}
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-navy-dark transition-all hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  Отправить заявку
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
