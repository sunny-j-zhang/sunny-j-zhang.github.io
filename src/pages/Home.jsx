import { Link } from 'react-router-dom'

function LeafSVG() {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" fill="none"
      aria-hidden="true"
      style={{ position: 'absolute', top: '10%', right: '5%', opacity: 0.07, pointerEvents: 'none' }}>
      <path
        d="M110 10 C60 10, 10 60, 10 110 C10 160, 60 210, 110 210
           C160 210, 210 160, 210 110 C210 60, 160 10, 110 10Z"
        fill="#7EC98F"
      />
      <path d="M110 10 L110 210" stroke="#4A7C59" strokeWidth="1.5" />
      <path d="M110 50 Q70 80, 40 110" stroke="#4A7C59" strokeWidth="1" opacity="0.6" />
      <path d="M110 50 Q150 80, 180 110" stroke="#4A7C59" strokeWidth="1" opacity="0.6" />
      <path d="M110 90 Q75 105, 55 130" stroke="#4A7C59" strokeWidth="1" opacity="0.5" />
      <path d="M110 90 Q145 105, 165 130" stroke="#4A7C59" strokeWidth="1" opacity="0.5" />
      <path d="M110 130 Q85 140, 70 165" stroke="#4A7C59" strokeWidth="1" opacity="0.4" />
      <path d="M110 130 Q135 140, 150 165" stroke="#4A7C59" strokeWidth="1" opacity="0.4" />
    </svg>
  )
}

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Hero */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', position: 'relative', overflow: 'hidden'
      }}>
        <LeafSVG />
        <div className="section" style={{ paddingTop: '8rem' }}>
          <p className="section-label fade-up">mechanical · software · systems</p>
          <h1 className="fade-up-2" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 700,
            lineHeight: 1.08,
            color: 'var(--parchment)',
            marginBottom: '1.5rem',
            maxWidth: '700px'
          }}>
            Building cutting edge <em style={{ color: 'var(--canopy)'}}>end to end systems</em> for
            <em style={{ color: 'var(--canopy)'}}> tech</em> and <em style={{ color: 'var(--canopy)'}}>healthcare.</em>
          </h1>
          <p className="fade-up-3" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'var(--parchment-dim)',
            maxWidth: '480px',
            marginBottom: '2.5rem',
            lineHeight: 1.75
          }}>
            
          </p>
          <div className="fade-up-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/projects" className="btn btn-primary">View projects</Link>
            <Link to="/contact" className="btn btn-outline">Get in touch</Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: '2.5rem', left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
          color: 'var(--moss)', letterSpacing: '0.1em',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px'
        }}>
          <span>scroll</span>
          <svg width="1" height="28" viewBox="0 0 1 28">
            <line x1="0.5" y1="0" x2="0.5" y2="28" stroke="#4A7C59" strokeWidth="1"
              strokeDasharray="3 3" />
          </svg>
        </div>
      </section>

      {/* About strip */}
      <section style={{ background: 'var(--forest-mid)', borderTop: '1px solid rgba(74,124,89,0.2)', borderBottom: '1px solid rgba(74,124,89,0.2)' }}>
        <div className="section" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
          <p className="section-label">about</p>
          <p style={{ fontSize: '1.15rem', maxWidth: '600px', color: 'var(--parchment-dim)', lineHeight: 1.8 }}>
            Robotics engineer with a focus on surgical robotics and robotic manipulation.
            Currently building a custom 6-DOF tabletop manipulator — from the
            cycloidal gearboxes up through the real-time OS. Passionate about the full stack from mechanical design to embedded software.
          </p>
        </div>
      </section>

      {/* Featured project teaser */}
      <section>
        <div className="section">
          <p className="section-label">featured work</p>
          <div className="card" style={{ maxWidth: '600px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <p className="mono" style={{ fontSize: '0.75rem', color: 'var(--moss)' }}>ongoing · 2025–2026</p>
              <span className="tag">in build</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: '0.75rem', color: 'var(--parchment)' }}>
              6-DOF tabletop manipulator
            </h2>
            <p style={{ color: 'var(--parchment-dim)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Two-arm pick-and-place platform with custom cycloidal gearboxes,
              PREEMPT_RT Yocto image on RPi 4, and a C++ control daemon over
              STM32 servo layer. Documented in full.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {['C++', 'Yocto', 'PREEMPT_RT', 'SolidWorks', 'STM32', 'Cycloidal'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <Link to="/projects" className="btn btn-outline" style={{ fontSize: '0.75rem' }}>
              Read the build log →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ background: 'var(--forest-mid)', borderTop: '1px solid rgba(74,124,89,0.2)' }}>
        <div className="section" style={{
          paddingTop: '3rem', paddingBottom: '3rem',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem'
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '0.4rem' }}>
              Want to collaborate or just say hello?
            </h3>
            <p style={{ color: 'var(--parchment-dim)', fontSize: '0.9rem' }}>
              Open to interesting problems in robotics, embedded systems, and controls.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">Contact me</Link>
        </div>
      </section>
    </div>
  )
}
