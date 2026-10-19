<script setup>
import { useI18n } from 'vue-i18n'

defineProps({ light: Boolean })

const { t } = useI18n()
</script>

<template>
  <span class="brand" :class="{ 'brand--light': light }">
    <svg class="brand__mark" viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#0d3b82" />
      <rect x="19.2" y="11" width="1.6" height="17.5" fill="#f4ede1" />
      <circle cx="20" cy="9.8" r="1.7" fill="#c8a564" />
      <rect x="8.5" y="12.4" width="23" height="1.7" rx="0.85" fill="#f4ede1" />
      <path d="M11 14.1 7.6 22.2M11 14.1l3.4 8.1M29 14.1l-3.4 8.1M29 14.1l3.4 8.1" stroke="#f4ede1" stroke-width="0.9" stroke-linecap="round" />
      <path d="M6.8 22.2h8.4a4.2 4.2 0 0 1-8.4 0z" fill="#c8a564" />
      <path d="M24.8 22.2h8.4a4.2 4.2 0 0 1-8.4 0z" fill="#c8a564" />
      <rect x="13.5" y="28.5" width="13" height="2.4" rx="1.2" fill="#c8a564" />
    </svg>
    <span class="brand__word">{{ t('brand.part1') }}<span>{{ t('brand.part2') }}</span></span>
  </span>
</template>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

.brand__mark {
  width: 2.1em;
  height: 2.1em;
  flex-shrink: 0;
}

.brand__word {
  font-weight: 800;
  letter-spacing: 0.04em;
  color: var(--ink);
}

.brand__word span {
  color: #9a7636;
}

.brand--light .brand__word {
  color: var(--white);
}

.brand--light .brand__word span {
  color: var(--gold);
}

.brand--light .brand__mark rect:first-child {
  fill: #123f88;
}
</style>
