import React, { useEffect, useState, useCallback } from 'react'

const createParticles = (count = 100) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: ['#f59e0b', '#fbbf24', '#f97316', '#ef4444', '#a78bfa', '#60a5fa', '#34d399'][Math.floor(Math.random() * 7)],
    size: Math.random() * 10 + 5,
    duration: 2 + Math.random() * 2,
    delay: Math.random() * 0.6,
    shape: Math.random() > 0.5 ? 'rect' : 'circle',
  }))

const EasterEgg = () => {
  const [active, setActive] = useState(false)
  const [particles, setParticles] = useState([])

  const trigger = useCallback(() => {
    if (active) return
    setActive(true)
    setParticles(createParticles(100))
    setTimeout(() => { setActive(false); setParticles([]) }, 4500)
  }, [active])

  useEffect(() => {
    window.addEventListener('easterEgg', trigger)
    return () => window.removeEventListener('easterEgg', trigger)
  }, [trigger])

  if (!active) return null

  return (
    <div className="fixed inset-0 z-[99990] pointer-events-none overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: '-5%',
            width: p.size,
            height: p.shape === 'rect' ? p.size * 0.45 : p.size,
            background: p.color,
            borderRadius: p.shape === 'circle' ? '50%' : '3px',
            animation: `confettiFall ${p.duration}s ease-in forwards`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Message */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="text-center px-10 py-8 rounded-3xl"
          style={{
            background: 'linear-gradient(145deg, rgba(18,18,20,0.97), rgba(9,9,11,0.98))',
            border: '1px solid rgba(var(--accent-rgb), 0.4)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 60px rgba(var(--accent-rgb), 0.25)',
            animation: 'popIn 0.45s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          <div className="text-5xl mb-3">🎉</div>
          <p className="text-2xl font-bold text-white mb-2">Easter Egg débloqué !</p>
          <p className="text-sm text-gray-400 mb-1">
            Bien joué — tu m'as trouvé <span style={{ color: 'var(--accent-400)' }}>👀</span>
          </p>
          <p className="text-xs text-gray-500 mt-3">
            Mulho MABIALA — Full Stack Developer
          </p>
        </div>
      </div>

      <style>{`
        @keyframes confettiFall {
          0%   { transform: translateY(0) rotate(0deg);   opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
        @keyframes popIn {
          from { transform: scale(0.4); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default EasterEgg
