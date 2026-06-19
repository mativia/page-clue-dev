import { useRef, useEffect } from 'react'
import styles from './Hero.module.css'
import videoFondo from '../../assets/images/videoFondo.mp4'

export default function Hero() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Reduced motion: no scrubbing, just freeze on the first frame.
    if (reduceMotion) {
      const showFirstFrame = () => {
        try { video.currentTime = 0 } catch { /* not seekable yet */ }
      }
      video.addEventListener('loadedmetadata', showFirstFrame)
      return () => video.removeEventListener('loadedmetadata', showFirstFrame)
    }

    const FRAME_STEP = 1 / 30 // don't bother seeking finer than ~one frame

    let duration = 0
    let target = 0       // desired progress 0..1 (from scroll)
    let current = 0      // smoothed progress 0..1
    let lastSet = -1     // last currentTime we wrote
    let raf = 0
    let looping = false

    // How far the user has scrolled through the tall hero section, 0..1.
    function getProgress() {
      const travel = section.offsetHeight - window.innerHeight
      if (travel <= 0) return 0
      const scrolled = -section.getBoundingClientRect().top
      return Math.min(1, Math.max(0, scrolled / travel))
    }

    function frame() {
      // Ease toward the scroll target so motion feels smooth, not jumpy.
      current += (target - current) * 0.16
      const settled = Math.abs(target - current) < 0.0004
      if (settled) current = target

      // Only seek while the decoder is idle, so seeks never pile up and stall.
      if (duration > 0 && video.readyState >= 2 && !video.seeking) {
        const t = Math.min(duration - 0.001, Math.max(0, current * duration))
        const enough = settled ? t !== lastSet : Math.abs(t - lastSet) >= FRAME_STEP
        if (enough) {
          try { video.currentTime = t } catch { /* ignore mid-seek errors */ }
          lastSet = t
        }
      }

      // Keep looping until we've actually landed on the final frame.
      if (settled) {
        const finalT = Math.min(duration - 0.001, Math.max(0, target * duration))
        if (Math.abs(lastSet - finalT) < FRAME_STEP) { looping = false; return }
      }
      raf = requestAnimationFrame(frame)
    }

    function wake() {
      if (!looping) { looping = true; raf = requestAnimationFrame(frame) }
    }

    function onScroll() {
      target = getProgress()
      wake()
    }

    function onMeta() {
      duration = video.duration || 0
      target = current = getProgress()
      lastSet = -1
      wake()
    }

    video.addEventListener('loadedmetadata', onMeta)
    if (video.readyState >= 1) onMeta()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(raf)
      video.removeEventListener('loadedmetadata', onMeta)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className={styles.hero} id="inicio">
      <div className={styles.stage}>
        <video
          ref={videoRef}
          className={styles.bgVideo}
          src={videoFondo}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />

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
      </div>
    </section>
  )
}
