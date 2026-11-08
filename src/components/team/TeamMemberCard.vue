<script setup>
import { User } from "lucide-vue-next";

defineProps({
  member: { type: Object, required: true },
});

defineEmits(["select"]);
</script>

<template>
  <button
    @click="$emit('select', member)"
    class="group flex w-full flex-col overflow-hidden rounded-2xl bg-white p-3 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
  >
    <!-- Foto más pequeña (aspect-square) -->
    <div
      class="relative mb-3 flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-[#E3EFF8]"
    >
      <img
        v-if="member.photo"
        :src="member.photo"
        :alt="member.name"
        class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
      />
      <User
        v-else
        :size="40"
        class="text-[#9BBAD3] transition duration-500 group-hover:scale-110"
      />
    </div>

    <!-- Información -->
    <div class="flex flex-col gap-0.5 px-1 pb-1">
      <h3
        class="font-display text-[14px] font-bold leading-tight text-ink line-clamp-2"
      >
        {{ member.name }}
      </h3>
      <p class="text-[12px] font-semibold text-cobalt line-clamp-1">
        {{ member.role }}
      </p>
      <p class="text-[11px] text-muted line-clamp-1">
        {{ member.title }}
      </p>
    </div>
  </button>
</template>
