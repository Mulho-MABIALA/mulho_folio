import React, { useEffect, useState, useCallback } from 'react'

// Génère des confettis
const createParticles = (count = 80) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: -10,
    vx: (Math.random() - 0.5) * 3,
    vy: Math.random() * 4 + 2,
    color: ['#f59e0b', '#fbbf24', '#f97316', '#ef4444', '#a78bfa', '#60a5fa', '#34d399'][Math.floor(Math.random() * 7)],
    size: Math.random() * 10 + 4,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 8,
    shape: Math.random() > 0.5 ? 'rect' : 'circle',
  }))
}

const EasterEgg = () => {
  const [buffer, setBuffer] = useState('')
  const [active, setActive] = useState(false)
  const [particles, setParticles] = useState([])
  const [showMsg, setShowMsg] = useState(false)
  const SECRET = 'mulho'

  const trigger = useCallback(() => {
    setActive(true)
    setShowMsg(true)
    setParticles(createParticles(100))
    setTimeout(() => {
      setActive(false)
      setShowMsg(false)
      setParticles([])
    }, 4000)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return
      const newBuf = (buffer + e.key).slice(-SECRET.length)
      setBuffer(newBuf)
      if (newBuf === SECRET) trigger()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [buffer, trigger])

  if (!active) return null

  return (
    <div className="fixed inset-0 z-[99990] pointer-events-none overflow-hidden">
      {/* Confettis */}
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.shape === 'rect' ? p.size * 0.5 : p.size,
            background: p.color,
            borderRadius: p.shape === 'circle' ? '50%' : '2px',
            transform: `rotate(${p.rotation}deg)`,
            animation: `confettiFall ${2 + Math.random() * 2}s ease-in forwards`,
            animationDelay: `${Math.random() * 0.5}s`,
          }}
        />
      ))}

      {/* Message central */}
      {showMsg && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ pointerEvents: 'none' }}
        >
          <div
            className="text-center px-10 py-8 rounded-3xl"
            style={{
              background: 'linear-gradient(145deg, rgba(18,18,20,0.97), rgba(9,9,11,0.98))',
              border: '1px solid rgba(var(--accent-rgb), 0.4)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 60px rgba(var(--accent-rgb), 0.2)',
              animation: 'popIn 0.4s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          >
            <div className="text-5xl mb-3">🎉</div>
            <p className="text-2xl font-bold text-white mb-2">Easter Egg débloqué !</p>
            <p className="text-sm text-gray-400 mb-1">Tu as tapé <span style={{ color: 'var(--accent-400)' }}>MULHO</span> — bien joué 👀</p>
            <p className="text-xs text-gray-500 mt-3">Bienvenue dans le portfolio de Mulho MABIALA</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
        @keyframes popIn {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default EasterEgg
