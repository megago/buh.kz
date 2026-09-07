<script setup>
import { useI18n } from 'vue-i18n'
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import CertificatesSection from './components/CertificatesSection.vue'
import TeamStatsSection from './components/TeamStatsSection.vue'
import ContractSection from './components/ContractSection.vue'
import ContactFormSection from './components/ContactFormSection.vue'
import TheFooter from './components/TheFooter.vue'
import FloatingSocial from './components/FloatingSocial.vue'

const { t } = useI18n()
</script>

<template>
  <a class="skip-link" href="#main">{{ t('a11y.skipLink') }}</a>
  <TheHeader />
  <main id="main">
    <HeroSection />
    <ServicesSection />
    <BenefitsSection />
    <CertificatesSection />
    <TeamStatsSection />
    <ContractSection />
    <ContactFormSection />
  </main>
  <TheFooter />
  <FloatingSocial />
</template>
