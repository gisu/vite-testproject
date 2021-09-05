<template>
  <div>
    <LoadingSpinner v-if="loading" />
    <template v-else>
      <div v-if="error" class="text-red-500 text-sm">
        {{ error }}
      </div>
      <LaunchCard :result="launchResult" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { lastLaunch } from '@/composeables/collectLaunches'
import LoadingSpinner from '@/components/pure/LoadingSpinner.vue'
import LaunchCard from '@/components/feature/LaunchCard/LaunchCard.vue'

const { launchResult, loading, error } = lastLaunch()

</script>

