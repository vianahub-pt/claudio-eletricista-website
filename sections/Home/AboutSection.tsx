"use client"

import Image from "next/image"
import Link from "next/link"
import SectionTitle from "@/components/SectionTitle"
import { CheckCircle } from "lucide-react"

const AboutSection = () => {
  const features = [
    "Profissionais qualificados e experientes",
    "Atendimento rápido e eficiente",
    "Materiais de alta qualidade",
    "Garantia nos serviços prestados",
    "Orçamentos sem compromisso",
    "Disponibilidade para emergências",
  ]

  const handleLinkClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/trabalho-03.jpg"
                alt="Claudio Eletricista e Picheleiro"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-bold text-xl">+15</p>
              <p>Anos de Experiência</p>
            </div>
          </div>

          <div>
            <SectionTitle title="Sobre Nós" subtitle="Conheça a Claudio Eletricista e Picheleiro" />

            <p className="mb-6">
              Somos uma empresa especializada em serviços de eletricidade e canalização, atendendo clientes residenciais
              e comerciais em Oliveira de Azeméis e região. Com mais de 15 anos de experiência no mercado, garantimos um
              trabalho de qualidade, segurança e eficiência em cada projeto.
            </p>

            <p className="mb-8">
              Nossa equipa é formada por profissionais qualificados e comprometidos em oferecer as melhores soluções
              para as necessidades dos nossos clientes, sempre com preços justos e transparentes.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle size={20} className="text-blue-600 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              onClick={handleLinkClick}
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
