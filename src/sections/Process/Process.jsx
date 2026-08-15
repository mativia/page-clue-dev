import { useState } from 'react'
import styles from './Process.module.css'
import { Reveal } from '../../components/Reveal/Reveal'
import { useLang } from '../../i18n/context'

// Claudio (la mascota) — una imagen de cuerpo entero por paso en
// src/assets/images/claudio/ como claudio-01 … claudio-04 (.png o .webp).
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

export default function Process() {
  const { t } = useLang()
  const c = t.process
  const [activeId, setActiveId] = useState(null)

  // Sin nada activo, mostramos el paso 01.
  const shownId = activeId ?? '01'

  return (
    <section className={styles.section} id="proceso">
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.eyebrow}>{c.eyebrow}</span>
            <h2 className={styles.title}>
              {c.titleLines.map((line, i) => (
                <span key={line} className={styles.titleLine}>
                  {line}
                  {i === c.titleLines.length - 1 && (
                    <span className={styles.dot} aria-hidden="true">.</span>
                  )}
                </span>
              ))}
            </h2>
            <p className={styles.lede}>
              {c.lede} <strong>{c.ledeStrong}</strong>
            </p>
          </div>
        </Reveal>

        <div className={styles.layout}>
          {/* div + article, no ol/li: Reveal mete un wrapper entre medio y
              un <li> que no cuelga directo de un <ol> es HTML inválido. */}
          <div
            className={styles.stepper}
            onMouseLeave={() => setActiveId(null)}
          >
            {c.steps.map((step, i) => {
              const isActive = step.id === shownId
              return (
                <Reveal key={step.id} delay={i * 0.07}>
                  <article
                    className={`${styles.step}${isActive ? ` ${styles.stepActive}` : ''}`}
                    onMouseEnter={() => setActiveId(step.id)}
                    onFocus={() => setActiveId(step.id)}
                    tabIndex={0}
                  >
                    <span className={styles.marker} aria-hidden="true" />
                    <span className={styles.stepNum}>{step.id}</span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>

          {/* Claudio — en flujo normal y sticky, no flotando en absolute.
              En mobile va arriba del stepper en vez de ocultarse. */}
          <div className={styles.claudio} aria-hidden="true">
            <div className={styles.claudioFrame}>
              {c.steps.map(step => {
                const src = claudioById[step.id]
                if (!src) return null
                return (
                  <img
                    key={step.id}
                    src={src}
                    alt=""
                    className={`${styles.claudioImg}${step.id === shownId ? ` ${styles.claudioVisible}` : ''}`}
                  />
                )
              })}
            </div>
            <span className={styles.claudioStep}>
              {shownId} / {String(c.steps.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
