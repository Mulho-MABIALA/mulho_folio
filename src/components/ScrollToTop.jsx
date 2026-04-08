import { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 group"
          aria-label="Scroll to top"
        >
          {/* Cercles animés en arrière-plan */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 opacity-20 animate-ping"></div>

          {/* Bouton principal */}
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 shadow-xl shadow-amber-500/50 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-amber-500/70">
            {/* Effet de brillance */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Icône flèche */}
            <svg
              className="w-6 h-6 text-black relative z-10 transform transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>

            {/* Particules décoratives */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.2s' }}></div>
          </div>

          {/* Texte au survol */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-zinc-900 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-lg border border-amber-500/30 whitespace-nowrap shadow-lg">
              Retour en haut
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-amber-500/30"></div>
            </div>
          </div>
        </button>
      )}
    </>
  )
}

export default ScrollToTop
