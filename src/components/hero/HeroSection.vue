<script setup>
import { useI18n } from "vue-i18n";
import { ArrowRight } from "lucide-vue-next";
import BaseButton from "@/components/ui/BaseButton.vue";
import HeroStat from "./HeroStat.vue";
import heroImg from "@/assets/images/hero/hero-pipette.jpg";
import { site } from "@/data/site";
import { families, totalParameters } from "@/data/parameters";

const { t } = useI18n();
</script>

<template>
  <section id="inicio" class="w-full">
    <!-- 1. Altura: 100svh en móvil (evita problemas con la barra de URL) y 720px en desktop -->
    <div
      class="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-ink lg:min-h-[720px]"
    >
      <!-- Foto de fondo: 2. Ajustamos la posición focal para que la científica se vea bien en móvil -->
      <img
        :src="heroImg"
        :alt="t('hero.imageAlt')"
        fetchpriority="high"
        class="absolute inset-0 h-full w-full object-cover object-[65%_center] lg:object-[70%_center]"
      />

      <!-- 3. Degradado: En móvil usamos un degradado vertical (de abajo hacia arriba) -->
      <div
        aria-hidden="true"
        class="absolute inset-0 bg-linear-to-r from-ink/95 via-ink/85 to-ink/30 max-lg:bg-linear-to-t max-lg:from-ink max-lg:via-ink/90 max-lg:to-transparent"
      />

      <!-- Contenido -->
      <div
        class="relative mx-auto flex w-full max-w-[1320px] flex-col items-start gap-7 p-[clamp(20px,5vw,72px)] pt-32 lg:pt-40"
      >
        <!-- Título: reducimos el mínimo del clamp a 36px para pantallas muy pequeñas -->
        <i18n-t
          keypath="hero.title"
          tag="h1"
          class="max-w-[1000px] font-display text-[clamp(36px,7.6vw,112px)] font-bold leading-[.98] tracking-[-.04em] text-white"
        >
          <template #highlight>
            <span class="text-aqua">{{ t("hero.highlight") }}</span>
          </template>
        </i18n-t>

        <p
          class="max-w-[620px] text-[clamp(16px,1.6vw,21px)] leading-relaxed text-[#CFE3F3]"
        >
          {{ t("hero.lead") }}
        </p>

        <!-- Botones: Aseguramos que ocupen buen espacio en móvil -->
        <div
          class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
        >
          <BaseButton href="#cotizacion" class="w-full sm:w-auto">
            {{ t("hero.ctaQuote") }}
            <ArrowRight :size="18" />
          </BaseButton>
          <BaseButton
            href="#servicios"
            variant="ghost"
            class="w-full sm:w-auto"
          >
            {{ t("hero.ctaServices") }}
          </BaseButton>
        </div>

        <!-- 4. Cifras: Usamos Grid para ordenar las tarjetas perfectamente en todos los tamaños -->
        <div
          class="hidden mt-4 grid w-full grid-cols-1 gap-3 pt-8 sm:grid-cols-2 lg:flex lg:flex-wrap lg:pt-14"
        >
          <HeroStat
            class="w-full sm:w-auto"
            :value="totalParameters"
            :label="t('hero.statParams')"
          />
          <HeroStat
            class="w-full sm:w-auto"
            :value="families.length"
            :label="t('hero.statFamilies')"
          />
          <!-- La tercera tarjeta ocupa 2 columnas en tablet, y 1 en móvil/desktop -->
          <HeroStat
            mono
            class="w-full sm:col-span-2 lg:col-span-1 lg:w-auto"
            :value="site.accreditation"
            :label="t('hero.statAccred', { standard: site.standard })"
          />
        </div>
      </div>
    </div>
  </section>
</template>
