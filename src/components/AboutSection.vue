<script setup>
import { useI18n } from 'vue-i18n'
import photo from '../assets/img/about-photo.jpg'

const { t, tm } = useI18n()
</script>

<template>
  <section id="about" class="section section--white section--slant-top about">
    <div class="container about__grid">
      <figure class="about__photo" v-reveal>
        <img :src="photo" :alt="t('about.photoAlt')" width="900" height="1125" loading="lazy" />
      </figure>

      <div class="about__body">
        <h2 class="eyebrow-heading" v-reveal>{{ t('about.heading') }}</h2>
        <p class="about__intro" v-reveal="{ delay: 40 }">{{ t('about.intro') }}</p>
        <p class="about__lead" v-reveal="{ delay: 80 }">{{ t('about.lead') }}</p>

        <ul class="about__creds">
          <li v-for="(item, i) in tm('about.credentials')" :key="item" v-reveal="{ delay: 100 + i * 60 }">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="10" fill="var(--blue)" opacity="0.12" />
              <path d="M6 10.5 8.5 13 14 7.5" stroke="var(--blue)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>{{ item }}</span>
          </li>
        </ul>

        <h3 class="about__subheading" v-reveal>{{ t('about.pathTitle') }}</h3>
        <ol class="about__path" v-reveal="{ delay: 60 }">
          <li v-for="step in tm('about.path')" :key="step.title">
            <strong>{{ step.title }}</strong>
            <span v-if="step.text">{{ step.text }}</span>
          </li>
        </ol>

        <p class="about__scale" v-reveal="{ delay: 60 }">{{ t('about.scale') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: minmax(300px, 520px) 1fr;
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: start;
}

.about__photo {
  position: sticky;
  top: 96px;
  margin: 0;
}

/* Borderless: the photo fades out at the bottom into the section background. */
.about__photo img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  -webkit-mask-image: linear-gradient(0deg, transparent 0%, #000 22%);
  mask-image: linear-gradient(0deg, transparent 0%, #000 22%);
}

.about__intro {
  margin-top: 1.25rem;
  padding-left: 1rem;
  border-left: 3px solid var(--gold);
  font-family: var(--font-serif, Georgia, serif);
  font-style: italic;
  font-size: var(--fs-lead);
  line-height: 1.45;
  color: var(--blue);
  max-width: 40ch;
}

.about__lead {
  margin-top: 1.25rem;
  font-size: var(--fs-lead);
  font-weight: 400;
  line-height: 1.4;
  max-width: 34ch;
}

.about__creds {
  list-style: none;
  margin: 2rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.9rem;
}

.about__creds li {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  font-size: var(--fs-body);
}

.about__creds svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.about__subheading {
  margin-top: clamp(2rem, 3vw, 2.75rem);
  font-size: var(--fs-body);
  font-weight: 500;
}

.about__path {
  list-style: none;
  margin: 1.25rem 0 0;
  padding: 0;
  counter-reset: step;
}

/* Vertical timeline: numbered dot, connecting line, role title and scope underneath. */
.about__path li {
  counter-increment: step;
  position: relative;
  padding: 0 0 1.25rem 2.75rem;
}

.about__path li::before {
  content: counter(step);
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;
  background: var(--blue);
  color: var(--gold);
  font-size: 0.8rem;
  font-weight: 600;
}

.about__path li::after {
  content: '';
  position: absolute;
  left: calc(0.95rem - 1px);
  top: 2.1rem;
  bottom: 0.2rem;
  width: 2px;
  background: linear-gradient(var(--gold), rgba(200, 165, 100, 0.25));
}

.about__path li:last-child {
  padding-bottom: 0;
}

.about__path li:last-child::after {
  display: none;
}

.about__path li:last-child::before {
  background: var(--gold);
  color: var(--blue);
}

.about__path strong {
  display: block;
  padding-top: 0.25rem;
  font-weight: 500;
  color: var(--blue);
}

.about__path span {
  display: block;
  margin-top: 0.2rem;
  font-size: var(--fs-small);
  opacity: 0.75;
}

.about__text {
  margin-top: clamp(1.75rem, 3vw, 2.5rem);
  opacity: 0.8;
  max-width: 62ch;
}

.about__scale {
  margin-top: clamp(1.75rem, 3vw, 2.5rem);
  padding: 1.25rem 1.5rem;
  border-left: 3px solid var(--blue);
  background: var(--tint);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  font-weight: 400;
  max-width: 62ch;
}

@media (max-width: 900px) {
  .about__grid {
    grid-template-columns: 1fr;
  }
  .about__photo {
    position: static;
    max-width: 480px;
  }
}
</style>
