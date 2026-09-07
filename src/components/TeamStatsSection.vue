<script setup>
import StatCounter from './StatCounter.vue'
import partnerLogo from '../assets/img/logo-uchet-partners.svg'

const stats = [
  { target: 50, suffix: ' млрд', title: 'оборота', text: 'Мы имеем опыт работы с крупными компаниями' },
  { target: 20, prefix: 'Более ', title: 'лет', text: 'опыта в бухгалтерии' },
  { target: 40, prefix: 'Более ', title: '', text: 'пройденных налоговых проверок' }
]
</script>

<template>
  <section id="team" class="section">
    <div class="container">
      <h2 class="eyebrow-heading" v-reveal>Команда профессионалов к вашим услугам</h2>
      <p class="team__lead" v-reveal="{ delay: 80 }">
        Предоставляем высококачественный сервис в сфере бухгалтерии, налогового
        аудита и юридической поддержки. С нами вы будете уверены в точности и
        своевременности всех финансовых операций вашей компании.
      </p>

      <div class="team__cards">
        <article v-for="(s, i) in stats" :key="s.text" class="team-card" v-reveal="{ delay: i * 90 }">
          <p class="team-card__value">
            <StatCounter :target="s.target" :prefix="s.prefix" :suffix="s.suffix" /> {{ s.title }}
          </p>
          <p class="team-card__text">{{ s.text }}</p>
        </article>

        <article class="team-card team-card--partner" v-reveal="{ delay: stats.length * 90 }">
          <img :src="partnerLogo" alt="Партнёр сети «Учёт.Партнёры»" height="52" />
          <p class="team-card__text">Партнёр Сети «Учёт.Партнёры»</p>
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
