import React, { useEffect } from 'react'

const ProjectModal = ({ project, onClose, t }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{
          background: 'linear-gradient(145deg, rgba(24,24,27,0.98), rgba(9,9,11,0.99))',
          border: '1px solid rgba(var(--accent-rgb), 0.25)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 60px rgba(var(--accent-rgb), 0.08)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image header */}
        <div className="relative h-56 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(9,9,11,1) 0%, rgba(9,9,11,0.4) 60%, transparent 100%)' }}
          />
          {/* Bouton fermer */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* Badge catégorie */}
          <div className="absolute bottom-4 left-6">
            <span
              className="text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full"
              style={{
                background: 'rgba(var(--accent-rgb), 0.15)',
                color: 'var(--accent-400)',
                border: '1px solid rgba(var(--accent-rgb), 0.3)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-7">
          <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>

          {/* Description longue */}
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {project.longDescription || project.description}
          </p>

          {/* Défis techniques */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="mb-6">
              <h3
                className="text-sm font-bold uppercase tracking-widest mb-3"
                style={{ color: 'var(--accent-400)' }}
              >
                {t.projects.challengesTitle}
              </h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: 'var(--accent-400)' }}
                    />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stack technique */}
          <div className="mb-7">
            <h3
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: 'var(--accent-400)' }}
            >
              {t.projects.techStack}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg"
                  style={{
                    background: 'rgba(var(--accent-rgb), 0.1)',
                    color: 'var(--accent-400)',
                    border: '1px solid rgba(var(--accent-rgb), 0.2)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Liens */}
          <div className="flex gap-4">
            {project.demoLink && project.demoLink !== '#' && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(135deg, var(--accent-400), var(--accent-y500))`,
                  boxShadow: `0 8px 25px rgba(var(--accent-rgb), 0.35)`,
                }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {t.projects.liveDemo}
              </a>
            )}
            {project.codeLink && project.codeLink !== '#' && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
