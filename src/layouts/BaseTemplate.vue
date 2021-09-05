<template>
  <header class="py-8 bg-gray-100 border-b border-gray-200" role="banner">
    <div class="container mx-auto flex items-center px-8">
      <div>
        <h1 class="text-4xl text-gray-700 font-bold">
          <router-link to="/">
            Ground Control
          </router-link>
        </h1>
        <div class="text-gray-400 text-sm">
          It was supposed to be a lottery page
        </div>
      </div>
    </div>
  </header>
  <main class="container mx-auto prose prose-purple flex-auto px-8 py-10">
    <slot />
  </main>
  <footer class="bg-gray-900 text-gray-400 py-6 text-sm">
    <div class="container mx-auto text-right px-8">
      &copy; 2021 Space Division Pinneberg
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

const props = defineProps<{
  title?: string
  subTitle?: string
}>()

// Note: these are static. If you need these to be reactive, use ref() or reactive()
useHead({
  bodyAttrs: {
    title: `Ground Control - ${props.title}`
  },
  meta: [
    {
      property: 'og:title',
      content: props.title
    },
    {
      name: 'twitter:title',
      content: props.title
    }
  ]
})

</script>
