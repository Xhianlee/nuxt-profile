<template>
  <div class="flex min-h-screen flex-col">
    <NavBar />

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-sand/80">
      <div class="mx-auto max-w-3xl px-6 py-6 font-body text-xs text-ink/50">
        <HoverText :text="`© ${new Date().getFullYear()} ASHVILLE. Built with Nuxt + Tailwind CSS.`" />
      </div>
    </footer>
  </div>
</template>