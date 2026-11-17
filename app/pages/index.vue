<script setup lang="ts">

useSeoMeta({
  title: 'Home',
  description: 'Welcome — a short introduction and quick links to my profile.'
})

const photo = '/grad.jpg'
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-16">
    <p class="font-body text-sm uppercase tracking-wide text-pine">Welcome</p>

    <div class="mt-4 flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center">
      <div class="flex-1">
       
  <h1 class="text-balance font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
  <HoverText text="Hi, I'm Xhianlee Ashville Roman." mode="letter" />
</h1>

        
      <p class="mt-5 max-w-xl font-body text-base leading-relaxed text-ink/80">
  <HoverText text="I'm an Information Technology student with a passion for building web applications and exploring new technologies. I enjoy creating user-friendly interfaces and writing clean, efficient code. In my free time, I love to contribute to open-source projects and stay updated with the latest trends in the tech industry." />
</p>
        <div class="mt-8 flex flex-wrap gap-4">
          <NuxtLink
            to="/profile"
            class="rounded-sm bg-pine px-5 py-2.5 font-body text-sm font-medium text-paper transition-colors hover:bg-ink"
          >
            View my profile
          </NuxtLink>
          
          <a
            href="mailto:xhianlee.ashville13@gmail.com"
            class="rounded-sm border border-ink/20 px-5 py-2.5 font-body text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Email me
          </a>
        </div>
      </div>

   
      <img
        :src="photo"
        alt="Photo of Xhianlee Ashville Roman"
        class="h-32 w-32 shrink-0 rounded-full border border-sand bg-white object-cover sm:h-40 sm:w-40"
      >
    </div>
  </section>
</template>
