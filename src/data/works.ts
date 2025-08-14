import {
  projectDetailsExactamente,
  projectDetailsGastos,
  projectDetailsMamparas,
} from "./projectsDetails";

export const works = [
  {
    slug: "exactamente",
    urlImage: "/images/exactamente.png",
    urlLink: "https://exactamente.com.ar",
    urlMore: "items/mamparas-esmeralda",
    title: "Exactamente",
    jobTitle: "Aplicacion Web",
    description:
      "Desarrollo de una plataforma web para facilitar el acceso y la colaboración en recursos académicos, donde los usuarios pueden buscar y subir resúmenes, parciales y finales de distintas materias.",
    details: ["Desarrollo Frontend", "Integracion con Google Drive"],
    tecnologies: [  "astro",
  "react",
  "tailwind",
  "typescript",
],
    projectDetails: projectDetailsExactamente,
  },
  {
    slug: "mamparas-esmeralda",
    urlImage: "/images/mamparas-esmeralda.png",
    urlLink: "https://mamparasesmeralda.vercel.app",
    urlMore: "items/mamparas-esmeralda",
    title: "Mamparas Esmeralda",
    jobTitle: "Landing Page",
    description:
      "Encargado del diseño y desarrollo del sitio web para Mamparas Esmeralda, donde lideré la planificación del proyecto y realicé el diseño personalizado del sitio. ",
    details: ["Diseño UX/UI", "Desarrollo Frontend", "SEO"],
    tecnologies: ["astro", "figma", "typescript", "tailwind"],
    projectDetails: projectDetailsMamparas,
  },

  {
    slug: "app-gastos",
    urlImage: "/images/app-gastos.png",
    urlLink: "",
    urlMore: "items/app-gastos",
    title: "Gestor de Gastos",
    jobTitle: "Aplicación Web",
    description:
      "Colabore en la definición de funcionalidades y en la implementación de la interfaz de usuario utilizando React y Material UI.",
    details: [
      "Planificación del proyecto",
      "Desarrollo Frontend",
      "Integración de UI Components",
    ],
    tecnologies: ["react", "materialui", "typescript", "scrum"],
    projectDetails: projectDetailsGastos,
  },
];
