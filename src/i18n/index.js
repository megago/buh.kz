import { createI18n } from 'vue-i18n'
import ru from './locales/ru'
import kk from './locales/kk'
import en from './locales/en'

export const SUPPORTED_LOCALES = [
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'kk', label: 'Қазақша', short: 'ҚАЗ' },
  { code: 'en', label: 'English', short: 'EN' }
]

const STORAGE_KEY = 'leaderabh:locale'

function detectInitialLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && SUPPORTED_LOCALES.some((l) => l.code === stored)) return stored
  } catch {
    // localStorage unavailable (private mode, etc.) — fall through
  }
  // Always default to Russian for first-time visitors, regardless of browser
  // language — primary audience is a Kazakhstani business's Russian-speaking
  // clients. Visitors can still switch via the header language selector,
  // and that choice is what gets remembered above.
  return 'ru'
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: detectInitialLocale(),
  fallbackLocale: 'ru',
  messages: { ru, kk, en }
})

export function setLocale(code) {
  if (!SUPPORTED_LOCALES.some((l) => l.code === code)) return
  i18n.global.locale.value = code
  document.documentElement.lang = code
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {
    // ignore write failures
  }
  document.title = i18n.global.t('meta.title')
  const descTag = document.querySelector('meta[name="description"]')
  if (descTag) descTag.setAttribute('content', i18n.global.t('meta.description'))
}
