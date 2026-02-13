import React from 'react'
import { FaProjectDiagram, FaBriefcase, FaThumbsUp, FaUsers } from 'react-icons/fa'

const Stats = () => {
  const stats = [
    {
      icon: <FaProjectDiagram className="w-7 h-7" />,
      number: '12+',
      label: 'Projets d\'excellence',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <FaBriefcase className="w-7 h-7" />,
      number: '3+',
      label: 'Années d\'expertise',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: <FaThumbsUp className="w-7 h-7" />,
      number: '95%',
      label: 'Satisfaction client',
      color: 'from-pink-500 to-rose-400'
    },
    {
      icon: <FaUsers className="w-7 h-7" />,
      number: '4',
      label: 'Collaborateurs',
      color: 'from-rose-500 to-pink-500'
    }
  ]

  return (
    <section className="relative w-full py-20 px-8 sm:px-12 lg:px-16 xl:px-20 bg-black">
      {/* Effet de fond */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Grille de statistiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

              {/* Icône */}
              <div className="relative mb-4">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
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

              {/* Ligne décorative */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
