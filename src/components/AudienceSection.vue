<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

// One simple line icon per audience card, in the order of audience.items.
const icons = [
  'M4 20V9l8-5 8 5v11M9 20v-6h6v6',
  'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5 20c.8-3.5 3.6-5.5 7-5.5s6.2 2 7 5.5',
  'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3.5 9h17M3.5 15h17M12 3c2.4 2.6 3.6 5.6 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.6-3.6-9S9.6 5.6 12 3z',
  'M14.5 4.5l5 5L9 20H4v-5zM12.5 6.5l5 5'
]
</script>

<template>
  <section id="audience" class="section">
    <div class="container">
      <h2 class="eyebrow-heading" v-reveal>{{ t('audience.heading') }}</h2>
      <div class="audience__grid">
        <article v-for="(a, i) in tm('audience.items')" :key="a.title" class="audience-card" v-reveal="{ delay: i * 80 }">
          <span class="audience-card__icon" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path :d="icons[i]" />
            </svg>
          </span>
          <h3>{{ a.title }}</h3>
          <p>{{ a.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.audience__grid {
  margin-top: clamp(2rem, 3vw, 3rem);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap);
}

.audience-card {
  padding: 1.75rem;
  background: var(--surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.audience-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 36px rgba(7, 29, 63, 0.12);
}

.audience-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--blue);
  color: var(--gold);
}

.audience-card h3 {
  margin-top: 1.25rem;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--blue);
}

.audience-card p {
  margin-top: 0.6rem;
  font-size: var(--fs-small);
  opacity: 0.78;
}

@media (max-width: 1000px) {
  .audience__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .audience__grid {
    grid-template-columns: 1fr;
  }
}
</style>
