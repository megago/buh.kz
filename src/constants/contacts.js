// Single source of truth for contact / lead-capture destinations.
// Edit here to change phone numbers, handles, or the lead-submit mode.

export const PHONE_DISPLAY = '+7 707 902 02 43'
export const PHONE_E164 = '77079020243' // digits only, no leading +
export const EMAIL = 'Kamshat_auditor@mail.ru'
export const ADDRESS = 'г. Алматы, ул. Шарипова 100'

export const WHATSAPP_URL = `https://wa.me/${PHONE_E164}`

// TODO: replace with the real Telegram @username or invite link.
// A phone-number-only deep link (t.me/+<number>) only resolves if that
// contact has "find me by phone number" enabled in Telegram privacy
// settings, so it is not reliable as a public "message us" link.
export const TELEGRAM_URL = `https://t.me/+${PHONE_E164}`

export const INSTAGRAM_HANDLE = 'kamshat_nalog'
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`

export const SOCIAL_LINKS = [
  { id: 'whatsapp', label: 'WhatsApp', url: WHATSAPP_URL },
  { id: 'telegram', label: 'Telegram', url: TELEGRAM_URL },
  { id: 'instagram', label: 'Instagram', url: INSTAGRAM_URL }
]

// Lead form submission mode: 'whatsapp' needs no backend and is the default.
// 'telegram' requires a serverless proxy holding the bot token server-side —
// never put a bot token in client-side code.
export const LEAD_CONFIG = {
  mode: 'whatsapp',
  proxyUrl: null
}
