<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { ArrowRight } from "lucide-vue-next";
import SectionHeader from "@/components/ui/SectionHeader.vue";
import ServiceModal from "./ServiceModal.vue";
import { families } from "@/data/services";
import qrTriptico from "@/assets/images/services/qr-code.png";

const { t, tm } = useI18n();

const waterTypesList = computed(() => {
  const messages = tm("services.waterTypes");
  if (Array.isArray(messages)) return messages;
  if (messages && typeof messages === "object") {
    return Object.values(messages);
  }
  return [];
});

const selectedFamily = ref(null);
const openModal = (family) => {
  selectedFamily.value = family;
};
const closeModal = () => {
  selectedFamily.value = null;
};
</script>

<template>
  <!-- Envolvemos todo en un solo div raíz -->
  <div>
    <section id="servicios" class="px-3 pt-8 lg:px-7">
      <div class="mx-auto flex max-w-[1320px] flex-col gap-10">
        <!-- Bloque de Texto y Tipos de Agua -->
        <div class="flex flex-col gap-6">
          <SectionHeader
            index="05"
            :label="t('services.label')"
            :title="t('services.title')"
          />

          <div class="px-2 lg:px-5">
            <p
              class="max-w-3xl text-[clamp(16px,1.5vw,18px)] leading-relaxed text-body"
            >
              {{ t("services.description") }}
            </p>

            <!-- Tipos de agua traducidos -->
            <div class="mt-6 flex flex-wrap gap-2.5">
              <span
                v-for="(water, index) in waterTypesList"
                :key="index"
                class="rounded-full border border-[#D2E2EF] bg-white px-5 py-2.5 text-[14px] font-semibold text-ink shadow-sm"
              >
                {{ water }}
              </span>
            </div>

            <p class="mt-8 font-display text-[18px] font-bold text-cobalt">
              {{ t("services.subtitle") }}
            </p>
          </div>
        </div>

        <!-- Cuadrícula de Tarjetas de Categorías -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button
            v-for="family in families"
            :key="family.id"
            @click="openModal(family)"
            class="group relative flex min-h-[320px] w-full flex-col justify-end overflow-hidden rounded-[32px] bg-deep p-6 text-left text-white transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              :src="family.image"
              :alt="t(`services.families.${family.id}`)"
              class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div
              class="absolute inset-0 bg-gradient-to-b from-transparent via-deep/40 to-deep/90"
            />

            <div
              class="relative z-10 flex w-full items-end justify-between gap-3"
            >
              <div class="flex flex-col gap-1.5">
                <h3
                  class="font-display text-[20px] font-bold leading-tight tracking-tight"
                >
                  {{ t(`services.families.${family.id}`) }}
                </h3>
                <span
                  class="font-mono text-[11px] font-medium tracking-wider text-[#BFE9F9]"
                >
                  {{ family.parameters?.length || 0 }}
                  {{ t("services.parametersLabel") }}
                </span>
              </div>

              <div
                class="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-aqua text-ink transition group-hover:scale-110"
              >
                <ArrowRight :size="20" />
              </div>
            </div>
          </button>
        </div>

        <div
          class="mt-6 flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[32px] bg-deep p-8 text-white sm:flex-row lg:p-12 shadow-lg"
        >
          <div class="flex flex-col gap-3">
            <h3
              class="font-display text-[clamp(22px,3vw,32px)] font-bold tracking-tight"
            >
              {{ t("services.brochureTitle") }}
            </h3>
            <p class="max-w-md text-[15px] leading-relaxed text-[#CFE3F3]">
              {{ t("services.brochureText") }}
            </p>
          </div>

          <div class="flex flex-col items-center gap-2">
            <!-- Contenedor blanco para que el QR resalte y sea escaneable -->
            <div
              class="rounded-2xl bg-white shadow-md transition-transform hover:scale-105"
            >
              <img
                :src="qrTriptico"
                alt="Código QR del tríptico de servicios"
                class="h-60 w-60 object-contain [image-rendering:pixelated]"
              />
            </div>
            <span
              class="font-mono text-[10px] uppercase tracking-wider text-[#7A9BB8]"
            >
              {{ t("services.brochureScan") }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <ServiceModal :family="selectedFamily" @close="closeModal" />
  </div>
</template>
