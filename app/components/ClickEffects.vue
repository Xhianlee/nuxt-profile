<script setup lang="ts">
type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  decay: number
  size: number
}
type Ripple = { x: number; y: number; life: number }

const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let frame = 0
let running = false
let lastX = -999
let lastY = -999

const particles: Particle[] = []
const ripples: Ripple[] = []


const getColor = () =>
  getComputedStyle(document.documentElement).getPropertyValue('--fx-color').trim() || '#c2410c'

const resize = () => {
  const c = canvas.value
  if (!c) return
  const dpr = window.devicePixelRatio || 1
  c.width = window.innerWidth * dpr
  c.height = window.innerHeight * dpr
  ctx = c.getContext('2d')
  ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)
}

const tick = () => {
  if (!ctx) {
    running = false
    return
  }

  const color = getColor()
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
  ctx.fillStyle = color
  ctx.strokeStyle = color

 
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i]
    p.life -= p.decay
    if (p.life <= 0) {
      particles.splice(i, 1)
      continue
    }
    p.x += p.vx
    p.y += p.vy
    ctx.globalAlpha = p.life * 0.6
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2)
    ctx.fill()
  }

 
  for (let i = ripples.length - 1; i >= 0; i--) {
    const r = ripples[i]
    r.life -= 0.025
    if (r.life <= 0) {
      ripples.splice(i, 1)
      continue
    }
    const progress = 1 - r.life
    ctx.globalAlpha = r.life * 0.8
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(r.x, r.y, 8 + progress * 70, 0, Math.PI * 2)
    ctx.stroke()
  }

  ctx.globalAlpha = 1

  if (particles.length || ripples.length) {
    frame = requestAnimationFrame(tick)
  } else {
    running = false
  }
}

const start = () => {
  if (running) return
  running = true
  frame = requestAnimationFrame(tick)
}

const onMove = (e: PointerEvent) => {
  if (e.pointerType !== 'mouse') return
  const dx = e.clientX - lastX
  const dy = e.clientY - lastY
  if (dx * dx + dy * dy < 100) return 
  lastX = e.clientX
  lastY = e.clientY

  particles.push({
    x: e.clientX,
    y: e.clientY,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    life: 1,
    decay: 0.03,
    size: 5 + Math.random() * 3
  })
  start()
}

const onDown = (e: PointerEvent) => {
  ripples.push({ x: e.clientX, y: e.clientY, life: 1 })

  for (let i = 0; i < 8; i++) {
    const angle = (Math.PI * 2 * i) / 8 + Math.random() * 0.4
    const speed = 2 + Math.random() * 2
    particles.push({
      x: e.clientX,
      y: e.clientY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      decay: 0.035,
      size: 3 + Math.random() * 2
    })
  }
  start()
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
  window.addEventListener('pointermove', onMove)
  window.addEventListener('pointerdown', onDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
  window.removeEventListener('pointermove', onMove)
  window.removeEventListener('pointerdown', onDown)
  cancelAnimationFrame(frame)
})
</script>

<template>
  <canvas ref="canvas" class="fx-canvas" aria-hidden="true" />
</template>

<style>

:root {
  --fx-color: #c2410c;
}

.dark,
[data-theme='dark'] {
  --fx-color: #fdba74;
}

.fx-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 60;
}
</style>