<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { Play } from "lucide-vue-next";

const props = defineProps({
  videoId: { type: String, required: true },
  title: { type: String, required: true },
});

const { t } = useI18n();
const playing = ref(false);
const thumb = `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`;
const src = `https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1&rel=0`;
</script>

<template>
  <article class="flex flex-col gap-4 p-3">
    <div class="relative aspect-video overflow-hidden rounded-[28px] bg-ink">
      <iframe
        v-if="playing"
        :src="src"
        :title="title"
        class="absolute inset-0 h-full w-full"
        allow="
          accelerometer;
          autoplay;
          encrypted-media;
          picture-in-picture;
          fullscreen;
        "
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
      />
      <button
        v-else
        type="button"
        :aria-label="t('videos.play', { title })"
        class="group absolute inset-0 h-full w-full cursor-pointer"
        @click="playing = true"
      >
        <img
          :src="thumb"
          alt=""
          loading="lazy"
          class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span
          class="absolute inset-0 bg-ink/30 transition group-hover:bg-ink/15"
        />
        <span
          class="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-aqua text-ink shadow-xl transition group-hover:scale-110"
        >
          <Play :size="26" fill="currentColor" />
        </span>
      </button>
    </div>
    <h3
      class="px-3 pb-3 font-display text-lg font-semibold leading-snug tracking-tight text-ink"
    >
      {{ title }}
    </h3>
  </article>
</template>
