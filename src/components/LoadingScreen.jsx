import { useState, useEffect } from 'react'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Initialisation...')
  const [dots, setDots] = useState('.')
  const [glitchActive, setGlitchActive] = useState(false)
  const [particleEffect, setParticleEffect] = useState([])
  const [matrixRain, setMatrixRain] = useState([])

  useEffect(() => {
    const loadingMessages = [
      'Initialisation du système',
      'Chargement des composants',
      'Compilation des assets',
      'Initialisation du portfolio',
      'Configuration des modules',
      'Optimisation des performances',
      'Finalisation',
      'Accès autorisé !'
    ]

    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += Math.random() * 10

      if (currentProgress >= 100) {
        currentProgress = 100
        setProgress(100)
        setLoadingText('Accès autorisé !')
        clearInterval(interval)

        setTimeout(() => {
          onLoadingComplete()
        }, 1000)
      } else {
        setProgress(currentProgress)
        const messageIndex = Math.floor((currentProgress / 100) * loadingMessages.length)
        setLoadingText(loadingMessages[Math.min(messageIndex, loadingMessages.length - 1)])
      }
    }, 180)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  // Animation des points de suspension
  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '.'
        return prev + '.'
      })
    }, 400)

    return () => clearInterval(dotsInterval)
  }, [])

  // Effet glitch aléatoire
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 150)
    }, 4000)

    return () => clearInterval(glitchInterval)
  }, [])

  // Particules explosives au survol
  useEffect(() => {
    const createExplosion = () => {
      const newParticles = []
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: Math.random(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 2 + Math.random() * 6,
          delay: Math.random() * 0.5
        })
      }
      setParticleEffect(newParticles)
    }

    const explosionInterval = setInterval(createExplosion, 3000)
    return () => clearInterval(explosionInterval)
  }, [])

  // Pluie Matrix
  useEffect(() => {
    const createMatrixRain = () => {
      const matrix = []
      for (let i = 0; i < 15; i++) {
        matrix.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 2
        })
      }
      setMatrixRain(matrix)
    }
    createMatrixRain()
  }, [])

  // Générer des particules en cercle
  const generateParticles = () => {
    const particles = []
    const particleCount = 35
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * 360
      particles.push({
        id: i,
        angle,
        delay: i * 0.12,
        size: 2 + Math.random() * 5
      })
    }
    return particles
  }

  const particles = generateParticles()

  // Langages de programmation à afficher
  const programmingLanguages = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js',
    'Python', 'TypeScript', 'MongoDB', 'Express', 'Git',
    'Docker', 'AWS', 'Redux', 'GraphQL', 'Next.js',
    'Tailwind', 'Webpack', 'Vite', 'API REST', 'WebSocket'
  ]

  const matrixCharacters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        opacity: progress === 100 ? 0 : 1,
        transition: 'opacity 0.8s ease-out',
        overflow: 'hidden'
      }}
    >
      {/* Arrière-plan avec bruit */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(251, 191, 36, 0.02)',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2"/%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noiseFilter)" opacity="0.05"/%3E%3C/svg%3E")',
          animation: 'noise-animate 5s ease-in-out infinite',
          pointerEvents: 'none'
        }}
      />

      {/* Pluie Matrix */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1 }}>
        {matrixRain.map(rain => (
          <div
            key={rain.id}
            style={{
              position: 'absolute',
              left: `${rain.left}%`,
              top: '-100px',
              fontSize: '12px',
              fontFamily: 'monospace',
              color: `rgba(251, 191, 36, ${0.1 + Math.random() * 0.3})`,
              animation: `matrix-fall 8s linear infinite`,
              animationDelay: `${rain.delay}s`,
              textShadow: '0 0 10px rgba(251, 191, 36, 0.5)',
              zIndex: 1
            }}
          >
            {matrixCharacters.split('').slice(0, Math.floor(Math.random() * 10) + 5).join('\n')}
          </div>
        ))}
      </div>

      {/* Cercles de fond animés AMÉLIORÉS */}
      <div
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          border: '2px solid rgba(251, 191, 36, 0.15)',
          borderRadius: '50%',
          animation: 'rotate-glow 30s linear infinite',
          boxShadow: '0 0 60px rgba(251, 191, 36, 0.2), inset 0 0 60px rgba(251, 191, 36, 0.1)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          border: '2px solid rgba(251, 191, 36, 0.2)',
          borderRadius: '50%',
          animation: 'rotate-glow-reverse 25s linear infinite',
          boxShadow: '0 0 50px rgba(251, 191, 36, 0.25)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          border: '2px solid rgba(251, 191, 36, 0.3)',
          borderRadius: '50%',
          animation: 'rotate-glow 20s linear infinite',
          boxShadow: '0 0 40px rgba(251, 191, 36, 0.3), 0 0 100px rgba(251, 191, 36, 0.1)'
        }}
      />

      {/* Aura de lumière radiale */}
      <div
        style={{
          position: 'absolute',
          width: '900px',
          height: '900px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%)',
          animation: 'pulse-aura 3s ease-in-out infinite',
          zIndex: 2
        }}
      />

      {/* Logo ou Nom avec effet Matrix */}
      <div
        style={{
          marginBottom: '60px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Effet de scan horizontal AMÉLIORÉ */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #fbbf24, transparent)',
            animation: 'scan-line-epic 2.5s ease-in-out infinite',
            opacity: 0.8,
            zIndex: 20,
            filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.8))'
          }}
        />

        {/* Effet de scan vertical */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '3px',
            background: 'linear-gradient(180deg, transparent, #fbbf24, transparent)',
            animation: 'scan-line-vertical 3s ease-in-out infinite',
            opacity: 0.5,
            zIndex: 20
          }}
        />

        {/* Cercles tournants autour du titre - FOLIE VISUELLE */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-80px',
            width: '400px',
            height: '200px',
            borderRadius: '50%',
            border: '2px solid transparent',
            borderTop: '2px solid rgba(251, 191, 36, 0.4)',
            animation: 'spin-intense 4s linear infinite',
            opacity: 0.5
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-80px',
            width: '350px',
            height: '180px',
            borderRadius: '50%',
            border: '2px solid transparent',
            borderBottom: '2px solid rgba(245, 158, 11, 0.4)',
            animation: 'spin-reverse-intense 5s linear infinite',
            opacity: 0.5
          }}
        />

        <h1
          className={glitchActive ? 'glitch-text' : ''}
          style={{
            fontSize: '4.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #d97706 50%, #f59e0b 75%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundSize: '200% 200%',
            marginBottom: '20px',
            animation: 'gradient-shift 4s ease infinite, pulse-glow-intense 2s ease-in-out infinite, slide-down 0.8s ease-out, float-name 3s ease-in-out infinite',
            textShadow: '0 0 50px rgba(251, 191, 36, 0.5), 0 0 100px rgba(251, 191, 36, 0.3)',
            position: 'relative',
            letterSpacing: '3px',
            filter: 'drop-shadow(0 0 30px rgba(251, 191, 36, 0.4))',
            zIndex: 5
          }}
        >
          MULHO MABIALA
        </h1>

        {/* Décoration autour du titre */}
        <div
          style={{
            position: 'absolute',
            top: '-30px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '300px',
            height: '6px',
            background: 'linear-gradient(90deg, transparent, #fbbf24, transparent)',
            animation: 'shimmer 3s ease-in-out infinite'
          }}
        />

        {/* Ligne de code animée AMÉLIORÉE */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px',
            padding: '15px 25px',
            background: 'rgba(31, 41, 55, 0.3)',
            borderRadius: '12px',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 30px rgba(251, 191, 36, 0.15), inset 0 0 30px rgba(251, 191, 36, 0.05)'
          }}
        >
          <span style={{ color: '#fbbf24', fontSize: '1.4rem', fontFamily: 'monospace', animation: 'blink-cursor 1s step-end infinite' }}>{'{'}</span>
          <p
            style={{
              color: '#d1d5db',
              fontSize: '1.3rem',
              fontFamily: 'monospace',
              letterSpacing: '2px',
              animation: 'typing-epic 3s steps(25) infinite',
              margin: 0
            }}
          >
            Développeur Full Stack
          </p>
          <span style={{ color: '#fbbf24', fontSize: '1.4rem', fontFamily: 'monospace' }}>{'}'}</span>
        </div>

        {/* Badge premium AMÉLIORÉ */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 28px',
            border: '2px solid #fbbf24',
            borderRadius: '30px',
            backgroundColor: 'rgba(251, 191, 36, 0.08)',
            animation: 'glow-border-intense 2s ease-in-out infinite, float-up-down 2.5s ease-in-out infinite',
            boxShadow: '0 0 20px rgba(251, 191, 36, 0.3), inset 0 0 20px rgba(251, 191, 36, 0.1)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#fbbf24',
              boxShadow: '0 0 15px #fbbf24, 0 0 30px rgba(251, 191, 36, 0.6)',
              animation: 'pulse-dot-intense 1s ease-in-out infinite'
            }}
          />
          <span
            style={{
              color: '#fbbf24',
              fontSize: '0.95rem',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              letterSpacing: '1.5px'
            }}
          >
            ⚡ JUNIOR DEVELOPER ⚡
          </span>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#fbbf24',
              boxShadow: '0 0 15px #fbbf24, 0 0 30px rgba(251, 191, 36, 0.6)',
              animation: 'pulse-dot-intense 1s ease-in-out infinite 0.5s'
            }}
          />
        </div>
      </div>

      {/* Barre de progression SPECTACULAIRE */}
      <div
        style={{
          width: '600px',
          maxWidth: '90%',
          marginBottom: '50px',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Terminal-style header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '15px',
            padding: '12px 16px',
            backgroundColor: 'rgba(31, 41, 55, 0.6)',
            borderRadius: '12px 12px 0 0',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 20px rgba(251, 191, 36, 0.1)'
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444', boxShadow: '0 0 8px rgba(239, 68, 68, 0.6)' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b', boxShadow: '0 0 8px rgba(245, 158, 11, 0.6)' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)' }} />
          </div>
          <span style={{ color: '#6b7280', fontSize: '0.8rem', fontFamily: 'monospace', marginLeft: '10px' }}>
            system@portfolio:~$
          </span>
        </div>

        {/* Container de la barre */}
        <div
          style={{
            width: '100%',
            height: '16px',
            backgroundColor: '#1f2937',
            borderRadius: '0 0 14px 14px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 0 40px rgba(251, 191, 36, 0.4), inset 0 2px 8px rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            borderTop: 'none'
          }}
        >
          {/* Barre de progression */}
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #d97706, #f59e0b, #fbbf24)',
              backgroundSize: '300% 100%',
              animation: 'shimmer-bar-epic 1.5s linear infinite',
              boxShadow: '0 0 50px rgba(251, 191, 36, 0.9), inset 0 0 20px rgba(255, 255, 255, 0.3), 0 0 80px rgba(251, 191, 36, 0.6)',
              transition: 'width 0.3s ease-out',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Effet de brillance supérieure */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '60%',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)',
                animation: 'shimmer-top 2s ease-in-out infinite'
              }}
            />
            {/* Rayures animées */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'repeating-linear-gradient(90deg, transparent, rgba(255,255,255,0.15) 2px, transparent 4px)',
                animation: 'move-particles 0.8s linear infinite'
              }}
            />
          </div>

          {/* Indicateur de progression */}
          {progress > 0 && progress < 100 && (
            <div
              style={{
                position: 'absolute',
                left: `${progress}%`,
                top: '-6px',
                transform: 'translateX(-50%)',
                width: '6px',
                height: 'calc(100% + 12px)',
                backgroundColor: '#fbbf24',
                boxShadow: '0 0 20px #fbbf24, 0 0 40px rgba(251, 191, 36, 0.8)',
                animation: 'pulse-indicator-intense 0.8s ease-in-out infinite',
                borderRadius: '3px'
              }}
            />
          )}
        </div>

        {/* Pourcentage et texte */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px',
            padding: '15px 18px',
            backgroundColor: 'rgba(31, 41, 55, 0.4)',
            borderRadius: '12px',
            border: '1px solid rgba(251, 191, 36, 0.2)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 20px rgba(251, 191, 36, 0.1)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: '#fbbf24', fontSize: '1.2rem', fontFamily: 'monospace', animation: 'blink-cursor 1s step-end infinite' }}>▶</span>
            <p
              style={{
                color: '#d1d5db',
                fontSize: '1.1rem',
                fontFamily: 'monospace',
                letterSpacing: '0.5px',
                margin: 0
              }}
            >
              {loadingText}{loadingText !== 'Accès autorisé !' && dots}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 18px',
              backgroundColor: 'rgba(251, 191, 36, 0.15)',
              borderRadius: '8px',
              border: '1px solid rgba(251, 191, 36, 0.4)',
              boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'
            }}
          >
            <p
              style={{
                color: '#fbbf24',
                fontSize: '1.4rem',
                fontWeight: 'bold',
                fontFamily: 'monospace',
                textShadow: '0 0 15px rgba(251, 191, 36, 0.6)',
                margin: 0
              }}
            >
              {Math.floor(progress)}%
            </p>
          </div>
        </div>
      </div>

      {/* Spinner central SPECTACULAIRE */}
      <div
        style={{
          position: 'relative',
          width: '120px',
          height: '120px',
          marginBottom: '30px',
          zIndex: 10,
          filter: 'drop-shadow(0 0 40px rgba(251, 191, 36, 0.5))'
        }}
      >
        {/* Anneau externe */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: '4px solid transparent',
            borderTop: '4px solid #fbbf24',
            borderRight: '4px solid #f59e0b',
            borderRadius: '50%',
            animation: 'spin-intense 1s linear infinite',
            boxShadow: '0 0 30px rgba(251, 191, 36, 0.6), inset 0 0 30px rgba(251, 191, 36, 0.3)'
          }}
        />
        {/* Anneau moyen */}
        <div
          style={{
            position: 'absolute',
            top: '15px',
            left: '15px',
            width: 'calc(100% - 30px)',
            height: 'calc(100% - 30px)',
            border: '4px solid transparent',
            borderBottom: '4px solid #f59e0b',
            borderLeft: '4px solid #d97706',
            borderRadius: '50%',
            animation: 'spin-reverse-intense 1.3s linear infinite',
            boxShadow: '0 0 25px rgba(245, 158, 11, 0.5)'
          }}
        />
        {/* Anneau interne */}
        <div
          style={{
            position: 'absolute',
            top: '30px',
            left: '30px',
            width: 'calc(100% - 60px)',
            height: 'calc(100% - 60px)',
            border: '3px solid transparent',
            borderTop: '3px solid #fbbf24',
            borderRadius: '50%',
            animation: 'spin-intense 0.8s linear infinite',
            boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)'
          }}
        />
        {/* Point central PULSANT */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '16px',
            height: '16px',
            backgroundColor: '#fbbf24',
            borderRadius: '50%',
            boxShadow: '0 0 30px #fbbf24, 0 0 60px rgba(251, 191, 36, 0.8)',
            animation: 'pulse-dot-intense 1s ease-in-out infinite'
          }}
        />
      </div>

      {/* Particules en orbite AMÉLIORÉES */}
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.id % 3 === 0 ? '#fbbf24' : particle.id % 3 === 1 ? '#f59e0b' : '#d97706',
            borderRadius: '50%',
            boxShadow: `0 0 ${particle.size * 4}px ${particle.id % 3 === 0 ? '#fbbf24' : particle.id % 3 === 1 ? '#f59e0b' : '#d97706'}`,
            animation: `orbit-particle-intense 6s linear infinite`,
            animationDelay: `${particle.delay}s`,
            transformOrigin: '0 0',
            opacity: 0.7,
            zIndex: 5
          }}
        />
      ))}

      {/* Particules explosives */}
      {particleEffect.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: ['#fbbf24', '#f59e0b', '#d97706'][Math.floor(Math.random() * 3)],
            borderRadius: '50%',
            boxShadow: `0 0 ${particle.size * 3}px currentColor`,
            animation: `explosion ${1 + Math.random()}s ease-out forwards`,
            animationDelay: `${particle.delay}s`,
            opacity: 0.8,
            zIndex: 3
          }}
        />
      ))}

      {/* Langages de programmation flottants PLUS */}
      {programmingLanguages.map((lang, index) => {
        const positions = [
          { top: '8%', left: '3%' },
          { top: '12%', right: '6%' },
          { top: '25%', left: '2%' },
          { top: '40%', right: '3%' },
          { top: '55%', left: '5%' },
          { top: '70%', right: '8%' },
          { top: '18%', left: '12%' },
          { top: '50%', right: '12%' },
          { top: '80%', left: '10%' },
          { top: '30%', left: '88%' },
          { top: '65%', right: '15%' },
          { top: '10%', left: '80%' },
          { bottom: '8%', left: '18%' },
          { top: '35%', left: '8%' },
          { bottom: '12%', right: '20%' },
          { top: '45%', left: '92%' },
          { top: '75%', left: '88%' },
          { top: '20%', right: '88%' },
          { bottom: '25%', left: '50%' },
          { top: '60%', left: '92%' }
        ]

        const position = positions[index % positions.length]
        const animationDuration = 5 + (index % 6)
        const animationDelay = index * 0.4

        return (
          <div
            key={`lang-${index}`}
            style={{
              position: 'absolute',
              ...position,
              fontSize: '13px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: index % 3 === 0 ? '#fbbf24' : index % 3 === 1 ? '#f59e0b' : '#d97706',
              textShadow: `0 0 15px ${index % 3 === 0 ? '#fbbf24' : index % 3 === 1 ? '#f59e0b' : '#d97706'}, 0 0 30px ${index % 3 === 0 ? 'rgba(251, 191, 36, 0.4)' : index % 3 === 1 ? 'rgba(245, 158, 11, 0.4)' : 'rgba(217, 119, 6, 0.4)'}`,
              animation: `fade-float-intense ${animationDuration}s ease-in-out infinite`,
              animationDelay: `${animationDelay}s`,
              opacity: 0,
              zIndex: 2,
              filter: `drop-shadow(0 0 8px ${index % 3 === 0 ? '#fbbf24' : index % 3 === 1 ? '#f59e0b' : '#d97706'})`
            }}
          >
            {'<'}{lang}{'>'}
          </div>
        )
      })}

      {/* Particules flottantes supplémentaires */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`float-${i}`}
          style={{
            position: 'absolute',
            width: `${5 + i}px`,
            height: `${5 + i}px`,
            backgroundColor: [['#fbbf24', '#f59e0b', '#d97706'][i % 3]],
            borderRadius: '50%',
            boxShadow: `0 0 ${15 + i * 2}px ${[['#fbbf24', '#f59e0b', '#d97706'][i % 3]]}`,
            animation: `float-particle-complex ${4 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
            top: `${10 + i * 10}%`,
            left: `${5 + i * 8}%`,
            zIndex: 2
          }}
        />
      ))}

      {/* Animations CSS */}
      <style>{`
        @keyframes spin-intense {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes spin-reverse-intense {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes orbit-particle-intense {
          0% {
            transform: rotate(0deg) translateX(200px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(200px) rotate(-360deg);
          }
        }

        @keyframes rotate-glow {
          0% { transform: rotate(0deg) scale(1); opacity: 0.4; }
          50% { transform: rotate(180deg) scale(1.1); opacity: 0.6; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.4; }
        }

        @keyframes rotate-glow-reverse {
          0% { transform: rotate(360deg) scale(1); opacity: 0.5; }
          50% { transform: rotate(180deg) scale(1.12); opacity: 0.7; }
          100% { transform: rotate(0deg) scale(1); opacity: 0.5; }
        }

        @keyframes pulse-aura {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.6;
          }
        }

        @keyframes shimmer-bar-epic {
          0% { background-position: -300% 0; }
          100% { background-position: 300% 0; }
        }

        @keyframes pulse-glow-intense {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 35px rgba(251, 191, 36, 0.6));
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            filter: drop-shadow(0 0 50px rgba(251, 191, 36, 0.8)) drop-shadow(0 0 80px rgba(251, 191, 36, 0.4));
            transform: scale(1.03);
          }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse-dot-intense {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 0 30px #fbbf24, 0 0 50px rgba(251, 191, 36, 0.6);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.4);
            box-shadow: 0 0 50px #fbbf24, 0 0 100px rgba(251, 191, 36, 0.8);
          }
        }

        @keyframes slide-down {
          0% {
            opacity: 0;
            transform: translateY(-40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-particle-complex {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(40px, -50px) scale(1.4);
            opacity: 0.8;
          }
          50% {
            transform: translate(-30px, -70px) scale(0.8);
            opacity: 0.5;
          }
          75% {
            transform: translate(-50px, -40px) scale(1.2);
            opacity: 0.7;
          }
        }

        @keyframes fade-float-intense {
          0%, 100% {
            opacity: 0;
            transform: translateY(0) scale(0.8);
          }
          10% {
            opacity: 0.4;
          }
          20% {
            opacity: 0.7;
            transform: translateY(-20px) scale(1.1);
          }
          40% {
            opacity: 0.85;
            transform: translateY(-40px) scale(1.15);
          }
          60% {
            opacity: 0.85;
            transform: translateY(-45px) scale(1.1);
          }
          80% {
            opacity: 0.4;
            transform: translateY(-30px) scale(0.9);
          }
          90% {
            opacity: 0.2;
          }
        }

        @keyframes scan-line-epic {
          0%, 100% {
            top: 0;
            opacity: 0;
          }
          5% {
            opacity: 0.9;
          }
          50% {
            top: 100%;
            opacity: 0.9;
          }
          51% {
            top: 100%;
            opacity: 0;
          }
        }

        @keyframes scan-line-vertical {
          0%, 100% {
            left: 0;
            opacity: 0;
          }
          5% {
            opacity: 0.6;
          }
          50% {
            left: 100%;
            opacity: 0.6;
          }
          51% {
            left: 100%;
            opacity: 0;
          }
        }

        @keyframes typing-epic {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes blink-cursor {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0.3;
          }
        }

        @keyframes glow-border-intense {
          0%, 100% {
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.4), inset 0 0 20px rgba(251, 191, 36, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(251, 191, 36, 0.7), 0 0 60px rgba(251, 191, 36, 0.4), inset 0 0 30px rgba(251, 191, 36, 0.2);
          }
        }

        @keyframes float-up-down {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes move-particles {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 30px 0;
          }
        }

        @keyframes pulse-indicator-intense {
          0%, 100% {
            opacity: 1;
            transform: translateX(-50%) scaleY(1);
          }
          50% {
            opacity: 0.5;
            transform: translateX(-50%) scaleY(1.3);
          }
        }

        @keyframes shimmer-top {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes matrix-fall {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes explosion {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes noise-animate {
          0% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.08;
          }
          100% {
            opacity: 0.05;
          }
        }

        .glitch-text {
          animation: glitch-intense 0.3s ease-in-out;
        }

        @keyframes glitch-intense {
          0% {
            transform: translate(0);
          }
          15% {
            transform: translate(-3px, 2px);
          }
          30% {
            transform: translate(3px, -3px);
          }
          45% {
            transform: translate(-3px, -2px);
          }
          60% {
            transform: translate(2px, 3px);
          }
          75% {
            transform: translate(-2px, -3px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes float-name {
          0%, 100% {
            transform: translateY(0px);
          }
          25% {
            transform: translateY(-6px);
          }
          75% {
            transform: translateY(6px);
          }
        }
      `}</style>
    </div>
  )
}

export default LoadingScreen
