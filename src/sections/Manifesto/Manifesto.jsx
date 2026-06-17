import { useState } from 'react'
import styles from './Manifesto.module.css'
import { Reveal } from '../../components/Reveal/Reveal'

const POINTS = [
  {
    id: '01',
    title: 'Hablás con quien programa',
    desc: 'Cero intermediarios. El que te atiende es el que construye. Las decisiones se toman rápido y se entienden.',
    bg: 'radial-gradient(ellipse 90% 80% at 100% 0%, rgba(232, 76, 30, 0.18) 0%, transparent 60%), #111110',
  },
  {
    id: '02',
    title: 'Entregamos, no prometemos',
    desc: 'Plazos reales y cumplidos. Te decimos lo que se puede hacer, cuándo, y lo hacemos. Sin sorpresas.',
    bg: 'radial-gradient(ellipse 90% 80% at 0% 0%, rgba(13, 46, 42, 0.9) 0%, transparent 62%), #111110',
  },
  {
    id: '03',
    title: 'A tu medida, no a la fuerza',
    desc: 'Nada de plantillas genéricas. Analizamos tu operación y construimos exactamente lo que tu negocio necesita.',
    bg: 'radial-gradient(ellipse 90% 80% at 100% 100%, rgba(232, 76, 30, 0.14) 0%, transparent 58%), #111110',
  },
  {
    id: '04',
    title: 'Tecnología que se ve en la caja',
    desc: 'No vendemos tecnicismos: vendemos resultados medibles. Si no mueve la aguja de tu negocio, no lo hacemos.',
    bg: 'radial-gradient(ellipse 100% 90% at 0% 100%, rgba(26, 74, 66, 0.7) 0%, transparent 60%), #111110',
  },
]

const MARQUEE = [
  'SIN VUELTAS',
  'A MEDIDA',
  'RÁPIDO',
  'HONESTO',
  'DESDE CÓRDOBA',
  'PARA TODOS LADOS',
  'CÓDIGO REAL',
  'CERO HUMO',
]

export default function Manifesto() {
  const [activeId, setActiveId] = useState(null)

  const activePoint = POINTS.find(p => p.id === activeId)

  return (
    <section className={styles.section} id="manifiesto">
      <div className={styles.topDivider} />
      <div className={styles.glow} aria-hidden="true" />

      <div
        className={styles.inner}
        style={activePoint ? { background: activePoint.bg } : undefined}
      >
        <Reveal>
          <span className={styles.eyebrow}>✦ POR QUÉ CLUE DEV</span>
          <h2 className={styles.statement}>
            TU COMPETENCIA<br />
            YA EMPEZÓ<span className={styles.accentDot}>.</span>
          </h2>
          <p className={styles.lede}>
            Mientras lo pensás, alguien más lo está construyendo. La distancia
            entre una idea y un negocio que factura es una sola cosa: ejecutarla.
            <strong> Eso es exactamente lo que hacemos.</strong>
          </p>
        </Reveal>

        <div className={styles.grid}>
          {POINTS.map((point, i) => {
            const isActive = point.id === activeId
            return (
              <Reveal key={point.id} delay={i * 0.08}>
                <article
                  className={`${styles.point}${isActive ? ` ${styles.pointActive}` : ''}`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onClick={() => setActiveId(prev => (prev === point.id ? null : point.id))}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveId(prev => (prev === point.id ? null : point.id))
                    }
                  }}
                >
                  <span className={styles.pointNum}>{point.id}</span>
                  <h3 className={styles.pointTitle}>{point.title}</h3>
                  <p className={styles.pointDesc}>{point.desc}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...MARQUEE, ...MARQUEE].map((word, i) => (
            <span key={i} className={styles.marqueeItem}>
              {word}
              <span className={styles.marqueeStar}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
