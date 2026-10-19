<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section id="faq" class="section section--white">
    <div class="container faq">
      <div class="faq__intro" v-reveal>
        <h2 class="eyebrow-heading">{{ t('faq.heading') }}</h2>
        <p>{{ t('faq.lead') }}</p>
        <a href="#contact" class="btn btn-primary">{{ t('faq.cta') }}</a>
      </div>

      <div class="faq__list">
        <details v-for="(q, i) in tm('faq.items')" :key="q.q" class="faq-item" v-reveal="{ delay: i * 60 }">
          <summary>
            <span>{{ q.q }}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            </svg>
          </summary>
          <p>{{ q.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  display: grid;
  grid-template-columns: minmax(240px, 360px) 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
}

.faq__intro p {
  margin-top: 1.25rem;
  opacity: 0.8;
}

.faq__intro .btn {
  margin-top: 1.75rem;
}

.faq__list {
  display: grid;
  gap: 0.75rem;
}

.faq-item {
  background: var(--bg);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
}

.faq-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.4rem;
  cursor: pointer;
  list-style: none;
  font-weight: 500;
  color: var(--blue);
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary svg {
  flex-shrink: 0;
  color: var(--gold-dark);
  transition: transform 0.2s ease;
}

.faq-item[open] summary svg {
  transform: rotate(45deg);
}

.faq-item p {
  padding: 0 1.4rem 1.2rem;
  font-size: var(--fs-small);
  opacity: 0.82;
  line-height: 1.65;
}

@media (max-width: 900px) {
  .faq {
    grid-template-columns: 1fr;
  }
}
</style>
