import styles from './Custom.module.css'
import { Reveal } from '../../components/Reveal/Reveal'
import { useLang } from '../../i18n/context'

/* MODO A · A medida — el proceso, del relevamiento al deploy.
   Numeración legítima (es una secuencia real). */
export default function Custom() {
  const { t } = useLang()
  const c = t.desarrollo.custom

  return (
    <section className={styles.section} id="a-medida">
      <div className={styles.topDivider} />
      <div className={styles.inner}>
        <Reveal>
          <span className={styles.eyebrow}>{c.eyebrow}</span>
          <div className={styles.head}>
            <h2 className={styles.title}>
              {c.titleLines.map(line => (
                <span key={line} className={styles.line}>{line}</span>
              ))}
            </h2>
            <p className={styles.sub}>{c.sub}</p>
          </div>
        </Reveal>

        <ol className={styles.steps}>
          {c.steps.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.08} className={styles.stepCell}>
              <li className={styles.step}>
                <span className={styles.num}>{step.id}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
