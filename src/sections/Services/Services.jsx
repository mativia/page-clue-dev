import styles from './Services.module.css'
import { Reveal } from '../../components/Reveal/Reveal'

const SERVICES = [
  {
    id: 'SVC_001',
    name: 'ODOO',
    tagline: 'Tu operación, sistematizada.',
    desc: 'Implementamos y desarrollamos módulos Odoo a medida para pymes que necesitan dejar de operar en planillas. Ventas, stock, contabilidad, CRM: todo conectado, sin fricción.',
    tags: ['ERP', 'Módulos custom', 'Migración de datos', 'Soporte'],
  },
  {
    id: 'SVC_002',
    name: 'SISTEMAS',
    tagline: 'Software que resuelve el problema real.',
    desc: 'Desarrollamos aplicaciones web y sistemas internos a medida. Sin templates, sin soluciones genéricas. Analizamos el flujo de trabajo y construimos exactamente lo que se necesita.',
    tags: ['Web apps', 'APIs', 'Bases de datos', 'Integraciones'],
  },
  {
    id: 'SVC_003',
    name: 'WEB',
    tagline: 'Presencia digital que convierte.',
    desc: 'Sitios y landing pages con diseño de impacto real. No hacemos páginas de catálogo: construimos experiencias visuales que comunican quién sos y generan acción.',
    tags: ['Landing pages', 'Diseño editorial', 'Performance', 'SEO técnico'],
  },
  {
    id: 'SVC_004',
    name: 'E-COMMERCE',
    tagline: 'Mercado Libre, sin el caos.',
    desc: 'Gestión estratégica de cuentas en Mercado Libre. Listings optimizados, reputación, logística y escalado de ventas. Para el que ya vende y quiere vender más.',
    tags: ['MercadoLibre', 'Listings', 'Reputación', 'Escalado'],
  },
]

function ServiceCard({ id, name, tagline, desc, tags }) {
  return (
    <article className={styles.card}>
      <span className={styles.cardNum}>{id}</span>
      <span className={styles.cardArrow} aria-hidden="true">↗</span>

      <div className={styles.cardName}>{name}</div>
      <p className={styles.cardTagline}>{tagline}</p>

      <div className={styles.cardExpand}>
        <p className={styles.cardDesc}>{desc}</p>
        <div className={styles.cardTags}>
          {tags.map(tag => (
            <span key={tag} className={styles.cardTag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className={styles.cardBar} />
    </article>
  )
}

export default function Services() {
  return (
    <section className={styles.section} id="servicios">
      <div className={styles.topDivider} />
      <div className={styles.sectionInner}>
        <span className={styles.eyebrow}>02 · SERVICIOS</span>
        <h2 className={styles.sectionTitle}>
          LO QUE<br />
          HACEMOS<span className={styles.accentDot}>.</span>
        </h2>
        <p className={styles.sectionSub}>Cuatro especialidades. Un solo equipo.</p>
        <div className={styles.grid}>
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.id} delay={i * 0.08}>
              <ServiceCard {...svc} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
