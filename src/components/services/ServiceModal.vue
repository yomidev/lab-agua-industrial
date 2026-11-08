<script setup>
import { ref, computed, watch } from "vue";
import { useI18n } from "vue-i18n"; // <-- IMPORTANTE
import { X, Search, ShieldCheck, ShieldAlert } from "lucide-vue-next";

const { t } = useI18n(); // <-- IMPORTANTE

const props = defineProps({
  family: { type: Object, default: null },
});

const emit = defineEmits(["close"]);
const searchQuery = ref("");

watch(
  () => props.family,
  () => {
    searchQuery.value = "";
  },
);

const filteredParameters = computed(() => {
  if (!props.family) return [];
  const q = searchQuery.value.toLowerCase().trim();
  if (!q) return props.family.parameters;
  return props.family.parameters.filter(
    (p) =>
      p.name.toLowerCase().includes(q) || p.method.toLowerCase().includes(q),
  );
});

const handleKeydown = (e) => {
  if (e.key === "Escape") emit("close");
};
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="family"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm lg:p-8"
        role="dialog"
        aria-modal="true"
        @keydown.esc="handleKeydown"
        @click.self="emit('close')"
      >
        <div
          class="relative flex max-h-full w-full max-w-[1000px] flex-col overflow-hidden rounded-[32px] bg-white shadow-2xl"
        >
          <!-- Cabecera del Modal -->
          <div class="flex flex-col gap-6 border-b border-line p-6 lg:p-8">
            <div class="flex items-start justify-between gap-4">
              <h3
                class="font-display text-[clamp(24px,3vw,36px)] font-bold tracking-tight text-ink"
              >
                {{ t(`services.families.${family.id}`) }}
              </h3>

              <button
                @click="emit('close')"
                class="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-page text-muted transition hover:bg-line hover:text-ink"
                :aria-label="t('services.closeModal')"
              >
                <X :size="20" />
              </button>
            </div>

            <label
              class="flex min-h-[52px] w-full items-center gap-3 rounded-full border-[1.5px] border-line bg-page px-5 focus-within:border-cobalt focus-within:bg-white"
            >
              <Search :size="20" class="flex-none text-cobalt" />
              <input
                v-model="searchQuery"
                type="search"
                :placeholder="t('services.searchPlaceholder')"
                class="min-w-0 flex-1 bg-transparent py-3.5 text-[15px] outline-none"
              />
            </label>
          </div>

          <!-- Lista de Parámetros -->
          <div class="flex-1 overflow-y-auto p-6 lg:p-8">
            <div
              v-if="filteredParameters.length"
              class="grid grid-cols-1 gap-x-12 md:grid-cols-2"
            >
              <div
                v-for="param in filteredParameters"
                :key="param.name"
                class="flex flex-col gap-1 border-b border-line py-4"
              >
                <!-- Nombre y Badge de Acreditación -->
                <div class="flex flex-wrap items-center gap-2">
                  <span class="text-[15px] font-bold text-ink">{{
                    param.name
                  }}</span>

                  <span
                    class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider"
                    :class="
                      param.accredited
                        ? 'bg-green-100 text-green-700'
                        : 'bg-orange-100 text-orange-700'
                    "
                  >
                    <ShieldCheck v-if="param.accredited" :size="10" />
                    <ShieldAlert v-else :size="10" />
                    {{
                      param.accredited
                        ? t("services.accredited")
                        : t("services.notAccredited")
                    }}
                  </span>
                </div>

                <!-- Método -->
                <span
                  class="w-full font-mono text-[12px] leading-tight text-cobalt"
                >
                  {{ param.method }}
                </span>
              </div>
            </div>

            <p v-else class="text-center text-muted py-10">
              {{ t("services.noResults") }}
            </p>
          </div>

          <div class="border-t border-line bg-page px-6 py-4 lg:px-8">
            <p class="text-[12px] text-muted">
              {{ t("services.footnote") }}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
