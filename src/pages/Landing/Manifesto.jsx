import { useState } from 'react'
import styles from './Manifesto.module.css'
import { Reveal } from '../../components/Reveal/Reveal'

const POINTS = [
  {
    id: '01',
    title: 'Relevamiento',
    desc: 'Entendemos tu negocio, tus procesos y dónde se pierde tiempo o información.',
  },
  {
    id: '02',
    title: 'Propuesta',
    desc: 'Plazos reales y cumplidos. Te decimos lo que se puede hacer, cuándo, y lo hacemos. Sin sorpresas.',
  },
  {
    id: '03',
    title: 'Desarrollo',
    desc: 'Construimos la solución a medida, con avances visibles y comunicación directa.',
  },
  {
    id: '04',
    title: 'Implementación y soporte',
    desc: 'Ponemos todo en marcha, capacitamos al equipo y te acompañamos después.',
  },
]

// Claudio (CLUE's mascot) — one full-body image per step in
// src/assets/images/claudio/ as claudio-01 … claudio-04 (.png or .webp).
const claudioImgs = import.meta.glob('../../assets/images/claudio/*.{png,webp}', {
  eager: true,
  import: 'default',
})
const claudioById = Object.fromEntries(
  Object.entries(claudioImgs).map(([path, url]) => {
    const match = path.match(/claudio-(\d+)\./)
    return [match?.[1], url]
  }),
)

function claudioSrc(id) {
  return claudioById[id] ?? null
}

export default function Manifesto() {
  const [activeId, setActiveId] = useState(null)

  return (
    <section className={styles.section} id="manifiesto">
      <div className={styles.topDivider} />

      <div className={styles.inner}>
        <div className={styles.claudio} aria-hidden="true">
          {POINTS.map(point => {
            const src = claudioSrc(point.id)
            if (!src) return null
            // Default to step 01 when nothing is active.
            const shown = (activeId ?? '01') === point.id
            return (
              <img
                key={point.id}
                src={src}
                alt=""
                className={`${styles.claudioImg}${shown ? ` ${styles.claudioVisible}` : ''}`}
              />
            )
          })}
        </div>

        <Reveal>
          <span className={styles.eyebrow}>✦ 02 - Proceso</span>
          <h2 className={styles.statement}>
            CÓMO<br />
            TRABAJAMOS<span className={styles.accentDot}>.</span>
          </h2>
          <p className={styles.lede}>
            Un camino claro, del primer problema a la solución funcionando.
            <strong> Como lo hacemos realidad.</strong>
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
    </section>
  )
}
