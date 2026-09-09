import styles from './Hero.module.css'
import { useLang } from '../../i18n/context'

/* Hero de /landing. Titular en DOS frases con simetría: la primera
   (diseño → atrae) va atenuada; la segunda (código → convierte) lleva
   el énfasis y el punto ember. Las dos juntas: diseño lindo + código sólido. */
export default function Hero() {
  const { t } = useLang()
  const h = t.landing.hero

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.content}>
        <span className={styles.eyebrow}>{h.eyebrow}</span>

        <h1 className={styles.tagline}>
          <span className={styles.lineLead}>
            {h.titleA}<span className={styles.dotDim}>.</span>
          </span>
          <span className={styles.line}>
            {h.titleB}<span className={styles.dot}>.</span>
          </span>
        </h1>

        <p className={styles.sub}>{h.sub}</p>

        <a href="#contacto" className={styles.cta}>{h.cta}</a>
      </div>

      <div className={styles.hud} aria-hidden="true">
        {h.hud.map(item => (
          <div key={item} className={styles.hudItem}>{item}</div>
        ))}
      </div>

      <div className={styles.divider} />
    </section>
  )
}
