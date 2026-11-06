<script setup>
import { useI18n } from "vue-i18n";
import SectionHeader from "@/components/ui/SectionHeader.vue";
import PrincipleCard from "./PrincipleCard.vue";
import { principles } from "@/data/principles";
import { site } from "@/data/site";
import teamLabImg from "@/assets/images/about/team-lab.jpg"; // Asegúrate de tener esta foto

const { t } = useI18n();
</script>

<template>
  <section id="calidad" class="px-3 pt-24 lg:px-7">
    <div class="mx-auto flex max-w-[1320px] flex-col gap-6 lg:gap-8">
      <SectionHeader
        index="02"
        :label="t('quality.label')"
        :title="t('quality.title')"
      />

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        <div
          class="flex flex-col justify-between rounded-[40px] bg-deep p-8 text-white lg:p-12"
        >
          <p
            class="text-[clamp(16px,1.6vw,19px)] leading-relaxed text-[#E2EDF5]"
          >
            {{ t("quality.commitment") }}
          </p>

          <div class="mt-8 self-start">
            <span
              class="inline-flex items-center rounded-full border-[1.5px] border-aqua px-5 py-2.5 font-mono text-[12px] font-bold tracking-wide text-aqua"
            >
              {{ site.standard }}
            </span>
          </div>
        </div>

        <div
          class="relative min-h-[300px] overflow-hidden rounded-[40px] bg-[#E3EFF8] lg:min-h-full"
        >
          <img
            :src="teamLabImg"
            :alt="t('quality.imageAlt')"
            class="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <PrincipleCard
          v-for="principle in principles"
          :key="principle.n"
          :n="principle.n"
          :title="t(`quality.principles.${principle.id}.title`)"
          :text="t(`quality.principles.${principle.id}.text`)"
        />
      </div>
    </div>
  </section>
</template>
