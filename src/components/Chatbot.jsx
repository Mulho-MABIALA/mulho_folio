import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const BOT_RESPONSES = {
  fr: {
    greet: ['Bonjour ! Je suis l\'assistant de Mulho. Comment puis-je vous aider ?', 'Salut ! Posez-moi n\'importe quelle question sur Mulho 😊'],
    skills: 'Mulho maîtrise : React.js, Next.js, Node.js, Express.js, MongoDB, TypeScript, Tailwind CSS, PHP, SQL, Git, Docker et bien plus encore. Il est spécialisé MERN Stack.',
    projects: 'Mulho a réalisé 9+ projets :\n• ECOHUB — plateforme civic-tech (React + Node + MongoDB)\n• Zolaa — plateforme dynamique (zolaa.tech)\n• E-commerce — PHP, SQL, Tailwind\n• NBarts — galerie d\'arts (React + TypeScript)\n• Todo List, App Cinéma…\nConsultez la section Projets pour les détails !',
    contact: 'Vous pouvez contacter Mulho via :\n📧 imulhomabiala@gmail.com\n📱 WhatsApp : +242 05 553 08 52\n📞 Téléphone : +221 78 730 87 06',
    experience: 'Mulho est un développeur Full Stack Junior avec 3+ années d\'expérience. Il est actuellement en Licence 3 Génie Logiciel à l\'ISI de Dakar et certifié GoMyCode Bootcamp (MERN Stack).',
    location: 'Mulho est basé à Dakar, Sénégal, mais est ouvert au travail à distance partout dans le monde.',
    available: 'Oui ! Mulho est actuellement disponible pour des stages, missions freelance ou opportunités d\'emploi. N\'hésitez pas à le contacter !',
    education: 'Mulho suit une formation à l\'Institut Supérieur d\'Informatique (ISI) de Dakar — Licence 3 Génie Logiciel. Il est également certifié Full Stack Developer via GoMyCode Bootcamp (2025-2026).',
    languages: 'Mulho parle couramment le Français et comprend l\'Anglais technique. Il travaille en FR et EN.',
    salary: 'Pour discuter de rémunération ou de tarifs freelance, contactez directement Mulho : imulhomabiala@gmail.com',
    cv: 'Vous pouvez télécharger le CV de Mulho directement depuis la section Accueil du portfolio (bouton "Télécharger CV").',
    github: 'Mulho partage son code sur GitHub. Retrouvez ses projets en cliquant sur les icônes GitHub dans la section Projets.',
    mern: 'Mulho est spécialisé MERN Stack : MongoDB, Express.js, React.js, Node.js. Il maîtrise aussi Next.js, TypeScript, Tailwind CSS et les APIs REST.',
    default: 'Je n\'ai pas compris votre question. Essayez de me demander :\n• Ses compétences\n• Ses projets\n• Comment le contacter\n• Sa formation\n• Sa disponibilité',
  },
  en: {
    greet: ['Hello! I\'m Mulho\'s assistant. How can I help you?', 'Hi! Feel free to ask me anything about Mulho 😊'],
    skills: 'Mulho is proficient in: React.js, Next.js, Node.js, Express.js, MongoDB, TypeScript, Tailwind CSS, PHP, SQL, Git, Docker and more. Specialized in MERN Stack.',
    projects: 'Mulho built 9+ projects:\n• ECOHUB — civic-tech platform (React + Node + MongoDB)\n• Zolaa — dynamic platform (zolaa.tech)\n• E-commerce — PHP, SQL, Tailwind\n• NBarts — art gallery (React + TypeScript)\n• Todo List, Cinema App…\nCheck the Projects section for details!',
    contact: 'You can reach Mulho via:\n📧 imulhomabiala@gmail.com\n📱 WhatsApp: +242 05 553 08 52\n📞 Phone: +221 78 730 87 06',
    experience: 'Mulho is a Junior Full Stack Developer with 3+ years of experience. Currently in 3rd year Software Engineering at ISI Dakar, certified by GoMyCode Bootcamp (MERN Stack).',
    location: 'Mulho is based in Dakar, Senegal, but open to remote work anywhere in the world.',
    available: 'Yes! Mulho is currently available for internships, freelance missions or job opportunities. Don\'t hesitate to reach out!',
    education: 'Mulho studies at the Higher Institute of Information Technology (ISI) in Dakar — Bachelor 3 Software Engineering. Also certified Full Stack Developer via GoMyCode Bootcamp (2025-2026).',
    languages: 'Mulho speaks French fluently and understands technical English. He works in both FR and EN.',
    salary: 'To discuss compensation or freelance rates, contact Mulho directly: imulhomabiala@gmail.com',
    cv: 'You can download Mulho\'s CV directly from the Home section of the portfolio ("Download CV" button).',
    github: 'Mulho shares his code on GitHub. Find his projects by clicking the GitHub icons in the Projects section.',
    mern: 'Mulho specializes in MERN Stack: MongoDB, Express.js, React.js, Node.js. He also masters Next.js, TypeScript, Tailwind CSS and REST APIs.',
    default: 'I didn\'t understand your question. Try asking me:\n• His skills\n• His projects\n• How to contact him\n• His education\n• His availability',
  }
}

