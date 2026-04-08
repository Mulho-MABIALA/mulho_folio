import React, { useState, useEffect, useRef } from 'react'

const COMMANDS = {
  help: () => `Commandes disponibles :
  help        — Afficher cette aide
  about       — Qui est Mulho ?
  skills      — Compétences techniques
  projects    — Liste des projets
  contact     — Informations de contact
  github      — Lien GitHub
  clear       — Effacer le terminal
  exit        — Fermer le terminal`,

  about: () => `Mulho MABIALA — Full Stack Developer Junior
  Basé à Dakar, Sénégal
  Licence 3 Génie Logiciel — ISI
  Certifié GoMyCode Bootcamp (MERN Stack)
  Passionné de code, de design et d'innovation.`,

  skills: () => `Stack technique :
  Frontend  → React.js, Next.js, TypeScript, Tailwind CSS, Vue.js
  Backend   → Node.js, Express.js, PHP
  Database  → MongoDB, MySQL, PostgreSQL
  Tools     → Git, Docker, Vercel, Render, MongoDB Atlas`,

  projects: () => `Projets récents :
  01 ECOHUB          → https://ecohub-signalement.netlify.app
  02 Zolaa           → https://zolaa.tech
  03 NBarts          → https://nbarts.net
  04 App Cinéma      → https://project-hooks-brown.vercel.app
  05 Todo List       → https://todolist2-chi.vercel.app
  ── Voir tous les projets dans la section #Projets`,

  contact: () => `Informations de contact :
  Email     → imulhomabiala@gmail.com
  WhatsApp  → +242 05 553 08 52
  Tél       → +221 78 730 87 06
  Localisation → Dakar, Sénégal`,

  github: () => `GitHub : https://github.com
  ── Retrouvez le code source des projets sur GitHub.`,

  whoami: () => `mulho@portfolio ~ développeur full stack`,
  date: () => new Date().toLocaleString('fr-FR'),
  pwd: () => `/home/mulho/portfolio`,
  ls: () => `Hero  About  Skills  Education  Projects  Testimonials  Blog  Contact`,
}

const Terminal = ({ onClose }) => {
  const [lines, setLines] = useState([
    { type: 'system', text: 'Portfolio Terminal v1.0.0 — Mulho MABIALA' },
    { type: 'system', text: 'Tapez "help" pour voir les commandes disponibles.' },
    { type: 'system', text: 'Ctrl+~ ou "exit" pour fermer.' },
    { type: 'divider' },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const run = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    if (!trimmed) return

    setHistory(h => [trimmed, ...h])
    setHistIdx(-1)
    setLines(prev => [...prev, { type: 'input', text: `mulho@portfolio:~$ ${cmd}` }])

    if (trimmed === 'clear') { setLines([]); return }
    if (trimmed === 'exit') { onClose(); return }

    const fn = COMMANDS[trimmed]
    const output = fn ? fn() : `commande non trouvée : ${trimmed}\nTapez "help" pour voir les commandes.`
    setLines(prev => [...prev, { type: 'output', text: output }])
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') { run(input); setInput(''); return }
    if (e.key === 'ArrowUp') {
      const idx = Math.min(histIdx + 1, history.length - 1)
      setHistIdx(idx)
      setInput(history[idx] || '')
      return
    }
    if (e.key === 'ArrowDown') {
      const idx = Math.max(histIdx - 1, -1)
      setHistIdx(idx)
      setInput(idx === -1 ? '' : history[idx])
    }
  }

  return (
    <div
      className="fixed inset-0 z-[99995] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
    >
      <div
        className="w-full max-w-2xl rounded-2xl overflow-hidden flex flex-col"
        style={{
          background: '#0d0d0f',
          border: '1px solid rgba(var(--accent-rgb), 0.3)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.9), 0 0 60px rgba(var(--accent-rgb), 0.1)',
          maxHeight: '75vh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barre titre */}
        <div
          className="flex items-center justify-between px-5 py-3 flex-shrink-0"
          style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex gap-2">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs font-mono" style={{ color: 'var(--accent-400)' }}>
            mulho@portfolio:~
          </span>
          <span className="text-xs text-gray-600">Ctrl+~ pour fermer</span>
        </div>

        {/* Contenu */}
        <div className="flex-1 overflow-y-auto p-5 font-mono text-sm space-y-1" style={{ minHeight: '300px' }}>
          {lines.map((line, i) => (
            <div key={i}>
              {line.type === 'divider' && <div className="border-t border-white/5 my-2" />}
              {line.type === 'system' && (
                <p style={{ color: 'var(--accent-400)' }}>{line.text}</p>
              )}
              {line.type === 'input' && (
                <p className="text-white">{line.text}</p>
              )}
              {line.type === 'output' && (
                <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed pl-4 border-l-2 my-1"
                  style={{ borderColor: 'rgba(var(--accent-rgb), 0.3)' }}>
                  {line.text}
                </pre>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div
          className="flex items-center gap-3 px-5 py-3 flex-shrink-0"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <span style={{ color: 'var(--accent-400)' }} className="font-mono text-sm whitespace-nowrap">
            mulho@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            className="flex-1 bg-transparent font-mono text-sm text-white outline-none caret-amber-400"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  )
}

const TerminalManager = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault()
        setOpen(o => !o)
      }
      if (e.key === 'Escape' && open) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null
  return <Terminal onClose={() => setOpen(false)} />
}

export default TerminalManager
