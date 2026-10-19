<script setup>
import { useI18n } from 'vue-i18n'
import { PHONE_E164 } from '../constants/contacts'
import heroPhoto from '../assets/img/hero-photo.jpg'

const { t, tm } = useI18n()
</script>

<template>
  <section id="top" class="hero">
    <figure class="hero__media">
      <img :src="heroPhoto" :alt="t('hero.photoAlt')" width="1250" height="1500" fetchpriority="high" />
      <figcaption class="hero__badge" v-reveal="{ delay: 400 }">{{ t('hero.photoBadge') }}</figcaption>
    </figure>

    <div class="container hero__grid">
      <div class="hero__copy">
        <h1 class="hero__title" v-reveal>
          {{ t('hero.titleLine1') }}<br />
          <span>{{ t('hero.titleLine2') }}</span>
        </h1>
        <p class="hero__lead" v-reveal="{ delay: 100 }">
          {{ t('hero.lead') }}
        </p>
        <div class="hero__actions" v-reveal="{ delay: 200 }">
          <a href="#contact" class="btn btn-gold">{{ t('hero.ctaPrimary') }}</a>
          <a :href="`tel:+${PHONE_E164}`" class="btn btn-ghost-light">{{ t('hero.ctaSecondary') }}</a>
        </div>
        <p class="hero__note" v-reveal="{ delay: 250 }">{{ t('hero.ctaNote') }}</p>
        <dl class="hero__stats" v-reveal="{ delay: 300 }">
          <div v-for="s in tm('hero.stats')" :key="s.label" class="hero__stat">
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
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-height: clamp(600px, 88vh, 860px);
  padding-block: clamp(3rem, 5vw, 6rem) calc(clamp(3rem, 5vw, 6rem) + 4vw);
  color: var(--white);
  background:
    radial-gradient(50% 60% at 0% 100%, rgba(200, 165, 100, 0.12), transparent 70%),
    linear-gradient(135deg, var(--blue) 0%, var(--navy-deep) 100%);
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%);
}

/* Full-bleed photo on the right that dissolves into the navy background. */
.hero__media {
  position: absolute;
  inset: 0 0 0 auto;
  width: min(56%, 980px);
  margin: 0;
}

.hero__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 18%;
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.35) 22%, #000 55%);
  mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.35) 22%, #000 55%);
}

.hero__media::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(0deg, rgba(7, 29, 63, 0.7) 0%, transparent 35%);
}

.hero__grid {
  position: relative;
  z-index: 1;
}

.hero__copy {
  max-width: min(620px, 52%);
}

.hero__badge {
  position: absolute;
  z-index: 1;
  right: clamp(1rem, 4vw, 4rem);
  bottom: calc(5vw + 6.5rem);
  max-width: 340px;
  padding: 0.7rem 1rem;
  border-radius: var(--radius-sm);
  background: rgba(244, 237, 225, 0.95);
  backdrop-filter: blur(6px);
  color: var(--blue);
  font-size: var(--fs-small);
  font-weight: 500;
  text-align: center;
  box-shadow: var(--shadow-card);
}

.hero__title {
  font-size: clamp(2.5rem, 1.6rem + 3.4vw, 5.5rem);
  font-weight: 500;
  line-height: 1.05;
  color: var(--white);
  letter-spacing: -0.01em;
}

.hero__title span {
  display: block;
  font-size: var(--fs-h1);
  font-weight: 300;
  color: var(--on-dark-muted);
  margin-top: 0.5rem;
}

.hero__lead {
  margin-top: clamp(1.5rem, 2vw, 2.5rem);
  max-width: 42ch;
  font-size: var(--fs-lead);
  color: var(--on-dark-muted);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: clamp(1.75rem, 2.5vw, 2.5rem);
}

.hero__note {
  margin-top: 0.9rem;
  font-size: var(--fs-small);
  color: var(--on-dark-muted);
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, auto));
  justify-content: start;
  gap: clamp(1rem, 2.5vw, 2.5rem);
  margin-top: clamp(2.5rem, 4vw, 4rem);
  padding-top: clamp(1.5rem, 2vw, 2rem);
  border-top: 1px solid rgba(255, 255, 255, 0.18);
}

.hero__stat dt {
  font-size: clamp(1.5rem, 1.2rem + 1vw, 2.25rem);
  font-weight: 500;
  color: var(--gold);
}

.hero__stat dd {
  margin: 0.15rem 0 0;
  font-size: var(--fs-small);
  color: var(--on-dark-muted);
}

@media (max-width: 900px) {
  .hero {
    display: block;
    min-height: 0;
    padding-top: 0;
  }
  .hero__media {
    position: relative;
    width: 100%;
    height: 440px;
  }
  .hero__media img {
    -webkit-mask-image: linear-gradient(0deg, transparent 0%, #000 45%);
    mask-image: linear-gradient(0deg, transparent 0%, #000 45%);
  }
  .hero__media::after {
    display: none;
  }
  .hero__badge {
    right: 1rem;
    left: 1rem;
    bottom: 1rem;
    max-width: none;
  }
  .hero__copy {
    max-width: none;
    margin-top: 1.5rem;
  }
}
</style>
