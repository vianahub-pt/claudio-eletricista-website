import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/sectionTitle";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Renovação de Casa de Banho",
      category: "Canalização",
      image: "/images/trabalho-08.jpg",
      link: "/projects/1",
    },
    {
      id: 2,
      title: "Instalação Elétrica Residencial",
      category: "Eletricidade",
      image: "/images/trabalho-01.jpg",
      link: "/projects/2",
    },
    {
      id: 3,
      title: "Remodelação de Fachada",
      category: "Construção",
      image: "/images/trabalho-04.jpg",
      link: "/projects/3",
    },
    {
      id: 4,
      title: "Instalação de Tubagem Aparente",
      category: "Design & Funcionalidade",
      image: "/images/trabalho-09.jpg",
      link: "/projects/4",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Projetos Recentes"
          subtitle="Conheça alguns dos nossos trabalhos"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link href={project.link} key={project.id} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all group-hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-medium text-blue-400 mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium text-blue-600 mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">Clique para ver detalhes</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
          >
            Ver Todos os Projetos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
