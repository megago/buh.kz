import { LEAD_CONFIG, PHONE_E164 } from '../constants/contacts'

/**
 * Submits a lead via the configured channel.
 * - 'whatsapp' (default): no backend needed. Opens WhatsApp with a
 *   prefilled message; the visitor sends it themselves.
 * - 'telegram': POSTs to a serverless proxy that holds the bot token.
 *   A bot token must never live in client-side code, so this mode
 *   requires LEAD_CONFIG.proxyUrl to point at that proxy.
 *
 * The outgoing lead message itself is always composed in Russian
 * (the business owner reads Russian) regardless of the site language the
 * visitor is browsing in — only the on-page error copy is localized via `t`.
 *
 * Returns { ok: boolean, error?: string }.
 */
export async function submitLead({ name, phone, email }, t) {
  const message =
    `Заявка на диагностику бухгалтерии\n` +
    `Имя: ${name}\n` +
    `Телефон: ${phone}` +
    (email ? `\nE-mail: ${email}` : '')

  if (LEAD_CONFIG.mode === 'whatsapp') {
    const url = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    return { ok: true }
  }

  if (LEAD_CONFIG.mode === 'telegram') {
    if (!LEAD_CONFIG.proxyUrl) {
      return { ok: false, error: t('contact.proxyDownError') }
    }
    try {
      const res = await fetch(LEAD_CONFIG.proxyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email })
      })
      if (!res.ok) throw new Error('bad response')
      return { ok: true }
    } catch {
      return { ok: false, error: t('contact.sendError') }
    }
  }

  return { ok: false, error: t('contact.genericError') }
}
