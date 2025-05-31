import Image from "next/image";
import Footer from "@/components/footer";
import SectionTitle from "@/components/sectiontitle";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Award size={40} className="text-blue-600" />,
      title: "Qualidade",
      description:
        "Comprometemo-nos a entregar serviços da mais alta qualidade, utilizando materiais e técnicas de primeira linha.",
    },
    {
      icon: <Users size={40} className="text-blue-600" />,
      title: "Confiança",
      description:
        "Construímos relações de confiança com os nossos clientes, baseadas na transparência, honestidade e integridade.",
    },
    {
      icon: <Clock size={40} className="text-blue-600" />,
      title: "Pontualidade",
      description:
        "Respeitamos o tempo dos nossos clientes, cumprindo prazos e horários estabelecidos.",
    },
  ];

  return (
    <>
      <main>
        {/* Banner */}
        <section className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Quem <span className="text-blue-400">Somos</span>
              </h1>
              <p className="text-xl">
                Conheça a nossa história, missão e valores que nos guiam na
                prestação de serviços de excelência.
              </p>
            </div>
          </div>
        </section>

        {/* História */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle
                  title="Nossa História"
                  subtitle="Como tudo começou"
                />

                <p className="mb-4">
                  A Claudio Eletricista e Picheleiro nasceu da paixão e
                  dedicação do seu fundador, Claudio Antunes, por oferecer
                  soluções de qualidade em serviços elétricos e de canalização.
                  Com mais de 15 anos de experiência no setor, Claudio iniciou a
                  sua jornada profissional trabalhando em diversas empresas de
                  construção civil, onde adquiriu conhecimento e habilidades
                  técnicas.
                </p>

                <p className="mb-4">
                  Em 2010, decidiu fundar a sua própria empresa com o objetivo
                  de oferecer serviços personalizados e de alta qualidade,
                  focados nas necessidades específicas de cada cliente. Desde
                  então, a empresa tem crescido consistentemente, construindo
                  uma reputação sólida baseada na confiança, qualidade e
                  profissionalismo.
                </p>

                <p>
                  Hoje, a Claudio Eletricista e Picheleiro é reconhecida em
                  Oliveira de Azeméis e região como uma referência em serviços
                  de eletricidade e canalização, atendendo tanto clientes
                  residenciais quanto comerciais com o mesmo nível de excelência
                  e dedicação.
                </p>
              </div>

              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/logo-home.png"
                    alt="Logo Claudio Eletricista e Picheleiro"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missão e Valores */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Missão e Valores"
              subtitle="O que nos guia no dia a dia"
              center
            />

            <div className="max-w-3xl mx-auto text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-lg">
                Proporcionar soluções de excelência em serviços de eletricidade
                e canalização, garantindo a satisfação total dos nossos clientes
                através de um trabalho de qualidade, segurança e eficiência,
                contribuindo para o bem-estar e conforto dos espaços onde
                atuamos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por que nos escolher */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Por que Escolher-nos"
              subtitle="Diferenciais que nos destacam"
              center
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-blue-600 mr-3 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Profissionais Qualificados
                  </h3>
                  <p className="text-gray-600">
                    Nossa equipa é formada por profissionais com formação
                    técnica e anos de experiência no setor.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-blue-600 mr-3 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Materiais de Qualidade
                  </h3>
                  <p className="text-gray-600">
                    Utilizamos apenas materiais e equipamentos de alta
                    qualidade, garantindo durabilidade e segurança.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-blue-600 mr-3 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Atendimento Personalizado
                  </h3>
                  <p className="text-gray-600">
                    Cada cliente é único, por isso oferecemos soluções
                    personalizadas para cada necessidade.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-blue-600 mr-3 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Garantia nos Serviços
                  </h3>
                  <p className="text-gray-600">
                    Oferecemos garantia em todos os nossos serviços,
                    demonstrando confiança na qualidade do nosso trabalho.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-blue-600 mr-3 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">Preços Justos</h3>
                  <p className="text-gray-600">
                    Trabalhamos com preços justos e transparentes, sem surpresas
                    ou custos ocultos.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-blue-600 mr-3 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">Disponibilidade</h3>
                  <p className="text-gray-600">
                    Estamos disponíveis para atender emergências 24/7, porque
                    sabemos que problemas não têm hora para acontecer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
