import { onBeforeUnmount, onMounted, ref } from "vue";

/**
 * Detecta qué sección está a la vista y devuelve su id.
 * @param {string[]} ids  ids de las secciones a observar, en orden
 */
export function useScrollSpy(ids) {
  const active = ref(ids[0]);
  let observer = null;

  onMounted(() => {
    // La "línea de detección" queda entre el 40 % y el 45 % de la altura de la pantalla:
    // una sección se considera activa cuando cruza esa franja.
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) active.value = entry.target.id;
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  });

  onBeforeUnmount(() => {
    if (observer) observer.disconnect();
  });

  return { active };
}
