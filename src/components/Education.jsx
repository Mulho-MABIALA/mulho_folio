import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import useSlideIn from '../hooks/useSlideIn'

const Education = () => {
  const { t } = useLanguage()
  const titleSlide = useSlideIn({ threshold: 0.3 })

  return (
    <section id="education-section" className="relative w-full py-20 px-8 sm:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      {/* Cercles de fond animés */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full border border-amber-500/10 animate-spin-slow"></div>
        <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full border border-amber-500/15 animate-spin-reverse" style={{ animationDelay: '-5s' }}></div>

        {/* Effets de brillance dorée */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* En-tête */}
        <div className="text-center mb-16 overflow-hidden" ref={titleSlide.ref}>
          <span className="text-amber-400 text-sm font-mono tracking-wider mb-4 block">
            {t.education.tag}
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 ease-out"
            style={{
              transform: titleSlide.isVisible ? 'translateX(0)' : 'translateX(-100%)',
              opacity: titleSlide.isVisible ? 1 : 0,
            }}
          >
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-transparent bg-clip-text">
              {t.education.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.education.subtitle}
          </p>
        </div>

        {/* Timeline d'éducation */}
        <div className="relative">
          {/* Ligne de la timeline */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 md:w-0.5 bg-gradient-to-b from-amber-500/50 to-amber-500/10 md:transform md:-translate-x-1/2"></div>

          {/* Éléments de la timeline */}
          <div className="space-y-8 md:space-y-12">
            {t.education.items.map((item, index) => (
              <div
                key={index}
                className={`relative md:flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Point de la timeline */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 md:w-5 md:h-5 bg-amber-500 rounded-full border-4 border-black md:border-zinc-900 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-20 shadow-lg shadow-amber-500/50"></div>

                {/* Contenu */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 ml-8 md:ml-0' : 'md:pl-12 ml-8 md:ml-0'}`}>
                  <div className="group relative p-6 bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-1">
                    {/* Badge année */}
                    <div className="inline-block mb-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-black text-sm font-bold rounded-full shadow-lg shadow-amber-500/30">
                        {item.year}
                      </span>
                    </div>

                    {/* Diplôme/Titre */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {item.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      {item.institution}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations CSS */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg) scale(1); opacity: 0.3; }
          50% { transform: rotate(180deg) scale(1.05); opacity: 0.5; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.3; }
        }

        @keyframes spin-reverse {
          0% { transform: rotate(360deg) scale(1); opacity: 0.4; }
          50% { transform: rotate(180deg) scale(1.08); opacity: 0.6; }
          100% { transform: rotate(0deg) scale(1); opacity: 0.4; }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Education
