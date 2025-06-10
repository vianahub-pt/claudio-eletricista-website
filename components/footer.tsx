import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Clock,
  ExternalLink,
} from "lucide-react";

const footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "351924243818"; // Sem o "+" para o WhatsApp
  const emailAddress = "claudioantunessil@gmail.com";

  return (
    <footer className="text-gray-800" style={{ backgroundColor: "#C8E8FF" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="mb-4 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-md"
              aria-label="Claudio Eletricista e Picheleiro - Página inicial"
            >
              <Image
                src="/logo-footer.png"
                alt="Logotipo da Claudio Eletricista e Picheleiro"
                width={180}
                height={70}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm mb-4 text-gray-700">
              Serviços profissionais de eletricista, canalização e remodelação.
              Qualidade e confiança em cada trabalho.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-md px-1"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-md px-1"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-md px-1"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-700 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-md px-1"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-md px-1"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Horário
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <Clock
                  size={18}
                  className="mr-2 text-blue-700 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>Segunda a Sexta: 8h - 18h</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Clock
                  size={18}
                  className="mr-2 text-blue-700 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>Sábado: Fechado</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Clock
                  size={18}
                  className="mr-2 text-blue-700 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>Domingo: Atendimento de emergência</span>
              </li>
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Contactos
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-2 mt-1 flex-shrink-0 text-blue-700"
                  aria-hidden="true"
                />
                <address className="text-gray-700 not-italic">
                  Av. António José de Almeida 70, 3720-239 Oliveira de Azeméis
                </address>
              </li>
              <li className="flex items-center">
                <div className="flex items-center mr-2 text-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <Link
                  href={`https://wa.me/${phoneNumber}`}
                  className="text-gray-700 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-md px-1"
                  aria-label="Contactar via WhatsApp: +351 924 243 818"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +351 924 243 818
                </Link>
              </li>
              <li className="flex items-center">
                <Mail
                  size={18}
                  className="mr-2 text-blue-700 flex-shrink-0"
                  aria-hidden="true"
                />
                <Link
                  href={`mailto:${emailAddress}`}
                  className="text-gray-700 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-md px-1"
                  aria-label="Enviar email para claudioantunessil@gmail.com"
                >
                  {emailAddress}
                </Link>
              </li>
              <li className="flex items-center mt-4 space-x-4">
                <Link
                  href="https://facebook.com"
                  className="text-gray-700 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-md p-1"
                  aria-label="Seguir no Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={24} />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="text-gray-700 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-md p-1"
                  aria-label="Seguir no Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright e VianaHub */}
        <div className="border-t border-gray-400 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600">
                &copy; {currentYear} Claudio Eletricista e Picheleiro. Todos os
                direitos reservados.
              </p>
            </div>

            {/* VianaHub */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">by</span>
              <Link
                href="https://www.vianahub.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-md p-1"
                aria-label="Site desenvolvido pela VianaHub Lda - Abrir em nova janela"
              >
                <Image
                  src="/images/vianahub-logo.png"
                  alt="Logotipo da VianaHub"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full bg-white p-1 shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">VianaHub Lda</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
