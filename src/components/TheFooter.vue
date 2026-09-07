<script setup>
import { PHONE_DISPLAY, PHONE_E164, EMAIL, ADDRESS } from '../constants/contacts'
import SocialLinks from './SocialLinks.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <span class="footer__logo">LEADER<span>ABH</span></span>
        <p class="footer__legal">© {{ year }} Все права защищены.</p>
        <a href="/privacy.html" class="footer__link">Политика конфиденциальности</a>
      </div>

      <address class="footer__contacts">
        <p><strong>Телефон:</strong> <a :href="`tel:+${PHONE_E164}`">{{ PHONE_DISPLAY }}</a></p>
        <p><strong>Email:</strong> <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a></p>
        <p><strong>Адрес:</strong> {{ ADDRESS }}</p>
        <SocialLinks :size="18" />
      </address>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding-block: clamp(2rem, 3vw, 3rem);
}

.footer__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}

.footer__logo {
  font-weight: 800;
  font-size: 1.1rem;
}

.footer__logo span {
  color: var(--blue);
}

.footer__legal {
  margin-top: 0.75rem;
  font-size: 0.85rem;
  opacity: 0.6;
}

.footer__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: var(--blue);
}

.footer__contacts {
  font-style: normal;
  font-size: 0.9rem;
  text-align: right;
}

.footer__contacts p {
  margin: 0 0 0.4rem;
}

.footer__contacts a {
  color: var(--blue);
}

.footer__contacts :deep(.social-links) {
  margin-top: 0.75rem;
  justify-content: flex-end;
}

@media (max-width: 700px) {
  .footer__contacts {
    text-align: left;
  }
  .footer__contacts :deep(.social-links) {
    justify-content: flex-start;
  }
}
</style>
