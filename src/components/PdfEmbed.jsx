import { useState, useCallback } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

export default function PdfEmbed({ src, title, description }) {
  const [numPages, setNumPages] = useState(null)
  const [page, setPage] = useState(1)
  const [error, setError] = useState(false)

  const onLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages)
    setError(false)
  }, [])

  return (
    <div style={{ margin: '2rem 0' }}>

      {/* Header row */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem'
      }}>
        <div>
          {title && (
            <p style={{
              fontFamily: 'var(--font-display)', fontSize: '0.95rem',
              color: 'var(--parchment)', marginBottom: description ? '0.15rem' : 0
            }}>
              {title}
            </p>
          )}
          {description && (
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--moss)' }}>
              {description}
            </p>
          )}
        </div>
        <a
          href={src} target="_blank" rel="noreferrer"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
            color: 'var(--moss)', letterSpacing: '0.04em',
            border: '1px solid rgba(74,124,89,0.3)',
            padding: '0.3rem 0.75rem', borderRadius: 2,
            transition: 'color 0.2s, border-color 0.2s'
          }}
        >
          ↗ open PDF
        </a>
      </div>

      {/* PDF viewer */}
      <div style={{
        background: 'var(--forest-mid)',
        border: '1px solid rgba(74,124,89,0.25)',
        borderRadius: 4, overflow: 'hidden'
      }}>
        {error ? (
          <div style={{
            padding: '3rem', textAlign: 'center',
            fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--moss)'
          }}>
            <p style={{ marginBottom: '0.75rem' }}>Could not load PDF inline.</p>
            <a href={src} target="_blank" rel="noreferrer"
              style={{ color: 'var(--canopy)' }}>↗ open directly</a>
          </div>
        ) : (
          <Document
            file={src}
            onLoadSuccess={onLoadSuccess}
            onLoadError={() => setError(true)}
            loading={
              <div style={{
                padding: '3rem', textAlign: 'center',
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--moss)'
              }}>
                loading pdf...
              </div>
            }
          >
            <Page
              pageNumber={page}
              width={Math.min(740, typeof window !== 'undefined' ? window.innerWidth - 80 : 740)}
              renderAnnotationLayer
              renderTextLayer
            />
          </Document>
        )}
      </div>

      {/* Pagination */}
      {numPages && numPages > 1 && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          marginTop: '0.75rem', fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem', color: 'var(--moss)'
        }}>
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page <= 1}
            style={{
              background: 'none', border: '1px solid rgba(74,124,89,0.3)',
              color: page <= 1 ? 'rgba(74,124,89,0.3)' : 'var(--canopy)',
              padding: '0.25rem 0.6rem', borderRadius: 2,
              cursor: page <= 1 ? 'default' : 'pointer',
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem'
            }}
          >
            ←
          </button>
          <span>{page} / {numPages}</span>
          <button
            onClick={() => setPage(p => Math.min(numPages, p + 1))}
            disabled={page >= numPages}
            style={{
              background: 'none', border: '1px solid rgba(74,124,89,0.3)',
              color: page >= numPages ? 'rgba(74,124,89,0.3)' : 'var(--canopy)',
              padding: '0.25rem 0.6rem', borderRadius: 2,
              cursor: page >= numPages ? 'default' : 'pointer',
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem'
            }}
          >
            →
          </button>
        </div>
      )}
    </div>
  )
}
