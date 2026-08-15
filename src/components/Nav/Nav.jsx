import { useState } from 'react'
import styles from './Nav.module.css'
import { useLang } from '../../i18n/context'
import { useActiveSection } from '../../hooks/useActiveSection'

const SECTION_IDS = ['servicios', 'modulos', 'proceso', 'contacto']

export default function Nav() {
  const { t, lang, setLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  function handleNavClick(e, targetId) {
    e.preventDefault()
    const el = document.getElementById(targetId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a
          href="#inicio"
          className={styles.brand}
          onClick={e => handleNavClick(e, 'inicio')}
        >
          CLUE DEV
          <span className={styles.brandDot} aria-hidden="true">.</span>
        </a>

        <ul className={styles.links} role="list">
          {t.nav.links.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${styles.link}${activeId === link.id ? ` ${styles.linkActive}` : ''}`}
                aria-current={activeId === link.id ? 'true' : undefined}
                onClick={e => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <div className={styles.lang} role="group" aria-label={t.nav.langLabel}>
            <button
              type="button"
              className={`${styles.langBtn}${lang === 'es' ? ` ${styles.langActive}` : ''}`}
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
            <span className={styles.langSep} aria-hidden="true">/</span>
            <button
              type="button"
              className={`${styles.langBtn}${lang === 'en' ? ` ${styles.langActive}` : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>

          <a
            href="#contacto"
            className={styles.cta}
            onClick={e => handleNavClick(e, 'contacto')}
          >
            {t.nav.cta}
          </a>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" aria-hidden="true">
              <rect y="0"    width="18" height="1.5" rx="0.75" fill="currentColor" />
              <rect y="5.75" width="18" height="1.5" rx="0.75" fill="currentColor" />
              <rect y="11.5" width="18" height="1.5" rx="0.75" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
      >
        {t.nav.links.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`${styles.mobileLink}${activeId === link.id ? ` ${styles.mobileLinkActive}` : ''}`}
            onClick={e => handleNavClick(e, link.id)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contacto"
          className={styles.mobileCta}
          onClick={e => handleNavClick(e, 'contacto')}
        >
          {t.nav.cta} →
        </a>
      </div>
    </nav>
  )
}
