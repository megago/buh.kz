<script setup>
import { useI18n } from 'vue-i18n'
import { PHONE_DISPLAY, PHONE_E164, EMAIL, ADDRESS } from '../constants/contacts'
import SocialLinks from './SocialLinks.vue'
import BrandLogo from './BrandLogo.vue'
import { usePrivacyModal } from '../composables/usePrivacyModal'

const { t } = useI18n()
const { open: openPrivacyModal } = usePrivacyModal()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <BrandLogo light class="footer__logo" />
        <p class="footer__legal">© {{ year }} {{ t('brand.legal') }}. {{ t('footer.rights') }}</p>
        <button type="button" class="footer__link" @click="openPrivacyModal">{{ t('footer.privacy') }}</button>
      </div>

      <address class="footer__contacts">
        <p><strong>{{ t('footer.phoneLabel') }}</strong> <a :href="`tel:+${PHONE_E164}`">{{ PHONE_DISPLAY }}</a></p>
        <p><strong>{{ t('footer.emailLabel') }}</strong> <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a></p>
        <p><strong>{{ t('footer.addressLabel') }}</strong> {{ ADDRESS }}</p>
        <SocialLinks :size="18" />
      </address>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--navy-deep);
  color: var(--on-dark-muted);
  padding-block: clamp(2rem, 3vw, 3rem);
}

.footer__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}

.footer__logo {
  font-size: 1.1rem;
}

.footer__legal {
  margin-top: 0.75rem;
  font-size: 0.85rem;
  opacity: 0.6;
}

.footer__link {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  font-size: 0.85rem;
  color: var(--blue-light);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.15s ease;
}

.footer__link:hover,
.footer__link:focus-visible {
  text-decoration-color: currentColor;
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
  color: var(--blue-light);
}

.footer__contacts strong {
  color: var(--white);
  font-weight: 500;
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
