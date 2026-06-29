import { MDXProvider } from '@mdx-js/react'
import PdfEmbed from './PdfEmbed'

// Maps plain markdown elements to styled versions.
// All MDX devlog files inherit these automatically.
const components = {
    PdfEmbed,
  h1: (props) => (
    <h1 style={{
      fontFamily: 'var(--font-display)', fontSize: '2rem',
      marginBottom: '1rem', color: 'var(--parchment)'
    }} {...props} />
  ),
  h2: (props) => (
    <h2 style={{
      fontFamily: 'var(--font-display)', fontSize: '1.4rem',
      marginTop: '2.5rem', marginBottom: '0.75rem', color: 'var(--parchment)'
    }} {...props} />
  ),
  h3: (props) => (
    <h3 style={{
      fontFamily: 'var(--font-display)', fontSize: '1.1rem',
      marginTop: '2rem', marginBottom: '0.5rem', color: 'var(--parchment)'
    }} {...props} />
  ),
  p: (props) => (
    <p style={{
      color: 'var(--parchment-dim)', lineHeight: 1.8,
      marginBottom: '1.25rem', fontSize: '0.95rem'
    }} {...props} />
  ),
  a: (props) => (
    <a style={{ color: 'var(--canopy)' }} {...props} />
  ),
  code: (props) => (
    <code style={{
      fontFamily: 'var(--font-mono)', fontSize: '0.82em',
      background: 'rgba(74,124,89,0.15)', padding: '0.15em 0.4em',
      borderRadius: 2, color: 'var(--canopy)'
    }} {...props} />
  ),
  pre: (props) => (
    <pre style={{
      background: 'var(--forest-mid)',
      border: '1px solid rgba(74,124,89,0.2)',
      borderRadius: 4, padding: '1.25rem',
      overflowX: 'auto', marginBottom: '1.5rem',
      fontFamily: 'var(--font-mono)', fontSize: '0.82rem',
      color: 'var(--canopy)', lineHeight: 1.7
    }} {...props} />
  ),
  blockquote: (props) => (
    <blockquote style={{
      borderLeft: '2px solid var(--moss)',
      paddingLeft: '1.25rem', margin: '1.5rem 0',
      color: 'var(--parchment-dim)', fontStyle: 'italic'
    }} {...props} />
  ),
  hr: () => (
    <hr style={{
      border: 'none', borderTop: '1px solid rgba(74,124,89,0.2)',
      margin: '2.5rem 0'
    }} />
  ),
  ul: (props) => (
    <ul style={{
      paddingLeft: '1.5rem', marginBottom: '1.25rem',
      color: 'var(--parchment-dim)', fontSize: '0.95rem', lineHeight: 1.8
    }} {...props} />
  ),
  ol: (props) => (
    <ol style={{
      paddingLeft: '1.5rem', marginBottom: '1.25rem',
      color: 'var(--parchment-dim)', fontSize: '0.95rem', lineHeight: 1.8
    }} {...props} />
  ),
  table: (props) => (
    <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
      <table style={{
        width: '100%', borderCollapse: 'collapse',
        fontFamily: 'var(--font-mono)', fontSize: '0.82rem'
      }} {...props} />
    </div>
  ),
  th: (props) => (
    <th style={{
      textAlign: 'left', padding: '0.5rem 0.75rem',
      borderBottom: '1px solid rgba(74,124,89,0.3)',
      color: 'var(--moss)', fontWeight: 500, letterSpacing: '0.04em'
    }} {...props} />
  ),
  td: (props) => (
    <td style={{
      padding: '0.5rem 0.75rem',
      borderBottom: '1px solid rgba(74,124,89,0.1)',
      color: 'var(--parchment-dim)'
    }} {...props} />
  ),
}

export default function MdxProvider({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
