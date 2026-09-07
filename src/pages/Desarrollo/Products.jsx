import styles from './Products.module.css'
import { Reveal } from '../../components/Reveal/Reveal'
import { useLang } from '../../i18n/context'

/* MODO B · Productos por suscripción. Badge B&N por semántica:
   Disponible = pill sólido; Pronto = pill outline. La card disponible
   se ilumina sola. Cambiar estado/precio = editar el dato en copy.js. */
function ProductCard({ item, badges, priceNote }) {
  const available = item.status === 'disponible'
  const clickable = Boolean(item.link)
  const Tag = clickable ? 'a' : 'article'
  const linkProps = clickable
    ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Tag
      className={`${styles.card}${available ? ` ${styles.cardAvailable}` : ''}${clickable ? ` ${styles.cardLink}` : ''}`}
      {...linkProps}
    >
      <div className={styles.top}>
        <span
          className={`${styles.badge} ${available ? styles.badgeAvailable : styles.badgeSoon}`}
        >
          <span className={styles.badgeDot} aria-hidden="true" />
          {available ? badges.disponible : badges.pronto}
        </span>
        {clickable && <span className={styles.cardArrow} aria-hidden="true">↗</span>}
      </div>

      <h3 className={styles.name}>{item.name}</h3>
      <p className={styles.desc}>{item.desc}</p>

      <div className={styles.foot}>
        <span className={styles.priceNote}>{priceNote}</span>
        <span className={styles.price}>{item.price}</span>
      </div>
    </Tag>
  )
}

export default function Products() {
  const { t } = useLang()
  const p = t.desarrollo.products

  return (
    <section className={styles.section} id="productos">
      <div className={styles.topDivider} />
      <div className={styles.inner}>
        <Reveal>
          <span className={styles.eyebrow}>{p.eyebrow}</span>
          <div className={styles.head}>
            <h2 className={styles.title}>
              {p.titleLines.map(line => (
                <span key={line} className={styles.line}>{line}</span>
              ))}
            </h2>
            <p className={styles.sub}>{p.sub}</p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {p.items.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08} className={styles.cell}>
              <ProductCard item={item} badges={p.badges} priceNote={p.priceNote} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
