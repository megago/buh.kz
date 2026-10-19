<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import StatCounter from './StatCounter.vue'

const { t, tm } = useI18n()

// Numeric targets are language-independent; prefix/suffix/title/text come
// from the active locale (word order and case markers differ per language).
const targets = [50, 20]

const stats = computed(() =>
  tm('team.stats').map((s, i) => ({ ...s, target: targets[i] }))
)
</script>

<template>
  <section id="team" class="section section--white">
    <div class="container">
      <h2 class="eyebrow-heading" v-reveal>{{ t('team.heading') }}</h2>
      <p class="team__lead" v-reveal="{ delay: 80 }">{{ t('team.lead') }}</p>

      <div class="team__cards">
        <article v-for="(s, i) in stats" :key="s.text" class="team-card" v-reveal="{ delay: i * 90 }">
          <p class="team-card__value">
            <StatCounter v-if="s.target" :target="s.target" :prefix="s.prefix" :suffix="s.suffix" /> {{ s.title }}
          </p>
          <p class="team-card__text">{{ s.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team__lead {
  margin-top: 1.25rem;
  max-width: 70ch;
  opacity: 0.8;
}

.team__cards {
  margin-top: clamp(2rem, 3vw, 3rem);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--gap);
}

.team-card {
  padding: 1.5rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-left: 3px solid var(--gold);
  border-radius: var(--radius-sm);
}

.team-card__value {
  font-size: var(--fs-h2);
  font-weight: 400;
  color: var(--blue);
}

.team-card__text {
  margin-top: 0.5rem;
  font-size: var(--fs-small);
  opacity: 0.75;
}
</style>
