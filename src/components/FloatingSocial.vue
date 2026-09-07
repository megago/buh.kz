<script setup>
import { useI18n } from 'vue-i18n'
import SocialLinks from './SocialLinks.vue'

const { t } = useI18n()
</script>

<template>
  <div class="floating-social" role="complementary" :aria-label="t('a11y.contactUs')">
    <SocialLinks :size="22" />
  </div>
</template>

<style scoped>
.floating-social {
  position: fixed;
  right: clamp(1rem, 3vw, 2rem);
  bottom: clamp(1rem, 3vw, 2rem);
  z-index: 40;
  background: var(--white);
  padding: 0.5rem;
  border-radius: 999px;
  box-shadow: var(--shadow-float);
}

.floating-social :deep(.social-links) {
  gap: 0.35rem;
}
</style>
