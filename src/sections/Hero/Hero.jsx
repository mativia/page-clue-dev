import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.content}>
        <span className={styles.eyebrow}>CLUE_DEV · EST. 2024 · CBA, AR</span>

        <h1 className={styles.tagline}>
          SISTEMAS QUE<br />
          ACOMPAÑAN TU<br />
          NEGOCIO<span className={styles.dot}>.</span>
        </h1>

        <p className={styles.sub}>
          Desarrollamos software y soluciones digitales para empresas que buscan
          optimizar procesos, centralizar información y crecer sobre una operación
          más eficiente.
        </p>

        <a href="#contacto" className={styles.cta}>Hablemos →</a>
      </div>

      <div className={styles.hud} aria-hidden="true">
        <div className={styles.hudItem}>SVC_01 · SOFTWARE</div>
        <div className={styles.hudItem}>SVC_02 · ODOO</div>
        <div className={styles.hudItem}>SVC_03 · WEB</div>
      </div>

      <div className={styles.divider} />
    </section>
  )
}
