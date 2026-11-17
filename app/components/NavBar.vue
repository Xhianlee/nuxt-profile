<script setup lang="ts">
const route = useRoute()

const links = [
  { to: '/', label: 'Home' },
  { to: '/profile', label: 'Profile' }
]

const isActive = (to: string) => route.path === to
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-sand/80 bg-paper/70 backdrop-blur-md dark:border-fantastic">
    <nav class="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
      <!-- EDIT: change "YOUR NAME" to your actual name -->
      <NuxtLink
        to="/"
        class="font-display text-lg tracking-tight text-ink dark:text-palladian"
      >
        <HoverText text="PORTFOLIO" mode="letter" />
      </NuxtLink>

      <div class="flex items-center gap-6">
        <ul class="flex items-center gap-6 font-body text-sm">
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="border-b-2 pb-1 transition-colors"
              :class="isActive(link.to)
                ? 'border-rust text-ink dark:border-flame dark:text-palladian'
                : 'border-transparent text-ink/60 hover:border-pine hover:text-ink dark:text-palladian/60 dark:hover:border-flame dark:hover:text-palladian'"
            >
              <HoverText :text="link.label" />
            </NuxtLink>
          </li>
        </ul>

        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>