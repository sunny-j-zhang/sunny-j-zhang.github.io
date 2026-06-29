function SectionBlock({ label, children }) {
  return (
    <div style={{ marginBottom: '3.5rem' }}>
      <p className="section-label">{label}</p>
      {children}
    </div>
  )
}

function TimelineEntry({ period, role, org, detail, current }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '130px 1fr',
      gap: '0 1.5rem', marginBottom: '2rem',
      paddingBottom: '2rem',
      borderBottom: '1px solid rgba(74,124,89,0.12)'
    }}>
      <div>
        <p className="mono" style={{ fontSize: '0.72rem', color: 'var(--moss)', lineHeight: 1.6 }}>
          {period}
        </p>
        {current && (
          <span style={{
            display: 'inline-block', marginTop: '4px',
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            color: '#7EC98F', letterSpacing: '0.04em'
          }}>● now</span>
        )}
      </div>
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.05rem',
          fontWeight: 600, marginBottom: '0.2rem', color: 'var(--parchment)'
        }}>
          {role}
        </h3>
        <p className="mono" style={{ fontSize: '0.75rem', color: 'var(--copper-light)', marginBottom: '0.5rem' }}>
          {org}
        </p>
        {detail && (
          <p style={{ color: 'var(--parchment-dim)', fontSize: '0.88rem', lineHeight: 1.7 }}>
            {detail}
          </p>
        )}
      </div>
    </div>
  )
}

function SkillGroup({ name, items }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <p className="mono" style={{ fontSize: '0.72rem', color: 'var(--moss)', marginBottom: '0.5rem' }}>
        {name}
      </p>
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
        {items.map(s => <span key={s} className="tag">{s}</span>)}
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <div>
      <div className="section" style={{ paddingTop: '8rem' }}>
        <p className="section-label fade-up">contact + cv</p>
        <h1 className="fade-up-2" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          marginBottom: '0.75rem'
        }}>
          Get in touch
        </h1>
        <p className="fade-up-3" style={{
          color: 'var(--parchment-dim)', maxWidth: '460px',
          fontSize: '0.95rem', marginBottom: '3rem', lineHeight: 1.75
        }}>
          Open to conversations about robotics, embedded systems, and controls
          engineering. Always interested in unusual problems.
        </p>

        {/* Contact info */}
        <div className="card fade-up-4" style={{
          maxWidth: '480px', marginBottom: '4rem',
          display: 'flex', flexDirection: 'column', gap: '0.85rem'
        }}>
          {[
            { label: 'email', value: 'you@email.com', href: 'mailto:you@email.com' },
            { label: 'github', value: 'github.com/you', href: 'https://github.com/you' },
            { label: 'linkedin', value: 'linkedin.com/in/you', href: 'https://linkedin.com/in/you' },
            { label: 'location', value: 'Toronto, ON', href: null },
          ].map(({ label, value, href }) => (
            <div key={label} style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', paddingBottom: '0.85rem',
              borderBottom: '1px solid rgba(74,124,89,0.12)'
            }}>
              <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--moss)' }}>{label}</span>
              {href
                ? <a href={href} className="mono" style={{ fontSize: '0.85rem' }}>{value}</a>
                : <span className="mono" style={{ fontSize: '0.85rem', color: 'var(--parchment-dim)' }}>{value}</span>
              }
            </div>
          ))}
        </div>

        <div className="leaf-divider">✦</div>

        {/* Education */}
        <SectionBlock label="education">
          <TimelineEntry
            period="20XX – 20XX"
            role="[ Your degree ]"
            org="[ Your university ]"
            detail="[ Optional detail — focus, thesis, relevant coursework ]"
            current={false}
          />
          <TimelineEntry
            period="20XX –"
            role="Operating Systems / Coding for OS"
            org="[ Your institution ]"
            detail="Concurrent with robotics arm project. Applying scheduling and kernel concepts directly to PREEMPT_RT configuration."
            current={true}
          />
        </SectionBlock>

        {/* Experience */}
        <SectionBlock label="experience">
          <TimelineEntry
            period="20XX – 20XX"
            role="[ Role title ]"
            org="[ Company / organisation ]"
            detail="[ What you did and what it involved. Keep it concrete — tools used, scale of work, outcomes. ]"
          />
          <TimelineEntry
            period="20XX –"
            role="[ Current or most recent role ]"
            org="[ Company / organisation ]"
            detail="[ Description ]"
            current={true}
          />
        </SectionBlock>

        {/* Certifications */}
        <SectionBlock label="certifications">
          <div className="card" style={{ display: 'inline-flex', alignItems: 'center', gap: '1.25rem', padding: '1rem 1.5rem' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: '0.2rem' }}>
                Certified SolidWorks Professional
              </p>
              <p className="mono" style={{ fontSize: '0.72rem', color: 'var(--moss)' }}>CSWP · Dassault Systèmes · 2025</p>
            </div>
            <span style={{ fontSize: '1.4rem', opacity: 0.6 }}>🌿</span>
          </div>
        </SectionBlock>

        {/* Skills */}
        <SectionBlock label="skills">
          <SkillGroup name="mechanical" items={['SolidWorks', 'FEA', 'GD&T', 'Cycloidal drives', '3D printing', 'Kinematics']} />
          <SkillGroup name="software" items={['C++', 'Rust', 'Python', 'React', 'WASM']} />
          <SkillGroup name="embedded + systems" items={['PREEMPT_RT', 'Yocto', 'FreeRTOS', 'STM32', 'SPI/I2C', 'Linux kernel']} />
          <SkillGroup name="tools" items={['Git', 'GitHub Actions', 'GDB', 'Oscilloscope', 'Logic analyser']} />
        </SectionBlock>

      </div>
    </div>
  )
}
