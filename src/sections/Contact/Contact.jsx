import { useState } from 'react'
import styles from './Contact.module.css'

const SERVICES = ['Odoo', 'Desarrollo de software', 'Sitio web']

// Pegá tu Access Key gratuita de https://web3forms.com (es pública, no secreta).
const WEB3FORMS_ACCESS_KEY = '49438b95-8e29-4937-8c53-3f24b3496378'

const EMPTY = { nombre: '', empresa: '', rol: '', email: '', mensaje: '' }

export default function Contact() {
  const [fields, setFields] = useState(EMPTY)
  const [servicio, setServicio] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [message, setMessage] = useState('')

  function handleChange(e) {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'sending') return

    if (!servicio) {
      setStatus('error')
      setMessage('Elegí un tipo de servicio.')
      return
    }

    setStatus('sending')
    setMessage('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Nuevo contacto web — ${fields.nombre || 'sin nombre'}`,
          from_name: fields.nombre,
          replyto: fields.email,
          Nombre: fields.nombre,
          Empresa: fields.empresa,
          Rol: fields.rol,
          Email: fields.email,
          Servicio: servicio,
          Mensaje: fields.mensaje,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setMessage('¡Mensaje enviado! Te contactamos a la brevedad.')
        setFields(EMPTY)
        setServicio('')
      } else {
        setStatus('error')
        setMessage(data.message || 'No se pudo enviar. Probá de nuevo en un momento.')
      }
    } catch {
      setStatus('error')
      setMessage('Error de conexión. Probá de nuevo en un momento.')
    }
  }

  return (
    <section className={styles.section} id="contacto" aria-label="Contacto">
      <div className={styles.topDivider} />
      <div className={styles.glass}>
        <div className={`${styles.glassHalf} ${styles.glassLeft}`}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
              <span className={styles.eyebrow}>CONTACTO</span>
              <h2 className={styles.title}>
                Hablemos<span className={styles.dot}>.</span>
              </h2>
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="c-nombre" className={styles.label}>Nombre</label>
                <input
                  id="c-nombre" name="nombre" type="text"
                  className={styles.input} value={fields.nombre}
                  onChange={handleChange} required autoComplete="name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="c-empresa" className={styles.label}>Empresa</label>
                <input
                  id="c-empresa" name="empresa" type="text"
                  className={styles.input} value={fields.empresa}
                  onChange={handleChange} autoComplete="organization"
                />
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="c-rol" className={styles.label}>Rol</label>
                <input
                  id="c-rol" name="rol" type="text"
                  className={styles.input} value={fields.rol}
                  onChange={handleChange} autoComplete="organization-title"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="c-email" className={styles.label}>Email</label>
                <input
                  id="c-email" name="email" type="email"
                  className={styles.input} value={fields.email}
                  onChange={handleChange} required autoComplete="email"
                />
              </div>
            </div>

            <div className={styles.field}>
              <span className={styles.label}>Tipo de servicio</span>
              <div className={styles.chips} role="radiogroup" aria-label="Tipo de servicio">
                {SERVICES.map(s => (
                  <button
                    type="button"
                    key={s}
                    role="radio"
                    aria-checked={servicio === s}
                    className={`${styles.chip}${servicio === s ? ` ${styles.chipActive}` : ''}`}
                    onClick={() => setServicio(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="c-mensaje" className={styles.label}>Mensaje</label>
              <textarea
                id="c-mensaje" name="mensaje"
                className={styles.textarea} value={fields.mensaje}
                onChange={handleChange} required rows={4}
              />
            </div>

            <button type="submit" className={styles.submit} disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando…' : 'Enviar mensaje →'}
            </button>

            {message && (
              <p
                className={`${styles.feedback} ${status === 'success' ? styles.feedbackOk : styles.feedbackErr}`}
                aria-live="polite"
              >
                {message}
              </p>
            )}

            <div className={styles.contacts}>
              <a href="mailto:cluedev.joaquin@gmail.com" className={styles.contactItem}>
                cluedev.joaquin@gmail.com
              </a>
              <a href="mailto:cluedev.agustin@gmail.com" className={styles.contactItem}>
                cluedev.agustin@gmail.com
              </a>
              <a href="tel:+543385466752" className={styles.contactItem}>
                +54 3385 466752
              </a>
            </div>
          </form>
        </div>

        <div className={`${styles.glassHalf} ${styles.glassRight}`}>
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/matiasvia_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.social}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/cluedev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.social}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://wa.me/543385466752"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={styles.social}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
