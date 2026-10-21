// Google Ads conversion tracking. The base Google tag (gtag.js) is loaded in
// index.html; this module only reports lead actions to it.

export const GOOGLE_ADS_ID = 'AW-18528180138'

// Conversion labels from Google Ads → Goals → Conversions → <action> →
// "Use Google tag" (the part after the slash in send_to). While a label is
// null the action is still sent as a plain event, just not counted as a
// conversion in Google Ads.
const CONVERSION_LABELS = {
  lead_form: null,
  phone_click: null,
  whatsapp_click: null,
  telegram_click: null
}

export function trackConversion(action) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', action)
  const label = CONVERSION_LABELS[action]
  if (label) {
    window.gtag('event', 'conversion', { send_to: `${GOOGLE_ADS_ID}/${label}` })
  }
}

// One delegated listener covers every phone / messenger link on the page,
// including ones rendered later by Vue.
export function trackContactClicks() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest?.('a[href]')
    if (!link) return
    const href = link.getAttribute('href')
    if (href.startsWith('tel:')) trackConversion('phone_click')
    else if (href.includes('wa.me/')) trackConversion('whatsapp_click')
    else if (href.includes('t.me/')) trackConversion('telegram_click')
  })
}
