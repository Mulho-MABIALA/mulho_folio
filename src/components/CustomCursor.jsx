import React, { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const rafId = useRef(null)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Hide default cursor globally
    document.documentElement.style.cursor = 'none'

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
    }

    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    const onHoverStart = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select')) {
        setHovering(true)
      }
    }
    const onHoverEnd = () => setHovering(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseover', onHoverStart)
    document.addEventListener('mouseout', onHoverEnd)

    // Trailing ring animation
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`
        ringRef.current.style.top = `${ring.current.y}px`
      }
      rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)

    return () => {
      document.documentElement.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover', onHoverStart)
      document.removeEventListener('mouseout', onHoverEnd)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      {/* Point central — suit exactement la souris */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: clicking ? '6px' : '8px',
          height: clicking ? '6px' : '8px',
          borderRadius: '50%',
          background: 'var(--accent-400, #f59e0b)',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.15s, height 0.15s, opacity 0.2s',
          opacity: visible ? 1 : 0,
          mixBlendMode: 'normal',
        }}
      />

      {/* Anneau trailing */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: hovering ? '52px' : clicking ? '28px' : '36px',
          height: hovering ? '52px' : clicking ? '28px' : '36px',
          borderRadius: '50%',
          border: `2px solid rgba(var(--accent-rgb, 245,158,11), ${hovering ? 0.7 : 0.4})`,
          background: hovering ? 'rgba(var(--accent-rgb, 245,158,11), 0.08)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s, background 0.25s, opacity 0.2s',
          opacity: visible ? 1 : 0,
          boxShadow: hovering ? '0 0 20px rgba(var(--accent-rgb, 245,158,11), 0.3)' : '0 0 10px rgba(var(--accent-rgb, 245,158,11), 0.15)',
        }}
      />
    </>
  )
}

export default CustomCursor
