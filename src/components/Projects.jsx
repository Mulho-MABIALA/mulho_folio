import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Projects = () => {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: t.projects.projectsList[0].title,
      description: t.projects.projectsList[0].description,
      image: '/img2.jpg',
      tags: ['Html', 'PHP', 'SQL', 'Js' ,'Tailwind CSS'],
      category: 'fullstack',
      demoLink: '#',
      codeLink: '#',
      status: t.projects.featured
    },
    {
      id: 2,
      title: t.projects.projectsList[1].title,
      description: t.projects.projectsList[1].description,
      image: '/project2.jpg',
      tags: ['React', 'Express', 'Redux', 'Node.js'],
      category: 'frontend',
      demoLink: '#',
      codeLink: '#',
      status: t.projects.featured
    },
    {
      id: 3,
      title: t.projects.projectsList[2].title,
      description: t.projects.projectsList[2].description,
      image: '/project3.jpg',
      tags: ['Next.js', 'Shopify', 'Node.js', 'Express', 'MongoDB', 'API Paytech'],
      category: 'fullstack',
      demoLink: '#',
      codeLink: '#',
      status: t.projects.featured
    },
    {
      id: 4,
      title: t.projects.projectsList[3].title,
      description: t.projects.projectsList[3].description,
      image: '/project4.jpg',
      tags: ['Vue.js', 'Chart.js', 'Firebase'],
      category: 'frontend',
      demoLink: '#',
      codeLink: '#',
      status: null
    },
    {
      id: 5,
      title: t.projects.projectsList[4].title,
      description: t.projects.projectsList[4].description,
      image: '/project5.jpg',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'backend',
      demoLink: '#',
      codeLink: '#',
      status: null
    },
    {
      id: 6,
      title: t.projects.projectsList[5].title,
      description: t.projects.projectsList[5].description,
      image: '/img3.png',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      category: 'frontend',
      demoLink: '#',
      codeLink: '#',
      status: null
    },
    {
      id: 7,
      title: t.projects.projectsList[6].title,
      description: t.projects.projectsList[6].description,
      image: '/img4.jpg',
      tags: ['React.js', 'Tailwind CSS'],
      category: 'frontend',
      demoLink: 'https://project-hooks-brown.vercel.app/',
      codeLink: '#',
      status: null
    }
  ]

  const filters = [
    { id: 'all', label: t.projects.filters.all },
    { id: 'fullstack', label: t.projects.filters.fullstack },
    { id: 'frontend', label: t.projects.filters.frontend },
    { id: 'backend', label: t.projects.filters.backend }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects-section" className="relative w-full py-20 px-8 sm:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      {/* Cercles de fond animés inspirés du LoadingScreen */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cercles rotatifs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full border border-amber-500/10 animate-spin-slow"></div>
        <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full border border-amber-500/15 animate-spin-reverse" style={{ animationDelay: '-5s' }}></div>
        <div className="absolute top-1/4 left-1/3 w-48 h-48 rounded-full border border-amber-500/20 animate-spin-slow" style={{ animationDelay: '-3s' }}></div>

        {/* Effets de brillance dorée */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-amber-600/3 rounded-full blur-3xl" style={{ animation: 'float-particle-complex 8s ease-in-out infinite' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <div className="text-center mb-12">
          <span className="text-amber-400 text-sm font-mono tracking-wider mb-4 block">
            {t.projects.tag}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-transparent bg-clip-text">
              {t.projects.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/50 scale-105'
                  : 'bg-zinc-800/50 text-gray-400 hover:bg-zinc-800 hover:text-white border border-amber-500/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge "En vedette" */}
              {project.status && (
                <div className="absolute top-4 right-4 z-20 px-4 py-2 bg-amber-500 text-black text-xs font-bold rounded-full shadow-lg shadow-amber-500/50 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {project.status}
                </div>
              )}

              {/* Image avec overlay */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
                {/* Image du projet */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Boutons d'action */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-black rounded-full font-semibold shadow-lg hover:bg-amber-600 hover:scale-110 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {t.projects.liveDemo}
                  </a>

                  <a
                    href={project.codeLink}
                    className="flex items-center justify-center w-12 h-12 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-zinc-800/80 text-amber-400 text-xs font-medium rounded-full border border-amber-500/20 hover:border-amber-500/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bouton "Voir plus" */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-full shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300"
          >
            <span>{t.projects.viewAll}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Animations CSS inspirées du LoadingScreen */}
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

        @keyframes float-particle-complex {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translate(30px, -40px) scale(1.3);
            opacity: 0.8;
          }
          50% {
            transform: translate(-20px, -60px) scale(0.9);
            opacity: 0.6;
          }
          75% {
            transform: translate(-40px, -30px) scale(1.1);
            opacity: 0.7;
          }
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

export default Projects
