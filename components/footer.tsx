"use client"
import Image from "next/image"
import { MapPin, Phone, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-text text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-lg">Claudio Eletricista e Picheleiro</span>
            </div>
            <p className="text-secondary mb-4">
              Serviços profissionais de eletricidade e canalização em Oliveira de Azeméis.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.services}</h3>
            <ul className="space-y-2 text-secondary">
              <li>Instalações Elétricas</li>
              <li>Canalização</li>
              <li>Renovações</li>
              <li>Acabamentos</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.contact}</h3>
            <div className="space-y-3 text-secondary">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Av. António José de Almeida 70, 3720-239 Oliveira de Azeméis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+351 924 243 818</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp: +351 924 243 818</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left text-secondary">
              <p>&copy; 2024 Claudio Eletricista e Picheleiro. {t.footer.rights}</p>
            </div>

            <div className="flex items-center space-x-3 text-secondary">
              <span className="text-sm">Desenvolvido por</span>
              <a
                href="https://www.vianahub.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Image src="/images/vianahub-logo.png" alt="VianaHub" width={24} height={24} className="rounded-full" />
                <span className="font-medium">VianaHub Lda</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
