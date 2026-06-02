import { useState, useEffect, useRef } from 'react'
import styles from './AboutUs.module.css'
import { Reveal } from '../../components/Reveal/Reveal'

const teamImgs = import.meta.glob('../../assets/images/team/*.webp', {
  eager: true,
  import: 'default',
})

function img(filename) {
  return teamImgs[`../../assets/images/team/${filename}`] ?? null
}

const FRAME_STYLES = [
  { filter: 'blur(7px) brightness(0.72)',  transform: 'scale(1.07) translateX(-5px) rotate(-1.2deg)' },
  { filter: 'blur(3px) brightness(0.88)',  transform: 'scale(1.04) translateX(4px) rotate(0.6deg)' },
  { filter: 'blur(11px) brightness(0.62)', transform: 'scale(1.09) translateX(-3px) rotate(1.1deg)' },
  { filter: 'blur(2px) brightness(0.92)',  transform: 'scale(1.03) translateX(6px) rotate(-0.4deg)' },
  { filter: 'blur(6px) brightness(0.76)',  transform: 'scale(1.06) translateX(-4px) rotate(0.9deg)' },
  { filter: 'blur(1px) brightness(0.94)',  transform: 'scale(1.01) translateX(1px) rotate(0deg)' },
]

const SPEEDS = [110, 152, 97, 180, 125, 90]

const TEAM = [
  {
    id: 'joaquin',
    name: 'Joaquin',
    role: 'Abogado · Contratos digitales',
    photos: ['joaquin-01.webp', 'joaquin-02.webp', 'joaquin-03.webp', 'joaquin-04.webp'],
    fallback: 'linear-gradient(160deg, #1a1f2e 0%, #0d1117 100%)',
  },
  {
    id: 'agustin',
    name: 'Agustin',
    role: 'E-commerce · Mercado Libre',
    photos: ['agustin-01.webp', 'agustin-02.webp', 'agustin-03.webp', 'agustin-04.webp'],
    fallback: 'linear-gradient(160deg, #1e1a2e 0%, #110c1e 100%)',
  },
  {
    id: 'matiasc',
    name: 'Matias C.',
    role: 'Desarrollador Odoo',
    photos: ['matiasc-01.webp', 'matiasc-02.webp', 'matiasc-03.webp', 'matiasc-04.webp'],
    fallback: 'linear-gradient(160deg, #1a2e1f 0%, #0d1f12 100%)',
  },
  {
    id: 'matiasv',
    name: 'Matias V.',
    role: 'Analista en sistemas · Dev Web',
    photos: ['matiasv-01.webp', 'matiasv-02.webp', 'matiasv-03.webp', 'matiasv-04.webp'],
    fallback: 'linear-gradient(160deg, #2e1a1a 0%, #1f0d0d 100%)',
  },
]

function MemberCard({ member, startDelay }) {
  const [activeFrame, setActiveFrame] = useState(0)
  const timerRef = useRef(null)
  const frameRef = useRef(0)
  const pausedRef = useRef(false)
  const tickRef = useRef(null)

  useEffect(() => {
    tickRef.current = function tick() {
      if (pausedRef.current) return
      const next = (frameRef.current + 1) % FRAME_STYLES.length
      frameRef.current = next
      setActiveFrame(next)
      timerRef.current = setTimeout(tickRef.current, SPEEDS[next])
    }

    timerRef.current = setTimeout(tickRef.current, startDelay)

    return () => clearTimeout(timerRef.current)
  }, [startDelay])

  function handleMouseEnter() {
    pausedRef.current = true
    clearTimeout(timerRef.current)
  }

  function handleMouseLeave() {
    pausedRef.current = false
    timerRef.current = setTimeout(tickRef.current, SPEEDS[frameRef.current])
  }

  const frozenSrc = img(member.photos[0])

  return (
    <div
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {FRAME_STYLES.map((fs, i) => {
        const src = img(member.photos[i % member.photos.length])
        return (
          <div
            key={i}
            className={`${styles.frame}${activeFrame === i ? ` ${styles.frameActive}` : ''}`}
            style={
              src
                ? { backgroundImage: `url(${src})`, filter: fs.filter, transform: fs.transform }
                : { background: member.fallback, filter: fs.filter, transform: fs.transform }
            }
          />
        )
      })}

      <div
        className={styles.frozen}
        style={
          frozenSrc
            ? { backgroundImage: `url(${frozenSrc})`, filter: 'brightness(0.85)' }
            : { background: member.fallback, filter: 'brightness(0.85)' }
        }
      />

      <span className={styles.star} aria-hidden="true">✦</span>

      <div className={styles.memberInfo}>
        <div className={styles.memberName}>{member.name}</div>
        <div className={styles.memberRole}>{member.role}</div>
      </div>
    </div>
  )
}

export default function AboutUs() {
  return (
    <section className={styles.section} id="nosotros">
      <div className={styles.topDivider} />
      <Reveal>
        <span className={styles.sectionLabel}>03 · NOSOTROS</span>
        <h2 className={styles.sectionTitle}>
          EL EQUIPO<span className={styles.accentDot}>.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1} className={styles.gridWrap}>
        <div className={styles.grid}>
          {TEAM.map((member, idx) => (
            <MemberCard
              key={member.id}
              member={member}
              startDelay={idx * 150}
            />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
