import { ref } from 'vue'

// Module-level singleton: any component can open the privacy modal (footer
// link today, possibly others later) without prop-drilling, and a single
// <PrivacyModal /> mounted once near the app root reacts to it.
const isOpen = ref(false)

export function usePrivacyModal() {
  return {
    isOpen,
    open: () => { isOpen.value = true },
    close: () => { isOpen.value = false }
  }
}
