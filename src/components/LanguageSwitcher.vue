<script setup>
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, setLocale } from '../i18n'

const { locale, t } = useI18n()

defineProps({
  compact: { type: Boolean, default: false }
})
</script>

<template>
  <div class="lang-switch" :class="{ 'lang-switch--compact': compact }" role="group" :aria-label="t('lang.switchAria')">
    <button
      v-for="l in SUPPORTED_LOCALES"
      :key="l.code"
      type="button"
      class="lang-switch__btn"
      :class="{ 'is-active': locale === l.code }"
      :aria-pressed="locale === l.code"
      :lang="l.code"
      @click="setLocale(l.code)"
    >
      {{ l.short }}
    </button>
  </div>
</template>

<style scoped>
.lang-switch {
  display: inline-flex;
  gap: 0.15rem;
  padding: 0.2rem;
  background: var(--tint);
  border-radius: 999px;
}

.lang-switch__btn {
  border: none;
  background: transparent;
  color: var(--ink);
  opacity: 0.6;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  transition: background 0.15s ease, opacity 0.15s ease, color 0.15s ease;
}

.lang-switch__btn:hover {
  opacity: 1;
}

.lang-switch__btn.is-active {
  background: var(--blue);
  color: var(--white);
  opacity: 1;
}

.lang-switch--compact .lang-switch__btn {
  padding: 0.3rem 0.5rem;
  font-size: 0.75rem;
}
</style>
