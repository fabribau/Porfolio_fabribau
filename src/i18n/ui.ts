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
    'project.thesis_pdf': 'Ver Tesis (PDF)',
    'project.private_system': 'Sistema de producción privado',
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
    'hero.greeting': '¡Hola! Soy Fabri, o si preferís el nombre largo:',
    'hero.title': 'Fabrizio José Riera Bauer',
    'hero.role': 'Ingeniero en Informática',
    'hero.desc':
      'Especializado en desarrollo fullstack, IA, docencia e investigación.',
    'hero.cta_projects': 'Ver Proyectos',
    'hero.cta_about': 'Sobre mí',
    'hero.cta_contact': 'Contactar',

    // Home sections
    'home.about_summary':
      'Ingeniero en Informática graduado en la Universidad Nacional de San Luis (UNSL), desarrollador de software, docente auxiliar de programación e investigador en sistemas de IA. Combino rigor científico y metodológico con desarrollo de software ágil para crear soluciones robustas, eficientes y de alto impacto.',
    'home.latest_articles': 'Últimos Artículos',
    'home.latest_articles_desc':
      'Algunas reflexiones, publicaciones técnicas/académicas, datos random e ingeniería de software.',
    'home.view_all_posts': 'Ver todos los artículos',

    // About Me Page
    'about.title': 'Sobre Mí',
    'about.subtitle':
      'Ingeniero en Informática, Docente Universitario e Investigador en IA en San Luis, Argentina.',
    'about.bio_title': 'Perfil Profesional & Académico',
    'about.bio_p1':
      'Hola soy Fabri, Ingeniero en Informática con capacidad para transformar requerimientos complejos en soluciones de software eficientes y escalables. Especializado en el desarrollo FullStack, la aplicación de Inteligencia Artificial (IA) y arquitecturas complejas de alto impacto, con experiencia como autor y expositor en congresos científicos.',
    'about.bio_p2':
      'Combino mi trayectoria docente en la Universidad Nacional de San Luis (UNSL) en materias centrales de resolución de problemas, algoritmos y programación, con experiencia práctica en la industria y el sector público, participando activamente en todas las etapas del ciclo de vida del software.', 
    'about.experience_title': 'Experiencia Profesional & Laboral',
    'about.teaching_title': 'Trayectoria Docente Universitaria',
    'about.education_title': 'Educación & Distinciones Académicas',
    'about.research_title': 'Investigación Científica & Publicaciones',
    'about.courses_title': 'Cursos Extracurriculares Dictados',
    'about.governance_title': 'Extensión y Gestión Universitaria',
    'about.skills_title': 'Habilidades Técnicas & Tecnologías',
    'about.skills_frontend': 'Frontend & UI',
    'about.skills_backend': 'Backend & APIs',
    'about.skills_ai': 'Inteligencia Artificial',
    'about.skills_databases': 'Bases de Datos & Cloud',
    'about.skills_tools': 'DevOps & Herramientas',
    'about.languages_title': 'Idiomas',
    'about.lang_es': 'Español (Nativo)',
    'about.lang_en': 'Inglés (Intermedio B1 Técnico)',
    'about.location_title': 'Ubicación & Modalidad',
    'about.location_desc': 'San Luis, Argentina — Estoy disponible para trabajo remoto y presencial.',

    // Projects Page
    'projects.title': 'Proyectos & Desarrollos',
    'projects.subtitle':
      'Una exploración de mis proyectos de software, plataformas en producción y desarrollos con IA.',
    'projects.filter_all': 'Todos',
    'projects.filter_in_progress': 'En desarrollo',
    'projects.filter_completed': 'Completados',

    // Blog Page
    'blog.title': 'Blog & Publicaciones',
    'blog.subtitle':
      'Algunas reflexiones, publicaciones técnicas/académicas, datos random e ingeniería de software.',
    'blog.no_posts': 'No hay publicaciones disponibles en este momento.',

    // Contact Page
    'contact.title': 'Contacto',
    'contact.subtitle':
      '¿Tenés una propuesta, proyecto o consulta? Escribime o contactame por acá o por mis redes.',
    'contact.form_name': 'Tu Nombre',
    'contact.form_email': 'Tu Correo Electrónico',
    'contact.form_subject': 'Asunto',
    'contact.form_message': 'Mensaje',
    'contact.form_name_placeholder': 'Ej. Juan Pérez',
    'contact.form_email_placeholder': 'nombre@ejemplo.com',
    'contact.form_subject_placeholder': 'Propuesta de proyecto / Consulta técnica',
    'contact.form_message_placeholder': 'Contame los detalles de tu proyecto o propuesta...',
    'contact.form_submit': 'Enviar Mensaje',
    'contact.form_sending': 'Enviando mensaje...',
    'contact.form_success':
      '¡Mensaje recibido con éxito! Me pondré en contacto contigo a la brevedad.',
    'contact.form_error':
      'Ocurrió un error al enviar el mensaje. Por favor revisa los campos e intenta de nuevo.',
    'contact.form_security': 'Protegido por Cloudflare Turnstile anti-bot',
    'contact.form_validation_name': 'El nombre debe tener al menos 2 caracteres.',
    'contact.form_validation_email': 'Ingresa un correo electrónico válido.',
    'contact.form_validation_subject': 'El asunto debe tener al menos 3 caracteres.',
    'contact.form_validation_message': 'El mensaje debe tener al menos 10 caracteres.',
    'contact.form_validation_message_max':
      'El mensaje no puede exceder los 3000 caracteres.',
    'contact.form_turnstile_pending':
      'Por favor completa la verificación de seguridad antes de enviar.',
    'contact.form_network_error':
      'Error de conexión. Verifica tu conexión a internet e intenta nuevamente.',
    'contact.direct_channels': 'Canales Directos',
    'contact.email_label': 'Correo Electrónico',
    'contact.whatsapp_label': 'Si es urgente, contactame por WhatsApp',
    'contact.whatsapp_cta': 'Chatear por WhatsApp',
    'contact.linkedin_label': 'LinkedIn',
    'contact.github_label': 'GitHub',
    'contact.location_label': 'Ubicación',
    'contact.status_label': 'Disponibilidad',
    'contact.status_value': 'Disponible para nuevos desafíos FullStack, IA y Docencia',

    // Footer
    'footer.built_with': 'Construido con',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.quick_links': 'Accesos Rápidos',
    'footer.social': 'Redes y Contacto',
    'footer.status': 'Listo para desarrollar nuevas soluciones',

    // Style Guide
    'styleguide.title': 'UI Kit Neobrutalista',
    'styleguide.subtitle':
      'Sistema de componentes, tokens de diseño y micro-interacciones de fabribau.tech.',
    'styleguide.back_home': 'Volver al Inicio',
    'styleguide.colors': '01. Paleta de Colores & Tokens',
    'styleguide.colors_desc':
      'Tokens de color primarios, de superficie y acentos vivos con alto contraste en modo claro y oscuro.',
    'styleguide.typography': '02. Tipografía & Jerarquías',
    'styleguide.typography_desc':
      'Space Grotesk para display y titulares, Inter para lectura y JetBrains Mono para datos y código.',
    'styleguide.buttons': '03. Botones & Acciones',
    'styleguide.buttons_desc':
      'Variantes de color, tamaños y estados mecánicos (hover, click press, disabled).',
    'styleguide.cards': '04. Tarjetas & Contenedores',
    'styleguide.cards_desc':
      'Bordes 3px/4px, sombras duras offset y micro-rotación dinámica (hover-tilt).',
    'styleguide.badges_tags': '05. Badges & Tags',
    'styleguide.badges_tags_desc':
      'Etiquetas de estado con radar-pulse animado y chips monospaced para tecnologías.',
    'styleguide.headers': '06. Encabezados de Sección',
    'styleguide.headers_desc':
      'Títulos con efectos de marcador highlighter y distintivos numéricos.',
    'styleguide.interactive': '07. Micro-interacciones & Diferenciadores',
    'styleguide.interactive_desc':
      'Pulsación física de botones, marcadores fluorescentes y tarjetas reactivas.',
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
    'project.thesis_pdf': 'Read Thesis (PDF)',
    'project.private_system': 'Private production system',
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
    'hero.greeting': "Hey! I'm Fabri, or if you prefer the long version:",
    'hero.title': 'Fabrizio José Riera Bauer',
    'hero.role': 'Software Engineer',
    'hero.desc':
      'Specialized in fullstack development, AI, teaching, and research.',
    'hero.cta_projects': 'Explore Projects',
    'hero.cta_about': 'About Me',
    'hero.cta_contact': 'Get in Touch',

    // Home sections
    'home.about_summary':
      'Software Engineer graduated from Universidad Nacional de San Luis (UNSL), software developer, programming teaching assistant, and AI systems researcher. I combine scientific and methodological rigor with agile software development to create robust, efficient, and high-impact solutions.',
    'home.latest_articles': 'Latest Articles',
    'home.latest_articles_desc':
      'Some reflections, technical/academic publications, random facts, and software engineering.',
    'home.view_all_posts': 'View all articles',

    // About Me Page
    'about.title': 'About Me',
    'about.subtitle':
      'Software Engineer, University Teacher, and AI Researcher in San Luis, Argentina.',
    'about.bio_title': 'Professional & Academic Profile',
    'about.bio_p1':
      "Hi, I'm Fabri, a Software Engineer with the ability to transform complex requirements into efficient and scalable software solutions. Specialized in FullStack development, applied Artificial Intelligence (AI), and complex high-impact architectures, with experience as an author and speaker at scientific conferences.",
    'about.bio_p2':
      'I blend my university teaching journey at Universidad Nacional de San Luis (UNSL) in core courses of problem solving, algorithms, and programming, with hands-on experience in the industry and public sector, actively participating in all stages of the software development lifecycle.',
    'about.experience_title': 'Professional & Industry Experience',
    'about.teaching_title': 'University Teaching Experience',
    'about.education_title': 'Education & Academic Distinctions',
    'about.research_title': 'Scientific Research & Publications',
    'about.courses_title': 'Taught Extracurricular Courses',
    'about.governance_title': 'University Governance & Outreach',
    'about.skills_title': 'Technical Skills & Technologies',
    'about.skills_frontend': 'Frontend & UI',
    'about.skills_backend': 'Backend & APIs',
    'about.skills_ai': 'Artificial Intelligence',
    'about.skills_databases': 'Databases & Cloud',
    'about.skills_tools': 'DevOps & Tools',
    'about.languages_title': 'Languages',
    'about.lang_es': 'Spanish (Native)',
    'about.lang_en': 'English (Intermediate B1 Technical)',
    'about.location_title': 'Location & Work Mode',
    'about.location_desc': 'San Luis, Argentina — I am available for remote and on-site work.',

    // Projects Page
    'projects.title': 'Projects & Engineering',
    'projects.subtitle':
      'An exploration of my software projects, platforms in production, and AI developments.',
    'projects.filter_all': 'All',
    'projects.filter_in_progress': 'In Progress',
    'projects.filter_completed': 'Completed',

    // Blog Page
    'blog.title': 'Blog & Insights',
    'blog.subtitle':
      'Some reflections, technical/academic publications, random facts, and software engineering.',
    'blog.no_posts': 'No posts available at this moment.',

    // Contact Page
    'contact.title': 'Contact',
    'contact.subtitle':
      'Got a proposal, project, or inquiry? Reach out to me here or through my social networks.',
    'contact.form_name': 'Your Name',
    'contact.form_email': 'Your Email Address',
    'contact.form_subject': 'Subject',
    'contact.form_message': 'Message',
    'contact.form_name_placeholder': 'e.g. John Doe',
    'contact.form_email_placeholder': 'name@example.com',
    'contact.form_subject_placeholder': 'Project proposal / Technical inquiry',
    'contact.form_message_placeholder': 'Tell me about your project or inquiry details...',
    'contact.form_submit': 'Send Message',
    'contact.form_sending': 'Sending message...',
    'contact.form_success': 'Message received successfully! I will get back to you shortly.',
    'contact.form_error':
      'An error occurred while sending the message. Please check the fields and try again.',
    'contact.form_security': 'Protected by Cloudflare Turnstile anti-bot',
    'contact.form_validation_name': 'Name must be at least 2 characters.',
    'contact.form_validation_email': 'Please enter a valid email address.',
    'contact.form_validation_subject': 'Subject must be at least 3 characters.',
    'contact.form_validation_message': 'Message must be at least 10 characters.',
    'contact.form_validation_message_max': 'Message cannot exceed 3000 characters.',
    'contact.form_turnstile_pending': 'Please complete the security check before submitting.',
    'contact.form_network_error':
      'Network error. Please check your internet connection and try again.',
    'contact.direct_channels': 'Direct Channels',
    'contact.email_label': 'Email Address',
    'contact.whatsapp_label': 'If it is urgent, contact me via WhatsApp',
    'contact.whatsapp_cta': 'Chat on WhatsApp',
    'contact.linkedin_label': 'LinkedIn',
    'contact.github_label': 'GitHub',
    'contact.location_label': 'Location',
    'contact.status_label': 'Status',
    'contact.status_value': 'Available for FullStack, AI & Teaching Opportunities',

    // Footer
    'footer.built_with': 'Built with',
    'footer.rights': 'All rights reserved.',
    'footer.quick_links': 'Quick Links',
    'footer.social': 'Social & Contact',
    'footer.status': 'Ready to build new solutions',

    // Style Guide
    'styleguide.title': 'Neobrutalist UI Kit',
    'styleguide.subtitle':
      'Component system, design tokens, and micro-interactions for fabribau.tech.',
    'styleguide.back_home': 'Back to Home',
    'styleguide.colors': '01. Color Palette & Tokens',
    'styleguide.colors_desc':
      'Primary surfaces, deep backgrounds, and high-contrast vivid accents in light and dark modes.',
    'styleguide.typography': '02. Typography & Hierarchies',
    'styleguide.typography_desc':
      'Space Grotesk for display and headlines, Inter for body copy, and JetBrains Mono for data & code.',
    'styleguide.buttons': '03. Buttons & Actions',
    'styleguide.buttons_desc':
      'Color variants, sizes, and mechanical tactile states (hover, click press, disabled).',
    'styleguide.cards': '04. Cards & Containers',
    'styleguide.cards_desc':
      '3px/4px borders, hard offset shadows, and dynamic micro-tilt on hover.',
    'styleguide.badges_tags': '05. Badges & Tags',
    'styleguide.badges_tags_desc':
      'Status labels with animated radar-pulse and monospaced tech chips.',
    'styleguide.headers': '06. Section Headers',
    'styleguide.headers_desc': 'Headings with fluorescent highlighter accents and numeric badges.',
    'styleguide.interactive': '07. Micro-interactions & Differentiators',
    'styleguide.interactive_desc':
      'Physical button press, highlighter markers, and reactive cards.',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
