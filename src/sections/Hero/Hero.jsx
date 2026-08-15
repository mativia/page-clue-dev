import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import styles from './Hero.module.css'
import { useLang } from '../../i18n/context'

// Textura de fondo: cualquier imagen llamada fondoHero.(png|jpg|jpeg|webp)
// en src/assets/images/. Va en duotono violeta y a baja opacidad — el campo
// de color lo construye el CSS, la foto solo aporta grano y profundidad.
// Para sacarla del todo: borrá el archivo (el Hero funciona igual).
const fondoMatches = import.meta.glob(
  '../../assets/images/fondoHero.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' },
)
const fondoHero = Object.values(fondoMatches)[0]

export default function Hero() {
  const ref = useRef(null)
  const prefersReduced = useReducedMotion()
  const { t } = useLang()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -90])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const lines = t.hero.titleLines

  return (
    <section ref={ref} className={styles.hero} id="inicio">
      {fondoHero && (
        <div
          className={styles.photo}
          style={{ backgroundImage: `url(${fondoHero})` }}
          aria-hidden="true"
        />
      )}
      <div className={styles.field} aria-hidden="true" />
      <div className={styles.mesh} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div className={styles.stage}>
        <motion.div
          className={styles.content}
          style={prefersReduced ? undefined : { y, opacity }}
        >
          <span className={styles.status}>
            <span className={styles.statusDot} aria-hidden="true" />
            {t.hero.status}
          </span>

          <h1 className={styles.tagline}>
            {lines.map((line, i) => (
              <span key={line} className={styles.taglineLine}>
                {line}
                {i === lines.length - 1 && (
                  <span className={styles.dot} aria-hidden="true">.</span>
                )}
              </span>
            ))}
          </h1>

          <p className={styles.sub}>{t.hero.sub}</p>

          <div className={styles.ctas}>
            <a href="#contacto" className={styles.ctaPrimary}>
              {t.hero.ctaPrimary}
              <span aria-hidden="true">→</span>
            </a>
            <a href="#servicios" className={styles.ctaSecondary}>
              {t.hero.ctaSecondary}
            </a>
          </div>
        </motion.div>

        {/* Spec rail — metadata técnica como elemento de diseño */}
        <ul className={styles.spec} role="list">
          {t.hero.spec.map(item => (
            <li key={item.k} className={styles.specItem}>
              <span className={styles.specKey}>{item.k}</span>
              <span className={styles.specVal}>{item.v}</span>
            </li>
          ))}
        </ul>

        <div className={styles.scrollHint} aria-hidden="true">
          <span className={styles.scrollLabel}>{t.hero.scrollHint}</span>
          <span className={styles.scrollLine} />
        </div>
      </div>

      <div className={styles.seam} aria-hidden="true" />
    </section>
  )
}
