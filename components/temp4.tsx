"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

const Breadcrumb = () => {
  const pathname = usePathname()

  // Mapeamento de rotas para nomes em português
  const routeNames: { [key: string]: string } = {
    "/": "Início",
    "/about": "Quem Somos",
    "/services": "Serviços",
    "/projects": "Projetos",
    "/contact": "Contacto",
  }

  // Se estiver na página inicial, não mostrar breadcrumb
  if (pathname === "/") {
    return null
  }

  // Gerar os itens do breadcrumb
  const pathSegments = pathname.split("/").filter((segment) => segment !== "")
  const breadcrumbItems = [
    { name: "Início", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/")
      const name = routeNames[href] || segment.charAt(0).toUpperCase() + segment.slice(1)
      return { name, href }
    }),
  ]

  return (
    <nav className="bg-gray-50 border-b border-gray-200" role="navigation" aria-label="Navegação estrutural">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm" role="list">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center" role="listitem">
              {index === 0 && <Home size={16} className="mr-1 text-gray-500" aria-hidden="true" />}

              {index < breadcrumbItems.length - 1 ? (
                <>
                  <Link
                    href={item.href}
                    className="text-blue-600 hover:text-blue-800 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-1"
                    aria-label={index === 0 ? "Voltar à página inicial" : `Ir para ${item.name}`}
                  >
                    {item.name}
                  </Link>
                  <ChevronRight size={16} className="mx-2 text-gray-400" aria-hidden="true" />
                </>
              ) : (
                <span className="text-gray-700 font-medium" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb
