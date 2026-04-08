import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const OpenToWork = () => {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Apparaît après 3 secondes
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (dismissed) return null

  return (
    <div
      className="fixed top-20 right-4 z-40 transition-all duration-700"
      style={{
        transform: visible ? 'translateX(0)' : 'translateX(120%)',
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className="relative flex items-center gap-3 pl-4 pr-3 py-2.5 rounded-full backdrop-blur-md"
        style={{
          background: 'linear-gradient(135deg, rgba(16,16,18,0.95), rgba(9,9,11,0.98))',
          border: '1px solid rgba(var(--accent-rgb), 0.3)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(var(--accent-rgb), 0.1)',
        }}
      >
        {/* Indicateur vert */}
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
        </span>

        <span className="text-sm font-semibold text-white whitespace-nowrap">
          Open to Work
        </span>

        {/* Bouton contact */}
        <a
          href="#contact-section"
          className="text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
          style={{
            background: `linear-gradient(135deg, var(--accent-500), var(--accent-y600))`,
            color: '#000',
          }}
        >
          Me contacter
        </a>

        {/* Bouton fermer */}
        <button
          onClick={() => setDismissed(true)}
          className="w-5 h-5 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-300 transition-colors flex-shrink-0"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default OpenToWork
