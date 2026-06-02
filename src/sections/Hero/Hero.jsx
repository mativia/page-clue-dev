import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.content}>
        <span className={styles.eyebrow}>CLUE_DEV · EST. 2024 · CBA, AR</span>

        <h1 className={styles.tagline}>
          LO DIGITAL,<br />
          SIN VUELTAS<span className={styles.dot}>.</span>
        </h1>

        <p className={styles.sub}>
          Odoo · Sistemas · Web · E-commerce<br />
          Desde Córdoba para cualquier lugar.
        </p>

        <a href="#contacto" className={styles.cta}>Hablemos →</a>
      </div>

      <div className={styles.hud} aria-hidden="true">
        <div className={styles.hudItem}>SVC_001 · ODOO</div>
        <div className={styles.hudItem}>SVC_002 · SISTEMAS</div>
        <div className={styles.hudItem}>SVC_003 · WEB</div>
        <div className={styles.hudItem}>SVC_004 · E-COMMERCE</div>
      </div>

      <div className={styles.divider} />
    </section>
  )
}
