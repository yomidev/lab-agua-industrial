<script setup>
import { useI18n } from "vue-i18n";
import SectionHeader from "@/components/ui/SectionHeader.vue";

const { t } = useI18n();
</script>

<template>
  <section id="mision" class="px-3 pt-24 lg:px-7">
    <div class="mx-auto flex max-w-[1320px] flex-col gap-8">
      <!-- Encabezado -->
      <SectionHeader
        index="03"
        :label="t('mission.label')"
        :title="t('mission.title')"
      />

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        <article class="flex min-h-[380px] flex-col justify-center p-8 lg:p-14">
          <h3
            class="mb-6 font-display text-[clamp(32px,4vw,48px)] font-bold tracking-tight text-cobalt"
          >
            {{ t("mission.missionTitle") }}
          </h3>
          <p class="text-[clamp(16px,1.6vw,19px)] leading-relaxed text-body">
            {{ t("mission.missionText") }}
          </p>
        </article>

        <article
          class="flex min-h-[380px] flex-col justify-center rounded-[40px] bg-aqua-soft p-8 lg:p-14 shadow-sm"
        >
          <h3
            class="mb-6 font-display text-[clamp(32px,4vw,48px)] font-bold tracking-tight text-ink"
          >
            {{ t("mission.visionTitle") }}
          </h3>
          <p class="text-[clamp(16px,1.6vw,19px)] leading-relaxed text-ink/80">
            {{ t("mission.visionText") }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
