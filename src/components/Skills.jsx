import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiVuedotjs, SiNextdotjs, SiTailwindcss, SiBootstrap, SiTypescript, SiNodedotjs, SiExpress, SiPhp, SiFlask, SiMongodb, SiPostgresql, SiSqlite, SiGit, SiGithub, SiDocker, SiFigma, SiNpm, SiVite, SiWordpress, SiFlutter, SiCanva, SiAdobephotoshop, SiAdobeillustrator, SiLaravel, SiCsharp, SiJenkins, SiSonarqube } from 'react-icons/si'
import { FaJava, FaCode } from 'react-icons/fa'
import { GoGitMerge } from 'react-icons/go'

const Skills = () => {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')

  // Compétences principales avec pourcentages (cercles) - Thème doré
  const mainSkills = [
    { name: 'HTML5', percent: 98, color: '#fbbf24', gradient: ['#fbbf24', '#f59e0b'] },
    { name: 'CSS3', percent: 95, color: '#f59e0b', gradient: ['#f59e0b', '#d97706'] },
    { name: 'JavaScript', percent: 90, color: '#fbbf24', gradient: ['#fbbf24', '#f59e0b'] },
    { name: 'React.js', percent: 85, color: '#eab308', gradient: ['#eab308', '#f59e0b'] },
    { name: 'Tailwind.css', percent: 92, color: '#f59e0b', gradient: ['#f59e0b', '#d97706'] },
    { name: 'Node.js', percent: 80, color: '#d97706', gradient: ['#d97706', '#b45309'] },
  ]

  // Technologies par catégorie
  const technologies = {
    frontend: [
      { name: 'HTML5', Icon: SiHtml5, color: '#E34C26', level: t.skills.levels.expert },
      { name: 'CSS3', Icon: SiCss3, color: '#1572B6', level: t.skills.levels.expert },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', level: t.skills.levels.expert },
      { name: 'React.js', Icon: SiReact, color: '#61DAFB', level: t.skills.levels.expert },
      { name: 'Redux', Icon: SiRedux, color: '#764ABC', level: t.skills.levels.advanced },
      { name: 'Vue.js', Icon: SiVuedotjs, color: '#4FC08D', level: t.skills.levels.advanced },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF', level: t.skills.levels.advanced },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', level: t.skills.levels.expert },
      { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3', level: t.skills.levels.advanced },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', level: t.skills.levels.advanced },
    ],
    backend: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#68A063', level: t.skills.levels.advanced },
      { name: 'Express', Icon: SiExpress, color: '#FFFFFF', level: t.skills.levels.advanced },
      { name: 'PHP', Icon: SiPhp, color: '#777BB4', level: t.skills.levels.advanced },
      { name: 'Laravel', Icon: SiLaravel, color: '#FF2D20', level: t.skills.levels.advanced },
      { name: 'C#', Icon: SiCsharp, color: '#512BD4', level: t.skills.levels.advanced },
      { name: 'WordPress', Icon: SiWordpress, color: '#0073aa', level: t.skills.levels.advanced },
      { name: 'Flask', Icon: SiFlask, color: '#FFFFFF', level: t.skills.levels.advanced },
      { name: 'Java', Icon: FaJava, color: '#007396', level: t.skills.levels.advanced },
      { name: 'MongoDB', Icon: SiMongodb, color: '#13AA52', level: t.skills.levels.advanced },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791', level: t.skills.levels.intermediate },
      { name: 'SQL', Icon: SiSqlite, color: '#003B57', level: t.skills.levels.advanced },
      { name: 'REST API', Icon: SiJavascript, color: '#F7DF1E', level: t.skills.levels.expert },
    ],
    mobile: [
      { name: 'React Native', Icon: SiReact, color: '#61DAFB', level: t.skills.levels.advanced },
      { name: 'Flutter', Icon: SiFlutter, color: '#02569B', level: t.skills.levels.intermediate },
      { name: 'PWA', Icon: SiReact, color: '#61DAFB', level: t.skills.levels.advanced },
    ],
    tools: [
      { name: 'Git', Icon: SiGit, color: '#F1502F', level: t.skills.levels.expert },
      { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF', level: t.skills.levels.expert },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED', level: t.skills.levels.intermediate },
      { name: 'CI/CD', Icon: GoGitMerge, color: '#4CAF50', level: t.skills.levels.advanced },
      { name: 'Jenkins', Icon: SiJenkins, color: '#D24939', level: t.skills.levels.advanced },
      { name: 'SonarQube', Icon: SiSonarqube, color: '#4E9BCD', level: t.skills.levels.advanced },
      { name: 'VS Code', Icon: FaCode, color: '#007ACC', level: t.skills.levels.expert },
      { name: 'npm', Icon: SiNpm, color: '#CB3837', level: t.skills.levels.expert },
      { name: 'Vite', Icon: SiVite, color: '#646CFF', level: t.skills.levels.advanced },
    ],
    design: [
      { name: 'Figma', Icon: SiFigma, color: '#F24E1E', level: t.skills.levels.advanced },
      { name: 'Canva', Icon: SiCanva, color: '#00C4CC', level: t.skills.levels.advanced },
      { name: 'Photoshop', Icon: SiAdobephotoshop, color: '#31A8FF', level: t.skills.levels.intermediate },
      { name: 'Illustrator', Icon: SiAdobeillustrator, color: '#FF9A00', level: t.skills.levels.intermediate },
    ],
  }

  const categories = [
    { id: 'all', name: t.skills.categories.all, icon: '🌟' },
    { id: 'frontend', name: t.skills.categories.frontend, icon: '💻' },
    { id: 'backend', name: t.skills.categories.backend, icon: '⚙️' },
    { id: 'mobile', name: t.skills.categories.mobile, icon: '📱' },
    { id: 'design', name: t.skills.categories.design, icon: '🎨' },
    { id: 'tools', name: t.skills.categories.tools, icon: '🛠️' },
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case t.skills.levels.expert:
        return 'text-amber-400 bg-amber-500/10 border-amber-500/30'
      case t.skills.levels.advanced:
        return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30'
      case t.skills.levels.intermediate:
        return 'text-amber-500 bg-amber-600/10 border-amber-600/30'
      default:
        return 'text-gray-400 bg-gray-500/10 border-gray-500/30'
    }
  }

  const filteredTechnologies =
    activeCategory === 'all'
      ? Object.values(technologies).flat()
      : technologies[activeCategory] || []

  return (
    <section id="skills-section" className="relative w-full py-20 px-8 sm:px-12 lg:px-16 xl:px-20 bg-black">
      {/* Effets de fond dorés */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-transparent bg-clip-text">
              {t.skills.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Compétences principales avec cercles */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {t.skills.mainSkillsTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {mainSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex flex-col items-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Cercle de progression */}
                <div className="relative w-32 h-32 mb-4">
                  {/* Cercle de fond */}
                  <svg className="w-full h-full transform -rotate-90">
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={skill.gradient[0]} />
                        <stop offset="100%" stopColor={skill.gradient[1]} />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#1a1a1a"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Cercle de progression avec gradient */}
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - skill.percent / 100)}`}
                      className="transition-all duration-1000 ease-out"
                      style={{
                        filter: `drop-shadow(0 0 8px ${skill.color})`,
                      }}
                    />
                  </svg>
                  {/* Pourcentage au centre */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                      {skill.percent}%
                    </span>
                  </div>
                </div>
                {/* Nom de la compétence */}
                <h4 className="text-white font-semibold text-center group-hover:text-amber-400 transition-colors">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Filtres de catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-lg shadow-amber-500/30 scale-105'
                  : 'bg-zinc-800/50 text-gray-400 hover:bg-zinc-800 hover:text-white border border-amber-500/20'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Grille de technologies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTechnologies.map((tech, index) => {
            const IconComponent = tech.Icon
            return (
            <div
              key={`${tech.name}-${index}`}
              className="group relative p-6 bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-1"
            >
              {/* Icône et nom */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform" style={{ color: tech.color }}>
                  {IconComponent && <IconComponent />}
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-lg group-hover:text-amber-400 transition-colors">
                    {tech.name}
                  </h4>
                </div>
              </div>

              {/* Badge de niveau */}
              <div className="flex justify-end">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(
                    tech.level
                  )} transition-all duration-300`}
                >
                  {tech.level}
                </span>
              </div>

              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
