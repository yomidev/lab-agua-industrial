<script setup>
defineProps({
  label: { type: String, required: true },
});
</script>

<template>
  <div
    class="flex h-32 w-32 items-center justify-center rounded-2xl border-2 border-dashed border-[#CFE0EE] bg-[#F8FBFE] p-3 text-center"
  >
    <span
      class="font-mono text-[10px] font-bold uppercase leading-tight tracking-wider text-cobalt/60"
    >
      {{ label }}
    </span>
  </div>
</template>