const QUICK_QUESTIONS = {
  fr: [
    'Ses compétences ?',
    'Ses projets',
    'Le contacter',
    'Disponible ?',
    'Sa formation',
    'Télécharger CV',
    'Stack MERN ?',
    'Où est-il basé ?',
  ],
  en: [
    'His skills?',
    'His projects',
    'Contact him',
    'Available?',
    'His education',
    'Download CV',
    'MERN Stack?',
    'Where is he?',
  ],
}

function getResponse(text, lang) {
  const lower = text.toLowerCase()
  const r = BOT_RESPONSES[lang] || BOT_RESPONSES.fr
  if (/bonjour|salut|hello|hi|hey|coucou/.test(lower)) return r.greet[Math.floor(Math.random() * r.greet.length)]
  if (/compétence|skill|technologie|maîtrise|stack|react|node|mongo|typescript|tailwind/.test(lower)) return r.skills
  if (/mern/.test(lower)) return r.mern
  if (/projet|project|réalisation|portfolio|ecohub|zolaa|nbarts/.test(lower)) return r.projects
  if (/contact|email|mail|whatsapp|téléphone|phone|joindre|reach/.test(lower)) return r.contact
  if (/expérience|experience|année|year|junior|sénior/.test(lower)) return r.experience
  if (/formation|éducation|education|étude|study|isi|gomycode|diplôme|degree/.test(lower)) return r.education
  if (/langue|language|parle|speak|français|french|english|anglais/.test(lower)) return r.languages
  if (/salaire|salary|tarif|rate|prix|price|rémunération/.test(lower)) return r.salary
  if (/cv|curriculum|résumé|resume|télécharger|download/.test(lower)) return r.cv
  if (/github|code|repo|repository/.test(lower)) return r.github
  if (/où|localisation|location|dakar|sénégal|based|basé|remote|télétravail/.test(lower)) return r.location
  if (/disponible|available|embauche|hire|opportunité|job|stage|freelance/.test(lower)) return r.available
  return r.default
}

const Chatbot = () => {
  const { language, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [showBadge, setShowBadge] = useState(true)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      const welcome = BOT_RESPONSES[language]?.greet[0] || BOT_RESPONSES.fr.greet[0]
      setMessages([{ from: 'bot', text: welcome, time: new Date() }])
      setShowBadge(false)
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
    }, 700 + Math.random() * 400)
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
      {/* Bouton flottant — bottom-6 right-6 */}
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
        {showBadge && !open && (
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
            maxHeight: '500px',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-5 py-4 flex-shrink-0"
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
            <div className="flex-1 min-w-0">
              <p className="font-bold text-white text-sm">{t.chatbot.title}</p>
              <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--accent-400)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                {t.chatbot.online}
              </p>
            </div>
            <button
              onClick={() => setMessages([])}
              className="text-gray-500 hover:text-gray-300 transition-colors text-xs"
              title="Effacer"
            >
              ↺
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ minHeight: '180px', maxHeight: '240px' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line"
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
                        animation: `botBounce 1.2s ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Questions rapides - scrollable horizontal */}
          <div className="px-4 pb-2 flex-shrink-0">
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(q)}
                  className="text-xs px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap flex-shrink-0"
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
          </div>

          {/* Input */}
          <div
            className="flex items-center gap-2 px-4 py-3 flex-shrink-0"
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
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-30 flex-shrink-0"
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
        @keyframes botBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  )
}

export default Chatbot
