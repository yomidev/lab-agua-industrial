<script setup>
import { useI18n } from "vue-i18n";
import { X, User } from "lucide-vue-next";

const { t } = useI18n();

defineProps({
  member: { type: Object, default: null },
});

const emit = defineEmits(["close"]);

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
        v-if="member"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm lg:p-8"
        role="dialog"
        aria-modal="true"
        @keydown.esc="handleKeydown"
        @click.self="emit('close')"
      >
        <div
          class="relative flex max-h-full w-full max-w-[800px] flex-col overflow-hidden rounded-[32px] bg-white shadow-2xl sm:flex-row"
        >
          <!-- Botón Cerrar -->
          <button
            @click="emit('close')"
            class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-ink backdrop-blur-sm transition hover:bg-white"
            :aria-label="t('team.closeModal')"
          >
            <X :size="20" />
          </button>

          <!-- Columna Izquierda: Foto -->
          <div
            class="flex w-full flex-none items-center justify-center bg-[#E3EFF8] sm:w-[300px]"
          >
            <img
              v-if="member.photo"
              :src="member.photo"
              :alt="member.name"
              class="h-full w-full object-cover object-top sm:max-h-[500px]"
            />
            <User v-else :size="80" class="text-[#9BBAD3] py-16" />
          </div>

          <!-- Columna Derecha: Info -->
          <div class="flex flex-1 flex-col overflow-y-auto p-6 lg:p-8">
            <h3
              class="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              {{ member.name }}
            </h3>
            <p class="mt-1 text-[15px] font-bold text-cobalt">
              {{ member.role }}
            </p>
            <p class="text-[14px] text-muted">{{ member.title }}</p>

            <div class="mt-6 border-t border-line pt-6">
              <h4
                class="mb-3 font-mono text-[12px] font-bold uppercase tracking-wider text-ink"
              >
                {{ t("team.responsibilities") }}
              </h4>
              <ul class="flex flex-col gap-2.5">
                <li
                  v-for="(item, index) in member.responsibilities"
                  :key="index"
                  class="flex items-start gap-2 text-[14px] leading-relaxed text-body"
                >
                  <span
                    class="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-aqua"
                  />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
