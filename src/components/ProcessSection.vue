<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section id="process" class="section section--white">
    <div class="container">
      <h2 class="eyebrow-heading" v-reveal>{{ t('process.heading') }}</h2>
      <ol class="process__steps">
        <li v-for="(s, i) in tm('process.steps')" :key="s.title" class="step" v-reveal="{ delay: i * 100 }">
          <span class="step__num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </li>
      </ol>
      <div class="process__cta" v-reveal>
        <a href="#contact" class="btn btn-primary">{{ t('process.cta') }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process__steps {
  list-style: none;
  margin: clamp(2rem, 3vw, 3rem) 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap);
  position: relative;
}

/* Thin gold line linking the step numbers. */
.process__steps::before {
  content: '';
  position: absolute;
  top: 28px;
  left: 28px;
  right: 12%;
  height: 1px;
  background: linear-gradient(90deg, var(--gold), rgba(200, 165, 100, 0.15));
}

.step {
  position: relative;
}

.step__num {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--blue);
  color: var(--gold);
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: 0 0 0 6px var(--surface);
}

.step h3 {
  margin-top: 1.25rem;
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--blue);
}

.step p {
  margin-top: 0.5rem;
  font-size: var(--fs-small);
  opacity: 0.78;
  max-width: 30ch;
}

.process__cta {
  margin-top: clamp(2rem, 3vw, 3rem);
}

@media (max-width: 900px) {
  .process__steps {
    grid-template-columns: 1fr 1fr;
  }
  .process__steps::before {
    display: none;
  }
}

@media (max-width: 520px) {
  .process__steps {
    grid-template-columns: 1fr;
  }
}
</style>
