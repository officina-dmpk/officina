import '@fontsource-variable/newsreader';
import '@fontsource-variable/newsreader/wght-italic.css';
import '@fontsource-variable/ibm-plex-sans';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import './styles.css';
import { fr } from './i18n';

type Lang = 'en' | 'fr';
type Theme = 'light' | 'dark';

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable (private mode): the choice then lasts for this page only.
  }
}

// English is the text of index.html itself; it is kept here so that the page can switch back.
const nodes = Array.from(document.querySelectorAll<HTMLElement | SVGElement>('[data-i18n]'));
const english = new Map<Element, string>(nodes.map((el) => [el, el.innerHTML]));
const langButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('.lang-btn'));

function setLanguage(lang: Lang): void {
  document.documentElement.lang = lang;
  for (const el of nodes) {
    const key = el.getAttribute('data-i18n') ?? '';
    el.innerHTML = lang === 'fr' ? (fr[key] ?? english.get(el) ?? '') : (english.get(el) ?? '');
  }
  for (const button of langButtons) {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  }
}

for (const button of langButtons) {
  button.addEventListener('click', () => {
    const lang: Lang = button.dataset.lang === 'fr' ? 'fr' : 'en';
    setLanguage(lang);
    write('officina-lang', lang);
  });
}

const savedLang = read('officina-lang');
if (savedLang === 'fr' || (savedLang === null && navigator.language.toLowerCase().startsWith('fr'))) {
  setLanguage('fr');
}

const themeButton = document.getElementById('theme-toggle');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

function currentTheme(): Theme {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === 'light' || chosen === 'dark') return chosen;
  return systemDark.matches ? 'dark' : 'light';
}

function labelTheme(): void {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  const french = document.documentElement.lang === 'fr';
  const label = french
    ? next === 'dark' ? 'Passer en mode sombre' : 'Passer en mode clair'
    : `Switch to ${next} mode`;
  themeButton?.setAttribute('aria-label', label);
}

themeButton?.addEventListener('click', () => {
  const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  write('officina-theme', next);
  labelTheme();
});
systemDark.addEventListener('change', labelTheme);
for (const button of langButtons) button.addEventListener('click', labelTheme);
labelTheme();
