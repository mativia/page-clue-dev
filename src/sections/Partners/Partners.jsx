import styles from './Partners.module.css'
import { Reveal } from '../../components/Reveal/Reveal'
import { useLang } from '../../i18n/context'

/* Banda de posicionamiento. Su único trabajo: que una implementadora
   sepa en tres segundos que el sitio le habla a ella. */
export default function Partners() {
  const { t } = useLang()
  const c = t.partners

  return (
    <section className={styles.section} id="implementadoras">
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
          {c.points.map((point, i) => (
            <Reveal key={point.tag} delay={i * 0.08}>
              <article className={styles.point}>
                <span className={styles.pointTag}>{point.tag}</span>
                <h3 className={styles.pointTitle}>{point.title}</h3>
                <p className={styles.pointDesc}>{point.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
