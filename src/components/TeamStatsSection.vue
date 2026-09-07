<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import StatCounter from './StatCounter.vue'
import partnerLogo from '../assets/img/logo-uchet-partners.svg'

const { t, tm } = useI18n()

// Numeric targets are language-independent; prefix/suffix/title/text come
// from the active locale (word order and case markers differ per language).
const targets = [50, 20, 40]

const stats = computed(() =>
  tm('team.stats').map((s, i) => ({ ...s, target: targets[i] }))
)
</script>

<template>
  <section id="team" class="section">
    <div class="container">
      <h2 class="eyebrow-heading" v-reveal>{{ t('team.heading') }}</h2>
      <p class="team__lead" v-reveal="{ delay: 80 }">{{ t('team.lead') }}</p>

      <div class="team__cards">
        <article v-for="(s, i) in stats" :key="s.text" class="team-card" v-reveal="{ delay: i * 90 }">
          <p class="team-card__value">
            <StatCounter :target="s.target" :prefix="s.prefix" :suffix="s.suffix" /> {{ s.title }}
          </p>
          <p class="team-card__text">{{ s.text }}</p>
        </article>

        <article class="team-card team-card--partner" v-reveal="{ delay: stats.length * 90 }">
          <img :src="partnerLogo" :alt="t('team.partnerAlt')" height="52" />
          <p class="team-card__text">{{ t('team.partner') }}</p>
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
  border: 1px solid var(--border);
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

.team-card--partner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
}
</style>
