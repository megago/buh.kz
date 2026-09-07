<script setup>
import Lightbox from './Lightbox.vue'

import accaThumb from '../assets/img/cert-acca-dipifr-thumb.jpg'
import accaFull from '../assets/img/cert-acca-dipifr-full.jpg'
import rbThumb from '../assets/img/cert-russell-bedford-thumb.jpg'
import rbFull from '../assets/img/cert-russell-bedford-full.jpg'
import pnkThumb from '../assets/img/cert-pnk-udostoverenie-thumb.jpg'
import pnkFull from '../assets/img/cert-pnk-udostoverenie-full.jpg'

const certs = [
  { thumb: accaThumb, full: accaFull, alt: 'Диплом ACCA DipIFR по международной финансовой отчётности' },
  { thumb: rbThumb, full: rbFull, alt: 'Сертификат профессионального бухгалтера Russell Bedford' },
  { thumb: pnkThumb, full: pnkFull, alt: 'Удостоверение члена Палаты налоговых консультантов РК' }
]
</script>

<template>
  <section id="certificates" class="section">
    <div class="container">
      <h2 class="eyebrow-heading certificates__title">Наши сертификаты</h2>

      <Lightbox :items="certs">
        <template #trigger="{ open }">
          <ul class="certificates__grid">
            <li v-for="(c, i) in certs" :key="c.alt">
              <button class="cert-card" @click="open(i)" :aria-label="`Открыть: ${c.alt}`">
                <img :src="c.thumb" :alt="c.alt" loading="lazy" />
                <span class="cert-card__zoom" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3-3M11 8v6M8 11h6" />
                  </svg>
                </span>
              </button>
            </li>
          </ul>
        </template>
      </Lightbox>
    </div>
  </section>
</template>

<style scoped>
.certificates__title {
  text-align: center;
}

.certificates__grid {
  list-style: none;
  margin: clamp(2rem, 3vw, 3rem) 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--gap);
}

.cert-card {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  overflow: hidden;
  background: none;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.cert-card:hover {
  box-shadow: var(--shadow-card);
  transform: translateY(-2px);
}

.cert-card img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
}

.cert-card__zoom {
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--white);
  color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-card);
}
</style>
