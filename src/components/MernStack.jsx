import React from 'react'

const MernStack = () => {
  const stackItems = [
    {
      name: 'MongoDB',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 4.642-3.27 4.32-11.375h-.028z"/>
        </svg>
      ),
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      hoverBg: 'group-hover:bg-green-500/20',
    },
    {
      name: 'Express.js',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="6" width="20" height="3" rx="1"/>
          <rect x="2" y="11" width="20" height="3" rx="1"/>
          <rect x="2" y="16" width="20" height="3" rx="1"/>
        </svg>
      ),
      color: 'from-amber-400 to-yellow-600',
      bgColor: 'bg-amber-500/10',
      hoverBg: 'group-hover:bg-amber-500/20',
    },
    {
      name: 'React.js',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/>
        </svg>
      ),
      color: 'from-yellow-400 to-amber-500',
      bgColor: 'bg-yellow-500/10',
      hoverBg: 'group-hover:bg-yellow-500/20',
    },
    {
      name: 'Node.js',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.276-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
        </svg>
      ),
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-500/10',
      hoverBg: 'group-hover:bg-amber-500/20',
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
          {stackItems.map((item, index) => (
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
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>

                {/* Icône */}
                <div className={`relative z-10 bg-gradient-to-br ${item.color} text-transparent bg-clip-text`}>
                  {item.icon}
                </div>

                {/* Bordure animée */}
                <div className={`absolute inset-0 rounded-full border-2 border-transparent group-hover:border-current bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
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
              <div className={`mt-3 h-1 w-0 group-hover:w-16 bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}></div>
            </div>
          ))}
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
