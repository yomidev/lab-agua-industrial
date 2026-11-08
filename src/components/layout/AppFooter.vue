<script setup>
import { useI18n } from "vue-i18n";
import { site } from "@/data/site";
import { navItems } from "@/data/navigation";
import logoFull from "@/assets/images/brand/logo-full.png";

const { t } = useI18n();
</script>

<template>
  <footer class="w-full bg-ink pt-16 text-white lg:pt-24">
    <div class="mx-auto flex max-w-[1320px] flex-col px-6 lg:px-16">
      <!-- Cuadrícula Principal -->
      <div
        class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8"
      >
        <!-- Columna 1: Logo -->
        <div class="lg:col-span-4 xl:col-span-3">
          <div
            class="inline-flex w-full max-w-[240px] items-center justify-center rounded-[32px] bg-white p-6 shadow-xl"
          >
            <img
              :src="logoFull"
              alt="Logo Laboratorio de Análisis de Aguas Industriales"
              class="h-auto w-full object-contain"
            />
          </div>
        </div>

        <!-- Columna 2: Contacto -->
        <div class="flex flex-col gap-4 lg:col-span-5 xl:col-span-6">
          <h3 class="font-display text-xl font-bold tracking-tight">
            {{ t("footer.contact") }}
          </h3>
          <address
            class="flex flex-col gap-3 not-italic text-[15px] leading-relaxed text-[#CFE3F3]"
          >
            <p class="max-w-[300px]">
              {{ site.address }}
            </p>
            <p>
              Tel.
              <a :href="site.phoneHref" class="transition hover:text-white">{{
                site.phoneLabel
              }}</a>
            </p>
            <p>
              <a
                :href="`mailto:${site.email}`"
                class="text-aqua transition hover:text-aqua-soft"
              >
                {{ site.email }}
              </a>
            </p>
          </address>
        </div>

        <!-- Columna 3: Navegación -->
        <div class="flex flex-col gap-4 lg:col-span-3">
          <h3 class="font-display text-xl font-bold tracking-tight">
            {{ t("footer.navigation") }}
          </h3>
          <!-- Enlaces en grid para que se acomoden en 2 o 3 columnas -->
          <nav :aria-label="t('nav.aria')">
            <ul class="flex flex-wrap gap-2">
              <li v-for="item in navItems" :key="item.id">
                <a
                  :href="item.href"
                  class="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-semibold text-[#CFE3F3] transition hover:bg-white/15 hover:text-white"
                >
                  {{ t(`nav.${item.id}`) }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <!-- Línea inferior de Copyright -->
      <div class="mt-16 border-t border-white/10 py-6 lg:mt-24">
        <p class="text-[13px] text-[#7A9BB8]">
          {{
            t("footer.rights", {
              year: site.year,
              fullName: site.fullName,
              institution: site.institution,
              accreditation: site.accreditation,
            })
          }}
        </p>
      </div>
    </div>
  </footer>
</template>
