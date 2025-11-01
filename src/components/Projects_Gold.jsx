import React, { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Plateforme de commerce électronique',
      description: 'Une plateforme de commerce électronique complète avec gestion des produits, panier d\'achat et traitement des paiements.',
      image: '/project1.jpg',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      category: 'fullstack',
      demoLink: '#',
      codeLink: '#',
      status: 'En vedette'
    },
    {
      id: 2,
      title: 'Application Notes',
      description: 'Une application de gestion de tâches collaborative avec mises à jour en temps réel, interface glisser-déposer et fonctionnalités de collaboration d\'équipe.',
      image: '/project2.jpg',
      tags: ['React', 'Express', 'Redux', 'Node.js'],
      category: 'frontend',
      demoLink: '#',
      codeLink: '#',
      status: 'En vedette'
    },
    {
      id: 3,
      title: 'BT-Événements',
      description: 'Une plateforme événementielle avec boutique en ligne et tableau de bord d\'administration complet',
      image: '/project3.jpg',
      tags: ['Next.js', 'Shopify', 'Node.js', 'Express', 'MongoDB', 'API Paytech'],
      category: 'fullstack',
      demoLink: '#',
      codeLink: '#',
      status: 'En vedette'
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      description: 'Tableau de bord d\'analyse avec graphiques interactifs et visualisation de données en temps réel.',
      image: '/project4.jpg',
      tags: ['Vue.js', 'Chart.js', 'Firebase'],
      category: 'frontend',
      demoLink: '#',
      codeLink: '#',
      status: null
    },
    {
      id: 5,
      title: 'API REST Authentification',
      description: 'API robuste avec authentification JWT, gestion des rôles et sécurité avancée.',
      image: '/project5.jpg',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'backend',
      demoLink: '#',
      codeLink: '#',
      status: null
    },
    {
      id: 6,
      title: 'Portfolio Personnel',
      description: 'Site portfolio moderne avec animations fluides et design responsive.',
      image: '/project6.jpg',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      category: 'frontend',
      demoLink: '#',
      codeLink: '#',
      status: null
    }
  ]

  const filters = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'fullstack', label: 'Fullstack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects-section" className="relative w-full py-20 px-8 sm:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* Effets de fond dorés */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <div className="text-center mb-12">
          <span className="text-amber-400 text-sm font-mono tracking-wider mb-4 block">
            &lt;Projets&gt;
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-transparent bg-clip-text">
              Mes travaux récents
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Voici quelques-uns de mes projets récents qui mettent en valeur mes compétences et mon expertise en développement web.
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
                {/* Placeholder pour l'image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center">
                    <svg className="w-12 h-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>

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
                    Démo en direct
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
            <span>Voir tous les projets</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
