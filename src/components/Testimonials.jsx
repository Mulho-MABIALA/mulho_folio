import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import useSlideIn from '../hooks/useSlideIn'

const Testimonials = () => {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const titleSlide = useSlideIn({ threshold: 0.2 })

  const testimonials = t.testimonials.list

  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length)

  const active = testimonials[activeIndex]

  return (
    <section
      id="testimonials-section"
      className="relative w-full py-24 px-8 sm:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      {/* Fond décoratif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.05) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* En-tête */}
        <div className="text-center mb-16 overflow-hidden" ref={titleSlide.ref}>
          <span className="text-sm font-mono tracking-widest mb-4 block" style={{ color: 'var(--accent-400)' }}>
            {t.testimonials.tag}
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 transition-all duration-700 ease-out"
            style={{
              transform: titleSlide.isVisible ? 'translateX(0)' : 'translateX(-100%)',
              opacity: titleSlide.isVisible ? 1 : 0,
            }}
          >
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-transparent bg-clip-text">
              {t.testimonials.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
        </div>

        {/* Carte témoignage */}
        <div
          className="relative rounded-2xl p-8 sm:p-12 transition-all duration-500 glass-panel"
          style={{
            background: 'linear-gradient(145deg, rgba(24,24,27,0.9), rgba(9,9,11,0.98))',
            border: '1px solid rgba(var(--accent-rgb), 0.15)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
          }}
        >
          {/* Guillemets décoratifs */}
          <div
            className="absolute top-6 left-8 text-8xl font-serif leading-none select-none"
            style={{ color: 'rgba(var(--accent-rgb), 0.12)' }}
          >
            "
          </div>

          {/* Étoiles */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5"
                fill={i < active.rating ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 20 20"
                style={{ color: 'var(--accent-400)' }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Texte */}
          <p className="text-gray-200 text-lg leading-relaxed mb-8 relative z-10">
            "{active.text}"
          </p>

          {/* Auteur */}
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, var(--accent-500), var(--accent-y600))`,
                color: '#000',
              }}
            >
              {active.name.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-white">{active.name}</p>
              <p className="text-sm" style={{ color: 'var(--accent-400)' }}>{active.role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            {/* Points */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIndex ? '24px' : '8px',
                    height: '8px',
                    background: i === activeIndex ? 'var(--accent-400)' : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>

            {/* Flèches */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, var(--accent-500), var(--accent-y600))`,
                  color: '#000',
                }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
