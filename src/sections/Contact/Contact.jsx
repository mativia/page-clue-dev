import { useState } from 'react'
import styles from './Contact.module.css'
import { Reveal } from '../../components/Reveal/Reveal'

export default function Contact() {
  const [fields, setFields] = useState({ nombre: '', mail: '', mensaje: '' })
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit() {
    if (status !== 'idle') return
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setFields({ nombre: '', mail: '', mensaje: '' })
    }, 1500)
  }

  return (
    <section className={styles.section} id="contacto">
      <div className={styles.topDivider} />
      <div className={styles.sectionInner}>

        <Reveal>
          <div>
            <span className={styles.eyebrow}>04 · CONTACTO</span>
            <h2 className={styles.title}>
              HABLEMOS<span className={styles.accentDot}>.</span>
            </h2>
            <p className={styles.subtitle}>
              Contanos qué necesitás. Sin vueltas, sin formularios eternos.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>

          {/* ── Columna izquierda: glass card iOS 18 ── */}
          <Reveal delay={0.1}>
            <div className={styles.contactCard}>
              <div className={styles.contactRow}>
                <span className={styles.contactLabel}>MAIL</span>
                <span className={styles.contactValue}>
                  <a href="mailto:hola@cluedev.com.ar">hola@cluedev.com.ar</a>
                </span>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactLabel}>WHATSAPP</span>
                <span className={styles.contactValue}>
                  <a href="https://wa.me/5493510000000">+54 9 351 000 0000</a>
                </span>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactLabel}>UBICACIÓN</span>
                <span className={styles.contactValue}>Córdoba, Argentina · Remoto</span>
              </div>

              <div className={styles.socials}>
                <span className={styles.socialsLabel}>REDES</span>
                <div className={styles.socialsLinks}>
                  <a href="#" className={styles.socialLink}>Instagram</a>
                  <span className={styles.socialSep} aria-hidden="true"> · </span>
                  <a href="#" className={styles.socialLink}>LinkedIn</a>
                  <span className={styles.socialSep} aria-hidden="true"> · </span>
                  <a href="#" className={styles.socialLink}>GitHub</a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Columna derecha: formulario ── */}
          <Reveal delay={0.2}>
            <div role="form" aria-label="Formulario de contacto" className={styles.form}>
              <div className={styles.formFields}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="contact-nombre" className={styles.fieldLabel}>Nombre</label>
                  <input
                    id="contact-nombre"
                    name="nombre"
                    type="text"
                    className={styles.fieldInput}
                    value={fields.nombre}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label htmlFor="contact-mail" className={styles.fieldLabel}>Mail</label>
                  <input
                    id="contact-mail"
                    name="mail"
                    type="email"
                    className={styles.fieldInput}
                    value={fields.mail}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label htmlFor="contact-mensaje" className={styles.fieldLabel}>Mensaje</label>
                  <textarea
                    id="contact-mensaje"
                    name="mensaje"
                    className={styles.fieldTextarea}
                    value={fields.mensaje}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                className={styles.submitBtn}
                onClick={handleSubmit}
                disabled={status !== 'idle'}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar →'}
              </button>

              <p
                className={`${styles.successMsg}${status === 'sent' ? ` ${styles.visible}` : ''}`}
                aria-live="polite"
              >
                Mensaje recibido. Te contactamos pronto.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
