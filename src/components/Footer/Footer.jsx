import styles from './Footer.module.css'
import { useLang } from '../../i18n/context'

const EMAILS = ['cluedev.joaquin@gmail.com', 'cluedev.agustin@gmail.com']
const PHONE = { display: '+54 9 3385 445914', href: 'tel:+5493385445914' }

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  function handleNavClick(e, targetId) {
    e.preventDefault()
    const el = document.getElementById(targetId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <span className={styles.brand}>
            CLUE DEV<span className={styles.brandDot}>.</span>
          </span>
          <p className={styles.tagline}>{t.footer.tagline}</p>
        </div>

        <nav className={styles.col} aria-label={t.footer.navTitle}>
          <h2 className={styles.colTitle}>{t.footer.navTitle}</h2>
          {t.nav.links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={styles.link}
              onClick={e => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.col}>
          <h2 className={styles.colTitle}>{t.footer.contactTitle}</h2>
          {EMAILS.map(email => (
            <a key={email} href={`mailto:${email}`} className={styles.link}>
              {email}
            </a>
          ))}
          <a href={PHONE.href} className={styles.link}>{PHONE.display}</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>© {year} {t.footer.copy}</span>
        <span className={styles.legal}>{t.footer.legal}</span>
      </div>
    </footer>
  )
}
