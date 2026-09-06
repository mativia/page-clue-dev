import { useLang } from '../i18n/context'

/* Placeholder para páginas aún no desarrolladas (/landing, /desarrollo).
   Fase 1: solo deja la ruta lista. El contenido real va en su propio brief. */
const SOON = { es: 'Próximamente', en: 'Coming soon' }

export default function Placeholder({ title }) {
  const { lang } = useLang()
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        padding: '10rem 1.5rem 5rem',
      }}
    >
      <div>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--violet-300)',
            margin: 0,
          }}
        >
          {SOON[lang]}
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 10vw, 120px)',
            lineHeight: 0.9,
            color: 'var(--color-text-primary)',
            margin: '0.75rem 0 0',
          }}
        >
          {title}
        </h1>
      </div>
    </main>
  )
}
