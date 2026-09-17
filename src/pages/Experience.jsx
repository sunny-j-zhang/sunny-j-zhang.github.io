import { Link } from 'react-router-dom'

const experience = [
  {
    period: '[ Sept 2023 ] – [ Sept 2025 ], [Sept 2026 - Present]',
    role: '[ Student Researcher ]',
    org: '[ Center for Image Guided Innoation and Therapeutic Intervention (CIGITI), SickKids Hospital ]',
    location: '[ Toronto, ON ]',
    current: true,
    bullets: [
      'Currently completing thesis on friction modelling and adaptive control of cable driven tools',
      'Led the research and development of a novel mm-scale elbowed and wristed surgical tool and preliminary prototypes of a novel surgical system specialized for minimally invasive trans-oral robotic surgery, accepted for ICRA 2026',
      'Designed high fidelity CAD models and prototypes of 12 iterations of a cable driven surgical tool in Solidworks, characterized and validated final iterations in simulation and with physical prototypes',
      'Developed a high-fidelity stereoscopic 3D simulation in Unity with custom C# controllers to communicate via ROS',
      'Developed Python/C++ control scripts for teleoperation of simulated and real elbowed and wristed tools using DVRK MTMs through a custom inverse kinematic solver',
    ],
    tags: ['[Robotics Controls]', '[CAD]', '[ C++ ]', '[ Robotic Simulation ]'],
  },
  {
    period: '[ Sept 2025 ] – [ Sept 2026 ]',
    role: '[ Vision Team Engineering Student ]',
    org: '[ Martinrea International Inc. ]',
    location: '[ Toronto, ON ]',
    current: false,
    bullets: [
      'Created and led project developing vision guided industrial robotic system for automotive manufacturing automation.',
      'Built a custom universal C++ control library for industrial robots for control over EthernetIP including Python guidance for vision guidance integration',
      'Developed a custom PCB generalizing communications from raw PLC input/output to USB protocol to support end-of-life manufacturing system integration with computer vision systems, significantly reducing adoption costs',
      'Developed and integrated a 7 camera autonomous vision system for inspection of submillimeter defects of over 800 parts per hour per assembly line'
    ],
    tags: ['[ Computer Vision ]', '[ C++ ]', '[ Python ]'],
  },
  {
    period: '[ May 2025 ] – [ Sept 2025 ]',
    role: '[ Robotics and Controls Intern ]',
    org: '[ Moon Surgical ]',
    location: '[ San Carlos, CA ]',
    current: false,
    bullets: [
      'Built robotic simulation features in C++ key to pre-release testing of features for the Maestro',
      'Conducted research and development of cutting-edge force detection and disturbance rejection algorithms to improve surgeon interaction with the Maestro',
    ],
    tags: ['[ C++ ]', '[ Robotic Simulation ]'],
  },
]

const education = [
  {
    period: '[ 2022 ] – [ 2027 ]',
    degree: '[ BASc Engineering Science, Robotics Engineering ]',
    institution: '[ University of Toronto ]',
    current: true,
    detail: '[ Thesis: Friction Modelling and Adaptive Control for Cable Driven Systems \n Relevant Coursework: Adaptive Control and Reinforcement Learning, Controls Systems, Linear Control Theory, Robot Modelling and Control, Computer Vision for Robotics, Operating Systems, Digital and Computer Systems (FPGAs, FSMs, Verilog) ]',
  },

  // Add more entries by copying the block above
]

const certifications = [
  {
    name: 'Certified SolidWorks Professional',
    abbr: 'CSWP',
    issuer: 'Dassault Systèmes',
    year: '2025',
  },
  // Add more by copying the block above
]

const skills = [
    { group: 'software', items: ['C++', 'Python', 'Rust', 'Linear and adaptive control'] },
  { group: 'mechanical', items: ['SolidWorks', 'Cycloidal drives', '3D printing', 'Kinematics'] },
  { group: 'embedded + systems', items: ['PREEMPT_RT', 'Yocto', 'FreeRTOS', 'STM32', 'SPI/I2C', 'Linux'] },
]

// ============================================================

function StatusDot({ active }) {
  return (
    <span style={{
      display: 'inline-block', width: 7, height: 7, borderRadius: '50%',
      background: active ? '#7EC98F' : 'var(--moss)',
      marginRight: 6, verticalAlign: 'middle',
      boxShadow: active ? '0 0 6px #7EC98F' : 'none',
    }} />
  )
}

