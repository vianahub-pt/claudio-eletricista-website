"use client"

import { useState } from "react"
import Footer from "@/components/Footer"
import SectionTitle from "@/components/SectionTitle"
import { Zap, Droplet, ShowerHead, Wrench, Home, Building, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      id: "electrical",
      title: "Instalações Elétricas",
      description: "Serviços completos de instalação e manutenção elétrica para residências e empresas.",
      icon: "Zap",
      items: [
        "Instalação de quadros elétricos",
        "Instalação de tomadas e interruptores",
        "Instalação de iluminação",
        "Reparação de curto-circuitos",
        "Substituição de cabos elétricos",
        "Instalação de sistemas de segurança",
        "Certificação de instalações elétricas",
        "Projetos elétricos para novas construções",
      ],
    },
    {
      id: "plumbing",
      title: "Canalizações",
      description: "Serviços profissionais de canalização para resolver qualquer problema hidráulico.",
      icon: "Droplet",
      items: [
        "Instalação de sistemas de canalização",
        "Reparação de fugas de água",
        "Desentupimento de canos",
        "Instalação de torneiras e misturadoras",
        "Reparação de autoclismos",
        "Instalação de sistemas de aquecimento de água",
        "Manutenção preventiva",
        "Deteção de fugas",
      ],
    },
    {
      id: "bathroom",
      title: "Casas de Banho",
      description: "Renovação completa ou parcial de casas de banho com qualidade e profissionalismo.",
      icon: "ShowerHead",
      items: [
        "Renovação completa de casas de banho",
        "Instalação de sanitários",
        "Instalação de chuveiros e banheiras",
        "Instalação de móveis de casa de banho",
        "Aplicação de azulejos e pavimentos",
        "Instalação de sistemas de ventilação",
        "Instalação de acessórios",
        "Adaptações para mobilidade reduzida",
      ],
    },
    {
      id: "repairs",
      title: "Reparações Gerais",
      description: "Serviços de reparação e manutenção para problemas elétricos e de canalização.",
      icon: "Wrench",
      items: [
        "Reparações elétricas de emergência",
        "Reparações de canalização urgentes",
        "Substituição de componentes danificados",
        "Manutenção preventiva",
        "Resolução de problemas de pressão de água",
        "Reparação de eletrodomésticos",
        "Instalação de equipamentos",
        "Consultoria técnica",
      ],
    },
    {
      id: "residential",
      title: "Projetos Residenciais",
      description: "Soluções completas para projetos elétricos e hidráulicos em residências.",
      icon: "Home",
      items: [
        "Projetos elétricos para novas construções",
        "Projetos hidráulicos para novas construções",
        "Renovações completas",
        "Ampliações",
        "Instalação de sistemas de energia solar",
        "Instalação de sistemas de aquecimento",
        "Consultoria técnica",
        "Certificação de instalações",
      ],
    },
    {
      id: "commercial",
      title: "Projetos Comerciais",
      description: "Serviços especializados para empresas, lojas e escritórios.",
      icon: "Building",
      items: [
        "Instalações elétricas comerciais",
        "Sistemas hidráulicos para empresas",
        "Manutenção preventiva",
        "Iluminação comercial",
        "Sistemas de segurança",
        "Redes de dados",
        "Consultoria técnica",
        "Certificação de instalações",
      ],
    },
  ]

  const [activeTab, setActiveTab] = useState("electrical")

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap size={40} className="text-blue-600" />
      case "Droplet":
        return <Droplet size={40} className="text-blue-600" />
      case "ShowerHead":
        return <ShowerHead size={40} className="text-blue-600" />
      case "Wrench":
        return <Wrench size={40} className="text-blue-600" />
      case "Home":
        return <Home size={40} className="text-blue-600" />
      case "Building":
        return <Building size={40} className="text-blue-600" />
      default:
        return <Zap size={40} className="text-blue-600" />
    }
  }

  const activeService = services.find((service) => service.id === activeTab)

  return (
    <>
      <main>
        {/* Banner */}
        <section className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nossos <span className="text-blue-400">Serviços</span>
              </h1>
              <p className="text-xl">Soluções completas em eletricidade e canalização para residências e empresas.</p>
            </div>
          </div>
        </section>

        {/* Serviços Tabs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle title="O que Oferecemos" subtitle="Conheça nossos serviços especializados" center />

            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8 border-b">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`px-4 py-3 text-lg font-medium transition-colors border-b-2 -mb-px ${
                    activeTab === service.id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent hover:text-blue-600"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeService && (
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
                  <div className="md:w-1/4 flex justify-center">{getIcon(activeService.icon)}</div>
                  <div className="md:w-3/4">
                    <h2 className="text-3xl font-bold mb-4">{activeService.title}</h2>
                    <p className="text-lg mb-6">{activeService.description}</p>

                    <h3 className="text-xl font-semibold mb-4">O que incluímos:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeService.items.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle size={20} className="text-blue-600 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-center mb-4">
                    Interessado neste serviço? Entre em contacto connosco para um orçamento gratuito.
                  </p>
                  <div className="flex justify-center">
                    <Link
                      href="/contact"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
                    >
                      Solicitar Orçamento
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
