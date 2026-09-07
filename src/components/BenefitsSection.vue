<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section id="guarantees" class="section">
    <div class="container benefits">
      <h2 class="benefits__title" v-reveal>{{ t('benefits.heading') }}</h2>
      <div class="benefits__cards">
        <article v-for="(b, i) in tm('benefits.items')" :key="b.title" class="benefit-card" v-reveal="{ delay: i * 90 }">
          <h3>{{ b.title }}</h3>
          <p>{{ b.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefits {
  background: var(--blue);
  border-radius: var(--radius);
  padding: clamp(2rem, 4vw, 3.5rem);
  color: var(--white);
}

.benefits__title {
  font-size: var(--fs-h1);
  font-weight: 300;
  max-width: 24ch;
}

.benefits__cards {
  margin-top: clamp(2rem, 3vw, 3rem);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--gap);
}

.benefit-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-sm);
  padding: 1.75rem;
}

.benefit-card h3 {
  font-size: var(--fs-body);
  font-weight: 400;
}

.benefit-card p {
  margin-top: 0.75rem;
  font-size: var(--fs-small);
  opacity: 0.88;
  line-height: 1.6;
}
</style>
