import { ref, onMounted, onBeforeUnmount } from 'vue'

/**
 * Animates a numeric value from 0 to `target` when `el` enters the viewport.
 * Respects prefers-reduced-motion by jumping straight to the target.
 */
export function useCountUp(elRef, target, { duration = 1200 } = {}) {
  const display = ref(0)
  let observer = null
  let rafId = null

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function animate() {
    if (reduceMotion) {
      display.value = target
      return
    }
    const start = performance.now()
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      display.value = Math.round(target * eased)
      if (progress < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
  }

  onMounted(() => {
    if (!elRef.value) return
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate()
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(elRef.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    if (rafId) cancelAnimationFrame(rafId)
  })

  return display
}
