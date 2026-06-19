import { useState } from 'react'
import styles from './Nav.module.css'

const LINKS = ['Servicios', 'Contacto']

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

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
        </a>

        <ul className={styles.links} role="list">
          {LINKS.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={styles.link}
                onClick={e => handleNavClick(e, link.toLowerCase())}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none" aria-hidden="true">
            <rect y="0"     width="18" height="1.5" rx="0.75" fill="#ede9e0" />
            <rect y="5.75"  width="18" height="1.5" rx="0.75" fill="#ede9e0" />
            <rect y="11.5"  width="18" height="1.5" rx="0.75" fill="#ede9e0" />
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
      >
        {LINKS.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={styles.mobileLink}
            onClick={e => handleNavClick(e, link.toLowerCase())}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}
