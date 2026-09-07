<script setup>
import { PHONE_E164 } from '../constants/contacts'

const stats = [
  { value: '20+', label: 'лет опыта' },
  { value: '50 млрд', label: 'оборота клиентов' },
  { value: '40+', label: 'пройденных проверок' }
]
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero__grid">
      <div class="hero__copy">
        <h1 class="hero__title" v-reveal>
          Ведите свой бизнес,<br />
          <span>а мы позаботимся о бухгалтерии и налогах</span>
        </h1>
        <p class="hero__lead" v-reveal="{ delay: 100 }">
          Ведём комплексную бухгалтерию для бизнеса, избавляем от рутины и
          оберегаем от штрафов — ответственность закреплена договором.
        </p>
        <div class="hero__actions" v-reveal="{ delay: 200 }">
          <a href="#contact" class="btn btn-primary">Бесплатная диагностика</a>
          <a :href="`tel:+${PHONE_E164}`" class="btn btn-outline">Позвонить</a>
        </div>
        <dl class="hero__stats" v-reveal="{ delay: 300 }">
          <div v-for="s in stats" :key="s.label" class="hero__stat">
            <dt>{{ s.value }}</dt>
            <dd>{{ s.label }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block: clamp(3rem, 4vw, 6rem) clamp(2rem, 3vw, 4rem);
}

.hero__title {
  font-size: var(--fs-hero);
  font-weight: 500;
  line-height: 1.05;
  color: var(--blue);
  letter-spacing: -0.01em;
}

.hero__title span {
  display: block;
  font-size: var(--fs-h1);
  font-weight: 300;
  color: var(--ink);
  margin-top: 0.5rem;
}

.hero__lead {
  margin-top: clamp(1.5rem, 2vw, 2.5rem);
  max-width: 42ch;
  font-size: var(--fs-lead);
  color: var(--ink);
  opacity: 0.85;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: clamp(1.75rem, 2.5vw, 2.5rem);
}

.hero__stats {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(1.5rem, 4vw, 3.5rem);
  margin-top: clamp(2.5rem, 4vw, 4rem);
  padding-top: clamp(1.5rem, 2vw, 2rem);
  border-top: 1px solid var(--border);
}

.hero__stat dt {
  font-size: clamp(1.5rem, 1.2rem + 1vw, 2.25rem);
  font-weight: 500;
  color: var(--blue);
}

.hero__stat dd {
  margin: 0.15rem 0 0;
  font-size: var(--fs-small);
  opacity: 0.75;
}
</style>
