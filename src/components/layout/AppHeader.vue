<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import BaseButton from "@/components/ui/BaseButton.vue";
import LocaleSwitcher from "./LocaleSwitcher.vue";
import logo from "@/assets/images/brand/logo-flask.png";

import { site } from "@/data/site";
import { navItems, spySections } from "@/data/navigation";
import { useScrollSpy } from "@/composables/useScrollSpy";

const { t } = useI18n();
const { active } = useScrollSpy(spySections);

const activeNav = computed(() =>
  active.value === "cotizacion" ? "servicios" : active.value,
);

const isOpen = ref(false);
const closeMenu = () => (isOpen.value = false);
const toggleMenu = () => (isOpen.value = !isOpen.value);

// Cierra el menú al cambiar de sección
watch(activeNav, closeMenu);

// Cierra con Escape y al volver a desktop
const handleKeydown = (e) => {
  if (e.key === "Escape" && isOpen.value) closeMenu();
};

let mql;
const handleBreakpoint = (e) => {
  if (e.matches) closeMenu();
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
  mql = window.matchMedia("(min-width: 1024px)");
  mql.addEventListener("change", handleBreakpoint);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
  mql?.removeEventListener("change", handleBreakpoint);
});
</script>

<template>
  <header class="sticky top-0 z-50">
    <!-- Accesibilidad -->
    <a
      href="#contenido"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-slate-900"
    >
      {{ t("nav.skip") }}
    </a>

    <nav
      :aria-label="t('nav.aria')"
      class="w-full border-b border-white/10 bg-[#2D3C4B] shadow-[0_12px_36px_rgba(7,24,42,0.25)]"
    >
      <!-- Barra superior -->
      <div class="flex items-center justify-between gap-4 px-4 py-3 lg:px-7">
        <!-- Logotipo -->
        <a
          href="#inicio"
          class="flex items-center gap-2.5 whitespace-nowrap font-semibold text-white"
          @click="closeMenu"
        >
          <span
            class="flex h-[38px] w-[38px] items-center justify-center rounded-xl bg-white"
          >
            <img :src="logo" alt="" class="h-[40px] w-[34px] object-contain" />
          </span>
          <span class="text-[14px] font-semibold tracking-tight">
            {{ site.name }}
          </span>
        </a>

        <!-- Links (desktop) -->
        <ul class="hidden items-center gap-0.5 lg:flex">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="item.href"
              :aria-current="activeNav === item.id ? 'location' : undefined"
              class="block whitespace-nowrap rounded-full px-3.5 py-2.5 text-[13px] font-semibold transition-all duration-200"
              :class="
                activeNav === item.id
                  ? 'bg-white/15 text-white'
                  : 'text-[#CFE3F3] hover:bg-white/10 hover:text-white'
              "
            >
              {{ t(`nav.${item.id}`) }}
            </a>
          </li>
        </ul>

        <!-- Acciones (desktop) -->
        <div class="hidden items-center gap-2 lg:flex">
          <LocaleSwitcher />
          <BaseButton href="#cotizacion" size="sm" variant="cotizar">
            {{ t("nav.cotizar") }}
          </BaseButton>
        </div>

        <!-- Botón hamburguesa (mobile/tablet) -->
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10 lg:hidden"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          :aria-label="isOpen ? 'Cerrar menú' : 'Abrir menú'"
          @click="toggleMenu"
        >
          <!-- Icono hamburguesa -->
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <!-- Icono cerrar -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <!-- Menú móvil -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-[520px] opacity-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="max-h-[520px] opacity-100"
        leave-to-class="max-h-0 opacity-0"
      >
        <div
          v-if="isOpen"
          id="mobile-menu"
          class="overflow-hidden border-t border-white/10 lg:hidden"
        >
          <ul class="flex flex-col gap-1 px-4 py-3">
            <li v-for="item in navItems" :key="item.id">
              <a
                :href="item.href"
                :aria-current="activeNav === item.id ? 'location' : undefined"
                class="block rounded-xl px-3.5 py-2.5 text-[14px] font-semibold transition-all duration-200"
                :class="
                  activeNav === item.id
                    ? 'bg-white/15 text-white'
                    : 'text-[#CFE3F3] hover:bg-white/10 hover:text-white'
                "
                @click="closeMenu"
              >
                {{ t(`nav.${item.id}`) }}
              </a>
            </li>
          </ul>

          <div
            class="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3"
          >
            <LocaleSwitcher />
            <BaseButton
              href="#cotizacion"
              size="sm"
              variant="cotizar"
              @click="closeMenu"
            >
              {{ t("nav.cotizar") }}
            </BaseButton>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>
