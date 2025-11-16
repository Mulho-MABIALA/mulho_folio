import React from 'react'
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si'

const MernStack = () => {
  const stackItems = [
    {
      name: 'MongoDB',
      Icon: SiMongodb,
      color: '#13AA52',
      bgColor: 'bg-green-500/10',
      hoverBg: 'group-hover:bg-green-500/20',
      gradientColor: 'from-green-500 to-emerald-600',
    },
    {
      name: 'Express.js',
      Icon: SiExpress,
      color: '#FFFFFF',
      bgColor: 'bg-gray-600/10',
      hoverBg: 'group-hover:bg-gray-600/20',
      gradientColor: 'from-gray-600 to-gray-700',
    },
    {
      name: 'React.js',
      Icon: SiReact,
      color: '#61DAFB',
      bgColor: 'bg-cyan-500/10',
      hoverBg: 'group-hover:bg-cyan-500/20',
      gradientColor: 'from-cyan-400 to-blue-500',
    },
    {
      name: 'Node.js',
      Icon: SiNodedotjs,
      color: '#68A063',
      bgColor: 'bg-green-600/10',
      hoverBg: 'group-hover:bg-green-600/20',
      gradientColor: 'from-green-600 to-green-700',
    },
  ]

  return (
    <section className="relative w-full py-20 px-8 sm:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-black via-zinc-900 to-black border-t border-amber-500/20">
      {/* Effets de fond dorés */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Développeur </span>
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-transparent bg-clip-text">
              MERN Stack
            </span>
          </h2>
        </div>

        {/* Grille des technologies MERN */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stackItems.map((item, index) => {
            const IconComponent = item.Icon
            return (
            <div
              key={item.name}
              className="group relative flex flex-col items-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Cercle avec icône */}
              <div className={`relative w-32 h-32 rounded-full ${item.bgColor} ${item.hoverBg} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl mb-6`}
                style={{
                  boxShadow: '0 0 0 1px rgba(251, 191, 36, 0.1)',
                }}
              >
                {/* Effet de glow au survol */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradientColor} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>

                {/* Icône */}
                <div className="relative z-10 text-5xl transition-transform" style={{ color: item.color }}>
                  {IconComponent && <IconComponent />}
                </div>

                {/* Bordure animée */}
                <div className={`absolute inset-0 rounded-full border-2 border-transparent group-hover:border-current bg-gradient-to-br ${item.gradientColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '2px'
                  }}
                ></div>
              </div>

              {/* Nom de la technologie */}
              <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300 text-center">
                {item.name}
              </h3>

              {/* Ligne décorative */}
              <div className={`mt-3 h-1 w-0 group-hover:w-16 bg-gradient-to-r ${item.gradientColor} rounded-full transition-all duration-500`}></div>
            </div>
            )
          })}
        </div>

        {/* Texte descriptif */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
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
