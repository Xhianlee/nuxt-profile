<script setup lang="ts">
const glow = ref<HTMLElement | null>(null)
let targetX = 0
let targetY = 0
let currentX = 0
let currentY = 0
let frame = 0

const onMove = (e: MouseEvent) => {
  targetX = e.clientX
  targetY = e.clientY
  glow.value?.classList.add('is-on')
}

const tick = () => {
  currentX += (targetX - currentX) * 0.15
  currentY += (targetY - currentY) * 0.15
  if (glow.value) {
    glow.value.style.transform = `translate3d(${currentX - 200}px, ${currentY - 200}px, 0)`
  }
  frame = requestAnimationFrame(tick)
}

onMounted(() => {
  window.addEventListener('mousemove', onMove)
  frame = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMove)
  cancelAnimationFrame(frame)
})
</script>

<template>
  <div ref="glow" class="cursor-glow" aria-hidden="true" />
</template>