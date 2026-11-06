<script setup>
import GlassCard from "@/components/ui/GlassCard.vue";

defineProps({
  value: { type: [String, Number], required: true },
  label: { type: String, required: true },
  mono: { type: Boolean, default: false },
});
</script>

<!-- src/components/hero/HeroStat.vue -->
<template>
  <GlassCard class="w-full max-w-[340px] lg:w-auto lg:flex-1 lg:basis-[220px]">
    <div
      :class="
        mono
          ? 'font-mono text-[20px] font-bold leading-snug tracking-tight sm:text-[22px]'
          : 'font-display text-[38px] font-bold leading-none tracking-[-.03em] sm:text-[44px]'
      "
    >
      {{ value }}
    </div>
    <div class="mt-2 text-[13px] text-[#CFE3F3] sm:text-sm">{{ label }}</div>
  </GlassCard>
</template>
