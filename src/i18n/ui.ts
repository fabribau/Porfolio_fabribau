export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'theme.toggle': 'Cambiar tema',
    'theme.light': 'Modo Claro',
    'theme.dark': 'Modo Oscuro',
    'lang.select': 'Seleccionar idioma',
    'project.status.in_progress': 'En desarrollo',
    'project.status.completed': 'Completado',
    'common.read_more': 'Leer más',
    'common.view_project': 'Ver proyecto',
    'common.view_code': 'Ver código',
    'common.back': 'Volver',
    'common.published_on': 'Publicado el',
    'hero.badge': 'Disponible para nuevos desafíos',
    'hero.title': 'Fabrizio José Riera Bauer',
    'hero.role': 'Ingeniero en Informática & Desarrollador FullStack',
    'hero.desc': 'Especializado en arquitecturas web modernas, IA conversacional con RAG y docencia universitaria.',
    'hero.cta_projects': 'Ver Proyectos',
    'hero.cta_contact': 'Contactar',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About me',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'theme.toggle': 'Toggle theme',
    'theme.light': 'Light Mode',
    'theme.dark': 'Dark Mode',
    'lang.select': 'Select language',
    'project.status.in_progress': 'In progress',
    'project.status.completed': 'Completed',
    'common.read_more': 'Read more',
    'common.view_project': 'View project',
    'common.view_code': 'View code',
    'common.back': 'Back',
    'common.published_on': 'Published on',
    'hero.badge': 'Available for new challenges',
    'hero.title': 'Fabrizio José Riera Bauer',
    'hero.role': 'Informatics Engineer & FullStack Developer',
    'hero.desc': 'Specialized in modern web architectures, conversational AI with RAG, and university teaching.',
    'hero.cta_projects': 'Explore Projects',
    'hero.cta_contact': 'Get in Touch',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
