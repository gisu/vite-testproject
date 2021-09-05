<template>
  <BaseTemplate title="Launches">
    <h2 class="text-3xl font-bold mb-8">
      Launch Detail
    </h2>
    <LoadingSpinner v-if="loading" />
    <template v-else>
      <div v-if="error" class="text-red-500 text-sm">
        {{ error }}
      </div>
      <div class="mb-8">
        <LaunchCard :result="launchDetail" />
        <div v-if="launchDetail.details" class="mt-6">
          {{ launchDetail.details }}
        </div>
      </div>
    </template>

    <p>
      <router-link
        to="/launches/"
        class="underline hover:no-underline"
      >
        back to overview
      </router-link>
    </p>
  </BaseTemplate>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import LoadingSpinner from '@/components/pure/LoadingSpinner.vue'
import LaunchCard from '@/components/feature/LaunchCard/LaunchCard.vue'
import { selectLaunch } from '@/composeables/collectLaunches'

const route = useRoute()
const id = parseInt(route.params.id)

const { launchDetail, loading, error } = selectLaunch(route.params.id)
</script>
