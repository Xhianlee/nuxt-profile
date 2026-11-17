<script setup lang="ts">
const props = withDefaults(
  defineProps<{ text: string; mode?: 'word' | 'letter' }>(),
  { mode: 'word' }
)

const words = computed(() => props.text.split(' '))
</script>

<template>
  <!-- aria-label keeps screen readers reading the full text, not split pieces -->
  <span :aria-label="text">
    <template v-for="(word, i) in words" :key="i">
      <!-- Word mode: whole word changes color -->
      <span v-if="mode === 'word'" class="hover-char" aria-hidden="true">{{ word }}</span>

      <!-- Letter mode: each letter changes color; nowrap keeps words from breaking mid-word -->
      <span v-else class="inline-block whitespace-nowrap" aria-hidden="true">
        <span v-for="(char, j) in word.split('')" :key="j" class="hover-char">{{ char }}</span>
      </span>

      {{ ' ' }}
    </template>
  </span>
</template>