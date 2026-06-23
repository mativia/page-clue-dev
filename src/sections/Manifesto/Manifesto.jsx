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

const MARQUEE = [
  'DESARROLLO DE SOFTWARE',
  'MÓDULOS PERSONALIZADOS ODOO',
  'DESARROLLO WEB',
  'AUTOMATIZACIÓN DE PROCESOS',
  'ERP',
  'CRM',
  'INTEGRACIONES',
]

// Claudio (CLUE's mascot) — one image per step:
// src/assets/images/claudio/claudio-01.webp … claudio-04.webp.
const claudioImgs = import.meta.glob('../../assets/images/claudio/*.webp', {
  eager: true,
  import: 'default',
})

function claudioSrc(id) {
  return claudioImgs[`../../assets/images/claudio/claudio-${id}.webp`] ?? null
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
          <span className={styles.eyebrow}>✦ 01 - Proceso</span>
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
