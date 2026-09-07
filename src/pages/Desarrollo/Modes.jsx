import styles from './Modes.module.css'
import { Reveal } from '../../components/Reveal/Reveal'
import { useLang } from '../../i18n/context'

/* La costura del 50/50: una sola sección, dos columnas simétricas
   (Modo A / Modo B) separadas por un hairline. Igual peso. Cada una
   baja a su bloque de detalle. */
export default function Modes() {
  const { t } = useLang()
  const m = t.desarrollo.modes

  const cols = [
    { ...m.a, index: '01', href: '#a-medida' },
    { ...m.b, index: '02', href: '#productos' },
  ]

  return (
    <section className={styles.section} id="modos">
      <div className={styles.topDivider} />
      <div className={styles.inner}>
        <Reveal>
          <span className={styles.eyebrow}>{m.eyebrow}</span>
          <h2 className={styles.title}>{m.title}</h2>
        </Reveal>

        <div className={styles.cols}>
          {cols.map((col, i) => (
            <Reveal key={col.tag} delay={i * 0.08} className={styles.col}>
              <a href={col.href} className={styles.card}>
                <div className={styles.head}>
                  <span className={styles.tag}>{col.tag}</span>
                  <span className={styles.index} aria-hidden="true">{col.index} / 02</span>
                </div>
                <h3 className={styles.name}>{col.name}</h3>
                <p className={styles.desc}>{col.desc}</p>
                <p className={styles.for}>{col.for}</p>
                <span className={styles.jump} aria-hidden="true">↓</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
