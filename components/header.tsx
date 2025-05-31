"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [announceMenuState, setAnnounceMenuState] = useState("")
  const pathname = usePathname()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null)
  const phoneNumber = "351924243818" // Sem o "+" para o WhatsApp

  const toggleMenu = () => {
    const newState = !isMenuOpen
    setIsMenuOpen(newState)
    setAnnounceMenuState(newState ? "Menu aberto" : "Menu fechado")

    // Foco no primeiro item quando abre o menu
    if (newState && firstMenuItemRef.current) {
      setTimeout(() => {
        firstMenuItemRef.current?.focus()
      }, 100)
    }
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setAnnounceMenuState("Menu fechado")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  // Fechar menu com Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
        setAnnounceMenuState("Menu fechado")
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMenuOpen])

  const isActive = (path: string) => {
    return pathname === path
  }

  const getLinkClasses = (path: string) => {
    const baseClasses =
      "transition-colors font-medium px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    const activeClasses = "text-blue-600 bg-blue-50 border-b-2 border-blue-600"
    const inactiveClasses = "text-gray-700 hover:text-blue-600 hover:bg-gray-50"

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`
  }

  const getMobileLinkClasses = (path: string) => {
    const baseClasses =
      "transition-colors py-3 px-4 border-b border-gray-100 font-medium block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
    const activeClasses = "text-blue-600 bg-blue-50"
    const inactiveClasses = "text-gray-700 hover:text-blue-600 hover:bg-gray-50"

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`
  }

  return (
    <>
      {/* Anúncio para leitores de tela */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announceMenuState}
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            onClick={handleLinkClick}
            aria-label="Claudio Eletricista e Picheleiro - Página inicial"
          >
            <Image
              src="/logo.png"
              alt="Logotipo da Claudio Eletricista e Picheleiro"
              width={150}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Menu para desktop */}
          <nav
            className="hidden md:flex items-center space-x-2"
            role="navigation"
            aria-label="Navegação principal"
            id="main-navigation"
          >
            <Link href="/" className={getLinkClasses("/")} onClick={handleLinkClick}>
              Início
            </Link>
            <Link href="/about" className={getLinkClasses("/about")} onClick={handleLinkClick}>
              Quem Somos
            </Link>
            <Link href="/services" className={getLinkClasses("/services")} onClick={handleLinkClick}>
              Serviços
            </Link>
            <Link href="/projects" className={getLinkClasses("/projects")} onClick={handleLinkClick}>
              Projetos
            </Link>
            <Link href="/contact" className={getLinkClasses("/contact")} onClick={handleLinkClick}>
              Contacto
            </Link>
            <Link
              href={`https://wa.me/${phoneNumber}`}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all ml-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Contactar via WhatsApp: +351 924 243 818"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>+351 924 243 818</span>
            </Link>
          </nav>

          {/* Botão do menu mobile */}
          <button
            ref={menuButtonRef}
            className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div
            className="md:hidden bg-white absolute top-full left-0 w-full shadow-md border-t"
            id="mobile-menu"
            role="navigation"
            aria-label="Menu de navegação móvel"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col">
              <Link ref={firstMenuItemRef} href="/" className={getMobileLinkClasses("/")} onClick={handleLinkClick}>
                Início
              </Link>
              <Link href="/about" className={getMobileLinkClasses("/about")} onClick={handleLinkClick}>
                Quem Somos
              </Link>
              <Link href="/services" className={getMobileLinkClasses("/services")} onClick={handleLinkClick}>
                Serviços
              </Link>
              <Link href="/projects" className={getMobileLinkClasses("/projects")} onClick={handleLinkClick}>
                Projetos
              </Link>
              <Link href="/contact" className={getMobileLinkClasses("/contact")} onClick={handleLinkClick}>
                Contacto
              </Link>
              <Link
                href={`https://wa.me/${phoneNumber}`}
                className="flex items-center bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-all w-fit mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleLinkClick}
                aria-label="Contactar via WhatsApp: +351 924 243 818"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>+351 924 243 818</span>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
