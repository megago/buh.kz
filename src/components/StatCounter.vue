<script setup>
import { ref } from 'vue'
import { useCountUp } from '../composables/useCountUp'

const props = defineProps({
  target: { type: Number, required: true },
  prefix: { type: String, default: '' },
  suffix: { type: String, default: '' }
})

const el = ref(null)
const value = useCountUp(el, props.target)
</script>

<template>
  <span ref="el">{{ prefix }}{{ value }}{{ suffix }}</span>
</template>
