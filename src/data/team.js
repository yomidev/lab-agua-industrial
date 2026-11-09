// src/data/team.js
import cortes from "@/assets/images/team/cortes.png";
import salado from "@/assets/images/team/salado.png";
import zaira from "@/assets/images/team/zaira.png";
import monserrat from "@/assets/images/team/montserrat.png";
import fernanda from "@/assets/images/team/fernanda.png";
import shannon from "@/assets/images/team/shannon.png";
import virginia from "@/assets/images/team/virginia.jpg";
import estrella from "@/assets/images/team/estrella.jpg";
import victoria from "@/assets/images/team/victoria.jpg";
import gabriela from "@/assets/images/team/gabriela.jpg";

import { Monitor } from "lucide-vue-next";

export const team = [
  {
    id: "virginia",
    name: "Virginia Hernández Montoya",
    role: "Jefa de Laboratorio e Investigadora",
    title: "Doctora en Ciencias Químicas",
    photo: virginia,
    responsibilities: [
      "Jefa del laboratorio de investigación y profesora investigadora en el ITA (desde 2011).",
      "Doctora en Ciencias Químicas por la Benemérita Universidad Autónoma de Puebla (BUAP).",
      "Ingeniera Química con especialidad en Ambiental.",
      "Directora de proyectos de investigación (CONACYT y TecNM) enfocados en la calidad del agua, remoción de arsénico, fluoruros y colorantes.",
      "Asesora ambiental especializada en tratamiento de agua y ahorro de energía.",
    ],
  },
  {
    id: "estrella",
    name: "María Estrella Martínez Floriano",
    role: "Jefa Técnica y Técnico Analista",
    title: "M.C. en Ingeniería Ambiental",
    photo: estrella,
    responsibilities: [
      "Jefa Técnica y Técnico Analista en el Laboratorio de Aguas Industriales del ITA (desde 2021).",
      "Experta Técnica del padrón de evaluadores de la EMA en la rama de agua y residuos.",
      "Implementación y validación de métodos para metales (Al, As, Cd, Cr, Cu, Fe, Mg, Ni, Pb, K, Na, Zn y Hg) por Absorción Atómica, ICP-OES y Vapor Frío.",
      "Supervisión de mediciones de campo, actividades de muestreo y elaboración/revisión de informes de resultados.",
      "Amplia trayectoria previa en la industria como Supervisora de Cromatografía (GC-MS, HPLC) y Analista Signatario.",
    ],
  },
  {
    id: "ana",
    name: "Ana Victoria Hernández García",
    role: "Jefe de Calidad y Técnico Analista",
    title: "Lic. en Ciencias Ambientales",
    photo: victoria,
    responsibilities: [
      "Jefa de Calidad y Signatario Autorizado en el Laboratorio de Aguas Industriales del ITA.",
      "Gestión del Sistema de Gestión de Calidad (SGC) bajo la norma NMX-EC-17025-IMNC-2018 y planificación de auditorías internas.",
      "Signatario autorizado para parámetros fisicoquímicos: DBO5, Sólidos, Grasas y Aceites, pH, Conductividad y Cromo Hexavalente.",
      "Amplia experiencia previa en el sector industrial como Analista Signatario en Microbiología (Coliformes, E. coli, Salmonella y Huevos de Helminto).",
      "Técnico Docente y encargada de la revisión de procedimientos técnicos, administrativos e informes de ensayo.",
    ],
  },
  {
    id: "gabriela",
    name: "Gabriela Castillo Ibarra",
    role: "Jefe de Atención a Clientes y Técnico Analista",
    title: "Ingeniera Química",
    photo: gabriela,
    responsibilities: [
      "Jefa de la oficina de atención a clientes del Laboratorio de Aguas Industriales del ITA (desde 2023).",
      "Encargada del seguimiento a solicitudes de servicio, registro de ensayos y verificación de la entrega de resultados en tiempo y forma.",
      "Técnico analista en la implementación y verificación de métodos por volumetría (Cianuros, alcalinidad, dureza, cloruros) y gravimetría (Grasas y aceites, Sólidos Suspendidos Totales).",
      "Amplia experiencia previa como Analista Signatario de fisicoquímicos en la industria (Microlab Industrial).",
      "Apoyo en el desarrollo de prácticas de laboratorio para estudiantes de Ingeniería Química.",
    ],
  },
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
