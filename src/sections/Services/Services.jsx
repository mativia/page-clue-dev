import styles from './Services.module.css'
import { Reveal } from '../../components/Reveal/Reveal'

const SERVICES = [
  {
    id: 'SVC_01',
    name: 'SOFTWARE',
    tagline: 'Desarrollo de software a medida.',
    desc: 'Creamos sistemas y aplicaciones a medida para optimizar procesos, centralizar información y mejorar la gestión de la empresa.',
    tags: ['Sistemas a medida', 'Web apps', 'Automatización', 'Integraciones'],
  },
  {
    id: 'SVC_02',
    name: 'ODOO',
    tagline: 'Módulos personalizados Odoo.',
    desc: 'Desarrollamos e integramos funcionalidades específicas para adaptar Odoo a la forma de trabajar de cada organización.',
    tags: ['ERP', 'Módulos custom', 'Integraciones', 'CRM'],
  },
  {
    id: 'SVC_03',
    name: 'WEB',
    tagline: 'Desarrollo web profesional.',
    desc: 'Diseñamos sitios web profesionales orientados a fortalecer la presencia digital y generar nuevas oportunidades comerciales.',
    tags: ['Sitios web', 'Landing pages', 'Performance', 'SEO'],
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
        <span className={styles.eyebrow}>01 · SERVICIOS</span>
        <h2 className={styles.sectionTitle}>
          TECNOLOGÍA<br />
          APLICADA A<br />
          CADA EMPRESA<span className={styles.accentDot}>.</span>
        </h2>
        <p className={styles.sectionSub}>
          Desarrollamos soluciones digitales adaptadas a las necesidades y procesos de cada negocio.
        </p>
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
