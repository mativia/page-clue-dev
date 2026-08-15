/* ============================================================
   Clue Dev — Copy ES / EN
   Todo el texto del sitio vive acá. Para editar la web no hace
   falta tocar componentes: editás este archivo.

   Registro: B2B técnico. El lector primario es un dev o un líder
   técnico de otra implementadora de Odoo, no un cliente final.
   ============================================================ */

export const LANGS = ['es', 'en']

export const COPY = {
  /* ══════════════════════════════════════════════════════════
     ESPAÑOL
     ══════════════════════════════════════════════════════════ */
  es: {
    nav: {
      links: [
        { label: 'Servicios', id: 'servicios' },
        { label: 'Módulos', id: 'modulos' },
        { label: 'Proceso', id: 'proceso' },
        { label: 'Contacto', id: 'contacto' },
      ],
      cta: 'Trabajemos juntos',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      langLabel: 'Cambiar idioma',
    },

    hero: {
      status: 'Disponible para nuevos proyectos',
      titleLines: ['MÓDULOS Y', 'DESARROLLO ODOO', 'A MEDIDA'],
      sub: 'Somos el brazo de desarrollo Odoo para implementadoras y equipos que necesitan capacidad técnica. Desarrollamos y adaptamos módulos sobre los requerimientos de tus clientes, sin que tengas que sumar equipo.',
      ctaPrimary: 'Trabajemos juntos',
      ctaSecondary: 'Ver servicios',
      spec: [
        { k: 'Enfoque', v: '100% Odoo' },
        { k: 'Stack', v: 'Python / QWeb / XML' },
        { k: 'Modelo', v: 'B2B' },
        { k: 'Base', v: 'Córdoba, AR' },
      ],
      scrollHint: 'Scroll',
    },

    partners: {
      eyebrow: '01 · Para implementadoras',
      titleLines: ['SI IMPLEMENTÁS', 'ODOO, DESARROLLAMOS', 'POR VOS'],
      lede: 'No competimos por tus clientes. Trabajamos detrás de tu equipo para que puedas tomar más proyectos sin frenar los que ya tenés.',
      points: [
        {
          tag: 'Capacidad',
          title: 'Sumás horas, no headcount',
          desc: 'Ampliás la capacidad de desarrollo cuando el proyecto lo pide y la soltás cuando termina. Sin abrir una búsqueda ni sostener un sueldo entre proyectos.',
        },
        {
          tag: 'Relación',
          title: 'El cliente sigue siendo tuyo',
          desc: 'Trabajamos detrás de tu equipo. La relación comercial con tu cliente no la tocamos: vos definís cuánta visibilidad tenemos.',
        },
        {
          tag: 'Lenguaje',
          title: 'Requerimientos, no briefs',
          desc: 'Hablamos en alcance, dependencias y versión de Odoo desde la primera conversación. No hay que traducirnos el problema.',
        },
      ],
    },

    services: {
      eyebrow: '02 · Servicios',
      titleLines: ['DESARROLLO', 'ODOO PARA', 'IMPLEMENTADORAS'],
      sub: 'Especialistas en Odoo. Desarrollamos, adaptamos y publicamos módulos para que otras empresas escalen sin frenar sus proyectos.',
      items: [
        {
          id: 'SVC_01',
          name: 'DESARROLLO TERCERIZADO',
          tagline: 'Tu brazo técnico en Odoo.',
          desc: 'Sumamos capacidad de desarrollo a implementadoras y partners. Tomamos los requerimientos técnicos de tus clientes y los resolvemos, sin que tengas que ampliar tu equipo.',
          tags: ['Para partners', 'Python / QWeb', 'Odoo.sh', 'Migraciones'],
        },
        {
          id: 'SVC_02',
          name: 'MÓDULOS A MEDIDA',
          tagline: 'Desarrollo y adaptación de módulos.',
          desc: 'Creamos módulos nuevos o modificamos los existentes para adaptar Odoo a procesos específicos. Desarrollo limpio, versionado y listo para producción.',
          tags: ['Módulos custom', 'Integraciones', 'APIs', 'Fixes'],
        },
        {
          id: 'SVC_03',
          name: 'MÓDULOS LISTOS',
          tagline: 'Soluciones propias para el marketplace.',
          desc: 'Desarrollamos módulos que resuelven necesidades generales o problemas específicos aún no cubiertos, listos para instalar y ofrecer desde el Odoo App Store.',
          tags: ['App Store', 'Plug & play', 'Soporte', 'Actualizaciones'],
        },
      ],
    },

    modules: {
      eyebrow: '03 · Módulos propios',
      titleLines: ['SOLUCIONES', 'PARA EL ODOO', 'APP STORE'],
      lede: 'Además del desarrollo a pedido, construimos módulos propios que resuelven necesidades generales o huecos que Odoo todavía no cubre.',
      statusLabels: {
        building: 'En desarrollo',
        soon: 'Próximamente',
      },
      redactedNote: 'Nombre por anunciar',
      ctaCard: {
        title: '¿Necesitás un módulo que no existe?',
        desc: 'Si tu cliente pide algo que no está en el App Store, lo construimos.',
        action: 'Contanos qué falta',
      },
    },

    process: {
      eyebrow: '04 · Proceso',
      titleLines: ['CÓMO', 'TRABAJAMOS'],
      lede: 'Un camino claro, del requerimiento a la entrega.',
      ledeStrong: 'Sin sorpresas en el medio.',
      steps: [
        {
          id: '01',
          title: 'Briefing técnico',
          desc: 'Recibimos el requerimiento de tu cliente y definimos alcance, dependencias y versión de Odoo. Hablamos tu idioma técnico.',
        },
        {
          id: '02',
          title: 'Estimación',
          desc: 'Plazos y horas reales, sin sorpresas. Te decimos qué se puede hacer, cuánto lleva y arrancamos.',
        },
        {
          id: '03',
          title: 'Desarrollo',
          desc: 'Construimos el módulo a medida con código limpio y versionado, con avances visibles y comunicación directa.',
        },
        {
          id: '04',
          title: 'Entrega y handoff',
          desc: 'Te entregamos el módulo probado y documentado, listo para que lo despliegues en el proyecto de tu cliente.',
        },
      ],
    },

    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos',
      intro: 'Contanos el requerimiento y te respondemos con preguntas técnicas concretas o una estimación.',
      nextTitle: 'Qué pasa después',
      next: [
        'Leemos el requerimiento y revisamos alcance y dependencias.',
        'Te respondemos con preguntas técnicas o una estimación de horas.',
        'Si cierra, definimos versión, entorno y arrancamos.',
      ],
      directTitle: 'Directo',
      socialsTitle: 'Redes',
      services: ['Desarrollo tercerizado', 'Módulo a medida', 'Módulo del marketplace'],
      labels: {
        nombre: 'Nombre',
        empresa: 'Empresa',
        rol: 'Rol',
        email: 'Email',
        servicio: 'Servicio',
        mensaje: 'Describí tu proyecto o necesidad',
      },
      submit: 'Enviar mensaje',
      sending: 'Enviando…',
      okMsg: '¡Mensaje enviado! Te contactamos a la brevedad.',
      errPick: 'Elegí un tipo de servicio.',
      errGeneric: 'No se pudo enviar. Probá de nuevo en un momento.',
      errNetwork: 'Error de conexión. Probá de nuevo en un momento.',
      radiogroupLabel: 'Tipo de servicio',
    },

    footer: {
      tagline: 'Desarrollo Odoo para implementadoras. Módulos a medida y soluciones propias para el App Store.',
      navTitle: 'Navegación',
      contactTitle: 'Contacto',
      copy: 'Clue Dev. Córdoba, Argentina.',
      legal: 'Odoo es una marca registrada de Odoo S.A. Clue Dev no está afiliada a Odoo S.A.',
    },
  },

  /* ══════════════════════════════════════════════════════════
     ENGLISH
     ══════════════════════════════════════════════════════════ */
  en: {
    nav: {
      links: [
        { label: 'Services', id: 'servicios' },
        { label: 'Modules', id: 'modulos' },
        { label: 'Process', id: 'proceso' },
        { label: 'Contact', id: 'contacto' },
      ],
      cta: "Let's work together",
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      langLabel: 'Change language',
    },

    hero: {
      status: 'Available for new projects',
      titleLines: ['CUSTOM ODOO', 'MODULES AND', 'DEVELOPMENT'],
      sub: 'We are the Odoo development arm for implementers and teams that need technical capacity. We build and adapt modules against your clients’ requirements, without you having to grow your team.',
      ctaPrimary: "Let's work together",
      ctaSecondary: 'See services',
      spec: [
        { k: 'Focus', v: '100% Odoo' },
        { k: 'Stack', v: 'Python / QWeb / XML' },
        { k: 'Model', v: 'B2B' },
        { k: 'Based in', v: 'Córdoba, AR' },
      ],
      scrollHint: 'Scroll',
    },

    partners: {
      eyebrow: '01 · For implementers',
      titleLines: ['YOU IMPLEMENT', 'ODOO. WE DO THE', 'DEVELOPMENT'],
      lede: 'We do not compete for your clients. We work behind your team so you can take on more projects without stalling the ones you already have.',
      points: [
        {
          tag: 'Capacity',
          title: 'Add hours, not headcount',
          desc: 'Scale development capacity up when a project calls for it and release it when the project ends. No hiring process, no salary to carry between projects.',
        },
        {
          tag: 'Relationship',
          title: 'The client stays yours',
          desc: 'We work behind your team. We do not touch the commercial relationship with your client: you decide how visible we are.',
        },
        {
          tag: 'Language',
          title: 'Requirements, not briefs',
          desc: 'We talk scope, dependencies and Odoo version from the first conversation. Nobody has to translate the problem for us.',
        },
      ],
    },

    services: {
      eyebrow: '02 · Services',
      titleLines: ['ODOO', 'DEVELOPMENT FOR', 'IMPLEMENTERS'],
      sub: 'Odoo specialists. We build, adapt and publish modules so other companies can scale without stalling their projects.',
      items: [
        {
          id: 'SVC_01',
          name: 'OUTSOURCED DEVELOPMENT',
          tagline: 'Your technical arm in Odoo.',
          desc: 'We add development capacity to implementers and partners. We take your clients’ technical requirements and solve them, without you having to grow your team.',
          tags: ['For partners', 'Python / QWeb', 'Odoo.sh', 'Migrations'],
        },
        {
          id: 'SVC_02',
          name: 'CUSTOM MODULES',
          tagline: 'Module development and adaptation.',
          desc: 'We create new modules or modify existing ones to fit Odoo to specific processes. Clean, versioned code, production ready.',
          tags: ['Custom modules', 'Integrations', 'APIs', 'Fixes'],
        },
        {
          id: 'SVC_03',
          name: 'READY-MADE MODULES',
          tagline: 'Our own solutions for the marketplace.',
          desc: 'We develop modules that solve general needs or specific problems not yet covered, ready to install and offer from the Odoo App Store.',
          tags: ['App Store', 'Plug & play', 'Support', 'Updates'],
        },
      ],
    },

    modules: {
      eyebrow: '03 · Our own modules',
      titleLines: ['SOLUTIONS', 'FOR THE ODOO', 'APP STORE'],
      lede: 'Beyond development on demand, we build our own modules that solve general needs or gaps Odoo does not cover yet.',
      statusLabels: {
        building: 'In development',
        soon: 'Coming soon',
      },
      redactedNote: 'Name to be announced',
      ctaCard: {
        title: 'Need a module that does not exist?',
        desc: 'If your client asks for something that is not on the App Store, we build it.',
        action: 'Tell us what is missing',
      },
    },

    process: {
      eyebrow: '04 · Process',
      titleLines: ['HOW', 'WE WORK'],
      lede: 'A clear path, from requirement to delivery.',
      ledeStrong: 'No surprises in between.',
      steps: [
        {
          id: '01',
          title: 'Technical briefing',
          desc: 'We take your client’s requirement and define scope, dependencies and Odoo version. We speak your technical language.',
        },
        {
          id: '02',
          title: 'Estimate',
          desc: 'Real timelines and hours, no surprises. We tell you what can be done, how long it takes, and we start.',
        },
        {
          id: '03',
          title: 'Development',
          desc: 'We build the custom module with clean, versioned code, with visible progress and direct communication.',
        },
        {
          id: '04',
          title: 'Delivery and handoff',
          desc: 'We hand over the module tested and documented, ready for you to deploy on your client’s project.',
        },
      ],
    },

    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      intro: 'Tell us the requirement and we will reply with concrete technical questions or an estimate.',
      nextTitle: 'What happens next',
      next: [
        'We read the requirement and review scope and dependencies.',
        'We reply with technical questions or an estimate in hours.',
        'If it works, we agree on version and environment and start.',
      ],
      directTitle: 'Direct',
      socialsTitle: 'Social',
      services: ['Outsourced development', 'Custom module', 'Marketplace module'],
      labels: {
        nombre: 'Name',
        empresa: 'Company',
        rol: 'Role',
        email: 'Email',
        servicio: 'Service',
        mensaje: 'Describe your project or need',
      },
      submit: 'Send message',
      sending: 'Sending…',
      okMsg: 'Message sent! We will get back to you shortly.',
      errPick: 'Pick a service type.',
      errGeneric: 'Could not send. Please try again in a moment.',
      errNetwork: 'Connection error. Please try again in a moment.',
      radiogroupLabel: 'Service type',
    },

    footer: {
      tagline: 'Odoo development for implementers. Custom modules and our own solutions for the App Store.',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      copy: 'Clue Dev. Córdoba, Argentina.',
      legal: 'Odoo is a registered trademark of Odoo S.A. Clue Dev is not affiliated with Odoo S.A.',
    },
  },
}

/* ── Marquee — términos técnicos, iguales en ambos idiomas ─── */
export const MARQUEE_ITEMS = [
  'DESARROLLO ODOO',
  'MÓDULOS A MEDIDA',
  'ODOO APP STORE',
  'MIGRACIONES',
  'INTEGRACIONES',
  'ODOO.SH',
  'QWEB',
  'PYTHON',
  'ERP',
]
