<script setup>
import { useI18n } from 'vue-i18n'
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import TrustBar from './components/TrustBar.vue'
import ServicesSection from './components/ServicesSection.vue'
import AudienceSection from './components/AudienceSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import FaqSection from './components/FaqSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import AboutSection from './components/AboutSection.vue'
import CertificatesSection from './components/CertificatesSection.vue'
import TeamStatsSection from './components/TeamStatsSection.vue'
import ContractSection from './components/ContractSection.vue'
import ContactFormSection from './components/ContactFormSection.vue'
import TheFooter from './components/TheFooter.vue'
import FloatingSocial from './components/FloatingSocial.vue'
import PrivacyModal from './components/PrivacyModal.vue'

const { t } = useI18n()
</script>

<template>
  <a class="skip-link" href="#main">{{ t('a11y.skipLink') }}</a>
  <TheHeader />
  <main id="main">
    <HeroSection />
    <TrustBar />
    <ServicesSection />
    <AudienceSection />
    <BenefitsSection />
    <AboutSection />
    <CertificatesSection />
    <TeamStatsSection />
    <ProcessSection />
    <ContractSection />
    <FaqSection />
    <ContactFormSection />
  </main>
  <TheFooter />
  <FloatingSocial />
  <PrivacyModal />
</template>
