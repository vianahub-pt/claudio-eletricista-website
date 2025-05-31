import Link from "next/link"
import SectionTitle from "@/components/SectionTitle"
import { Zap, Droplet, Wrench, Home, Building, ShowerHead } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      icon: <Zap size={40} className="text-blue-600" />,
      title: "Instalações Elétricas",
      description:
        "Instalação e manutenção de sistemas elétricos residenciais e comerciais, quadros elétricos e iluminação.",
      link: "/services#electrical",
    },
    {
      icon: <Droplet size={40} className="text-blue-600" />,
      title: "Canalizações",
      description: "Instalação e reparação de sistemas de canalização, torneiras, autoclismos e desentupimentos.",
      link: "/services#plumbing",
    },
    {
      icon: <ShowerHead size={40} className="text-blue-600" />,
      title: "Casas de Banho",
      description: "Renovação completa de casas de banho, instalação de sanitários, chuveiros e banheiras.",
      link: "/services#bathroom",
    },
    {
      icon: <Wrench size={40} className="text-blue-600" />,
      title: "Reparações Gerais",
      description:
        "Serviços de reparação e manutenção para problemas elétricos e de canalização em residências e empresas.",
      link: "/services#repairs",
    },
    {
      icon: <Home size={40} className="text-blue-600" />,
      title: "Projetos Residenciais",
      description: "Soluções completas para projetos elétricos e hidráulicos em novas construções ou renovações.",
      link: "/services#residential",
    },
    {
      icon: <Building size={40} className="text-blue-600" />,
      title: "Projetos Comerciais",
      description: "Serviços especializados para empresas, lojas e escritórios, com foco em eficiência e segurança.",
      link: "/services#commercial",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Nossos Serviços" subtitle="Soluções completas para suas necessidades" center />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href={service.link}
                className="text-blue-600 font-semibold hover:underline inline-flex items-center"
              >
                Saber mais
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
          >
            Ver Todos os Serviços
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
