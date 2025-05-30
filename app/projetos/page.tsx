"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const projects = [
  {
    id: 1,
    image: "/images/trabalho-01.jpg",
    title: "Instalação de Estruturas Metálicas",
    description: "Instalação profissional de estruturas metálicas para tetos falsos",
  },
  {
    id: 2,
    image: "/images/trabalho-02-exterior.jpg",
    title: "Renovação de Fachada",
    description: "Trabalho completo de renovação e pintura de fachada exterior",
  },
  {
    id: 3,
    image: "/images/trabalho-03.jpg",
    title: "Casa Residencial Completa",
    description: "Projeto completo de construção e acabamentos residenciais",
  },
  {
    id: 4,
    image: "/images/trabalho-02-interior.jpg",
    title: "Acabamentos Interiores",
    description: "Instalação de tetos falsos e acabamentos interiores de qualidade",
  },
  {
    id: 5,
    image: "/images/trabalho-07.jpg",
    title: "Estruturas de Construção",
    description: "Montagem de andaimes e estruturas metálicas para construção",
  },
  {
    id: 6,
    image: "/images/trabalho-10.jpg",
    title: "Casa de Banho Moderna",
    description: "Renovação completa com acabamentos modernos e elegantes",
  },
  {
    id: 7,
    image: "/images/trabalho-09.jpg",
    title: "Transformação de Casa de Banho",
    description: "Antes e depois de uma renovação completa de casa de banho",
  },
  {
    id: 8,
    image: "/images/trabalho-11.jpg",
    title: "Quarto de Luxo",
    description: "Instalações elétricas e acabamentos para quarto de luxo",
  },
  {
    id: 9,
    image: "/images/trabalho-08.jpg",
    title: "Renovação Moderna",
    description: "Transformação completa com design moderno e funcional",
  },
]

export default function ProjectsPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">{t.projects.title}</h1>
          <p className="text-xl text-text/70 max-w-2xl mx-auto">{t.projects.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text mb-2">{project.title}</h3>
                <p className="text-text/70">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
