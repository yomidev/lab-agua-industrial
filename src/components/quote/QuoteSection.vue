<script setup>
import { useI18n } from "vue-i18n";
import { Phone, Mail } from "lucide-vue-next";
import ContactLink from "./ContactLink.vue";
import { site } from "@/data/site";

const { t } = useI18n();
</script>

<template>
  <section id="cotizacion" class="w-full pt-24">
    <div class="w-full bg-aqua py-16 lg:py-24">
      <!-- 3. Contenedor interno para alinear el texto con el resto de la página -->
      <div class="mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        <div
          class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          <!-- Columna Izquierda: Texto -->
          <div class="flex flex-col gap-6">
            <h2
              class="font-display text-[clamp(40px,6vw,72px)] font-bold leading-none tracking-[-.04em] text-ink"
            >
              {{ t("quote.title") }}
            </h2>

            <p
              class="max-w-md text-[clamp(18px,2vw,22px)] font-medium leading-snug text-ink"
            >
              {{ t("quote.lead") }}
            </p>

            <p class="max-w-md text-[15px] leading-relaxed text-ink/80">
              {{ t("quote.description") }}
            </p>
          </div>

          <!-- Columna Derecha: Tarjetas de Contacto -->
          <div class="flex flex-col gap-4">
            <ContactLink
              :icon="Phone"
              :label="t('quote.phoneLabel')"
              :value="site.phoneLabel"
              :href="site.phoneHref"
            />

            <ContactLink
              :icon="Mail"
              :label="t('quote.emailLabel')"
              :value="site.email"
              :href="`mailto:${site.email}`"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
