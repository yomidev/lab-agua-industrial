<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: { type: String, default: "accent" }, // 'accent' | 'ghost' | 'cotizar'
  size: { type: String, default: "md" }, // 'md' | 'sm'
  href: { type: String, default: undefined },
});

const tag = computed(() => (props.href ? "a" : "button"));

const variants = {
  accent: "bg-aqua text-ink hover:bg-aqua-soft",
  ghost: "glass text-white hover:bg-white/20",
  cotizar: "bg-[#4CCBF2] text-ink hover:bg-[#3BB8E2]",
};

const sizes = {
  md: "min-h-[52px] px-6 text-[15px]",
  sm: "min-h-[44px] px-5 text-sm",
};
</script>

<template>
  <component
    :is="tag"
    :href="href"
    :type="href ? undefined : 'button'"
    class="inline-flex items-center justify-center gap-2.5 rounded-full font-display font-semibold transition duration-200 hover:-translate-y-0.5"
    :class="[variants[variant], sizes[size]]"
  >
    <slot />
  </component>
</template>
