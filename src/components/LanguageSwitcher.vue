<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, setLocale } from '../i18n'

const { locale, t } = useI18n()

const props = defineProps({
  // Which edge the dropdown hangs from. 'end' (default) anchors it to the
  // trigger's right edge, growing leftward — right for a right-aligned
  // trigger like the desktop header. 'start' anchors to the left edge and
  // grows rightward — needed for the mobile menu, where the trigger sits
  // near the left edge and 'end' would push the panel off-screen.
  align: { type: String, default: 'end', validator: (v) => ['start', 'end'].includes(v) }
})

const isOpen = ref(false)
const rootEl = ref(null)
const activeIndex = ref(0)

const current = computed(() => SUPPORTED_LOCALES.find((l) => l.code === locale.value) ?? SUPPORTED_LOCALES[0])

function open() {
  isOpen.value = true
  activeIndex.value = SUPPORTED_LOCALES.findIndex((l) => l.code === locale.value)
  nextTick(() => {
    rootEl.value?.querySelector(`[data-index="${activeIndex.value}"]`)?.focus()
  })
}

function close() {
  isOpen.value = false
}

function toggle() {
  isOpen.value ? close() : open()
}

function select(code) {
  setLocale(code)
  close()
}

function onKeydown(e) {
  if (!isOpen.value) return
  if (e.key === 'Escape') {
    close()
    return
  }
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault()
    const dir = e.key === 'ArrowDown' ? 1 : -1
    activeIndex.value = (activeIndex.value + dir + SUPPORTED_LOCALES.length) % SUPPORTED_LOCALES.length
    rootEl.value?.querySelector(`[data-index="${activeIndex.value}"]`)?.focus()
  } else if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    select(SUPPORTED_LOCALES[activeIndex.value].code)
  }
}

function onClickOutside(e) {
  if (isOpen.value && rootEl.value && !rootEl.value.contains(e.target)) close()
}

onMounted(() => document.addEventListener('click', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))
</script>

<template>
  <div class="lang-switch" ref="rootEl" @keydown="onKeydown">
    <button
      type="button"
      class="lang-switch__trigger"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      :aria-label="t('lang.switchAria')"
      @click="toggle"
    >
      <span>{{ current.short }}</span>
      <svg class="lang-switch__chevron" :class="{ 'is-open': isOpen }" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
        <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <Transition name="lang-switch-fade">
      <ul
        v-if="isOpen"
        class="lang-switch__menu"
        :class="`lang-switch__menu--${align}`"
        role="listbox"
        :aria-label="t('lang.switchAria')"
      >
        <li
          v-for="(l, i) in SUPPORTED_LOCALES"
          :key="l.code"
          role="option"
          :aria-selected="l.code === locale"
          :data-index="i"
          tabindex="-1"
          class="lang-switch__option"
          :class="{ 'is-active': l.code === locale }"
          @click="select(l.code)"
        >
          <span class="lang-switch__option-label">{{ l.short }}</span>
          <svg v-if="l.code === locale" class="lang-switch__check" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8.5l3 3 7-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.lang-switch {
  position: relative;
}

.lang-switch__trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.7rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--white);
  color: var(--ink);
  font-size: 0.85rem;
  font-weight: 500;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.lang-switch__trigger:hover {
  border-color: var(--blue);
  background: var(--tint);
}

.lang-switch__chevron {
  color: var(--blue);
  transition: transform 0.2s ease;
}

.lang-switch__chevron.is-open {
  transform: rotate(180deg);
}

.lang-switch__menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  z-index: 60;
  min-width: 7.5rem;
  margin: 0;
  padding: 0.35rem;
  list-style: none;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: var(--shadow-float);
}

.lang-switch__menu--end {
  right: 0;
}

.lang-switch__menu--start {
  left: 0;
}

.lang-switch__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.55rem 0.7rem;
  border-radius: 9px;
  font-size: 0.9rem;
  color: var(--ink);
  cursor: pointer;
  transition: background 0.12s ease, color 0.12s ease;
}

.lang-switch__option:hover,
.lang-switch__option:focus-visible {
  background: var(--tint);
  outline: none;
}

.lang-switch__option.is-active {
  color: var(--blue);
  font-weight: 500;
}

.lang-switch__check {
  color: var(--blue);
  flex-shrink: 0;
}

.lang-switch-fade-enter-active,
.lang-switch-fade-leave-active {
  transition: opacity 0.12s ease, transform 0.12s ease;
}

.lang-switch-fade-enter-from,
.lang-switch-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
