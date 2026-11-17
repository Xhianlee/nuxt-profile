<script setup lang="ts">
useSeoMeta({
  title: 'Profile',
  description: 'Personal information, education, skills and hobbies.'
})


const personalInfo = [
  { label: 'Location', value: 'San Francisco, Agusan del Sur' },
  { label: 'Email', value: 'xhianlee.ashville13@gmail.com' },
  { label: 'Languages', value: 'English, Filipino' }
]


const education = [
  {
    period: '2012 — 2018',
    title: 'Elementary',
    place: 'Seventh Day Adventist Elementary School Inc.'
  },
  {
    period: '2018 — 2022',
    title: 'Junior High School',
    place: 'Agusan del Sur National High School'
  },
  {
    period: '2022 — 2024',
    title: 'Senior High School',
    place: 'Agusan del Sur National High School - Senior High Department'
  },
]


const skills = [
  'Video Editing', 'Photography', 'Frontend Development',
  'Backend Development',]


const interests = ['Travelling', 'Learning New Skills', 'Gaming',]


const hobbies = [
  { title: 'Video & Photo Editing', note: 'Creating compelling visual content for various platforms.' },
  { title: 'Coding & Exploring Technology', note: 'Building small projects and exploring new technologies to improve my programming skills.' },
  { title: 'Traveling & Photography', note: 'Exploring new places, capturing memorable moments, and discovering different experiences.  ' }
]
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-16">
    <h1 class="font-display text-3xl font-semibold text-ink">
      <HoverText text="Profile" mode="letter" />
    </h1>
    <p class="mt-2 font-body text-sm text-ink/60">
      <HoverText text="A bit more about who I am, what I've studied, and what I spend my time on." />
    </p>

    <!-- Personal information -->
    <div class="mt-10">
      <h2 class="font-display text-xl font-semibold text-ink">
        <HoverText text="Personal Information" mode="letter" />
      </h2>
      <dl class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div
          v-for="item in personalInfo"
          :key="item.label"
          class="border-t border-sand pt-3"
        >
          <dt class="font-body text-xs uppercase tracking-wide text-ink/50">
            <HoverText :text="item.label" />
          </dt>
          <dd class="mt-1 font-body text-sm text-ink">
            <HoverText :text="item.value" />
          </dd>
        </div>
      </dl>
    </div>

    <!-- Educational background -->
    <div class="mt-12">
      <h2 class="font-display text-xl font-semibold text-ink">
        <HoverText text="Educational Background" mode="letter" />
      </h2>
      <ul class="mt-4 space-y-4">
        <li
          v-for="item in education"
          :key="item.title"
          class="flex flex-col gap-1 border-l-2 border-pine/40 pl-4 sm:flex-row sm:items-baseline sm:gap-4"
        >
          <span class="font-body text-xs text-ink/50 sm:w-24 sm:shrink-0">
            <HoverText :text="item.period" />
          </span>
          <span class="font-body text-sm text-ink">
            <span class="font-medium"><HoverText :text="item.title" /></span> —
            <HoverText :text="item.place" />
          </span>
        </li>
      </ul>
    </div>

    <!-- Skills and Interests -->
    <div class="mt-12">
      <h2 class="font-display text-xl font-semibold text-ink">
        <HoverText text="Skills & Interests" mode="letter" />
      </h2>

      <p class="mt-4 font-body text-xs uppercase tracking-wide text-ink/50">
        <HoverText text="Skills" />
      </p>
      <div class="mt-2 flex flex-wrap gap-2">
        <span
          v-for="(skill, i) in skills"
          :key="i"
          class="rounded-sm border border-pine/30 bg-pine/5 px-3 py-1 font-body text-sm text-pine"
        >
          <HoverText :text="skill" />
        </span>
      </div>

      <p class="mt-5 font-body text-xs uppercase tracking-wide text-ink/50">
        <HoverText text="Interests" />
      </p>
      <div class="mt-2 flex flex-wrap gap-2">
        <span
          v-for="(interest, i) in interests"
          :key="i"
          class="rounded-sm border border-rust/30 bg-rust/5 px-3 py-1 font-body text-sm text-rust"
        >
          <HoverText :text="interest" />
        </span>
      </div>
    </div>

    <!-- Hobbies -->
    <div class="mt-12">
      <h2 class="font-display text-xl font-semibold text-ink">
        <HoverText text="Hobbies" mode="letter" />
      </h2>
      <ul class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <li v-for="hobby in hobbies" :key="hobby.title" class="border-t border-sand pt-3">
          <p class="font-body text-sm font-medium text-ink">
            <HoverText :text="hobby.title" />
          </p>
          <p class="mt-1 font-body text-sm text-ink/70">
            <HoverText :text="hobby.note" />
          </p>
        </li>
      </ul>
    </div>

    <NuxtLink
      to="/"
      class="mt-14 inline-block font-body text-sm text-pine underline decoration-pine/40 underline-offset-4 hover:text-ink"
    >
      <HoverText text="← Back to home" />
    </NuxtLink>
  </section>
</template> 