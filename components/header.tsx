"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Claudio Eletricista e Picheleiro"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="font-bold text-text text-lg hidden sm:block">Claudio Eletricista e Picheleiro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-text hover:text-primary transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/projetos" className="text-text hover:text-primary transition-colors">
              {t.nav.projects}
            </Link>
            <Link href="/servicos" className="text-text hover:text-primary transition-colors">
              {t.nav.services}
            </Link>
            <Link href="/contacto" className="text-text hover:text-primary transition-colors">
              {t.nav.contact}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-text" />
              <button
                onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                className="text-text hover:text-primary transition-colors text-sm font-medium"
              >
                {language === "pt" ? "EN" : "PT"}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-text">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-secondary">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link
                href="/projetos"
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.projects}
              </Link>
              <Link
                href="/servicos"
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.services}
              </Link>
              <Link
                href="/contacto"
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
              <div className="flex items-center space-x-2 pt-2 border-t border-secondary">
                <Globe className="w-4 h-4 text-text" />
                <button
                  onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                  className="text-text hover:text-primary transition-colors text-sm font-medium"
                >
                  {language === "pt" ? "English" : "Português"}
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
