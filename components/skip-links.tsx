"use client"

const SkipLinks = () => {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <a
        href="#main-content"
        className="skip-link fixed top-2 left-2 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold z-50 -translate-y-16 focus:translate-y-0 transition-transform"
      >
        Saltar para o conteúdo principal
      </a>
      <a
        href="#main-navigation"
        className="skip-link fixed top-2 left-40 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold z-50 -translate-y-16 focus:translate-y-0 transition-transform"
      >
        Saltar para a navegação
      </a>
    </div>
  )
}

export default SkipLinks
