<template>
  <div
    class="lds-ring"
    :style="outerRing"
    :class="borderColor"
  >
    <div :style="ringStyle" /><div :style="ringStyle" /><div :style="ringStyle" /><div :style="ringStyle" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  size?: number
  borderSize?: number
  borderColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 40,
  borderSize: 4,
  borderColor: 'text-gray-500'
})

const outerRing = computed(() => {
  return `height: ${props.size}px; width: ${props.size}px;`
})

const ringStyle = computed(() => {
  return `height: ${props.size}px; width: ${props.size}px; border-width: ${props.borderSize}px`
})
</script>

<style>
.lds-ring {
  display: inline-block;
  position: relative;
}
.lds-ring div {
  @apply absolute block border-solid;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
