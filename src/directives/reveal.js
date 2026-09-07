// v-reveal: fades + slides an element in the first time it enters the
// viewport while scrolling. Mirrors the scroll-reveal pattern used on
// driverspa.kz (IntersectionObserver toggling a "is-visible" class).
//
// Usage:
//   <div v-reveal>...</div>
//   <div v-reveal="{ delay: 120 }">...</div>          stagger by hand
//   <div v-reveal="{ delay: i * 80 }" v-for="...">      stagger a list

const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const observer =
  typeof window !== 'undefined' && !reduceMotion
    ? new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
      )
    : null

export const vReveal = {
  mounted(el, binding) {
    el.classList.add('reveal')
    const delay = binding.value?.delay
    if (delay) el.style.transitionDelay = `${delay}ms`

    if (reduceMotion) {
      el.classList.add('is-visible')
      return
    }
    observer.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  }
}
