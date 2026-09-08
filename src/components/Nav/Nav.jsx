import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'
import { useLang } from '../../i18n/context'
import clueLogo from '../../assets/images/logo/clue-digital-white.png'
import isoWhite from '../../assets/images/logo/iso-blanco.png'

/* Logo del nav: dos imágenes que hacen crossfade con el scroll. Arriba se ve
   el logo completo (clue-digital-white); al bajar, se desvanece y aparece el
   isotipo solo (iso-blanco). El contenedor ajusta su ancho. Ambos en blanco.
   (max-width:none en .logo anula el reset global img{max-width:100%}.) */

export default function Nav() {
  const { t, lang, setLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  // Al bajar del tope, el logo pasa de completo a solo isotipo.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll() // estado inicial (por si carga ya scrolleado)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `${styles.link}${isActive ? ` ${styles.linkActive}` : ''}`
  const mobileLinkClass = ({ isActive }) =>
    `${styles.mobileLink}${isActive ? ` ${styles.mobileLinkActive}` : ''}`

  // CTA de contacto: scrollea a la sección #contacto de la página actual
  // (Home y Odoo la tienen). Los anchors internos siguen funcionando igual.
  function goToContact(e) {
    e.preventDefault()
    const el = document.getElementById('contacto')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav}${scrolled ? ` ${styles.navScrolled}` : ''}`}>
      <div className={styles.inner}>
        <NavLink
          to="/"
          className={styles.brand}
          onClick={closeMenu}
          end
          aria-label="Clue Dev — Inicio"
        >
          <img src={clueLogo} alt="" className={`${styles.logo} ${styles.logoFull}`} />
          <img src={isoWhite} alt="" className={`${styles.logo} ${styles.logoIso}`} />
        </NavLink>

        <ul className={styles.links} role="list">
          {t.nav.pages.map(page => (
            <li key={page.to}>
              <NavLink
                to={page.to}
                className={linkClass}
                onClick={closeMenu}
                end={page.to === '/'}
              >
                {page.label}
              </NavLink>
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

          <a href="#contacto" className={styles.cta} onClick={goToContact}>
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
        {t.nav.pages.map(page => (
          <NavLink
            key={page.to}
            to={page.to}
            className={mobileLinkClass}
            onClick={closeMenu}
            end={page.to === '/'}
          >
            {page.label}
          </NavLink>
        ))}
        <a href="#contacto" className={styles.mobileCta} onClick={goToContact}>
          {t.nav.cta} →
        </a>
      </div>
    </nav>
  )
}