function ExperienceEntry({ entry }) {
  return (
    <article style={{
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      gap: '0 2rem',
      marginBottom: '3rem',
      paddingBottom: '3rem',
      borderBottom: '1px solid rgba(74,124,89,0.1)',
    }}>
      <div>
        <p className="mono" style={{ fontSize: '0.72rem', color: 'var(--moss)', lineHeight: 1.7 }}>
          {entry.period}
        </p>
        <p className="mono" style={{ fontSize: '0.68rem', color: 'rgba(74,124,89,0.6)', lineHeight: 1.6 }}>
          {entry.location}
        </p>
        {entry.current && (
          <span style={{
            display: 'inline-block', marginTop: '0.4rem',
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            color: '#7EC98F', letterSpacing: '0.04em',
          }}>
            <StatusDot active />now
          </span>
        )}
      </div>
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.15rem',
          fontWeight: 600, color: 'var(--parchment)', marginBottom: '0.15rem',
        }}>
          {entry.role}
        </h3>
        <p className="mono" style={{
          fontSize: '0.78rem', color: 'var(--copper-light)', marginBottom: '0.85rem',
        }}>
          {entry.org}
        </p>
        <ul style={{ paddingLeft: '1.1rem', marginBottom: '1rem' }}>
          {entry.bullets.map((b, i) => (
            <li key={i} style={{
              color: 'var(--parchment-dim)', fontSize: '0.9rem',
              lineHeight: 1.75, marginBottom: '0.3rem',
            }}>
              {b}
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {entry.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </article>
  )
}

function EducationEntry({ entry }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      gap: '0 2rem',
      marginBottom: '2.25rem',
      paddingBottom: '2.25rem',
      borderBottom: '1px solid rgba(74,124,89,0.1)',
    }}>
      <div>
        <p className="mono" style={{ fontSize: '0.72rem', color: 'var(--moss)', lineHeight: 1.7 }}>
          {entry.period}
        </p>
        {entry.current && (
          <span style={{
            display: 'inline-block', marginTop: '0.4rem',
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            color: '#7EC98F', letterSpacing: '0.04em',
          }}>
            <StatusDot active />now
          </span>
        )}
      </div>
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.05rem',
          fontWeight: 600, color: 'var(--parchment)', marginBottom: '0.15rem',
        }}>
          {entry.degree}
        </h3>
        <p className="mono" style={{
          fontSize: '0.78rem', color: 'var(--copper-light)', marginBottom: '0.5rem',
        }}>
          {entry.institution}
        </p>
        {entry.detail && (
          <p style={{ color: 'var(--parchment-dim)', fontSize: '0.88rem', lineHeight: 1.7 }}>
            {entry.detail}
          </p>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <div>
      <div className="section" style={{ paddingTop: '8rem' }}>

        <p className="section-label fade-up">background</p>
        <h1 className="fade-up-2" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          marginBottom: '0.75rem',
        }}>
          Experience
        </h1>
        <p className="fade-up-3" style={{
          color: 'var(--parchment-dim)', maxWidth: '460px',
          fontSize: '0.95rem', marginBottom: '4rem', lineHeight: 1.75,
        }}>
          [ A one-line summary of your background and what you bring. ]
        </p>

        <section style={{ marginBottom: '5rem' }}>
          <p className="section-label">work</p>
          {experience.map((e, i) => <ExperienceEntry key={i} entry={e} />)}
        </section>

        <section style={{ marginBottom: '5rem' }}>
          <p className="section-label">education</p>
          {education.map((e, i) => <EducationEntry key={i} entry={e} />)}
        </section>

        <section style={{ marginBottom: '5rem' }}>
          <p className="section-label">certifications</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {certifications.map((c, i) => (
              <div key={i} className="card" style={{
                display: 'inline-flex', alignItems: 'center',
                gap: '1.25rem', padding: '1rem 1.5rem', maxWidth: '480px',
              }}>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-display)', fontSize: '1rem',
                    color: 'var(--parchment)', marginBottom: '0.2rem',
                  }}>
                    {c.name}
                  </p>
                  <p className="mono" style={{ fontSize: '0.72rem', color: 'var(--moss)' }}>
                    {c.abbr} · {c.issuer} · {c.year}
                  </p>
                </div>
                <span style={{ fontSize: '1.4rem', opacity: 0.5, marginLeft: 'auto' }}>🌿</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="section-label">skills</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {skills.map(({ group, items }) => (
              <div key={group}>
                <p className="mono" style={{
                  fontSize: '0.72rem', color: 'var(--moss)', marginBottom: '0.5rem',
                }}>
                  {group}
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {items.map(s => <span key={s} className="tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div style={{
          marginTop: '4rem', paddingTop: '2.5rem',
          borderTop: '1px solid rgba(74,124,89,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-display)', fontSize: '1.1rem',
              marginBottom: '0.25rem', color: 'var(--parchment)',
            }}>
              Want the full picture?
            </p>
          </div>
          <a
            href="/docs/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            ↗ download CV (PDF)
          </a>
         
        </div>

      </div>
    </div>
  )
}