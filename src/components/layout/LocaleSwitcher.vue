<script setup>
import { useI18n } from "vue-i18n";
import { SUPPORTED, setLocale } from "@/i18n";

const { t, locale } = useI18n();
</script>

<template>
  <div
    role="group"
    :aria-label="t('lang.label')"
    class="flex rounded-full bg-white/10 p-1"
  >
    <button
      v-for="l in SUPPORTED"
      :key="l"
      type="button"
      :lang="l"
      :aria-pressed="locale === l"
      class="min-h-9 min-w-10 rounded-full px-3 text-xs font-bold uppercase tracking-wide transition"
      :class="
        locale === l ? 'bg-white text-ink' : 'text-[#CFE3F3] hover:text-white'
      "
      @click="setLocale(l)"
    >
      {{ l }}
    </button>
  </div>
</template>
