<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";
import { ChevronLeft, ChevronRight } from "lucide-vue-next"; // Iconos para las flechas
import SectionHeader from "@/components/ui/SectionHeader.vue";
import TeamMemberCard from "./TeamMemberCard.vue";
import TeamModal from "./TeamModal.vue";
import { team } from "@/data/team";

const { t } = useI18n();

const selectedMember = ref(null);
const openModal = (member) => {
  selectedMember.value = member;
};
const closeModal = () => {
  selectedMember.value = null;
};

// --- Lógica del Carrusel ---
const sliderContainer = ref(null);
let autoPlayInterval = null;

// Desplazar hacia la izquierda o derecha
const scrollSlider = (direction) => {
  if (!sliderContainer.value) return;
  const container = sliderContainer.value;
  // Calcula el ancho de una tarjeta + el gap (aprox 300px)
  const scrollAmount = 300;

  if (direction === "next") {
    // Si llegamos al final, volvemos al inicio
    if (
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - 10
    ) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  } else {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }
};

// Auto-play
const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    scrollSlider("next");
  }, 3000); // Cambia cada 3 segundos
};

const stopAutoPlay = () => {
  if (autoPlayInterval) clearInterval(autoPlayInterval);
};

onMounted(() => {
  startAutoPlay();
});

onBeforeUnmount(() => {
  stopAutoPlay();
});
</script>

<template>
  <section id="equipo" class="px-3 pt-24 lg:px-7">
    <div class="mx-auto flex max-w-[1320px] flex-col gap-8">
      <!-- Encabezado con Flechas de Navegación -->
      <div class="flex items-end justify-between gap-4">
        <SectionHeader
          index="06"
          :label="t('team.label')"
          :title="t('team.title')"
        />

        <!-- Botones de control -->
        <div class="hidden gap-2 sm:flex">
          <button
            @click="scrollSlider('prev')"
            class="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:bg-page"
          >
            <ChevronLeft :size="24" />
          </button>
          <button
            @click="scrollSlider('next')"
            class="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:bg-page"
          >
            <ChevronRight :size="24" />
          </button>
        </div>
      </div>

      <!-- Contenedor del Carrusel -->
      <!-- Pausamos el autoplay si el usuario pone el mouse encima -->
      <div
        class="relative -mx-3 px-3 lg:-mx-7 lg:px-7"
        @mouseenter="stopAutoPlay"
        @mouseleave="startAutoPlay"
      >
        <div
          ref="sliderContainer"
          class="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 pt-2 scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          <!-- Cada tarjeta ocupa un ancho fijo (aprox 260px) y hace snap -->
          <div
            v-for="member in team"
            :key="member.id"
            class="w-[260px] flex-none snap-start sm:w-[280px]"
          >
            <TeamMemberCard :member="member" @select="openModal" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <TeamModal :member="selectedMember" @close="closeModal" />
</template>
