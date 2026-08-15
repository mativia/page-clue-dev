import styles from './Marquee.module.css'
import { MARQUEE_ITEMS } from '../../i18n/copy'

export default function Marquee() {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((word, i) => (
          <span key={i} className={styles.item}>
            {word}
            {/* Estrellas alternadas: el violeta manda, el ember puntúa. */}
            <span className={i % 3 === 2 ? styles.starEmber : styles.star}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
