import styles from './Statement.module.css'
import { Reveal } from '../../components/Reveal/Reveal'
import { useLang } from '../../i18n/context'

/* Franja invertida (papel blanco, tinta negra) — el "acento" B&N de la
   página. Neutral a las dos ofertas: las envuelve como una sola. */
export default function Statement() {
  const { t } = useLang()
  const s = t.desarrollo.statement

  return (
    <section className={styles.section}>
      <Reveal>
        <p className={styles.statement}>
          <span className={styles.line}>{s.line}</span>{' '}
          <span className={styles.strong}>{s.strong}</span>
        </p>
      </Reveal>
    </section>
  )
}
