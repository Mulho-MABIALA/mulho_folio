import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const BOT_RESPONSES = {
  fr: {
    greet: ['Bonjour ! Je suis l\'assistant de Mulho. Comment puis-je vous aider ?', 'Salut ! Je suis là pour répondre à vos questions sur Mulho.'],
    skills: 'Mulho maîtrise React.js, Node.js, Express.js, MongoDB, TypeScript, Tailwind CSS, PHP, SQL et bien plus encore.',
    projects: 'Mulho a réalisé plus de 9 projets : ECOHUB, Zolaa, une plateforme e-commerce, NBarts, une app cinéma, et d\'autres. Consultez la section Projets pour tous les détails !',
    contact: 'Vous pouvez contacter Mulho par email : imulhomabiala@gmail.com ou via WhatsApp : +242 05 553 08 52',
    experience: 'Mulho est un développeur Full Stack Junior avec 3+ années d\'expérience, actuellement en Licence 3 Génie Logiciel à l\'ISI de Dakar.',
    location: 'Mulho est basé à Dakar, Sénégal.',
    available: 'Oui, Mulho est disponible pour des opportunités de travail ou de collaboration !',
    default: 'Je ne suis pas sûr de comprendre. Vous pouvez me poser des questions sur les compétences, les projets, ou comment contacter Mulho.',
  },
  en: {
    greet: ['Hello! I\'m Mulho\'s assistant. How can I help you?', 'Hi there! I\'m here to answer your questions about Mulho.'],
    skills: 'Mulho is proficient in React.js, Node.js, Express.js, MongoDB, TypeScript, Tailwind CSS, PHP, SQL and much more.',
    projects: 'Mulho has built 9+ projects: ECOHUB, Zolaa, an e-commerce platform, NBarts, a cinema app, and more. Check the Projects section for full details!',
    contact: 'You can reach Mulho via email: imulhomabiala@gmail.com or WhatsApp: +242 05 553 08 52',
    experience: 'Mulho is a Junior Full Stack Developer with 3+ years of experience, currently in his 3rd year of Software Engineering at ISI Dakar.',
    location: 'Mulho is based in Dakar, Senegal.',
    available: 'Yes, Mulho is open to work opportunities and collaborations!',
    default: 'I\'m not sure I understand. You can ask me about Mulho\'s skills, projects, or how to get in touch.',
  }
}

const QUICK_QUESTIONS = {
  fr: ['Quelles sont ses compétences ?', 'Ses projets', 'Comment le contacter ?', 'Disponible ?'],
  en: ['What are his skills?', 'His projects', 'How to contact?', 'Available?'],
}

function getResponse(text, lang) {
  const lower = text.toLowerCase()
  const r = BOT_RESPONSES[lang] || BOT_RESPONSES.fr
  if (/bonjour|salut|hello|hi|hey/.test(lower)) return r.greet[Math.floor(Math.random() * r.greet.length)]
  if (/compétence|skill|technologie|maîtrise|stack/.test(lower)) return r.skills
  if (/projet|project|réalisation|portfolio/.test(lower)) return r.projects
  if (/contact|email|mail|whatsapp|téléphone|phone/.test(lower)) return r.contact
  if (/expérience|experience|année|year|junior/.test(lower)) return r.experience
  if (/où|localisation|location|dakar|sénégal|based/.test(lower)) return r.location
  if (/disponible|available|embauche|hire|opportunité/.test(lower)) return r.available
  return r.default
}

const Chatbot = () => {
  const { language, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Message de bienvenue à l'ouverture
  useEffect(() => {
    if (open && messages.length === 0) {
      const welcome = BOT_RESPONSES[language]?.greet[0] || BOT_RESPONSES.fr.greet[0]
      setMessages([{ from: 'bot', text: welcome, time: new Date() }])
    }
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const sendMessage = (text) => {
    const userText = text || input.trim()
    if (!userText) return
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: userText, time: new Date() }])
    setTyping(true)
    setTimeout(() => {
      const response = getResponse(userText, language)
      setTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text: response, time: new Date() }])
    }, 800 + Math.random() * 400)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const quickQuestions = QUICK_QUESTIONS[language] || QUICK_QUESTIONS.fr

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: open
            ? 'rgba(30,30,30,0.95)'
            : `linear-gradient(135deg, var(--accent-500), var(--accent-y600))`,
          boxShadow: `0 8px 30px rgba(var(--accent-rgb), 0.45)`,
          border: open ? '1px solid rgba(var(--accent-rgb), 0.3)' : 'none',
        }}
        aria-label="Ouvrir le chatbot"
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        )}
        {/* Badge non lu */}
        {!open && (
          <span
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center"
            style={{ background: '#ef4444', color: '#fff' }}
          >
            1
          </span>
        )}
      </button>

      {/* Fenêtre chat */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: 'linear-gradient(145deg, rgba(18,18,20,0.98), rgba(9,9,11,0.99))',
            border: '1px solid rgba(var(--accent-rgb), 0.2)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(var(--accent-rgb), 0.08)',
            maxHeight: '520px',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-5 py-4"
            style={{
              background: `linear-gradient(135deg, rgba(var(--accent-rgb), 0.12), rgba(var(--accent-rgb), 0.04))`,
              borderBottom: '1px solid rgba(var(--accent-rgb), 0.1)',
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
              style={{ background: `linear-gradient(135deg, var(--accent-500), var(--accent-y600))`, color: '#000' }}
            >
              M
            </div>
            <div>
              <p className="font-bold text-white text-sm">{t.chatbot.title}</p>
              <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--accent-400)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                {t.chatbot.online}
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ maxHeight: '300px' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
                  style={msg.from === 'user' ? {
                    background: `linear-gradient(135deg, var(--accent-500), var(--accent-y600))`,
                    color: '#000',
                    borderBottomRightRadius: '4px',
                  } : {
                    background: 'rgba(255,255,255,0.06)',
                    color: '#e5e7eb',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderBottomLeftRadius: '4px',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div
                  className="px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {[0, 1, 2].map(i => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: 'var(--accent-400)',
                        animation: `bounce 1.2s ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Questions rapides */}
          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => sendMessage(q)}
                className="text-xs px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(var(--accent-rgb), 0.08)',
                  color: 'var(--accent-400)',
                  border: '1px solid rgba(var(--accent-rgb), 0.2)',
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder={t.chatbot.placeholder}
              className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim()}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-30"
              style={{
                background: input.trim()
                  ? `linear-gradient(135deg, var(--accent-500), var(--accent-y600))`
                  : 'rgba(255,255,255,0.06)',
                color: input.trim() ? '#000' : '#6b7280',
              }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  )
}

export default Chatbot
