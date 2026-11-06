<script setup>
import { useI18n } from "vue-i18n";
import SectionHeader from "@/components/ui/SectionHeader.vue";
import PlaceholderBox from "@/components/ui/PlaceholderBox.vue";
import { site } from "@/data/site";
import emaLogo from "@/assets/images/brand/ema.png";
import QRCode from "@/assets/images/brand/qr-code.png";

const { t } = useI18n();
</script>

<template>
  <section id="acreditacion" class="w-full pt-12 pb-12 lg:pt-16 lg:pb-16">
    <div class="relative w-full overflow-hidden bg-ink py-10 lg:py-12">
      <div
        class="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-white/5 lg:h-[600px] lg:w-[600px]"
      />
      <div
        class="pointer-events-none absolute -right-10 -top-10 h-[300px] w-[300px] rounded-full border border-white/10 lg:h-[450px] lg:w-[450px]"
      />
      <div
        class="pointer-events-none absolute right-10 top-10 h-[200px] w-[200px] rounded-full border border-white/10 lg:h-[300px] lg:w-[300px]"
      />

      <div class="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-14">
        <div
          class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-18"
        >
          <div class="flex flex-col items-start gap-6">
            <SectionHeader
              index="04"
              :label="t('accreditation.label')"
              :title="t('accreditation.title')"
              tone="dark"
            />

            <p
              class="max-w-xl text-[clamp(15px,1.5vw,18px)] leading-relaxed text-[#CFE3F3]"
            >
              {{ t("accreditation.description") }}
            </p>

            <div class="mt-2 flex flex-col gap-1">
              <span
                class="font-mono text-[13px] font-bold uppercase tracking-[.1em] text-[#7DD8F5]"
              >
                {{ t("accreditation.accreditationNo") }}
              </span>
              <span
                class="font-mono text-[clamp(40px,6vw,72px)] font-bold leading-none tracking-tight text-aqua"
              >
                {{ site.accreditation }}
              </span>
            </div>

            <!--<p class="mt-2 text-[15px] leading-relaxed text-[#CFE3F3]">
              {{ t("accreditation.scopeLabel") }}
              <span class="font-bold text-white">{{
                t("accreditation.scopePlaceholder")
              }}</span>
            </p>-->

            <p class="mt-auto pt-6 text-[13px] leading-relaxed text-[#7A9BB8]">
              {{ t("accreditation.footnote") }}
            </p>
          </div>

          <!-- Columna Derecha: Tarjeta Blanca del Sello EMA -->
          <div class="flex justify-center lg:justify-end">
            <div
              class="flex w-full max-w-[420px] flex-col items-center rounded-[36px] bg-white p-8 text-center text-ink shadow-2xl lg:p-10"
            >
              <img
                :src="emaLogo"
                alt="Logo EMA"
                class="mb-4 h-20 w-auto object-contain"
              />

              <h3 class="font-display text-[20px] font-bold tracking-tight">
                {{ t("accreditation.labTest") }}
              </h3>
              <p
                class="mt-1 mb-8 font-display text-[16px] font-bold text-cobalt"
              >
                {{
                  t("accreditation.accredited", { code: site.accreditation })
                }}
              </p>

              <div
                class="flex h-40 w-40 items-center justify-center rounded-2xl border-2 border-dashed border-[#CFE0EE] bg-[#F8FBFE] p-2"
              >
                <img
                  :src="QRCode"
                  alt="Código QR para consultar el alcance de la acreditación EMA"
                  class="h-full w-full object-contain"
                />
              </div>

              <p class="mt-6 text-[13px] leading-relaxed text-muted">
                {{ t("accreditation.qrHelp") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
