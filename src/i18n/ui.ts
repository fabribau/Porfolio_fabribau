export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.style_guide': 'Guía de Estilo',
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar',

    // Theming & i18n
    'theme.toggle': 'Cambiar tema',
    'theme.light': 'Modo Claro',
    'theme.dark': 'Modo Oscuro',
    'lang.select': 'Seleccionar idioma',

    // Project & Status
    'project.status.in_progress': 'En desarrollo',
    'project.status.completed': 'Completado',
    'project.status.research': 'Investigación',
    'project.all': 'Todos los proyectos',
    'project.featured': 'Proyectos Destacados',
    'project.view_all': 'Ver todos los proyectos',
    'project.live_demo': 'Demo en vivo',
    'project.source_code': 'Código fuente',
    'project.key_features': 'Características principales',
    'project.tech_stack': 'Stack tecnológico',

    // Common CTAs & Labels
    'common.read_more': 'Leer más',
    'common.view_project': 'Ver proyecto',
    'common.view_code': 'Ver código',
    'common.back': 'Volver',
    'common.back_projects': '← Volver a Proyectos',
    'common.back_blog': '← Volver al Blog',
    'common.published_on': 'Publicado el',
    'common.copy': 'Copiar',
    'common.copied': '¡Copiado!',
    'common.download_cv': 'Descargar CV',
    'common.download_cv_academic': 'CV Académico',
    'common.download_cv_companies': 'CV Empresas',
    'common.get_in_touch': 'Hablemos de tu próximo proyecto',
    'common.years_exp': 'Años de experiencia',
    'common.read_time': 'min de lectura',

    // Hero section
    'hero.badge': 'Disponible para nuevos desafíos',
    'hero.title': 'Fabrizio José Riera Bauer',
    'hero.role': 'Ingeniero en Informática & Desarrollador FullStack',
    'hero.desc': 'Especializado en arquitecturas web modernas, IA conversacional con RAG y docencia universitaria.',
    'hero.cta_projects': 'Ver Proyectos',
    'hero.cta_about': 'Sobre mí',
    'hero.cta_contact': 'Contactar',

    // Home sections
    'home.about_summary': 'Ingeniero en Informática por la Universidad Nacional de San Luis (UNSL), docente universitario e investigador en sistemas de IA con Retrieval-Augmented Generation (RAG). Combino rigor científico con desarrollo ágil de software para crear plataformas sólidas y de alto impacto.',
    'home.latest_articles': 'Últimos Artículos',
    'home.latest_articles_desc': 'Publicaciones técnicas, reflexiones académicas e ingeniería de software.',
    'home.view_all_posts': 'Ver todos los artículos',

    // About Me Page
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Ingeniero en Informática, Desarrollador de Software y Docente Universitario en San Luis, Argentina.',
    'about.bio_title': 'Perfil Profesional',
    'about.bio_p1': 'Soy Ingeniero en Informática graduado de la Universidad Nacional de San Luis (UNSL), con pasión por el desarrollo FullStack, la inteligencia artificial aplicada y la enseñanza técnica.',
    'about.bio_p2': 'Mi trabajo de investigación y desarrollo se enfoca en arquitecturas de agentes conversacionales con RAG, optimización de aplicaciones web y plataformas escalables para el sector público y privado.',
    'about.experience_title': 'Experiencia Profesional & Académica',
    'about.education_title': 'Educación & Formación',
    'about.skills_title': 'Habilidades Técnicas',
    'about.skills_frontend': 'Frontend & UI',
    'about.skills_backend': 'Backend & APIs',
    'about.skills_ai': 'IA & Machine Learning',
    'about.skills_databases': 'Bases de Datos & Cloud',
    'about.skills_tools': 'DevOps & Herramientas',
    'about.languages_title': 'Idiomas',
    'about.lang_es': 'Español (Nativo)',
    'about.lang_en': 'Inglés (Intermedio / Técnico avanzado)',
    'about.location_title': 'Ubicación & Modalidad',
    'about.location_desc': 'San Luis, Argentina — Disponible para trabajo Remoto y Proyectos Globales.',

    // Projects Page
    'projects.title': 'Proyectos & Desarrollos',
    'projects.subtitle': 'Exploración de software, plataformas de producción, agentes de IA e iniciativas académicas.',
    'projects.filter_all': 'Todos',
    'projects.filter_in_progress': 'En desarrollo',
    'projects.filter_completed': 'Completados',

    // Blog Page
    'blog.title': 'Blog & Publicaciones',
    'blog.subtitle': 'Artículos técnicos, notas de investigación en IA, experiencias docentes y reflexiones de desarrollo.',
    'blog.no_posts': 'No hay publicaciones disponibles en este momento.',

    // Contact Page
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tenés una propuesta, proyecto o consulta? Escribime y conversemos.',
    'contact.form_name': 'Tu Nombre',
    'contact.form_email': 'Tu Correo Electrónico',
    'contact.form_subject': 'Asunto',
    'contact.form_message': 'Mensaje',
    'contact.form_name_placeholder': 'Ej. Juan Pérez',
    'contact.form_email_placeholder': 'nombre@ejemplo.com',
    'contact.form_subject_placeholder': 'Propuesta de proyecto / Consulta',
    'contact.form_message_placeholder': 'Contame los detalles de tu proyecto o propuesta...',
    'contact.form_submit': 'Enviar Mensaje',
    'contact.form_sending': 'Enviando...',
    'contact.form_success': '¡Mensaje recibido! Me pondré en contacto contigo a la brevedad.',
    'contact.form_error': 'Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo.',
    'contact.form_security': 'Protegido por Cloudflare Turnstile anti-bot.',
    'contact.direct_channels': 'Canales Directos',
    'contact.email_label': 'Correo Electrónico',
    'contact.linkedin_label': 'LinkedIn',
    'contact.github_label': 'GitHub',
    'contact.location_label': 'Ubicación',
    'contact.status_label': 'Disponibilidad',
    'contact.status_value': 'Abierto a propuestas FullStack e IA',

    // Footer
    'footer.built_with': 'Construido con',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.quick_links': 'Accesos Rápidos',
    'footer.social': 'Redes y Contacto',
    'footer.status': 'Sistema operativo v1.0 • Listo para producción',

    // Style Guide
    'styleguide.title': 'UI Kit Neobrutalista',
    'styleguide.subtitle': 'Sistema de componentes, tokens de diseño y micro-interacciones de fabribau.tech.',
    'styleguide.back_home': '← Volver al Inicio',
    'styleguide.colors': '01. Paleta de Colores & Tokens',
    'styleguide.colors_desc': 'Tokens de color primarios, de superficie y acentos vivos con alto contraste en modo claro y oscuro.',
    'styleguide.typography': '02. Tipografía & Jerarquías',
    'styleguide.typography_desc': 'Space Grotesk para display y titulares, Inter para lectura y JetBrains Mono para datos y código.',
    'styleguide.buttons': '03. Botones & Acciones',
    'styleguide.buttons_desc': 'Variantes de color, tamaños y estados mecánicos (hover, click press, disabled).',
    'styleguide.cards': '04. Tarjetas & Contenedores',
    'styleguide.cards_desc': 'Bordes 3px/4px, sombras duras offset y micro-rotación dinámica (hover-tilt).',
    'styleguide.badges_tags': '05. Badges & Tags',
    'styleguide.badges_tags_desc': 'Etiquetas de estado con radar-pulse animado y chips monospaced para tecnologías.',
    'styleguide.headers': '06. Encabezados de Sección',
    'styleguide.headers_desc': 'Títulos con efectos de marcador highlighter y distintivos numéricos.',
    'styleguide.interactive': '07. Micro-interacciones & Diferenciadores',
    'styleguide.interactive_desc': 'Pulsación física de botones, marcadores fluorescentes y tarjetas reactivas.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About me',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.style_guide': 'Style Guide',
    'nav.menu': 'Menu',
    'nav.close': 'Close',

    // Theming & i18n
    'theme.toggle': 'Toggle theme',
    'theme.light': 'Light Mode',
    'theme.dark': 'Dark Mode',
    'lang.select': 'Select language',

    // Project & Status
    'project.status.in_progress': 'In progress',
    'project.status.completed': 'Completed',
    'project.status.research': 'Research',
    'project.all': 'All projects',
    'project.featured': 'Featured Projects',
    'project.view_all': 'View all projects',
    'project.live_demo': 'Live demo',
    'project.source_code': 'Source code',
    'project.key_features': 'Key features',
    'project.tech_stack': 'Tech stack',

    // Common CTAs & Labels
    'common.read_more': 'Read more',
    'common.view_project': 'View project',
    'common.view_code': 'View code',
    'common.back': 'Back',
    'common.back_projects': '← Back to Projects',
    'common.back_blog': '← Back to Blog',
    'common.published_on': 'Published on',
    'common.copy': 'Copy',
    'common.copied': 'Copied!',
    'common.download_cv': 'Download CV',
    'common.download_cv_academic': 'Academic CV',
    'common.download_cv_companies': 'Industry CV',
    'common.get_in_touch': "Let's build something together",
    'common.years_exp': 'Years experience',
    'common.read_time': 'min read',

    // Hero section
    'hero.badge': 'Available for new challenges',
    'hero.title': 'Fabrizio José Riera Bauer',
    'hero.role': 'Informatics Engineer & FullStack Developer',
    'hero.desc': 'Specialized in modern web architectures, conversational AI with RAG, and university lecturing.',
    'hero.cta_projects': 'Explore Projects',
    'hero.cta_about': 'About Me',
    'hero.cta_contact': 'Get in Touch',

    // Home sections
    'home.about_summary': 'Informatics Engineer from Universidad Nacional de San Luis (UNSL), university lecturer, and researcher in AI systems using Retrieval-Augmented Generation (RAG). Combining academic rigor with agile software development to build resilient, high-impact platforms.',
    'home.latest_articles': 'Latest Articles',
    'home.latest_articles_desc': 'Technical write-ups, academic insights, and software engineering practices.',
    'home.view_all_posts': 'View all articles',

    // About Me Page
    'about.title': 'About Me',
    'about.subtitle': 'Informatics Engineer, Software Developer, and University Lecturer based in San Luis, Argentina.',
    'about.bio_title': 'Professional Profile',
    'about.bio_p1': 'I am an Informatics Engineer graduated from Universidad Nacional de San Luis (UNSL), passionate about FullStack development, applied artificial intelligence, and engineering education.',
    'about.bio_p2': 'My research and software work focuses on conversational agent architectures with RAG, web application performance optimization, and scalable platforms for public and private organizations.',
    'about.experience_title': 'Professional & Academic Experience',
    'about.education_title': 'Education & Qualifications',
    'about.skills_title': 'Technical Skills',
    'about.skills_frontend': 'Frontend & UI',
    'about.skills_backend': 'Backend & APIs',
    'about.skills_ai': 'AI & Machine Learning',
    'about.skills_databases': 'Databases & Cloud',
    'about.skills_tools': 'DevOps & Tools',
    'about.languages_title': 'Languages',
    'about.lang_es': 'Spanish (Native)',
    'about.lang_en': 'English (Intermediate / Professional Working)',
    'about.location_title': 'Location & Work Mode',
    'about.location_desc': 'San Luis, Argentina — Open to remote opportunities worldwide.',

    // Projects Page
    'projects.title': 'Projects & Engineering',
    'projects.subtitle': 'Software applications, production systems, AI agents, and academic research platforms.',
    'projects.filter_all': 'All',
    'projects.filter_in_progress': 'In Progress',
    'projects.filter_completed': 'Completed',

    // Blog Page
    'blog.title': 'Blog & Insights',
    'blog.subtitle': 'Technical deep dives, AI research notes, university teaching reflections, and software craftsmanship.',
    'blog.no_posts': 'No posts available at this moment.',

    // Contact Page
    'contact.title': 'Contact',
    'contact.subtitle': 'Have a project, opportunity, or idea in mind? Send me a message and let’s talk.',
    'contact.form_name': 'Your Name',
    'contact.form_email': 'Your Email Address',
    'contact.form_subject': 'Subject',
    'contact.form_message': 'Message',
    'contact.form_name_placeholder': 'e.g. John Doe',
    'contact.form_email_placeholder': 'name@example.com',
    'contact.form_subject_placeholder': 'Project proposal / Inquiry',
    'contact.form_message_placeholder': 'Tell me about your project or inquiry details...',
    'contact.form_submit': 'Send Message',
    'contact.form_sending': 'Sending...',
    'contact.form_success': 'Message received! I will get back to you shortly.',
    'contact.form_error': 'An error occurred while sending the message. Please try again.',
    'contact.form_security': 'Protected by Cloudflare Turnstile anti-bot.',
    'contact.direct_channels': 'Direct Channels',
    'contact.email_label': 'Email Address',
    'contact.linkedin_label': 'LinkedIn',
    'contact.github_label': 'GitHub',
    'contact.location_label': 'Location',
    'contact.status_label': 'Status',
    'contact.status_value': 'Available for FullStack & AI Projects',

    // Footer
    'footer.built_with': 'Built with',
    'footer.rights': 'All rights reserved.',
    'footer.quick_links': 'Quick Links',
    'footer.social': 'Social & Contact',
    'footer.status': 'Operating System v1.0 • Production ready',

    // Style Guide
    'styleguide.title': 'Neobrutalist UI Kit',
    'styleguide.subtitle': 'Component system, design tokens, and micro-interactions for fabribau.tech.',
    'styleguide.back_home': '← Back to Home',
    'styleguide.colors': '01. Color Palette & Tokens',
    'styleguide.colors_desc': 'Primary surfaces, deep backgrounds, and high-contrast vivid accents in light and dark modes.',
    'styleguide.typography': '02. Typography & Hierarchies',
    'styleguide.typography_desc': 'Space Grotesk for display and headlines, Inter for body copy, and JetBrains Mono for data & code.',
    'styleguide.buttons': '03. Buttons & Actions',
    'styleguide.buttons_desc': 'Color variants, sizes, and mechanical tactile states (hover, click press, disabled).',
    'styleguide.cards': '04. Cards & Containers',
    'styleguide.cards_desc': '3px/4px borders, hard offset shadows, and dynamic micro-tilt on hover.',
    'styleguide.badges_tags': '05. Badges & Tags',
    'styleguide.badges_tags_desc': 'Status labels with animated radar-pulse and monospaced tech chips.',
    'styleguide.headers': '06. Section Headers',
    'styleguide.headers_desc': 'Headings with fluorescent highlighter accents and numeric badges.',
    'styleguide.interactive': '07. Micro-interactions & Differentiators',
    'styleguide.interactive_desc': 'Physical button press, highlighter markers, and reactive cards.',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
