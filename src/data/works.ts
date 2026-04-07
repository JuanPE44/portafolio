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
    jobTitle: "Aplicación Web",
    jobTitleEn: "Web Application",
    description:
      "Plataforma colaborativa para estudiantes universitarios para buscar, compartir y gestionar recursos académicos. Más de 200 estudiantes activos por día y +4.000 recursos cargados por la comunidad.",
    descriptionEn:
      "Collaborative platform for university students to search, share, and manage academic resources. Over 200 active students per day and +4,000 resources uploaded by the community.",
    details: ["Desarrollo Fullstack", "Frontend + Backend + Base de datos"],
    detailsEn: ["Fullstack Development", "Frontend + Backend + Database"],
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
    jobTitleEn: "Landing Page",
    description:
      "Encargado del diseño y desarrollo del sitio web para Mamparas Esmeralda, donde lideré la planificación del proyecto y realicé el diseño personalizado del sitio. ",
    descriptionEn:
      "In charge of the design and development of the website for Mamparas Esmeralda, leading project planning and creating a custom site design.",
    details: ["Diseño UX/UI", "Desarrollo Frontend", "SEO"],
    detailsEn: ["UX/UI Design", "Frontend Development", "SEO"],
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
    jobTitleEn: "Web Application",
    description:
      "Colabore en la definición de funcionalidades y en la implementación de la interfaz de usuario utilizando React y Material UI.",
    descriptionEn:
      "Collaborated in defining features and implementing the user interface using React and Material UI.",
    details: [
      "Planificación del proyecto",
      "Desarrollo Frontend",
      "Integración de UI Components",
    ],
    detailsEn: [
      "Project Planning",
      "Frontend Development",
      "UI Components Integration",
    ],
    tecnologies: ["react", "materialui", "typescript", "scrum"],
    projectDetails: projectDetailsGastos,
  },
];
