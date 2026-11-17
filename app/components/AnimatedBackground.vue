<template>
  <div class="bgfx" aria-hidden="true">
    <span class="bgfx-blob bgfx-blob-1" />
    <span class="bgfx-blob bgfx-blob-2" />
    <span class="bgfx-blob bgfx-blob-3" />
    <span class="bgfx-blob bgfx-blob-4" />
  </div>
</template>

<style>
/* ---------- Light mode palette (peach, rose, soft blue, sand) ---------- */
:root {
  --bgfx-1: #f4b98a;
  --bgfx-2: #e8998a;
  --bgfx-3: #9db4d0;
  --bgfx-4: #f7d9a8;
  --bgfx-opacity: 0.55;
}

/* ---------- Dark mode palette (orange, blue, teal, indigo) ---------- */
.dark,
[data-theme='dark'] {
  --bgfx-1: #d9772b;
  --bgfx-2: #3e63a8;
  --bgfx-3: #2a8c9a;
  --bgfx-4: #4a5fa0;
  --bgfx-opacity: 0.32;
}

.bgfx {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.bgfx-blob {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 9999px;
  filter: blur(80px);
  opacity: var(--bgfx-opacity);
  will-change: transform;
  transition: background-color 0.6s ease, opacity 0.6s ease;
}

/* Speed: lower seconds = faster. Change ease-in-out to linear for a ricochet feel. */
.bgfx-blob-1 {
  width: 55vmax;
  height: 55vmax;
  background: var(--bgfx-1);
  transform: translate(-10vw, -10vh);
  animation: bgfx-move-1 16s ease-in-out infinite;
}

.bgfx-blob-2 {
  width: 45vmax;
  height: 45vmax;
  background: var(--bgfx-2);
  transform: translate(60vw, -5vh);
  animation: bgfx-move-2 20s ease-in-out infinite;
}

.bgfx-blob-3 {
  width: 50vmax;
  height: 50vmax;
  background: var(--bgfx-3);
  transform: translate(10vw, 60vh);
  animation: bgfx-move-3 24s ease-in-out infinite;
}

.bgfx-blob-4 {
  width: 35vmax;
  height: 35vmax;
  background: var(--bgfx-4);
  transform: translate(65vw, 55vh);
  animation: bgfx-move-4 28s ease-in-out infinite;
}

/* Each blob bounces between different corners of the screen */
@keyframes bgfx-move-1 {
  0%   { transform: translate(-10vw, -10vh) scale(1); }
  25%  { transform: translate(55vw, 10vh) scale(1.2); }
  50%  { transform: translate(70vw, 60vh) scale(0.9); }
  75%  { transform: translate(15vw, 70vh) scale(1.15); }
  100% { transform: translate(-10vw, -10vh) scale(1); }
}

@keyframes bgfx-move-2 {
  0%   { transform: translate(60vw, -5vh) scale(1); }
  25%  { transform: translate(5vw, 25vh) scale(1.25); }
  50%  { transform: translate(-5vw, 65vh) scale(0.85); }
  75%  { transform: translate(50vw, 45vh) scale(1.15); }
  100% { transform: translate(60vw, -5vh) scale(1); }
}

@keyframes bgfx-move-3 {
  0%   { transform: translate(10vw, 60vh) scale(1); }
  25%  { transform: translate(60vw, 70vh) scale(1.15); }
  50%  { transform: translate(75vw, 5vh) scale(0.85); }
  75%  { transform: translate(25vw, 15vh) scale(1.2); }
  100% { transform: translate(10vw, 60vh) scale(1); }
}

@keyframes bgfx-move-4 {
  0%   { transform: translate(65vw, 55vh) scale(1); }
  25%  { transform: translate(20vw, 55vh) scale(1.25); }
  50%  { transform: translate(35vw, -5vh) scale(0.85); }
  75%  { transform: translate(75vw, 25vh) scale(1.15); }
  100% { transform: translate(65vw, 55vh) scale(1); }
}
</style>