<script setup>
const { isDark, init, toggle } = useDarkMode()
onMounted(init)
</script>

<template>
  <button
    type="button"
    class="rounded-full border border-sand px-3 py-1.5 txt-sm font-medium
           text-ink transition hover:bg-sand/40
           dark:border-fantastic dark:text-palladian dark:hover:bg-fantastic"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggle"
  >
    {{ isDark ? '☀️' : '🌙' }}
  </button>
</template>