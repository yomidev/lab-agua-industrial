<script setup>
defineProps({
  index: { type: String, required: true },
  label: { type: String, required: true },
  title: { type: String, required: true },
  tone: { type: String, default: "light" }, // 'light' | 'dark'
});
</script>

<template>
  <header class="flex flex-col gap-3.5 px-2 lg:px-5">
    <span
      class="font-mono text-[13px] font-medium uppercase tracking-[.12em]"
      :class="tone === 'dark' ? 'text-aqua' : 'text-cobalt'"
    >
      {{ index }} — {{ label }}
    </span>
    <h2
      class="font-display text-[clamp(36px,5.4vw,72px)] font-bold leading-none tracking-[-.04em]"
      :class="tone === 'dark' ? 'text-white' : 'text-ink'"
    >
      {{ title }}
    </h2>
  </header>
</template>
