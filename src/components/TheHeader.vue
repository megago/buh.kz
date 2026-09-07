<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { PHONE_DISPLAY, PHONE_E164 } from '../constants/contacts'
import SocialLinks from './SocialLinks.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()

const isOpen = ref(false)
const close = () => { isOpen.value = false }

const links = computed(() => [
  { href: '#services', label: t('nav.services') },
  { href: '#guarantees', label: t('nav.guarantees') },
  { href: '#team', label: t('nav.team') },
  { href: '#certificates', label: t('nav.certificates') },
  { href: '#contact', label: t('nav.contact') }
])
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <a href="#top" class="header__logo" :aria-label="t('a11y.homeAria')">
        LEADER<span>ABH</span>
      </a>

      <nav class="header__nav" :class="{ 'is-open': isOpen }" :aria-label="t('a11y.mainNav')">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="close">{{ l.label }}</a>
        <a class="header__phone header__phone--mobile" :href="`tel:+${PHONE_E164}`">{{ PHONE_DISPLAY }}</a>
        <SocialLinks class="header__social--mobile" :size="18" />
        <LanguageSwitcher class="header__lang--mobile" />
      </nav>

      <div class="header__right">
        <a class="header__phone" :href="`tel:+${PHONE_E164}`">{{ PHONE_DISPLAY }}</a>
        <SocialLinks class="header__social" :size="18" />
        <LanguageSwitcher class="header__lang" />
        <button
          class="header__burger"
          :class="{ 'is-open': isOpen }"
          :aria-expanded="isOpen"
          aria-controls="header-nav"
          :aria-label="t('a11y.openMenu')"
          @click="isOpen = !isOpen"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: saturate(180%) blur(10px);
  border-bottom: 1px solid var(--border);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  gap: 1.5rem;
}

.header__logo {
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: 0.02em;
  color: var(--ink);
  flex-shrink: 0;
}

.header__logo span {
  color: var(--blue);
}

.header__nav {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 2vw, 2rem);
  font-size: 0.95rem;
}

.header__nav a {
  color: var(--ink);
  opacity: 0.8;
  transition: opacity 0.15s ease, color 0.15s ease;
}

.header__nav a:hover {
  opacity: 1;
  color: var(--blue);
}

.header__right {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.header__phone {
  color: var(--blue);
  font-weight: 500;
  white-space: nowrap;
}

.header__phone--mobile,
.header__social--mobile,
.header__lang--mobile {
  display: none;
}

.header__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  padding: 0;
}

.header__burger span {
  display: block;
  height: 2px;
  background: var(--ink);
  border-radius: 2px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

@media (max-width: 900px) {
  .header__nav {
    position: fixed;
    inset: 76px 0 0 0;
    height: calc(100vh - 76px);
    background: var(--white);
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem clamp(1.5rem, 5vw, 3rem);
    font-size: 1.25rem;
    gap: 1.5rem;
    transform: translateX(100%);
    transition: transform 0.25s ease;
    overflow-y: auto;
  }

  .header__nav.is-open {
    transform: translateX(0);
  }

  .header__right .header__phone,
  .header__right .header__social {
    display: none;
  }

  .header__phone--mobile,
  .header__social--mobile,
  .header__lang--mobile {
    display: flex;
    margin-top: 1rem;
  }

  .header__lang {
    display: none;
  }

  .header__burger {
    display: flex;
  }

  .header__burger.is-open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .header__burger.is-open span:nth-child(2) {
    opacity: 0;
  }
  .header__burger.is-open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
}
</style>
