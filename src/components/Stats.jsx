import React, { useState, useEffect, useRef } from 'react'
import { FaProjectDiagram, FaBriefcase, FaThumbsUp, FaUsers } from 'react-icons/fa'

const useCountUp = (target, duration = 1800, start = false) => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    const numeric = parseFloat(target)
    if (isNaN(numeric)) { setValue(target); return }
    const suffix = target.toString().replace(/[\d.]/g, '')
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * numeric) + suffix)
      if (progress < 1) requestAnimationFrame(step)
      else setValue(target)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return value
}

const StatCard = ({ stat, index, visible }) => {
  const count = useCountUp(stat.number, 1800, visible)
  return (
    <div
      className="group relative bg-zinc-900/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease ${index * 150}ms, transform 0.6s ease ${index * 150}ms, box-shadow 0.5s, border-color 0.5s`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

      {/* Icône */}
      <div className="relative mb-4">
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
          <div className="text-white">{stat.icon}</div>
        </div>
      </div>

      {/* Nombre animé */}
      <div className="relative mb-2">
        <h3 className={`text-3xl sm:text-4xl font-bold bg-gradient-to-br ${stat.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform duration-300 inline-block`}>
          {count}
        </h3>
      </div>

      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{stat.label}</p>

      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-xl`} />
    </div>
  )
}

const Stats = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: <FaProjectDiagram className="w-7 h-7" />, number: '12+', label: 'Projets d\'excellence', color: 'from-pink-500 to-rose-500' },
    { icon: <FaBriefcase className="w-7 h-7" />, number: '3+', label: 'Années d\'expertise', color: 'from-pink-400 to-pink-600' },
    { icon: <FaThumbsUp className="w-7 h-7" />, number: '95%', label: 'Satisfaction client', color: 'from-pink-500 to-rose-400' },
    { icon: <FaUsers className="w-7 h-7" />, number: '4', label: 'Collaborateurs', color: 'from-rose-500 to-pink-500' },
  ]

  return (
    <section ref={sectionRef} className="relative w-full py-20 px-8 sm:px-12 lg:px-16 xl:px-20 bg-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-600/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
