<template>
  <div>
    <div
      v-if="moreResults"
      class="mb-6"
    >
      <label
        for="resultCounter"
        class="text-sm text-gray-600 block mb-2"
      >
        Setting the maximum results
      </label>
      <input
        id="resultCounter"
        v-model="limit"
        type="number"
        class="border border-gray-300 px-2 py-1 rounded"
      >
    </div>

    <LoadingSpinner v-if="loading" />
    <template v-else>
      <UseElementSize v-slot="{ width }">
        <div
          :class="[width <= breakpoint ? 'border border-gray-200' : '' ]"
        >
          <div
            v-if="width > breakpoint"
            class="grid-launchList grid-launchList--big bg-gray-200 font-medium"
          >
            <div
              v-for="(head, i) in header"
              :key="i"
              class="p-3"
            >
              {{ head }}
            </div>
          </div>
          <LaunchListEntry
            v-for="(launch) in result.launches"
            :key="launch.index"
            class="grid-launchList zebra"
            :entry="launch"
            :width="width"
            :breakpoint="breakpoint"
            :header="header"
          />

          <div v-if="error" class="text-sm text-red-600">
            {{ error }}
          </div>
        </div>
      </UseElementSize>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { UseElementSize } from '@vueuse/components'
import LoadingSpinner from '@/components/pure/LoadingSpinner.vue'
import { launches } from '@/composeables/collectLaunches'
import LaunchListEntry from '@/components/feature/LaunchList/LaunchListEntry.vue'

interface Props {
  moreResults?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  moreResults: true
})

const limit = ref(4)

const { result, loading, error } = launches(limit)
console.log('result', result)

const header = ['Name', 'Ago', 'Rocket']

const breakpoint = 600
</script>

<style lang="postcss">
.grid-launchList {
  display: grid;

}
.grid-launchList--big {
  grid-template-columns: minmax(180px, 1fr) minmax(150px, 1.67fr) minmax(100px, 1fr);
  grid-gap: 20px;
}

.zebra:nth-child(even) {
  @apply bg-gray-100
}
</style>
