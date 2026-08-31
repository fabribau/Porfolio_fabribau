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

    // Common CTAs
    'common.read_more': 'Leer más',
    'common.view_project': 'Ver proyecto',
    'common.view_code': 'Ver código',
    'common.back': 'Volver',
    'common.published_on': 'Publicado el',
    'common.copy': 'Copiar',
    'common.copied': '¡Copiado!',
    'common.download_cv': 'Descargar CV',

    // Hero section
    'hero.badge': 'Disponible para nuevos desafíos',
    'hero.title': 'Fabrizio José Riera Bauer',
    'hero.role': 'Ingeniero en Informática & Desarrollador FullStack',
    'hero.desc': 'Especializado en arquitecturas web modernas, IA conversacional con RAG y docencia universitaria.',
    'hero.cta_projects': 'Ver Proyectos',
    'hero.cta_contact': 'Contactar',

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

    // Common CTAs
    'common.read_more': 'Read more',
    'common.view_project': 'View project',
    'common.view_code': 'View code',
    'common.back': 'Back',
    'common.published_on': 'Published on',
    'common.copy': 'Copy',
    'common.copied': 'Copied!',
    'common.download_cv': 'Download CV',

    // Hero section
    'hero.badge': 'Available for new challenges',
    'hero.title': 'Fabrizio José Riera Bauer',
    'hero.role': 'Informatics Engineer & FullStack Developer',
    'hero.desc': 'Specialized in modern web architectures, conversational AI with RAG, and university teaching.',
    'hero.cta_projects': 'Explore Projects',
    'hero.cta_contact': 'Get in Touch',

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
