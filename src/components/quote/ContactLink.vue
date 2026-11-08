<script setup>
defineProps({
  icon: { type: Object, required: true },
  label: { type: String, required: true },
  value: { type: String, required: true },
  href: { type: String, required: true },
});
</script>

<template>
  <a
    :href="href"
    class="flex items-center gap-4 rounded-[32px] bg-ink p-5 text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-deep lg:p-6"
  >
    <!-- Contenedor del Icono -->
    <div
      class="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white/10 text-aqua"
    >
      <component :is="icon" :size="24" />
    </div>

    <!-- Textos -->
    <div class="flex flex-col">
      <span
        class="font-mono text-[11px] font-bold uppercase tracking-[.1em] text-[#A0B3C6]"
      >
        {{ label }}
      </span>
      <span class="text-[15px] font-bold tracking-tight lg:text-[16px]">
        {{ value }}
      </span>
    </div>
  </a>
</template>
