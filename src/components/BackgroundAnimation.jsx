const BackgroundAnimation = () => {
  // Liste des technologies à afficher
  const technologies = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express',
    'MongoDB', 'Tailwind', 'Git', 'Redux', 'API REST',
    'TypeScript', 'Docker', 'AWS', 'Python', 'Java', 'PHP',
    'Angular', 'Vue.js', 'Next.js', 'GraphQL', 'MySQL',
    'PostgreSQL', 'Firebase', 'Sass', 'Webpack'
  ]

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    >
      {/* Technologies flottantes */}
      {technologies.map((tech, index) => {
        const left = (index * 13 + 5) % 95
        const top = (index * 17 + 10) % 90
        const size = 12 + (index % 6)

        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${left}%`,
              top: `${top}%`,
              fontSize: `${size}px`,
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#6b7280',
              textShadow: '0 0 3px rgba(107, 114, 128, 0.1)',
              animation: `float ${20 + (index % 15)}s linear infinite`,
              animationDelay: `${index * 0.5}s`
            }}
          >
            {tech}
          </div>
        )
      })}

      {/* Grille de fond */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  )
}

export default BackgroundAnimation
