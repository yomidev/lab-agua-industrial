// src/data/team.js
import cortes from "@/assets/images/team/cortes.png";
import salado from "@/assets/images/team/salado.png";
import zaira from "@/assets/images/team/zaira.png";
import monserrat from "@/assets/images/team/montserrat.png";
import fernanda from "@/assets/images/team/fernanda.png";
import shannon from "@/assets/images/team/shannon.png";
import { Monitor } from "lucide-vue-next";

export const team = [
  {
    id: "cortes",
    name: "Alberto José Cortés González",
    role: "Ingeniero Químico",
    title: "Signatario ante la EMA",
    photo: cortes,
    responsibilities: [
      "NMX-AA-003-1980 Aguas Residuales-Muestreo",
      "NMX-AA-014-1980 Cuerpos Receptores-Muestreo",
      "NMX-AA-006-SCFI-2010 Determinación de Materia Flotante",
      "NMX-AA-007-SCFI-2013 Medición de la Temperatura",
      "NMX-AA-008-SCFI-2016 Medición del pH",
      "NMX-AA-093-SCFI-2018 Medición de la Conductividad Eléctrica",
    ],
  },
  {
    id: "salado",
    name: "Luis Alberto Salado Sánchez",
    role: "Ingeniero Químico",
    title: "Signatario ante la EMA",
    photo: salado,
    responsibilities: [
      "Muestreo de aguas residuales (NMX-AA-003-1980)",
      "Muestreo de cuerpos receptores (NMX-AA-014-1980)",
      "Determinación de materia flotante (NMX-AA-006-SCFI-2010)",
      "Medición de temperatura (NMX-AA-007-SCFI-2013)",
      "Medición de pH (NMX-AA-008-SCFI-2016)",
      "Medición de conductividad eléctrica (NMX-AA-093-SCFI-2018)",
    ],
  },
  {
    id: "zaira",
    name: "Zaira Jacqueline Cardona Tovar",
    role: "Integrante del Equipo",
    title: "Laboratorio de Aguas Industriales",
    photo: zaira,
    responsibilities: ["Información pendiente por definir."],
  },
  {
    id: "monserrat",
    name: "Monserrat Rivera Medina",
    role: "Técnico Analista I.Q.",
    title: "Signatario Autorizado",
    photo: monserrat,
    responsibilities: [
      "Determinación de Cianuros Totales (Método Interno ITA-LI-PT-CN Mini Vap 4000)",
    ],
  },
  {
    id: "fernanda",
    name: "María Fernanda López Acevedo",
    role: "Técnico Analista",
    title: "Signatario ante la EMA",
    photo: fernanda,
    responsibilities: [
      "EPA 200.7 (Al, As, Cd, Cu, Cr, Ni, Pb, Zn y P)",
      "Método interno ITA-LI-PT-Hg (Hg)",
    ],
  },
  {
    id: "shannon",
    name: "Shannon Ashley López Calderón",
    role: "Técnico Analista I.Q.",
    title: "Signatario Autorizado",
    photo: shannon,
    responsibilities: ["EPA 200.7", "Método interno ITA-LI-PT-ICP-Hg"],
  },
];
