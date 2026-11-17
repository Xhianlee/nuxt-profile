<template>
  <div class="bg-gradient-page isolate min-h-screen text-ink transition-colors">
    <AnimatedBackground />
    <ScrollProgress />
    <CursorGlow />
    <ClickEffects />
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </NuxtLayout>
  </div>
</template>