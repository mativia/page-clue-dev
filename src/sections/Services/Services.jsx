import styles from './Services.module.css'
import { Reveal } from '../../components/Reveal/Reveal'
import { useLang } from '../../i18n/context'

/* Filas numeradas en vez de cards en grilla: el contenido está siempre
   visible (nada de hover-expand) y absorbe bien la diferencia de largo
   entre el copy en español y en inglés. */
function ServiceRow({ index, name, tagline, desc, tags, variant }) {
  const rowClass = `${styles.row} ${variant === 'ember' ? styles.rowEmber : styles.rowViolet}`

  return (
    <article className={rowClass}>
      <span className={styles.num} aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.tags}>
          {tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>

      <span className={styles.arrow} aria-hidden="true">↗</span>
      <span className={styles.rule} aria-hidden="true" />
    </article>
  )
}

export default function Services() {
  const { t } = useLang()
  const c = t.services

  return (
    <section className={styles.section} id="servicios">
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
            <p className={styles.sub}>{c.sub}</p>
          </div>
        </Reveal>

        <div className={styles.rows}>
          {c.items.map((svc, i) => (
            <Reveal key={svc.id} delay={i * 0.08}>
              <ServiceRow
                index={i}
                {...svc}
                // La tercera es la línea de producto: acento ember para
                // darle jerarquía sobre las dos de servicio.
                variant={svc.id === 'SVC_03' ? 'ember' : 'violet'}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
