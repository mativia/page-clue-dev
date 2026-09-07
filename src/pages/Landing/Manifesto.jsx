import { Fragment, useState } from 'react'
import styles from './Manifesto.module.css'
import { Reveal } from '../../components/Reveal/Reveal'
import { useLang } from '../../i18n/context'

// Claudio (mascota de CLUE) — una imagen por paso en
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

function claudioSrc(id) {
  return claudioById[id] ?? null
}

export default function Manifesto() {
  const { t } = useLang()
  const pr = t.landing.process
  const [activeId, setActiveId] = useState(null)

  return (
    <section className={styles.section} id="proceso">
      <div className={styles.topDivider} />

      <div className={styles.inner}>
        <div className={styles.claudio} aria-hidden="true">
          {pr.steps.map(step => {
            const src = claudioSrc(step.id)
            if (!src) return null
            // Por defecto se muestra el paso 01 cuando no hay nada activo.
            const shown = (activeId ?? '01') === step.id
            return (
              <img
                key={step.id}
                src={src}
                alt=""
                className={`${styles.claudioImg}${shown ? ` ${styles.claudioVisible}` : ''}`}
              />
            )
          })}
        </div>

        <Reveal>
          <span className={styles.eyebrow}>{pr.eyebrow}</span>
          <h2 className={styles.statement}>
            {pr.titleLines.map((line, i) => (
              <Fragment key={line}>
                {i > 0 && <br />}
                {line}
                {i === pr.titleLines.length - 1 && <span className={styles.accentDot}>.</span>}
              </Fragment>
            ))}
          </h2>
          <p className={styles.lede}>
            {pr.lede} <strong>{pr.strong}</strong>
          </p>
        </Reveal>

        <div className={styles.grid}>
          {pr.steps.map((step, i) => {
            const isActive = step.id === activeId
            return (
              <Reveal key={step.id} delay={i * 0.08}>
                <article
                  className={`${styles.point}${isActive ? ` ${styles.pointActive}` : ''}`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onClick={() => setActiveId(prev => (prev === step.id ? null : step.id))}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveId(prev => (prev === step.id ? null : step.id))
                    }
                  }}
                >
                  <span className={styles.pointNum}>{step.id}</span>
                  <h3 className={styles.pointTitle}>{step.title}</h3>
                  <p className={styles.pointDesc}>{step.desc}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
