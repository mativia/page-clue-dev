import styles from './Marquee.module.css'

const ITEMS = [
  'DESARROLLO DE SOFTWARE',
  'MÓDULOS PERSONALIZADOS ODOO',
  'DESARROLLO WEB',
  'AUTOMATIZACIÓN DE PROCESOS',
  'ERP',
  'CRM',
  'INTEGRACIONES',
]

export default function Marquee() {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {[...ITEMS, ...ITEMS].map((word, i) => (
          <span key={i} className={styles.item}>
            {word}
            <span className={styles.star}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
