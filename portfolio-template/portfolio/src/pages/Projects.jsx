import { Link } from 'react-router-dom'

const projects = [
  {
    id: 'arm',
    title: '6-DOF tabletop manipulator',
    period: '2025 – 2026',
    status: 'in build',
    statusColor: '#C47A3A',
    description:
      'Two-arm pick-and-place platform built from scratch. Custom cycloidal gearboxes, PREEMPT_RT Yocto Linux on RPi 4, C++ control daemon, STM32 servo layer. Full build log documented publicly.',
    tags: ['C++', 'Yocto', 'PREEMPT_RT', 'SolidWorks', 'STM32', 'Cycloidal', 'Robotics'],
    link: '/projects/arm',
  },
  {
    id: 'portfolio',
    title: 'This portfolio',
    period: '2025',
    status: 'live',
    statusColor: '#7EC98F',
    description:
      'Solarpunk-themed engineering portfolio built with Vite + React. MDX devlog system, Rust/WASM controls demo, hosted on GitHub Pages. Designed to grow alongside the projects it documents.',
    tags: ['React', 'Rust', 'WASM', 'MDX', 'GitHub Pages'],
    link: '#',
  },
]

function StatusDot({ color }) {
  return (
    <span style={{
      display: 'inline-block', width: 7, height: 7,
      borderRadius: '50%', background: color,
      marginRight: 6, verticalAlign: 'middle',
      boxShadow: `0 0 6px ${color}`
    }} />
  )
}

export default function Projects() {
  return (
    <div>
      <div className="section" style={{ paddingTop: '8rem' }}>
        <p className="section-label fade-up">work</p>
        <h1 className="fade-up-2" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          marginBottom: '0.75rem'
        }}>
          Projects
        </h1>
        <p className="fade-up-3" style={{
          color: 'var(--parchment-dim)', maxWidth: '480px',
          fontSize: '0.95rem', marginBottom: '3.5rem', lineHeight: 1.75
        }}>
          A mix of long-running builds and focused experiments. Each one
          documented from first principles.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {projects.map((p, i) => (
            <article key={p.id} className={`card fade-up-${i + 2}`}
              style={{ borderLeft: `2px solid ${p.statusColor}33` }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem'
              }}>
                <p className="mono" style={{ fontSize: '0.72rem', color: 'var(--moss)' }}>
                  {p.period}
                </p>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                  color: p.statusColor, letterSpacing: '0.05em'
                }}>
                  <StatusDot color={p.statusColor} />{p.status}
                </span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.45rem', marginBottom: '0.75rem',
                color: 'var(--parchment)'
              }}>
                {p.title}
              </h2>
              <p style={{
                color: 'var(--parchment-dim)', fontSize: '0.92rem',
                marginBottom: '1.25rem', lineHeight: 1.75
              }}>
                {p.description}
              </p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              {p.link !== '#' && (
                <Link to={p.link} className="btn btn-outline" style={{ fontSize: '0.75rem' }}>
                  Build log + docs →
                </Link>
              )}
            </article>
          ))}
        </div>

        {/* Controls demo placeholder */}
        <div style={{ marginTop: '4rem' }}>
          <div className="leaf-divider">✦</div>
          <div style={{
            background: 'var(--forest-mid)',
            border: '1px dashed rgba(74,124,89,0.35)',
            borderRadius: 4, padding: '2.5rem',
            textAlign: 'center', marginTop: '2rem'
          }}>
            <p className="mono" style={{ fontSize: '0.75rem', color: 'var(--moss)', marginBottom: '0.75rem' }}>
              coming soon
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
              Live controls demo
            </h3>
            <p style={{ color: 'var(--parchment-dim)', fontSize: '0.88rem' }}>
              Interactive Rust/WASM PID visualiser — tune gains, watch the system respond in real time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
