<script setup>
import { MapPin } from "lucide-vue-next";
import SectionHeader from "@/components/ui/SectionHeader.vue";
import teamImg from "@/assets/images/about/team-sign.jpg";
import { site } from "@/data/site";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section id="nosotros" class="px-3 pt-24 lg:px-7">
    <div class="mx-auto flex max-w-[1320px] flex-col gap-10">
      <SectionHeader
        index="01"
        :label="t('about.label')"
        :title="t('about.title')"
      />

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        <div
          class="relative min-h-[400px] overflow-hidden rounded-[20px] bg-[#E3EFF8] lg:min-h-full"
        >
          <img
            :src="teamImg"
            :alt="t('about.imageAlt')"
            class="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div
            class="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full glass px-4 py-2 font-mono text-xs font-medium text-white shadow-lg backdrop-blur-md"
          >
            {{ t("about.badge") }}
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex flex-1 flex-col justify-center p-8 lg:p-12">
            <p class="text-[clamp(16px,1.5vw,18px)] leading-relaxed text-body">
              {{ t("about.description") }}
            </p>
          </div>

          <div
            class="flex items-center gap-4 rounded-[30px] bg-deep p-4 lg:p-6 text-white"
          >
            <div
              class="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white/10"
            >
              <MapPin class="text-aqua" :size="24" />
            </div>
            <p class="text-sm leading-relaxed lg:text-base">
              {{ site.address }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
