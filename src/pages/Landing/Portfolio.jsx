import styles from './Portfolio.module.css'
import { Reveal } from '../../components/Reveal/Reveal'
import { useLang } from '../../i18n/context'

/* Capturas de los proyectos. Nombrá cada archivo EXACTAMENTE igual que el
   `slug` del item en copy.js (ej: proyecto-01.webp). Si el archivo no existe,
   la card muestra un placeholder on-brand — nunca un cuadro roto.
   Sumar una captura después = soltar el archivo acá. Nada más. */
const shots = import.meta.glob('../../assets/images/portfolio/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})
const shotBySlug = Object.fromEntries(
  Object.entries(shots).map(([path, url]) => {
    const match = path.match(/([^/\\]+)\.\w+$/)
    return [match?.[1], url]
  }),
)

function ProjectCard({ item, linkLabel, placeholderNote }) {
  const shot = shotBySlug[item.slug] ?? null
  const clickable = Boolean(item.link)
  const Tag = clickable ? 'a' : 'article'
  const linkProps = clickable
    ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Tag
      className={`${styles.card}${clickable ? ` ${styles.cardLink}` : ''}`}
      {...linkProps}
    >
      {/* Ventana de navegador */}
      <div className={styles.frame}>
        <div className={styles.bar}>
          <span className={styles.dots} aria-hidden="true">
            <i /><i /><i />
          </span>
          <span className={styles.url}>{item.url}</span>
          {clickable && <span className={styles.barArrow} aria-hidden="true">↗</span>}
        </div>

        <div className={styles.viewport}>
          {shot ? (
            <img src={shot} alt={item.title} className={styles.shot} loading="lazy" />
          ) : (
            <div className={styles.placeholder} aria-hidden="true">
              <span className={styles.phType}>{item.type}</span>
              <span className={styles.phNote}>{placeholderNote}</span>
            </div>
          )}

          {clickable && (
            <span className={styles.overlay}>
              <span className={styles.overlayLabel}>{linkLabel} ↗</span>
            </span>
          )}
        </div>
      </div>

      {/* Ficha debajo */}
      <div className={styles.meta}>
        <span className={styles.type}>{item.type}</span>
        <h3 className={styles.name}>{item.title}</h3>
        <p className={styles.desc}>{item.desc}</p>
      </div>
    </Tag>
  )
}

export default function Portfolio() {
  const { t } = useLang()
  const p = t.landing.portfolio

  return (
    <section className={styles.section} id="trabajos">
      <div className={styles.topDivider} />
      <div className={styles.sectionInner}>
        <span className={styles.eyebrow}>{p.eyebrow}</span>
        <h2 className={styles.sectionTitle}>
          {p.titleLines.map((line, i) => (
            <span key={line} className={styles.titleLine}>
              {line}
              {i === p.titleLines.length - 1 && <span className={styles.accentDot}>.</span>}
            </span>
          ))}
        </h2>
        <p className={styles.sectionSub}>{p.sub}</p>

        <div className={styles.grid}>
          {p.items.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 2) * 0.08}>
              <ProjectCard
                item={item}
                linkLabel={p.linkLabel}
                placeholderNote={p.placeholderNote}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
