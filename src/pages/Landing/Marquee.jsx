import styles from './Marquee.module.css'
import { useLang } from '../../i18n/context'

export default function Marquee() {
  const { t } = useLang()
  const items = t.landing.marquee

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {[...items, ...items].map((word, i) => (
          <span key={i} className={styles.item}>
            {word}
            <span className={styles.star}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
