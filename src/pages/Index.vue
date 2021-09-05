<template>
  <BaseTemplate>
    <h2 class="text-3xl font-bold mb-8">
      Last launch
    </h2>

    <FeaturedLaunch class="mb-10" />
    <p>
      <router-link
        to="/launches/"
        class="underline hover:no-underline"
      >
        more launches
      </router-link>
    </p>
  </BaseTemplate>
</template>

<script lang="ts" setup>
import FeaturedLaunch from '@/components/feature/FeaturedLaunch/FeaturedLaunch.vue'
</script>
