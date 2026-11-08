// src/data/parameters.js
import fqImg from "@/assets/images/services/fisicoquimicos.jpg";
import metImg from "@/assets/images/services/metales.jpg";
import otrosImg from "@/assets/images/services/otros.jpg";
import microImg from "@/assets/images/services/microbiologicos.jpg";

export const families = [
  {
    id: "fisicoquimicos",
    image: fqImg,
    parameters: [
      { name: "pH", method: "NMX-AA-008-SCFI-2016", accredited: true },
      {
        name: "Sólidos sedimentables",
        method: "NMX-AA-004-SCFI-2013",
        accredited: true,
      },
      {
        name: "Dureza total",
        method: "NMX-AA-072-SCFI-2001",
        accredited: true,
      },
      {
        name: "Conductividad eléctrica",
        method: "NMX-AA-093-SCFI-2018",
        accredited: true,
      },
      { name: "Fluoruros", method: "NMX-AA-077-SCFI-2001", accredited: true },
      {
        name: "Cloruros totales",
        method: "NMX-AA-073-SCFI-2001",
        accredited: true,
      },
      {
        name: "Cromo hexavalente",
        method: "NMX-AA-044-SCFI-2014",
        accredited: true,
      },
      {
        name: "Cianuros totales",
        method:
          "Método interno ITA-LI-PT-CN-MiniVap 4000 / NMX-AA-058-SCFI-2001",
        accredited: true,
      },
      { name: "Ión sulfato", method: "NMX-AA-074-SCFI-2014", accredited: true },
      { name: "Alcalinidad", method: "NMX-AA-036-SCFI-2014", accredited: true },
      {
        name: "Grasas y aceites",
        method: "NMX-AA-005-SCFI-2013",
        accredited: true,
      },
      { name: "Temperatura", method: "NMX-AA-007-SCFI-2013", accredited: true },
    ],
  },
  {
    id: "metales",
    image: metImg,
    parameters: [
      {
        name: "Aluminio total",
        method: "EPA 200.7 / NMX-AA-051-SCFI-2016",
        accredited: true,
      },
      {
        name: "Cadmio total",
        method: "EPA 200.7 / NMX-AA-051-SCFI-2016",
        accredited: true,
      },
      {
        name: "Calcio total",
        method: "EPA 200.7* / NMX-AA-051-SCFI-2016",
        accredited: false,
      },
      {
        name: "Cobre total",
        method: "EPA 200.7 / NMX-AA-051-SCFI-2016",
        accredited: true,
      },
      {
        name: "Cromo total",
        method: "EPA 200.7 / NMX-AA-051-SCFI-2016",
        accredited: true,
      },
      {
        name: "Hierro total",
        method: "EPA 200.7* / NMX-AA-051-SCFI-2016",
        accredited: false,
      },
      {
        name: "Magnesio total",
        method: "EPA 200.7* / NMX-AA-051-SCFI-2016",
        accredited: false,
      },
      {
        name: "Níquel total",
        method: "EPA 200.7 / NMX-AA-051-SCFI-2016",
        accredited: true,
      },
      {
        name: "Plomo total",
        method: "EPA 200.7 / NMX-AA-051-SCFI-2016",
        accredited: true,
      },
      {
        name: "Potasio total",
        method: "EPA 200.7* / NMX-AA-051-SCFI-2016",
        accredited: false,
      },
      {
        name: "Sodio total",
        method: "EPA 200.7* / NMX-AA-051-SCFI-2016",
        accredited: false,
      },
      {
        name: "Zinc total",
        method: "EPA 200.7 / NMX-AA-051-SCFI-2016",
        accredited: true,
      },
      {
        name: "Arsénico total",
        method: "EPA 200.7 / NMX-AA-051-SCFI-2016",
        accredited: true,
      },
      {
        name: "Mercurio total",
        method: "Método interno ITA-LI-PT-ICP-Hg",
        accredited: true,
      },
      { name: "Fósforo total", method: "EPA 200.7", accredited: true },
    ],
  },
  {
    id: "otros",
    image: otrosImg,
    parameters: [
      { name: "Fosfatos*", method: "Método HACH 8114", accredited: false },
      {
        name: "Aluminio total*",
        method: "Método HACH 8012",
        accredited: false,
      },
      {
        name: "Nitratos totales (UV-Vis)*",
        method: "Método HACH 8039",
        accredited: false,
      },
      {
        name: "Silicio (UV-Vis)*",
        method: "Método HACH 8185",
        accredited: false,
      },
      {
        name: "Olor y sabor*",
        method: "Análisis sensorial",
        accredited: false,
      },
      {
        name: "Turbiedad*",
        method: "Método fotométrico 906",
        accredited: false,
      },
      {
        name: "Cloro residual libre*",
        method: "Método fotométrico",
        accredited: false,
      },
      { name: "Cloro total*", method: "Método HACH 8185", accredited: false },
      {
        name: "Color verdadero*",
        method: "NMX-AA-017-SCFI-2021",
        accredited: false,
      },
      {
        name: "Carbono orgánico total (COT)*",
        method: "Método fotométrico",
        accredited: false,
      },
      { name: "Nitritos*", method: "HACH 880", accredited: false },
      { name: "Nitratos*", method: "HACH 880", accredited: false },
      { name: "Nitrógeno total*", method: "HACH 880", accredited: false },
      { name: "Nitrógeno Kjeldahl*", method: "HACH 880", accredited: false },
      { name: "Enterococos*", method: "Método fotométrico", accredited: false },
    ],
  },
  {
    id: "microbiologicos",
    image: microImg,
    parameters: [
      {
        name: "Coliformes totales*",
        method:
          "NMX-AA-042-SCFI-2015 (residuales, RT) / NOM-210-SSA1-2014 (potables)",
        accredited: false,
      },
      {
        name: "Coliformes fecales*",
        method:
          "NMX-AA-042-SCFI-2015 (residuales, RT) / NOM-210-SSA1-2014 (potables)",
        accredited: false,
      },
      {
        name: "Escherichia coli*",
        method:
          "NMX-AA-042-SCFI-2015 (residuales, RT) / NOM-210-SSA1-2014 (potables)",
        accredited: false,
      },
      {
        name: "Huevos de helmintos*",
        method: "NMX-AA-0113-SCFI-2012",
        accredited: false,
      },
      {
        name: "Mesofílicos aerobios*",
        method: "NOM-092-SSA1-1994",
        accredited: false,
      },
      {
        name: "Amebas de vida libre*",
        method: "NOM-245-SSA1-2010",
        accredited: false,
      },
    ],
  },
];

export const totalParameters = families.reduce(
  (acc, f) => acc + f.parameters.length,
  0,
);
