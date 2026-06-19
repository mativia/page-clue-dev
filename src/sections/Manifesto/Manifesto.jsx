import { useState } from 'react'
import styles from './Manifesto.module.css'
import { Reveal } from '../../components/Reveal/Reveal'

const POINTS = [
  {
    id: '01',
    title: 'Relevamiento',
    desc: 'Entendemos tu negocio, tus procesos y dónde se pierde tiempo o información.',
    bg: 'radial-gradient(ellipse 90% 80% at 100% 0%, rgba(232, 76, 30, 0.18) 0%, transparent 60%), #111110',
  },
  {
    id: '02',
    title: 'Propuesta',
    desc: 'Plazos reales y cumplidos. Te decimos lo que se puede hacer, cuándo, y lo hacemos. Sin sorpresas.',
    bg: 'radial-gradient(ellipse 90% 80% at 0% 0%, rgba(13, 46, 42, 0.9) 0%, transparent 62%), #111110',
  },
  {
    id: '03',
    title: 'Desarrollo',
    desc: 'Construimos la solución a medida, con avances visibles y comunicación directa.',
    bg: 'radial-gradient(ellipse 90% 80% at 100% 100%, rgba(232, 76, 30, 0.14) 0%, transparent 58%), #111110',
  },
  {
    id: '04',
    title: 'Implementación y soporte',
    desc: 'Ponemos todo en marcha, capacitamos al equipo y te acompañamos después.',
    bg: 'radial-gradient(ellipse 100% 90% at 0% 100%, rgba(26, 74, 66, 0.7) 0%, transparent 60%), #111110',
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
