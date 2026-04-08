import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import useSlideIn from '../hooks/useSlideIn'

const Blog = () => {
  const { t } = useLanguage()
  const [activeTag, setActiveTag] = useState('all')
  const titleSlide = useSlideIn({ threshold: 0.2 })

  const articles = t.blog.articles

  const allTags = ['all', ...new Set(articles.flatMap(a => a.tags))]

  const filtered = activeTag === 'all'
    ? articles
    : articles.filter(a => a.tags.includes(activeTag))

  return (
    <section
      id="blog-section"
      className="relative w-full py-24 px-8 sm:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 overflow-hidden"
    >
      {/* Fond décoratif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.05) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-[300px] h-[300px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.04) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <div className="text-center mb-16 overflow-hidden" ref={titleSlide.ref}>
          <span className="text-sm font-mono tracking-widest mb-4 block" style={{ color: 'var(--accent-400)' }}>
            {t.blog.tag}
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 transition-all duration-700 ease-out"
            style={{
              transform: titleSlide.isVisible ? 'translateX(0)' : 'translateX(-100%)',
              opacity: titleSlide.isVisible ? 1 : 0,
            }}
          >
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-transparent bg-clip-text">
              {t.blog.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">{t.blog.subtitle}</p>
        </div>

        {/* Filtres tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={activeTag === tag ? {
                background: `linear-gradient(135deg, var(--accent-500), var(--accent-y600))`,
                color: '#000',
                boxShadow: `0 6px 20px rgba(var(--accent-rgb), 0.3)`,
              } : {
                background: 'rgba(255,255,255,0.04)',
                color: '#9ca3af',
                border: '1px solid rgba(var(--accent-rgb), 0.15)',
              }}
            >
              {tag === 'all' ? t.blog.allTags : tag}
            </button>
          ))}
        </div>

        {/* Grille articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, index) => (
            <article
              key={index}
              className="group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{
                background: 'linear-gradient(145deg, rgba(24,24,27,0.8), rgba(9,9,11,0.95))',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '1px solid rgba(var(--accent-rgb), 0.3)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(var(--accent-rgb), 0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
              }}
            >
              {/* Image */}
              <div
                className="relative h-44 flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, rgba(var(--accent-rgb), 0.08), rgba(0,0,0,0.5))` }}
              >
                <div
                  className="text-6xl select-none transition-transform duration-500 group-hover:scale-110"
                >
                  {article.emoji}
                </div>
                {/* Date */}
                <span
                  className="absolute top-4 right-4 text-xs font-mono px-2.5 py-1 rounded-md"
                  style={{
                    background: 'rgba(0,0,0,0.6)',
                    color: 'var(--accent-400)',
                    border: '1px solid rgba(var(--accent-rgb), 0.2)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {article.date}
                </span>
                {/* Temps de lecture */}
                <span
                  className="absolute top-4 left-4 text-xs px-2.5 py-1 rounded-md flex items-center gap-1"
                  style={{
                    background: 'rgba(0,0,0,0.6)',
                    color: '#9ca3af',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {article.readTime}
                </span>
              </div>

              {/* Contenu */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {article.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2 py-0.5 rounded-md"
                      style={{
                        background: 'rgba(var(--accent-rgb), 0.08)',
                        color: 'var(--accent-400)',
                        border: '1px solid rgba(var(--accent-rgb), 0.15)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-5">
                  {article.excerpt}
                </p>

                <div
                  className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                  style={{ color: 'var(--accent-400)' }}
                >
                  {t.blog.readMore}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
