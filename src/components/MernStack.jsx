import React from 'react'
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si'
import useSlideIn from '../hooks/useSlideIn'

const MernStack = () => {
  const titleSlide = useSlideIn({ threshold: 0.3 })
  const stackItems = [
    {
      name: 'MongoDB',
      Icon: SiMongodb,
      color: '#13AA52',
      gradientColor: 'from-green-500 to-emerald-600',
      angle: 0, // Position en haut
    },
    {
      name: 'Express.js',
      Icon: SiExpress,
      color: '#FFFFFF',
      gradientColor: 'from-gray-400 to-gray-600',
      angle: 90, // Position à droite
    },
    {
      name: 'React.js',
      Icon: SiReact,
      color: '#61DAFB',
      gradientColor: 'from-cyan-400 to-blue-500',
      angle: 180, // Position en bas
    },
    {
      name: 'Node.js',
      Icon: SiNodedotjs,
      color: '#68A063',
      gradientColor: 'from-green-600 to-green-700',
      angle: 270, // Position à gauche
    },
  ]

  return (
    <section className="relative w-full py-20 px-8 sm:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-black via-zinc-900 to-black border-t border-amber-500/20">
      {/* Styles pour l'animation de rotation */}
      <style>{`
        @keyframes rotate-circle {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes counter-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .rotating-container {
          animation: rotate-circle 20s linear infinite;
        }

        .counter-rotate {
          animation: counter-rotate 20s linear infinite;
        }

        .rotating-container:hover {
          animation-play-state: paused;
        }

        .rotating-container:hover .counter-rotate {
          animation-play-state: paused;
        }
      `}</style>

      {/* Effets de fond dorés */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Container principal avec texte au centre et icônes autour */}
        <div className="relative flex items-center justify-center min-h-[500px] sm:min-h-[600px]">

          {/* Cercle orbital décoratif */}
          <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-amber-500/20"></div>
          <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] rounded-full border border-amber-500/10"></div>

          {/* Texte central */}
          <div className="absolute text-center z-20 px-4 overflow-hidden" ref={titleSlide.ref}>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-700 ease-out"
              style={{
                transform: titleSlide.isVisible ? 'translateX(0)' : 'translateX(-100%)',
                opacity: titleSlide.isVisible ? 1 : 0,
              }}
            >
              <span className="text-white block sm:inline">Développeur</span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-transparent bg-clip-text">
                MERN Stack
              </span>
            </h2>
          </div>

          {/* Container rotatif avec les icônes */}
          <div className="rotating-container absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
            {stackItems.map((item, index) => {
              const IconComponent = item.Icon
              // Calcul de la position sur le cercle
              const angleInRadians = (item.angle * Math.PI) / 180
              const radius = 50 // pourcentage du container
              const x = 50 + radius * Math.sin(angleInRadians)
              const y = 50 - radius * Math.cos(angleInRadians)

              return (
                <div
                  key={item.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  {/* Container pour contre-rotation (garde l'icône droite) */}
                  <div className="counter-rotate flex flex-col items-center">
                    {/* Cercle avec icône */}
                    <div
                      className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${item.color}15`,
                        boxShadow: `0 0 30px ${item.color}30, 0 0 0 1px ${item.color}40`,
                      }}
                    >
                      {/* Effet de glow */}
                      <div
                        className="absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                        style={{ backgroundColor: item.color }}
                      ></div>

                      {/* Icône */}
                      <div
                        className="relative z-10 text-3xl sm:text-4xl md:text-5xl transition-transform group-hover:scale-110"
                        style={{ color: item.color }}
                      >
                        {IconComponent && <IconComponent />}
                      </div>

                      {/* Bordure colorée */}
                      <div
                        className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          border: `2px solid ${item.color}`,
                        }}
                      ></div>
                    </div>

                    {/* Nom de la technologie */}
                    <span
                      className="mt-2 text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 whitespace-nowrap"
                      style={{ color: item.color }}
                    >
                      {item.name}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Texte descriptif */}
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <p className="text-gray-400 text-lg leading-relaxed">
            Spécialisé dans le développement d'applications web complètes avec la stack MERN,
            combinant MongoDB pour la base de données, Express.js pour le backend,
            React.js pour le frontend et Node.js comme environnement d'exécution.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MernStack
