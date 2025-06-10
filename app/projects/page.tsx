import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import SectionTitle from "@/components/sectionTitle";
import { Calendar, MapPin, User } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Renovação de Casa de Banho",
      category: "Canalização",
      location: "Oliveira de Azeméis",
      date: "2023",
      description:
        "Renovação completa de uma casa de banho, incluindo instalação de novos sanitários, chuveiro, móveis e azulejos.",
      image: "/images/trabalho-08.jpg",
      testimonial: {
        name: "Maria Santos",
        text: "Fiquei extremamente satisfeita com a renovação da minha casa de banho. O trabalho foi realizado com grande profissionalismo, dentro do prazo e do orçamento.",
      },
    },
    {
      id: 2,
      title: "Instalação Elétrica Residencial",
      category: "Eletricidade",
      location: "São João da Madeira",
      date: "2023",
      description:
        "Instalação elétrica completa para uma casa nova, incluindo quadro elétrico, tomadas, interruptores e iluminação.",
      image: "/images/trabalho-01.jpg",
      testimonial: {
        name: "João Pereira",
        text: "Excelente trabalho na instalação elétrica da minha casa nova. O Claudio e sua equipa foram muito profissionais e entregaram um serviço de alta qualidade.",
      },
    },
    {
      id: 3,
      title: "Remodelação de Fachada",
      category: "Construção",
      location: "Santa Maria da Feira",
      date: "2022",
      description:
        "Remodelação completa da fachada de uma casa, incluindo reparação de paredes, pintura e instalação de novos sistemas de drenagem.",
      image: "/images/trabalho-04.jpg",
      testimonial: {
        name: "António Silva",
        text: "A remodelação da fachada da minha casa superou todas as expectativas. Além de resolver os problemas de infiltração, a casa ficou muito mais moderna.",
      },
    },
    {
      id: 4,
      title: "Instalação de Tubagem Aparente",
      category: "Design & Funcionalidade",
      location: "Ovar",
      date: "2022",
      description:
        "Instalação de tubagem aparente em estilo industrial para um apartamento moderno, combinando estética e funcionalidade.",
      image: "/images/trabalho-09.jpg",
      testimonial: {
        name: "Carla Oliveira",
        text: "A instalação da tubagem aparente no meu apartamento ficou espetacular! Além de funcional, tornou-se um elemento decorativo que todos elogiam.",
      },
    },
    {
      id: 5,
      title: "Renovação de Casa de Banho Moderna",
      category: "Canalização",
      location: "Oliveira de Azeméis",
      date: "2023",
      description:
        "Transformação completa de uma casa de banho com design moderno, incluindo chuveiro de vidro e móveis suspensos.",
      image: "/images/trabalho-07.jpg",
      testimonial: {
        name: "Pedro Costa",
        text: "Trabalho impecável! A casa de banho ficou exatamente como imaginávamos. Profissionalismo e qualidade em cada detalhe.",
      },
    },
    {
      id: 6,
      title: "Instalação de Tetos Falsos",
      category: "Eletricidade",
      location: "São João da Madeira",
      date: "2022",
      description:
        "Instalação de tetos falsos com sistema elétrico integrado para iluminação moderna e funcional.",
      image: "/images/trabalho-02.jpg",
      testimonial: {
        name: "Ana Rodrigues",
        text: "O resultado final superou as nossas expectativas. O teto ficou perfeito e a iluminação transformou completamente o ambiente.",
      },
    },
  ];

  return (
    <>
      <main>
        {/* Banner */}
        <section className="hero-section text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nossos <span className="text-blue-400">Projetos</span>
              </h1>
              <p className="text-xl">
                Conheça alguns dos nossos trabalhos realizados com qualidade e
                profissionalismo em toda a região.
              </p>
            </div>
          </div>
        </section>

        {/* Projetos Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Trabalhos Realizados"
              subtitle="Projetos que demonstram nossa qualidade"
              center
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin size={16} className="mr-1" />
                      <span>{project.location}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar size={16} className="mr-1" />
                      <span>{project.date}</span>
                    </div>

                    {project.testimonial && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <User size={16} className="mr-2 text-blue-600" />
                          <span className="font-medium text-sm">
                            {project.testimonial.name}
                          </span>
                        </div>
                        <p className="text-sm italic text-gray-600">
                          "{project.testimonial.text}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Gostou dos nossos trabalhos?
            </h2>
            <p className="text-xl mb-8">
              Entre em contacto connosco para discutir o seu próximo projeto.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors"
              aria-label="Solicitar Orçamento para serviços de eletricidade e canalização"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
