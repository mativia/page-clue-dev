import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <span className={styles.brand}>CLUE DEV®</span>

      <nav className={styles.nav} aria-label="Navegación de pie de página">
        <a href="#servicios" className={styles.navLink}>Servicios</a>
        <span className={styles.sep} aria-hidden="true"> · </span>
        <a href="#nosotros" className={styles.navLink}>Nosotros</a>
        <span className={styles.sep} aria-hidden="true"> · </span>
        <a href="#contacto" className={styles.navLink}>Contacto</a>
      </nav>

      <span className={styles.copy}>© {year} Clue Dev. Córdoba, Argentina.</span>
    </footer>
  )
}
