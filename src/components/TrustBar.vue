<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="trust" :aria-label="t('trust.label')">
    <ul class="container trust__list">
      <li v-for="(item, i) in tm('trust.items')" :key="item" v-reveal="{ delay: i * 70 }">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2.8 19.5 6v5.6c0 4.6-3.1 8.2-7.5 9.6-4.4-1.4-7.5-5-7.5-9.6V6z" stroke="var(--gold-dark)" stroke-width="1.5" stroke-linejoin="round" />
          <path d="m8.6 12.2 2.3 2.3 4.6-4.8" stroke="var(--blue)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>{{ item }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* Sits over the hero's slanted bottom edge (the hero has a negative bottom margin). */
.trust {
  position: relative;
  z-index: 2;
  padding-bottom: clamp(1rem, 2vw, 2rem);
}

.trust__list {
  list-style: none;
  margin-block: 0;
  padding: 1.25rem clamp(1.25rem, 3vw, 2.5rem);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 2rem;
  background: var(--surface);
  border-radius: var(--radius);
  box-shadow: 0 18px 40px rgba(7, 29, 63, 0.12);
}

.trust__list li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: var(--fs-small);
  font-weight: 500;
  color: var(--blue);
}

.trust__list svg {
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .trust__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .trust__list {
    grid-template-columns: 1fr;
  }
}
</style>
