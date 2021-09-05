<template>
  <UseElementSize v-slot="{ width }">
    <div
      v-if="result && Object.keys(result).length"
      class="shadow-2xl rounded overflow-hidden grid-featuredLaunch"
      :class="[width > 760 ? 'grid-featuredLaunch--big': 'grid-featuredLaunch--small']"
    >
      <YoutubeVideo
        v-if="result.links.video_link"
        :link="result.links.video_link"
        class="grid-featuredLaunch__video"
      />
      <div class="grid-featuredLaunch__body p-6">
        <UseTimeAgo
          v-slot="{ timeAgo }"
          :time="result.launch_date_utc"
        >
          <div class="text-sm text-gray-500 mb-1">
            {{ timeAgo }}
          </div>
        </UseTimeAgo>
        <h2 class="font-bold text-2xl">
          {{ result.mission_name }}
        </h2>
        <p class="mb-8 ">
          {{ result.rocket.rocket_name }}
        </p>
        <p class="mb-4">
          <strong>Launchsite</strong><br>
          {{ result.launch_site.site_name_long }}
        </p>
        <p>
          <strong>Payload</strong><br>
          {{ result.rocket.second_stage.payloads[0].payload_type }}
        </p>
      </div>
    </div>
  </UseElementSize>
</template>

<script lang="ts" setup>
import { UseElementSize, UseTimeAgo } from '@vueuse/components'
import YoutubeVideo from '@/components/base/YoutubeVideo/YoutubeVideo.vue'

interface Props {
  result: any
}
const props = withDefaults(defineProps<Props>(), {
  result: {}
})
</script>

<style lang="postcss">
.grid-featuredLaunch {
  display: grid;
}

.grid-featuredLaunch__video {
  grid-area: gflv;
}

.grid-featuredLaunch__body {
  grid-area: gflb;
}

.grid-featuredLaunch--small {
  grid-template:
      'gflv' auto
      'gflb' auto /
      minmax(1px, 1fr);
}

.grid-featuredLaunch--big {
  grid-template:
      'gflv gflb' auto /
      minmax(1px, 2fr) minmax(1px, 1fr)
}
</style>

