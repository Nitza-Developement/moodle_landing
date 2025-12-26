import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t<K extends keyof typeof ui[typeof defaultLang]>(key: K): typeof ui[typeof defaultLang][K] {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Obtiene una traducción anidada usando notación de punto
 * Ejemplo: getNestedTranslation(lang, 'header.logoName')
 */
export function getNestedTranslation(lang: Lang, path: string): string {
  const keys = path.split('.');
  let result: unknown = ui[lang];

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      // Fallback al idioma por defecto
      result = ui[defaultLang];
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = (result as Record<string, unknown>)[k];
        } else {
          return path; // Retorna la key si no se encuentra
        }
      }
      break;
    }
  }

  return typeof result === 'string' ? result : path;
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const parts = pathname.split('/').filter(Boolean);

  if (parts.length > 0 && parts[0] in ui) {
    return '/' + parts.slice(1).join('/');
  }

  return pathname;
}

export function translatePath(path: string, lang: Lang): string {
  return lang === defaultLang ? path : `/${lang}${path}`;
}