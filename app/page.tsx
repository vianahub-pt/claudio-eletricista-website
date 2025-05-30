"use client"

import Link from "next/link"
import { CheckCircle, Phone, MessageCircle, Zap, Wrench, Home } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { HeroCarousel } from "@/components/hero-carousel"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative">
        {/* Carousel */}
        <HeroCarousel />

        {/* Buttons Container */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contacto"
                className="bg-primary text-background px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm"
              >
                {t.home.hero.cta}
              </Link>
              <a
                href="https://wa.me/351924243818"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">{t.home.about.title}</h2>
            <p className="text-lg text-text/80 leading-relaxed">{t.home.about.description}</p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-background rounded-lg shadow-md">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text mb-2">Serviços Elétricos</h3>
              <p className="text-text/70">Instalações e reparações elétricas profissionais</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-md">
              <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text mb-2">Canalização</h3>
              <p className="text-text/70">Instalação e manutenção de sistemas de água</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-md">
              <Home className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text mb-2">Renovações</h3>
              <p className="text-text/70">Remodelação completa de espaços</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">{t.home.whyChoose.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text mb-2">{t.home.whyChoose.quality}</h3>
              <p className="text-text/70">{t.home.whyChoose.qualityDesc}</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text mb-2">{t.home.whyChoose.experience}</h3>
              <p className="text-text/70">{t.home.whyChoose.experienceDesc}</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text mb-2">{t.home.whyChoose.availability}</h3>
              <p className="text-text/70">{t.home.whyChoose.availabilityDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">Pronto para começar o seu projeto?</h2>
          <p className="text-xl text-background/90 mb-8">Entre em contacto connosco para um orçamento gratuito</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+351924243818"
              className="bg-background text-primary px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>+351 924 243 818</span>
            </a>
            <Link
              href="/contacto"
              className="bg-text text-background px-8 py-3 rounded-lg font-semibold hover:bg-text/90 transition-colors"
            >
              Formulário de Contacto
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
