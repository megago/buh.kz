<script setup>
import { reactive, ref } from 'vue'
import { submitLead } from '../composables/useLeadSubmit'

const form = reactive({ name: '', phone: '', email: '' })
const errors = reactive({ name: '', phone: '', email: '' })
const status = ref('idle') // idle | submitting | success | error
const statusMessage = ref('')

const PHONE_RE = /^\+?\d[\d\s()-]{9,}$/
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
  errors.name = form.name.trim().length >= 2 ? '' : 'Укажите имя (минимум 2 символа)'
  errors.phone = PHONE_RE.test(form.phone.trim()) ? '' : 'Укажите корректный номер телефона'
  errors.email = EMAIL_RE.test(form.email.trim()) ? '' : 'Укажите корректный e-mail'
  return !errors.name && !errors.phone && !errors.email
}

async function onSubmit() {
  if (!validate()) return
  status.value = 'submitting'
  const result = await submitLead({ ...form })
  if (result.ok) {
    status.value = 'success'
    statusMessage.value = 'Спасибо! Мы откроем WhatsApp — отправьте сообщение, и мы свяжемся с вами.'
    form.name = ''
    form.phone = ''
    form.email = ''
  } else {
    status.value = 'error'
    statusMessage.value = result.error || 'Что-то пошло не так.'
  }
}
</script>

<template>
  <section id="contact" class="section">
    <div class="container contact">
      <div class="contact__copy">
        <h2 class="eyebrow-heading">Бесплатная диагностика вашей бухгалтерии</h2>
        <p>
          Оставьте свои контакты, мы с вами свяжемся и назначим встречу, чтобы
          обсудить вашу бухгалтерию.
        </p>
      </div>

      <form class="contact__form" novalidate @submit.prevent="onSubmit">
        <div class="field">
          <label for="name">Имя <span aria-hidden="true">*</span></label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            autocomplete="name"
            :aria-invalid="!!errors.name"
            :aria-describedby="errors.name ? 'name-error' : undefined"
          />
          <p v-if="errors.name" id="name-error" class="field__error">{{ errors.name }}</p>
        </div>

        <div class="field">
          <label for="phone">Телефон <span aria-hidden="true">*</span></label>
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            autocomplete="tel"
            placeholder="+7 (___) ___-__-__"
            :aria-invalid="!!errors.phone"
            :aria-describedby="errors.phone ? 'phone-error' : undefined"
          />
          <p v-if="errors.phone" id="phone-error" class="field__error">{{ errors.phone }}</p>
        </div>

        <div class="field">
          <label for="email">E-mail <span aria-hidden="true">*</span></label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            autocomplete="email"
            :aria-invalid="!!errors.email"
            :aria-describedby="errors.email ? 'email-error' : undefined"
          />
          <p v-if="errors.email" id="email-error" class="field__error">{{ errors.email }}</p>
        </div>

        <button class="btn btn-primary contact__submit" type="submit" :disabled="status === 'submitting'">
          {{ status === 'submitting' ? 'Отправка…' : 'Отправить' }}
        </button>

        <p
          v-if="status === 'success' || status === 'error'"
          class="contact__status"
          :class="{ 'contact__status--error': status === 'error' }"
          role="status"
        >
          {{ statusMessage }}
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: clamp(2rem, 4vw, 3.5rem);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 4vw, 4rem);
}

.contact__copy p {
  margin-top: 1.25rem;
  opacity: 0.8;
  max-width: 36ch;
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.field label {
  display: block;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.6;
  margin-bottom: 0.4rem;
}

.field label span {
  color: #d0273c;
}

.field input {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  font: inherit;
  color: var(--ink);
  background: var(--white);
}

.field input[aria-invalid='true'] {
  border-color: #d0273c;
}

.field__error {
  margin-top: 0.4rem;
  font-size: 0.85rem;
  color: #d0273c;
}

.contact__submit {
  margin-top: 0.5rem;
  width: 100%;
}

.contact__status {
  font-size: 0.9rem;
  opacity: 0.85;
}

.contact__status--error {
  color: #d0273c;
}

@media (max-width: 900px) {
  .contact {
    grid-template-columns: 1fr;
  }
}
</style>
