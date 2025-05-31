"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll para o topo sempre que a rota mudar
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
