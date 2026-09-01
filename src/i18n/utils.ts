import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, targetLang: Lang = lang): string {
    // Clean leading slash for consistency
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Check if path already starts with a lang prefix
    const segments = cleanPath.split('/');
    if (segments[0] === 'es' || segments[0] === 'en') {
      segments[0] = targetLang;
      return `/${segments.join('/')}`;
    }

    if (!cleanPath) {
      return `/${targetLang}/`;
    }

    return `/${targetLang}/${cleanPath}`;
  };
}
