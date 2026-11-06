export const navItems = [
  "inicio",
  "nosotros",
  "calidad",
  "mision",
  "acreditacion",
  "servicios",
  "equipo",
].map((id) => ({ id, href: `#${id}` }));

export const spySections = [...navItems.map((i) => i.id), "cotizacion"];
