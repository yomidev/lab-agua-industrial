<script setup>
defineProps({
  n: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
});
</script>

<template>
  <div class="flex flex-col rounded-[28px] bg-white p-6 lg:p-7 shadow-sm">
    <span class="font-mono text-[13px] font-bold text-cobalt mb-3">{{
      n
    }}</span>
    <h3
      class="font-display text-[17px] font-bold tracking-tight text-ink mb-2 leading-tight"
    >
      {{ title }}
    </h3>
    <p class="text-[13.5px] leading-relaxed text-muted">
      {{ text }}
    </p>
  </div>
</template>
