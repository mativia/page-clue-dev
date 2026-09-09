import styles from './Hero.module.css'
import { useLang } from '../../i18n/context'
import logoWatermark from '../../assets/images/logo/clue-digital-white.png'

/* Hero de /desarrollo. B&N, feel de ficha técnica: grid tenue de fondo +
   metadata mono. Titular en 3 tiempos; las dos primeras líneas son las dos
   ofertas (igual peso) y la tercera las unifica, subrayada. */
export default function Hero() {
  const { t } = useLang()
  const d = t.desarrollo
  const h = d.hero

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.grid} aria-hidden="true" />
      {/* Marca de agua: logo de Clue Dev en blanco, sutil, a la derecha
          (zona superior libre). Solo en desktop ancho. */}
      <img src={logoWatermark} alt="" className={styles.watermark} aria-hidden="true" />

      <div className={styles.content}>
        <span className={styles.eyebrow}>{h.eyebrow}</span>

        <h1 className={styles.title}>
          {h.titleLines.map((line, i) => {
            const last = i === h.titleLines.length - 1
            return (
              <span
                key={line}
                className={`${styles.line}${last ? ` ${styles.lineUnify}` : ''}`}
              >
                {line}
              </span>
            )
          })}
        </h1>

        <p className={styles.sub}>{h.sub}</p>

        <a href="#contacto" className={styles.cta}>{h.cta}</a>
      </div>

      <div className={styles.hud} aria-hidden="true">
        <div className={styles.hudItem}>{d.modes.a.tag} · {d.modes.a.name}</div>
        <div className={styles.hudItem}>{d.modes.b.tag} · {d.modes.b.name}</div>
      </div>

      <div className={styles.divider} />
    </section>
  )
}
