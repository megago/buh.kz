<script setup>
import { ref, computed, watch, nextTick, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePrivacyModal } from '../composables/usePrivacyModal'
import { EMAIL } from '../constants/contacts'

const { t, tm } = useI18n()
const { isOpen, close } = usePrivacyModal()

const dialogRef = ref(null)
let lastFocused = null

// The only placeholder used across privacy.sections is {email}.
const sections = computed(() =>
  tm('privacy.sections').map((s) => ({ ...s, body: s.body.replace('{email}', EMAIL) }))
)

function onKeydown(e) {
  if (e.key === 'Escape') close()
}

watch(isOpen, async (open) => {
  if (open) {
    lastFocused = document.activeElement
    document.body.style.overflow = 'hidden'
    await nextTick()
    dialogRef.value?.focus()
  } else {
    document.body.style.overflow = ''
    lastFocused?.focus()
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="privacy-modal"
      @click.self="close"
      @keydown="onKeydown"
    >
      <div
        ref="dialogRef"
        class="privacy-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
        tabindex="-1"
      >
        <button class="privacy-modal__close" :aria-label="t('a11y.close')" @click="close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M2 2l14 14M16 2 2 16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
          </svg>
        </button>

        <div class="privacy-modal__scroll">
          <h2 id="privacy-modal-title" class="privacy-modal__title">{{ t('privacy.title') }}</h2>
          <p class="privacy-modal__draft-note"><em>{{ t('privacy.draftNote') }}</em></p>

          <section v-for="(s, i) in sections" :key="i" class="privacy-modal__section">
            <h3>{{ s.heading }}</h3>
            <p>{{ s.body }}</p>
          </section>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.privacy-modal {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(5, 25, 35, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.privacy-modal__panel {
  position: relative;
  width: min(100%, 640px);
  max-height: min(85vh, 720px);
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow-float);
  outline: none;
}

.privacy-modal__scroll {
  overflow-y: auto;
  max-height: min(85vh, 720px);
  padding: clamp(1.75rem, 3vw, 2.75rem);
}

.privacy-modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--tint);
  color: var(--ink);
  transition: background 0.15s ease, color 0.15s ease;
}

.privacy-modal__close:hover {
  background: var(--blue);
  color: var(--white);
}

.privacy-modal__title {
  font-size: var(--fs-h2);
  font-weight: 500;
  color: var(--blue);
  padding-right: 2rem;
}

.privacy-modal__draft-note {
  margin-top: 0.75rem;
  font-size: 0.85rem;
  opacity: 0.6;
}

.privacy-modal__section {
  margin-top: 1.5rem;
}

.privacy-modal__section h3 {
  font-size: 1rem;
  font-weight: 500;
  color: var(--ink);
}

.privacy-modal__section p {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.85;
}
</style>
