import { Link } from 'react-router-dom'
import styles from './HomeDoors.module.css'
import { useLang } from '../../i18n/context'

const FACE = {
  odoo: styles.faceOdoo,
  landing: styles.faceLanding,
  dev: styles.faceDev,
}

/* HOME ("/") — una sola pantalla: tres cards a lo alto, una por servicio.
   Cada una lleva a su página. El color vive en cada card (en cuarentena);
   al pasar el mouse por una, se enciende y las otras se atenúan. */
export default function HomeDoors() {
  const { t } = useLang()
  const items = t.home.services.items

  return (
    <section className={styles.home} aria-label="Servicios">
      {items.map(s => (
        <Link key={s.id} to={s.route} className={`${styles.panel} ${FACE[s.face]}`}>
          <span className={styles.glow} aria-hidden="true" />

          <span className={styles.index}>
            {s.index}<span className={styles.of}> / 03</span>
          </span>
          <span className={styles.route}>{s.route}</span>

          <div className={styles.body}>
            <h2 className={styles.title}>{s.name}</h2>
            <span className={styles.bar} aria-hidden="true" />
            <p className={styles.desc}>{s.oneLiner}</p>
            <span className={styles.go}>
              <span className={styles.goLabel}>{s.cta}</span>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      ))}
    </section>
  )
}
