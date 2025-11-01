import React from 'react'

const Stats = () => {
  const stats = [
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      number: '23+',
      label: 'Projets d\'excellence',
      color: 'from-amber-400 to-yellow-600'
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      number: '2+',
      label: 'Années d\'expertise',
      color: 'from-yellow-500 to-amber-600'
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
        </svg>
      ),
      number: '95%',
      label: 'Satisfaction client',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      number: '8',
      label: 'Collaborateurs',
      color: 'from-yellow-600 to-amber-500'
    }
  ]

  return (
    <section className="relative w-full py-20 px-8 sm:px-12 lg:px-16 xl:px-20 bg-black">
      {/* Effet de fond doré */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Grille de statistiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

              {/* Icône */}
              <div className="relative mb-4">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`bg-gradient-to-br ${stat.color} text-transparent bg-clip-text`}>
                    {stat.icon}
                  </div>
                </div>
              </div>

              {/* Nombre */}
              <div className="relative mb-2">
                <h3 className={`text-3xl sm:text-4xl font-bold bg-gradient-to-br ${stat.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform duration-300 inline-block`}>
                  {stat.number}
                </h3>
              </div>

              {/* Label */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {stat.label}
              </p>

              {/* Ligne décorative dorée */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
