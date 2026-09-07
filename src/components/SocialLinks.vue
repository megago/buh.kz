<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { WHATSAPP_URL, TELEGRAM_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants/contacts'

const { t } = useI18n()

defineProps({
  size: { type: Number, default: 20 }
})

const links = computed(() => [
  { id: 'whatsapp', label: t('social.whatsapp'), url: WHATSAPP_URL, colorVar: '--wa-green' },
  { id: 'telegram', label: t('social.telegram'), url: TELEGRAM_URL, colorVar: '--tg-blue' },
  { id: 'instagram', label: t('social.instagram', { handle: INSTAGRAM_HANDLE }), url: INSTAGRAM_URL, colorVar: '--ig-pink' }
])
</script>

<template>
  <ul class="social-links">
    <li v-for="link in links" :key="link.id">
      <a
        class="social-links__item"
        :style="{ '--icon-color': `var(${link.colorVar})` }"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="link.label"
        :title="link.label"
      >
        <svg v-if="link.id === 'whatsapp'" :width="size" :height="size" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.28A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm5.85 14.24c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.02.24-3.43-.75-2.9-1.2-4.77-4.13-4.92-4.33-.14-.2-1.17-1.56-1.17-2.97 0-1.41.74-2.1 1-2.39.26-.29.57-.36.76-.36h.55c.18 0 .42-.07.65.5.24.58.82 2 .89 2.14.07.15.12.32.02.52-.1.2-.15.32-.3.5-.14.17-.3.38-.43.5-.15.15-.3.31-.13.6.17.3.77 1.27 1.66 2.06 1.14 1.02 2.1 1.34 2.4 1.49.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.24.66-.15.27.1 1.72.81 2.02.96.3.15.49.22.57.34.07.13.07.75-.17 1.44Z" />
        </svg>
        <svg v-else-if="link.id === 'telegram'" :width="size" :height="size" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21.94 4.6 18.6 20.36c-.25 1.1-.9 1.37-1.83.86l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.16 9.4-8.5c.41-.36-.09-.56-.63-.2L6.3 13.03l-5.02-1.57c-1.09-.34-1.1-1.09.23-1.61L20.6 3.14c.9-.34 1.7.2 1.34 1.46Z" />
        </svg>
        <svg v-else :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.social-links {
  display: flex;
  gap: 0.6rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.social-links__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--tint);
  color: var(--icon-color, var(--blue));
  transition: background 0.15s ease, transform 0.15s ease;
}

.social-links__item:hover {
  background: var(--icon-color, var(--blue));
  color: var(--white);
  transform: translateY(-2px);
}
</style>
