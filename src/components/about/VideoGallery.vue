<script setup>
import { useI18n } from "vue-i18n";
import VideoCard from "./VideoCard.vue";
import { videos } from "@/data/videos";

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col gap-5">
    <h3
      class="px-2 font-display text-2xl font-bold tracking-tight text-ink lg:px-5"
    >
      {{ t("videos.heading") }}
    </h3>
    <div
      class="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] gap-4"
    >
      <VideoCard
        v-for="v in videos"
        :key="v.id"
        :video-id="v.id"
        :title="t(`videos.items.${v.id}`)"
      />
    </div>
  </div>
</template>
