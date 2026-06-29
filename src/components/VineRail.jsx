import { useEffect, useRef } from 'react'

export default function VineRail() {
  const pathRef = useRef(null)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    const len = path.getTotalLength()
    path.style.strokeDasharray = len
    path.style.strokeDashoffset = len

    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      const progress = total > 0 ? scrolled / total : 0
      path.style.strokeDashoffset = len * (1 - Math.min(progress * 1.4, 1))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <svg
      viewBox="0 0 40 900"
      preserveAspectRatio="none"
      style={{ width: '100%', height: '100%', display: 'block' }}
      aria-hidden="true"
    >
      <path
        d="M20 0 C10 60, 30 120, 20 180 C10 240, 28 300, 18 360
           C10 420, 30 480, 20 540 C12 600, 28 660, 20 720
           C10 780, 28 840, 20 900"
        fill="none"
        stroke="rgba(74,124,89,0.12)"
        strokeWidth="1.5"
      />
      <path
        ref={pathRef}
        d="M20 0 C10 60, 30 120, 20 180 C10 240, 28 300, 18 360
           C10 420, 30 480, 20 540 C12 600, 28 660, 20 720
           C10 780, 28 840, 20 900"
        fill="none"
        stroke="#4A7C59"
        strokeWidth="1.5"
        style={{ transition: 'stroke-dashoffset 0.05s linear' }}
      />
      {[160, 320, 490, 650, 810].map((y, i) => (
        <g key={i} transform={`translate(20, ${y})`} opacity="0.55">
          <ellipse
            cx={i % 2 === 0 ? 8 : -8} cy="0" rx="6" ry="3"
            fill="none" stroke="#4A7C59" strokeWidth="1"
            transform={`rotate(${i % 2 === 0 ? 30 : -30})`}
          />
        </g>
      ))}
    </svg>
  )
}
