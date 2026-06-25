import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import styles from './Hero.module.css'

// Fondo del hero: toma cualquier imagen llamada fondoHero.(png|jpg|jpeg|webp)
// que esté en src/assets/images/. Para probar otro fondo: reemplazá ese
// archivo (mismo nombre, cualquiera de esas extensiones) y recargá
// (npm run dev) o reconstruí el sitio.
const fondoMatches = import.meta.glob(
  '../../assets/images/fondoHero.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' },
)
const fondoHero = Object.values(fondoMatches)[0]

export default function Hero() {
  const ref = useRef(null)
  const prefersReduced = useReducedMotion()

  // Progreso de scroll a través del hero (0 arriba del todo → 1 al salir).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // El contenido sube y se desvanece a medida que scrolleás.
  const y = useTransform(scrollYProgress, [0, 1], [0, -90])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      className={styles.hero}
      id="inicio"
      style={fondoHero ? { backgroundImage: `url(${fondoHero})` } : undefined}
    >
      <div className={styles.stage}>
        <motion.div
          className={styles.content}
          style={prefersReduced ? undefined : { y, opacity }}
        >
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
        </motion.div>

        <div className={styles.hud} aria-hidden="true">
          <div className={styles.hudItem}>SVC_01 · SOFTWARE</div>
          <div className={styles.hudItem}>SVC_02 · ODOO</div>
          <div className={styles.hudItem}>SVC_03 · WEB</div>
        </div>

        <div className={styles.divider} />
      </div>
    </section>
  )
}
