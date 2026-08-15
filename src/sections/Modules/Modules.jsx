import styles from './Modules.module.css'
import { Reveal } from '../../components/Reveal/Reveal'
import { useLang } from '../../i18n/context'

/* ⚠️ PLACEHOLDER — reemplazar cuando haya módulos reales.
   Mientras no haya nada publicado, las cards se dibujan en estado
   "redactado": el nombre va tapado y el badge dice en qué etapa está.
   Es honesto (no inventa un catálogo) y se lee como decisión de diseño.

   Para publicar uno real, completá `slug` y `desc`:
     { key: 'm1', slug: 'clue_stock_alerts', desc: '…', status: 'building' }
   La card cambia sola al estado normal.                              */
const MODULES = [
  { key: 'm1', slug: null, desc: null, status: 'building', redactedLen: 7 },
  { key: 'm2', slug: null, desc: null, status: 'building', redactedLen: 5 },
  { key: 'm3', slug: null, desc: null, status: 'soon',     redactedLen: 9 },
]

function ModuleCard({ mod, labels, redactedNote }) {
  const isRedacted = !mod.slug

  return (
    <article className={`${styles.card}${isRedacted ? ` ${styles.cardRedacted}` : ''}`}>
      <span className={`${styles.badge} ${mod.status === 'soon' ? styles.badgeSoon : styles.badgeBuilding}`}>
        {labels[mod.status]}
      </span>

      <p className={styles.slug}>
        <span className={styles.slugPrefix}>clue_</span>
        {isRedacted ? (
          // El texto de abajo ya dice "nombre por anunciar": para un lector
          // de pantalla la barra es decorativa.
          <span
            className={styles.redaction}
            style={{ '--redaction-len': mod.redactedLen }}
            aria-hidden="true"
          />
        ) : (
          mod.slug.replace(/^clue_/, '')
        )}
      </p>

      <p className={styles.desc}>{isRedacted ? redactedNote : mod.desc}</p>

      <span className={styles.cardRule} aria-hidden="true" />
    </article>
  )
}

export default function Modules() {
  const { t } = useLang()
  const c = t.modules

  return (
    <section className={styles.section} id="modulos">
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
            <p className={styles.lede}>{c.lede}</p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {MODULES.map((mod, i) => (
            <Reveal key={mod.key} delay={i * 0.08}>
              <ModuleCard
                mod={mod}
                labels={c.statusLabels}
                redactedNote={c.redactedNote}
              />
            </Reveal>
          ))}

          <Reveal delay={MODULES.length * 0.08}>
            <a href="#contacto" className={styles.ctaCard}>
              <h3 className={styles.ctaTitle}>{c.ctaCard.title}</h3>
              <p className={styles.ctaDesc}>{c.ctaCard.desc}</p>
              <span className={styles.ctaAction}>
                {c.ctaCard.action}
                <span aria-hidden="true"> →</span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
