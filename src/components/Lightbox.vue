<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'

const props = defineProps({
  items: { type: Array, required: true }, // [{ full, thumb, alt }]
})

const activeIndex = ref(null)
const dialogRef = ref(null)
let lastFocused = null

function open(index) {
  lastFocused = document.activeElement
  activeIndex.value = index
}

function close() {
  activeIndex.value = null
  if (lastFocused) lastFocused.focus()
}

function next() {
  activeIndex.value = (activeIndex.value + 1) % props.items.length
}

function prev() {
  activeIndex.value = (activeIndex.value - 1 + props.items.length) % props.items.length
}

function onKeydown(e) {
  if (activeIndex.value === null) return
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowRight') next()
  else if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'Tab') {
    // simple focus trap: only the dialog's own controls are focusable
    e.preventDefault()
  }
}

watch(activeIndex, async (val) => {
  if (val !== null) {
    await nextTick()
    dialogRef.value?.focus()
  }
})

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))

defineExpose({ open })
</script>

<template>
  <div>
    <slot name="trigger" :open="open" />

    <Teleport to="body">
      <div
        v-if="activeIndex !== null"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="items[activeIndex].alt"
        tabindex="-1"
        ref="dialogRef"
        @click.self="close"
      >
        <button class="lightbox__close" aria-label="Закрыть" @click="close">✕</button>
        <button
          v-if="items.length > 1"
          class="lightbox__nav lightbox__nav--prev"
          aria-label="Предыдущий сертификат"
          @click="prev"
        >‹</button>

        <img class="lightbox__img" :src="items[activeIndex].full" :alt="items[activeIndex].alt" />

        <button
          v-if="items.length > 1"
          class="lightbox__nav lightbox__nav--next"
          aria-label="Следующий сертификат"
          @click="next"
        >›</button>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(5, 25, 35, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox__img {
  max-width: min(90vw, 800px);
  max-height: 85vh;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.lightbox__close,
.lightbox__nav {
  position: absolute;
  background: rgba(255, 255, 255, 0.12);
  color: var(--white);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease;
}

.lightbox__close:hover,
.lightbox__nav:hover {
  background: rgba(255, 255, 255, 0.25);
}

.lightbox__close {
  top: 1.25rem;
  right: 1.25rem;
}

.lightbox__nav--prev {
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
}

.lightbox__nav--next {
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
}
</style>
