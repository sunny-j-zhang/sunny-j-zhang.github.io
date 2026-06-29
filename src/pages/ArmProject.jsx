import { Link } from 'react-router-dom'

const phases = [
  { title: 'Kinematics + DH parameters', window: 'May 2026', status: 'active', note: 'Workspace definition, torque budget, motor selection' },
  { title: 'Cycloidal gearbox CAD', window: 'Jun 2026', status: 'active', note: 'Parametric epitrochoid in SolidWorks' },
  { title: 'Full platform CAD', window: 'Jul 2026', status: 'active', note: '2-arm assembly, wire routing, gripper mount' },
  { title: 'Yocto + software architecture', window: 'Aug 2026', status: 'upcoming', note: 'RPi image booting, C++ daemon design' },
  { title: 'OS course + PREEMPT_RT + STM32', window: 'Sep–Oct 2026', status: 'upcoming', note: 'Kernel tuning, single-axis closed-loop control' },
  { title: '3-joint integration demo', window: 'Nov 2026', status: 'upcoming', note: 'RPi → STM32 SPI, demo video' },
  { title: 'Full 6-DOF control', window: 'Dec 2026–Feb 2027', status: 'upcoming', note: 'Trajectory planning, basic IK' },
  { title: 'WebSocket + portfolio integration', window: 'Mar–Apr 2027', status: 'upcoming', note: 'Live telemetry on this site' },
  { title: 'Tuning + documentation', window: 'May–Aug 2027', status: 'upcoming', note: 'System ID, final writeups' },
]

const statusColor = { active: '#C47A3A', done: '#7EC98F', upcoming: '#4A7C59' }
const statusLabel = { active: '● active', done: '✓ done', upcoming: '○ upcoming' }
const postModules = import.meta.glob('../posts/arm/*.{md,mdx}', { eager: true })

const posts = Object.entries(postModules)
  .map(([path, mod]) => ({
    slug: path.split('/').pop().replace(/\.mdx?$/, ''),
    date: path.split('/').pop().slice(0, 10),
    Component: mod.default,
  }))
  .sort((a, b) => b.date.localeCompare(a.date)) // newest first

function DevLog() {
  if (posts.length === 0) {
    return (
      <div style={{
        border: '1px dashed rgba(74,124,89,0.3)',
        borderRadius: 4, padding: '2.5rem', textAlign: 'center'
      }}>
        <p className="mono" style={{ fontSize: '0.75rem', color: 'var(--moss)', marginBottom: '0.5rem' }}>
          first entry coming soon
        </p>
        <p style={{ color: 'var(--parchment-dim)', fontSize: '0.88rem' }}>
          Build log entries will appear here as the project progresses.
        </p>
      </div>
    )
  }

  return (
    <div>
      {posts.map(({ slug, date, Component }) => (
        <article key={slug} style={{
          borderLeft: '1px solid rgba(74,124,89,0.2)',
          paddingLeft: '1.5rem', marginBottom: '3.5rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid rgba(74,124,89,0.08)'
        }}>
          <p className="mono" style={{ fontSize: '0.72rem', color: 'var(--moss)', marginBottom: '1.25rem' }}>
            {date}
          </p>
          <Component />
        </article>
      ))}
    </div>
  )
}

export default function ArmProject() {
  return (
    <div>
      <div className="section" style={{ paddingTop: '8rem' }}>

        {/* Breadcrumb */}
        <p className="mono" style={{ fontSize: '0.72rem', color: 'var(--moss)', marginBottom: '1.5rem' }}>
          <Link to="/projects" style={{ color: 'var(--moss)' }}>projects</Link>
          {' / '}
          <span style={{ color: 'var(--parchment-dim)' }}>6-dof manipulator</span>
        </p>

        <p className="section-label fade-up">2026 - · ongoing</p>
        <h1 className="fade-up-2" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          marginBottom: '1rem'
        }}>
          6-DOF tabletop manipulator
        </h1>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {['C++', 'Yocto', 'PREEMPT_RT', 'SolidWorks', 'STM32', 'Cycloidal', 'Robotics'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <p className="fade-up-3" style={{
          color: 'var(--parchment-dim)', maxWidth: '560px',
          fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '4rem'
        }}>
          Two-arm tabletop pick-and-place platform built from scratch.
          Custom cycloidal gearboxes, a PREEMPT_RT Yocto Linux image on
          Raspberry Pi 4, and a C++ control daemon communicating with an
          STM32 servo layer over SPI. Documented in full from kinematics
          to kernel.
        </p>

        {/* Spec table */}
        <div style={{ marginBottom: '4rem' }}>
          <p className="section-label">specifications</p>
          <div className="card" style={{ maxWidth: '560px' }}>
            {[
              ['Arms', '2 × 6-DOF on shared platform'],
              ['Reach per arm', '350 mm'],
              ['Payload', '~250 g'],
              ['End effector', 'Two-finger gripper (swappable)'],
              ['Gearbox', 'Cycloidal — parametric, 3D printed'],
              ['Motors', 'Brushless gimbal + FOC drivers'],
              ['Encoders', 'AS5048A (SPI, 14-bit)'],
              ['SBC', 'Raspberry Pi 4'],
              ['OS', 'Yocto Linux + PREEMPT_RT kernel'],
              ['MCU', 'STM32F446RE Nucleo'],
              ['Control language', 'C++'],
            ].map(([k, v]) => (
              <div key={k} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '0.6rem 0',
                borderBottom: '1px solid rgba(74,124,89,0.12)',
                fontSize: '0.88rem'
              }}>
                <span className="mono" style={{ color: 'var(--moss)', fontSize: '0.75rem' }}>{k}</span>
                <span style={{ color: 'var(--parchment-dim)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Phase timeline */}
        <div style={{ marginBottom: '4rem' }}>
          <p className="section-label">build phases</p>
          <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
            <div style={{
              position: 'absolute', left: 0, top: 8, bottom: 8,
              width: 1, background: 'rgba(74,124,89,0.2)'
            }} />
            {phases.map((ph, i) => (
              <div key={i} style={{
                position: 'relative', marginBottom: '1.75rem', paddingLeft: '1rem'
              }}>
                <div style={{
                  position: 'absolute', left: -1.5, top: 6,
                  width: 7, height: 7, borderRadius: '50%',
                  background: statusColor[ph.status],
                  boxShadow: ph.status === 'active' ? `0 0 8px ${statusColor[ph.status]}` : 'none',
                  transform: 'translateX(-50%)'
                }} />
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--parchment)' }}>
                    {ph.title}
                  </h3>
                  <span className="mono" style={{ fontSize: '0.65rem', color: statusColor[ph.status] }}>
                    {statusLabel[ph.status]}
                  </span>
                </div>
                <p className="mono" style={{ fontSize: '0.7rem', color: 'var(--moss)', marginBottom: '0.25rem' }}>
                  {ph.window}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--parchment-dim)' }}>{ph.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Devlog placeholder */}
        <div>
          <p className="section-label">devlog</p>
          <DevLog />
        </div>

      </div>
    </div>
  )
}
