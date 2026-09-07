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
      pages: [
        { to: '/', label: 'Inicio' },
        { to: '/odoo', label: 'Odoo' },
        { to: '/landing', label: 'Landing' },
        { to: '/desarrollo', label: 'Desarrollo' },
      ],
      cta: 'Trabajemos juntos',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      langLabel: 'Cambiar idioma',
    },

    /* ── HOME ("/") — página paraguas (Fase 2) ─────────────── */
    home: {
      hero: {
        eyebrow: 'Estudio digital — Córdoba, AR',
        titleLines: ['UN ESTUDIO.', 'TRES FORMAS', 'DE CONSTRUIR'],
        sub: 'Clue Dev construye el lado digital de tu negocio. Una marca, tres formas de trabajar: sistemas Odoo, landing pages y software a medida. Elegí por dónde entrar.',
        ctaPrimary: 'Ver servicios',
        ctaSecondary: 'Hablemos',
        spec: [
          { k: 'Servicios', v: 'Tres' },
          { k: 'Base', v: 'Córdoba, AR' },
          { k: 'Trabajo', v: 'B2B + Pyme' },
        ],
        scrollHint: 'Servicios',
      },
      services: {
        eyebrow: 'Los servicios',
        title: 'Elegí tu puerta',
        note: 'Tres caras, un solo estándar.',
        items: [
          {
            id: 'odoo', face: 'odoo', index: '01', route: '/odoo',
            name: 'ODOO',
            oneLiner: 'Desarrollo y módulos a medida',
            desc: 'El brazo de desarrollo Odoo para otras implementadoras. Módulos a medida sobre los requerimientos de tus clientes, más módulos propios para el marketplace.',
            cta: 'Entrar a Odoo',
          },
          {
            id: 'landing', face: 'landing', index: '02', route: '/landing',
            name: 'LANDING',
            oneLiner: 'Sitios simples con foco en diseño',
            desc: 'Nuestra vidriera creativa: landing pages y sitios que priorizan el diseño. Rápidos, claros y hechos para convertir.',
            cta: 'Entrar a Landing',
          },
          {
            id: 'dev', face: 'dev', index: '03', route: '/desarrollo',
            name: 'DESARROLLO',
            oneLiner: 'Software a medida para tu empresa',
            desc: 'Del relevamiento al desarrollo: sistemas a medida para pymes y empresas. Resolvemos el problema real, sin vender tecnicismos.',
            cta: 'Entrar a Desarrollo',
          },
        ],
      },
      brand: {
        line: 'Una marca, tres formas de construir digital.',
        strong: 'El mismo estándar en las tres.',
      },
      contact: {
        eyebrow: 'Contacto',
        title: 'HABLEMOS',
        sub: 'Contanos qué necesitás y te decimos por dónde empezar.',
        fields: { name: 'Nombre', email: 'Email', message: 'Mensaje' },
        placeholders: { name: 'Tu nombre', email: 'tu@email.com', message: '¿Qué querés construir?' },
        send: 'Enviar mensaje',
        sending: 'Enviando…',
        ok: 'Listo. Te respondemos a la brevedad.',
        error: 'No se pudo enviar. Probá de nuevo o escribinos por mail.',
      },
    },

    /* ── LANDING ("/landing") — vidriera de landing pages ──────
       Registro: cálido y aspiracional, para emprendedores y marcas
       personales. Equilibra diseño (atrae) y resultado (convierte). */
    landing: {
      hero: {
        eyebrow: 'CLUE_DEV · LANDING PAGES · CBA, AR',
        titleA: 'Diseño que atrae',
        titleB: 'Código que convierte',
        sub: 'Unimos diseño y desarrollo para crear webs que se ven increíbles y trabajan para vos: rápidas, claras y pensadas para convertir visitas en clientes.',
        cta: 'Hablemos →',
        hud: ['01 · DISEÑO', '02 · DESARROLLO', '03 · ONLINE'],
      },
      portfolio: {
        eyebrow: '✦ Trabajos',
        titleLines: ['PROYECTOS QUE', 'HABLAN POR', 'NOSOTROS'],
        sub: 'Una selección de webs y landing pages que diseñamos y desarrollamos de punta a punta.',
        linkLabel: 'Ver proyecto',
        placeholderNote: 'Captura en camino',
        /* Cada item: slug = nombre del archivo en assets/images/portfolio/.
           Si el archivo no existe, se muestra un placeholder on-brand.
           link vacío ('') = card no clickeable. Editá libremente. */
        items: [
          { slug: 'proyecto-01', title: 'Marca personal', type: 'Landing page · Marca personal', desc: 'Landing para una marca personal, con foco en captar contactos.', url: 'marca-personal.com', link: '' },
          { slug: 'proyecto-02', title: 'Tienda online', type: 'E-commerce · UX/UI', desc: 'Rediseño completo de una tienda online: más simple, más ventas.', url: 'tienda-online.com', link: '' },
          { slug: 'proyecto-03', title: 'Estudio creativo', type: 'Sitio web · Identidad', desc: 'Sitio institucional para un estudio creativo, con foco en el portfolio.', url: 'estudio-creativo.com', link: '' },
          { slug: 'proyecto-04', title: 'App landing', type: 'Landing page · Producto', desc: 'Landing de lanzamiento para una app, pensada para descargas.', url: 'app-landing.com', link: '' },
          { slug: 'proyecto-05', title: 'Gastronomía', type: 'Sitio web · Reservas', desc: 'Web para un restaurante con menú y reservas online.', url: 'gastro.com', link: '' },
          { slug: 'proyecto-06', title: 'Coach & cursos', type: 'Landing page · Educación', desc: 'Landing para vender un curso online, optimizada para conversión.', url: 'coach-cursos.com', link: '' },
        ],
      },
      marquee: ['DISEÑO WEB', 'UX/UI', 'RESPONSIVE', 'IDENTIDAD VISUAL', 'LANDING PAGES', 'SEO', 'PERFORMANCE', 'MOTION'],
      process: {
        eyebrow: '✦ 02 — Proceso',
        titleLines: ['DE LA IDEA', 'AL LANZAMIENTO'],
        lede: 'Un camino simple y ágil, de la primera charla a tu web online.',
        strong: 'Así lo hacemos realidad.',
        steps: [
          { id: '01', title: 'Charla', desc: 'Nos contás tu proyecto, tu marca y qué querés lograr. Sin vueltas.' },
          { id: '02', title: 'Diseño', desc: 'Diseñamos una propuesta visual hecha para vos, y la ajustamos hasta que te enamore.' },
          { id: '03', title: 'Desarrollo', desc: 'La construimos rápida, responsive y lista para buscadores.' },
          { id: '04', title: 'Publicación', desc: 'La ponemos online y te dejamos todo listo para crecer.' },
        ],
      },
      contact: {
        eyebrow: 'CONTACTO',
        title: 'Hablemos',
        labels: {
          nombre: 'Nombre',
          empresa: 'Marca o proyecto',
          rol: 'Rol',
          email: 'Email',
          servicio: 'Servicio',
          mensaje: 'Contanos sobre tu proyecto',
        },
        chips: ['Landing page', 'Sitio web', 'Rediseño', 'Otro'],
        submit: 'Enviar mensaje →',
        sending: 'Enviando…',
        validationService: 'Elegí un tipo de servicio.',
        success: '¡Mensaje enviado! Te contactamos a la brevedad.',
        errorGeneric: 'No se pudo enviar. Probá de nuevo en un momento.',
        errorNetwork: 'Error de conexión. Probá de nuevo en un momento.',
      },
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
      pages: [
        { to: '/', label: 'Home' },
        { to: '/odoo', label: 'Odoo' },
        { to: '/landing', label: 'Landing' },
        { to: '/desarrollo', label: 'Development' },
      ],
      cta: "Let's work together",
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      langLabel: 'Change language',
    },

    /* ── HOME ("/") — umbrella page (Phase 2) ──────────────── */
    home: {
      hero: {
        eyebrow: 'Digital studio — Córdoba, AR',
        titleLines: ['ONE STUDIO.', 'THREE WAYS', 'TO BUILD'],
        sub: 'Clue Dev builds the digital side of your business. One brand, three ways to work: Odoo systems, landing pages and custom software. Pick your door.',
        ctaPrimary: 'See services',
        ctaSecondary: "Let's talk",
        spec: [
          { k: 'Services', v: 'Three' },
          { k: 'Based in', v: 'Córdoba, AR' },
          { k: 'We serve', v: 'B2B + SMB' },
        ],
        scrollHint: 'Services',
      },
      services: {
        eyebrow: 'The services',
        title: 'Pick your door',
        note: 'Three faces, one standard.',
        items: [
          {
            id: 'odoo', face: 'odoo', index: '01', route: '/odoo',
            name: 'ODOO',
            oneLiner: 'Custom development & modules',
            desc: "The Odoo development arm for other implementers. Custom modules built to your clients' needs, plus our own modules for the marketplace.",
            cta: 'Enter Odoo',
          },
          {
            id: 'landing', face: 'landing', index: '02', route: '/landing',
            name: 'LANDING',
            oneLiner: 'Simple sites, design-first',
            desc: 'Our creative shopfront: landing pages and sites that put design first. Fast, clear and built to convert.',
            cta: 'Enter Landing',
          },
          {
            id: 'dev', face: 'dev', index: '03', route: '/desarrollo',
            name: 'DEVELOPMENT',
            oneLiner: 'Custom software for your company',
            desc: 'From discovery to development: custom systems for SMEs and companies. We solve the real problem, no jargon.',
            cta: 'Enter Development',
          },
        ],
      },
      brand: {
        line: 'One brand, three ways to build digital.',
        strong: 'The same standard across all three.',
      },
      contact: {
        eyebrow: 'Contact',
        title: "LET'S TALK",
        sub: "Tell us what you need and we'll point you to the right door.",
        fields: { name: 'Name', email: 'Email', message: 'Message' },
        placeholders: { name: 'Your name', email: 'you@email.com', message: 'What do you want to build?' },
        send: 'Send message',
        sending: 'Sending…',
        ok: "Done. We'll get back to you shortly.",
        error: "Couldn't send. Try again or email us.",
      },
    },

    /* ── LANDING ("/landing") — landing-pages shopfront ──────── */
    landing: {
      hero: {
        eyebrow: 'CLUE_DEV · LANDING PAGES · CBA, AR',
        titleA: 'Design that attracts',
        titleB: 'Code that converts',
        sub: 'We combine design and development to create sites that look incredible and work for you: fast, clear and built to turn visitors into clients.',
        cta: "Let's talk →",
        hud: ['01 · DESIGN', '02 · BUILD', '03 · LIVE'],
      },
      portfolio: {
        eyebrow: '✦ Selected work',
        titleLines: ['WORK THAT', 'SPEAKS FOR', 'ITSELF'],
        sub: 'A selection of sites and landing pages we designed and built end to end.',
        linkLabel: 'View project',
        placeholderNote: 'Shot coming soon',
        items: [
          { slug: 'proyecto-01', title: 'Personal brand', type: 'Landing page · Personal brand', desc: 'Landing for a personal brand, focused on capturing leads.', url: 'marca-personal.com', link: '' },
          { slug: 'proyecto-02', title: 'Online store', type: 'E-commerce · UX/UI', desc: 'Full redesign of an online store: simpler, more sales.', url: 'tienda-online.com', link: '' },
          { slug: 'proyecto-03', title: 'Creative studio', type: 'Website · Identity', desc: 'Institutional site for a creative studio, portfolio-focused.', url: 'estudio-creativo.com', link: '' },
          { slug: 'proyecto-04', title: 'App landing', type: 'Landing page · Product', desc: 'Launch landing for an app, built for downloads.', url: 'app-landing.com', link: '' },
          { slug: 'proyecto-05', title: 'Restaurant', type: 'Website · Bookings', desc: 'Site for a restaurant with menu and online bookings.', url: 'gastro.com', link: '' },
          { slug: 'proyecto-06', title: 'Coach & courses', type: 'Landing page · Education', desc: 'Landing to sell an online course, conversion-optimized.', url: 'coach-cursos.com', link: '' },
        ],
      },
      marquee: ['WEB DESIGN', 'UX/UI', 'RESPONSIVE', 'VISUAL IDENTITY', 'LANDING PAGES', 'SEO', 'PERFORMANCE', 'MOTION'],
      process: {
        eyebrow: '✦ 02 — Process',
        titleLines: ['FROM IDEA', 'TO LAUNCH'],
        lede: 'A simple, agile path from first chat to your site online.',
        strong: 'This is how we make it real.',
        steps: [
          { id: '01', title: 'Chat', desc: 'You tell us about your project, your brand and your goals. No fuss.' },
          { id: '02', title: 'Design', desc: 'We design a visual proposal made for you, refined until you love it.' },
          { id: '03', title: 'Build', desc: 'We build it fast, responsive and search-ready.' },
          { id: '04', title: 'Launch', desc: 'We take it live and leave everything ready to grow.' },
        ],
      },
      contact: {
        eyebrow: 'CONTACT',
        title: "Let's talk",
        labels: {
          nombre: 'Name',
          empresa: 'Brand or project',
          rol: 'Role',
          email: 'Email',
          servicio: 'Service',
          mensaje: 'Tell us about your project',
        },
        chips: ['Landing page', 'Website', 'Redesign', 'Other'],
        submit: 'Send message →',
        sending: 'Sending…',
        validationService: 'Choose a service type.',
        success: "Message sent! We'll get back to you shortly.",
        errorGeneric: "Couldn't send. Try again in a moment.",
        errorNetwork: 'Connection error. Try again in a moment.',
      },
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
