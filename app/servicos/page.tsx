"use client"

import { Zap, Wrench, Home, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">{t.services.title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Electrical Services */}
          <div className="bg-background rounded-lg shadow-lg p-8 border border-secondary">
            <div className="text-center mb-6">
              <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-text">{t.services.electrical.title}</h2>
            </div>
            <ul className="space-y-3">
              {t.services.electrical.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-text/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Plumbing Services */}
          <div className="bg-background rounded-lg shadow-lg p-8 border border-secondary">
            <div className="text-center mb-6">
              <Wrench className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-text">{t.services.plumbing.title}</h2>
            </div>
            <ul className="space-y-3">
              {t.services.plumbing.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-text/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Renovation Services */}
          <div className="bg-background rounded-lg shadow-lg p-8 border border-secondary">
            <div className="text-center mb-6">
              <Home className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-text">{t.services.renovation.title}</h2>
            </div>
            <ul className="space-y-3">
              {t.services.renovation.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-text/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-secondary/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-text mb-4">Precisa de algum destes serviços?</h3>
          <p className="text-text/70 mb-6">Entre em contacto connosco para um orçamento personalizado e gratuito</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+351924243818"
              className="bg-primary text-background px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Ligar Agora
            </a>
            <a
              href="https://wa.me/351924243818"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
