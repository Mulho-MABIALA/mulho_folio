import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import useSlideIn from '../hooks/useSlideIn'

const Projects = () => {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredId, setHoveredId] = useState(null)
  const titleSlide = useSlideIn({ threshold: 0.2 })

  const projects = [
    {
      id: 1,
      title: t.projects.projectsList[0].title,
      description: t.projects.projectsList[0].description,
      image: '/ecohub.png',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      category: 'fullstack',
      demoLink: 'https://ecohub-signalement.netlify.app/',
      codeLink: '#',
      featured: true
    },
    {
      id: 2,
      title: t.projects.projectsList[1].title,
      description: t.projects.projectsList[1].description,
      image: '/img2.jpg',
      tags: ['Html', 'PHP', 'SQL', 'Js', 'Tailwind CSS'],
      category: 'fullstack',
      demoLink: '#',
      codeLink: '#',
      featured: true
    },
    {
      id: 3,
      title: t.projects.projectsList[2].title,
      description: t.projects.projectsList[2].description,
      image: '/project4.jpg',
      tags: ['Vue.js', 'Chart.js', 'Firebase'],
      category: 'frontend',
      demoLink: '#',
      codeLink: '#',
      featured: false
    },
    {
      id: 4,
      title: t.projects.projectsList[3].title,
      description: t.projects.projectsList[3].description,
      image: '/project5.jpg',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'backend',
      demoLink: '#',
      codeLink: '#',
      featured: false
    },
    {
      id: 5,
      title: t.projects.projectsList[4].title,
      description: t.projects.projectsList[4].description,
      image: '/img3.png',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      category: 'frontend',
      demoLink: '#',
      codeLink: '#',
      featured: false
    },
    {
      id: 6,
      title: t.projects.projectsList[5].title,
      description: t.projects.projectsList[5].description,
      image: '/img4.jpg',
      tags: ['React.js', 'Tailwind CSS'],
      category: 'frontend',
      demoLink: 'https://project-hooks-brown.vercel.app/',
      codeLink: '#',
      featured: false
    },
    {
      id: 7,
      title: t.projects.projectsList[6].title,
      description: t.projects.projectsList[6].description,
      image: '/img5.jpg',
      tags: ['React.js', 'Tailwind CSS'],
      category: 'frontend',
      demoLink: 'https://todolist2-chi.vercel.app/',
      codeLink: '#',
      featured: false
    },
    {
      id: 8,
      title: t.projects.projectsList[7].title,
      description: t.projects.projectsList[7].description,
      image: '/image.png',
      tags: ['React.js', 'TypeScript', 'Tailwind CSS'],
      category: 'frontend',
      demoLink: 'https://nbarts.net/',
      codeLink: '#',
      featured: false
    },
    {
      id: 9,
      title: t.projects.projectsList[8].title,
      description: t.projects.projectsList[8].description,
      image: '/zolaa.png',
      tags: ['React.js', 'Node.js', 'Tailwind CSS'],
      category: 'fullstack',
      demoLink: 'https://zolaa.tech',
      codeLink: '#',
      featured: true
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
    <section id="projects-section" className="relative w-full py-24 px-8 sm:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.06) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.04) 0%, transparent 70%)' }}
        />
        {/* Grille subtile */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(var(--accent-rgb), 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--accent-rgb), 0.03) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête avec animation slide-in */}
        <div className="text-center mb-16 overflow-hidden" ref={titleSlide.ref}>
          <span className="text-sm font-mono tracking-widest mb-4 block" style={{ color: 'var(--accent-400)' }}>
            {t.projects.tag}
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 transition-all duration-700 ease-out"
            style={{
              transform: titleSlide.isVisible ? 'translateX(0)' : 'translateX(-100%)',
              opacity: titleSlide.isVisible ? 1 : 0,
            }}
          >
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-transparent bg-clip-text">
              {t.projects.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filtres redesignés */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className="relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-400 overflow-hidden"
              style={activeFilter === filter.id ? {
                background: `linear-gradient(135deg, var(--accent-500), var(--accent-y600))`,
                color: '#000',
                boxShadow: `0 8px 30px rgba(var(--accent-rgb), 0.35)`,
              } : {
                background: 'rgba(255,255,255,0.04)',
                color: '#9ca3af',
                border: '1px solid rgba(var(--accent-rgb), 0.15)',
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter.id) {
                  e.currentTarget.style.borderColor = `rgba(var(--accent-rgb), 0.4)`
                  e.currentTarget.style.color = 'var(--accent-400)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter.id) {
                  e.currentTarget.style.borderColor = `rgba(var(--accent-rgb), 0.15)`
                  e.currentTarget.style.color = '#9ca3af'
                }
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => {
            const isHovered = hoveredId === project.id

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500"
                style={{
                  background: 'linear-gradient(145deg, rgba(24,24,27,0.8), rgba(9,9,11,0.95))',
                  border: `1px solid ${isHovered ? `rgba(var(--accent-rgb), 0.4)` : 'rgba(255,255,255,0.06)'}`,
                  boxShadow: isHovered
                    ? `0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(var(--accent-rgb), 0.1)`
                    : '0 4px 20px rgba(0,0,0,0.3)',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Numéro du projet */}
                <div
                  className="absolute top-5 left-5 z-20 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold backdrop-blur-md"
                  style={{
                    background: 'rgba(0,0,0,0.6)',
                    border: '1px solid rgba(var(--accent-rgb), 0.3)',
                    color: 'var(--accent-400)',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Badge featured */}
                {project.featured && (
                  <div
                    className="absolute top-5 right-5 z-20 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-md"
                    style={{
                      background: `linear-gradient(135deg, var(--accent-500), var(--accent-y600))`,
                      color: '#000',
                      boxShadow: `0 4px 15px rgba(var(--accent-rgb), 0.4)`,
                    }}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {t.projects.featured}
                  </div>
                )}

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                    }}
                  />
                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to top, rgba(9,9,11,1) 0%, rgba(9,9,11,${isHovered ? '0.6' : '0.3'}) 50%, rgba(9,9,11,0.1) 100%)`,
                    }}
                  />

                  {/* Boutons d'action au survol */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-4 transition-all duration-400"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
                    }}
                  >
                    <a
                      href={project.demoLink}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, var(--accent-400), var(--accent-y500))`,
                        boxShadow: `0 8px 25px rgba(var(--accent-rgb), 0.4)`,
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {t.projects.liveDemo}
                    </a>

                    <a
                      href={project.codeLink}
                      className="flex items-center justify-center w-10 h-10 rounded-full text-white transition-all duration-300 hover:scale-105 backdrop-blur-md"
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  {/* Catégorie */}
                  <span
                    className="inline-block text-xs font-semibold tracking-wider uppercase mb-3 px-2.5 py-1 rounded-md"
                    style={{
                      background: 'rgba(var(--accent-rgb), 0.1)',
                      color: 'var(--accent-400)',
                      border: '1px solid rgba(var(--accent-rgb), 0.15)',
                    }}
                  >
                    {project.category}
                  </span>

                  <h3
                    className="text-xl font-bold mb-3 transition-colors duration-300"
                    style={{ color: isHovered ? 'var(--accent-400)' : '#fff' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium rounded-md transition-all duration-300"
                        style={{
                          background: isHovered ? 'rgba(var(--accent-rgb), 0.08)' : 'rgba(255,255,255,0.04)',
                          color: isHovered ? 'var(--accent-400)' : '#6b7280',
                          border: `1px solid ${isHovered ? 'rgba(var(--accent-rgb), 0.2)' : 'rgba(255,255,255,0.06)'}`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ligne d'accent en bas */}
                <div
                  className="h-[2px] transition-all duration-500"
                  style={{
                    background: isHovered
                      ? `linear-gradient(90deg, transparent, var(--accent-400), var(--accent-y500), transparent)`
                      : 'transparent',
                  }}
                />
              </div>
            )
          })}
        </div>

        {/* Bouton "Voir plus" */}
        <div className="text-center mt-14">
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-black transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, var(--accent-500), var(--accent-y600))`,
              boxShadow: `0 10px 35px rgba(var(--accent-rgb), 0.3)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 15px 45px rgba(var(--accent-rgb), 0.5)`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 10px 35px rgba(var(--accent-rgb), 0.3)`
            }}
          >
            <span>{t.projects.viewAll}</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
