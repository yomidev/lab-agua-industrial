import { createI18n } from "vue-i18n";
import es from "./locales/es";
import en from "./locales/en";

export const SUPPORTED = ["es", "en"];

function detect() {
  try {
    const saved = localStorage.getItem("locale");
    if (SUPPORTED.includes(saved)) return saved;
  } catch {
    /* localStorage no disponible */
  }
  const browser = navigator.language?.slice(0, 2);
  return SUPPORTED.includes(browser) ? browser : "es";
}

const initial = detect();
document.documentElement.lang = initial;

export const i18n = createI18n({
  legacy: false,
  locale: initial,
  fallbackLocale: "es",
  messages: { es, en },
});

export function setLocale(locale) {
  if (!SUPPORTED.includes(locale)) return;
  i18n.global.locale.value = locale;
  document.documentElement.lang = locale;
  try {
    localStorage.setItem("locale", locale);
  } catch {
    /* ignorar */
  }
}
