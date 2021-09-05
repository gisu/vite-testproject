<template>
  <div
    class="grid-launchList"
    :class="[width > breakpoint ? 'grid-launchList--big' : '']"
  >
    <div class="p-3">
      <div v-if="width <= breakpoint" class="font-medium">
        {{ header[0] }}
      </div>
      <router-link :to="entry.id">
        {{ entry.mission_name }}
      </router-link>
    </div>
    <div class="p-3">
      <div v-if="width <= breakpoint" class="font-medium">
        {{ header[1] }}
      </div>
      <UseTimeAgo
        v-slot="{ timeAgo }"
        :time="entry.launch_date_utc"
      >
        {{ timeAgo }}
      </UseTimeAgo>
    </div>
    <div class="p-3">
      <div v-if="width <= breakpoint" class="font-medium">
        {{ header[2] }}
      </div>
      {{ entry.rocket.rocket_name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { UseTimeAgo } from '@vueuse/components'

interface Props {
  width: number
  breakpoint: number
  entry: any
  header: any[]
}

const props = withDefaults(defineProps<Props>(), {
  width: 0,
  breakpoint: 600,
  entry: () => {},
  header: () => []
})
</script>

