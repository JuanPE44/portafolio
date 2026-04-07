import {
  projectDetailsExactamente,
  projectDetailsGastos,
  projectDetailsMamparas,
} from "./projectsDetails";

export const works = [
  {
    slug: "exactamente",
    urlImage: "/images/exactamente.webp",
    urlLink: "https://exactamente.com.ar",
    urlMore: "items/mamparas-esmeralda",
    title: "Exactamente",
    jobTitle: "Aplicacion Web",
    description:
      "Plataforma colaborativa para estudiantes universitarios para buscar, compartir y gestionar recursos académicos. Más de 200 estudiantes activos por día y +4.000 recursos cargados por la comunidad.",
    details: ["Desarrollo Fullstack", "Frontend + Backend + Base de datos"],
    tecnologies: ["astro", "react", "tailwind", "typescript", "nodejs"],
    projectDetails: projectDetailsExactamente,
  },
  {
    slug: "mamparas-esmeralda",
    urlImage: "/images/mamparas-esmeralda.webp",
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
    urlImage: "/images/app-gastos.webp",
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
