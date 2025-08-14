export const SERVICES = [
  {
    id: "landing",
    title: "Landing Page",
    description:
      "Ideal para emprendimientos y profesionales que recién empiezan.",
    price: "$45.000",
    icon: `<rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 9h6v6H9z"></path>`,
    color: "primary",
    features: [
      "Sitio de una sola página",
      "Diseño personalizado",
      "Adaptado a celulares",
      "Formulario de contacto o WhatsApp",
      "Carga rápida y SEO básico",
    ],
  },
  {
    id: "institutional",
    title: "Sitio Web Institucional",
    description: "Ideal para negocios establecidos con más contenido.",
    price: "$85.000",
    icon: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9,22 9,12 15,12 15,22"></polyline>`,
    color: "primary",
    features: [
      "Varias secciones (Inicio, Servicios, Nosotros, Contacto, etc.)",
      "Diseño a medida",
      "Responsive y optimizado",
      "SEO inicial y seguridad básica",
      "Integración con redes sociales y contacto",
    ],
  },
  {
    id: "ecommerce",
    title: "Tienda Online",
    description: "Ideal para emprendedores que quieren vender por internet.",
    price: "$120.000",
    icon: `<circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="m2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>`,
    color: "primary",
    features: [
      "Catálogo de productos",
      "Carrito de compras y pasarela de pago",
      "Panel de administración",
      "Diseño moderno y adaptable",
      "Integración con medios de pago locales (Mercado Pago, etc.)",
    ],
  },
  {
    id: "custom",
    title: "Página a Medida",
    description: "¿Necesitás algo distinto? Lo hacemos.",
    price: "Consultar",
    icon: `<path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>`,
    color: "primary",
    popular: true,
    features: [
      "Funcionalidades personalizadas",
      "Sistemas de reservas, membresías o formularios complejos",
      "Conexión a bases de datos",
      "Webapps o soluciones únicas para tu negocio",
    ],
  },
];

export const LINKS = [
  { href: "/#experience", text: "Experiencia" },
  { href: "/#works", text: "Proyectos" },
  { href: "/#projects", text: "Experimentos" },
];

export const SKILLS = [
  {
    title: "Trabajo 100% personalizado, adaptado a tu marca",
    icon: `<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>`,
  },
  {
    title: "Experiencia con negocios locales y necesidades reales",
    icon: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z"></path>`,
  },
  {
    title: "Diseño moderno, simple y enfocado en resultados",
    icon: `<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>`,
  },
  {
    title: "Comunicación clara, sin tecnicismos",
    icon: `<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>`,
  },
  {
    title: "Mantenimiento y soporte post-entrega",
    icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path>`,
  },
  {
    title: "Optimización para buscadores (SEO)",
    icon: `<path d="M3 3h18v18H3V3z"></path><path d="M7 14l3-3 2 2 4-4"></path>`,
  },
];

export const FAQS = [
  {
    id: "precio",
    question: "¿Que es una landing page?",
    answer:
      "Una landing page es una página web pensada para cumplir un único objetivo: convertir visitantes en clientes. Por ejemplo, puede usarse para que una persona te deje sus datos, se registre a un evento o compre un producto. A diferencia de una web tradicional, que tiene muchas secciones, la landing page es simple, directa y está diseñada para que el visitante se enfoque en una sola acción (como apretar un botón o completar un formulario). Es ideal para campañas publicitarias, lanzamientos o promociones.",
  },
  {
    id: "tipos",
    question: "¿Qué tipo de páginas hacés? ",
    answer:
      "Trabajo principalmente con emprendedores, negocios y profesionales, pero también desarrollo sitios para eventos, portfolios personales o proyectos específicos. Cada sitio es 100% personalizado según tus objetivos.",
  },
  {
    id: "tiempo",
    question: "¿Cuánto tarda en estar lista?",
    answer:
      "El tiempo estimado varía según la complejidad del sitio. Una landing page puede estar lista en pocos días, mientras que una tienda online o un sitio a medida puede tardar entre 2 y 4 semanas. Siempre te informo los plazos antes de comenzar.",
  },
  {
    id: "requisitos",
    question: "¿Qué necesito tener para empezar?",
    answer:
      "Solo necesitás tener una idea clara de lo que querés comunicar y, si ya tenés, tu logo, imágenes y textos. Si no tenés todo eso, no te preocupes: también puedo ayudarte con el contenido y el diseño desde cero.",
  },
  {
    id: "responsive",
    question: "¿La página va a funcionar en celular?",
    answer:
      "Sí, todos los sitios que desarrollo son 100% responsivos. Eso significa que se ven y funcionan perfectamente en celulares, tablets y computadoras.",
  },
  {
    id: "dominio",
    question: "¿Puedo tener mi propio dominio (ej: mipagina.com)?",
    answer:
      "Sí, puedo ayudarte a registrar tu dominio si todavía no tenés uno. También me encargo de conectarlo correctamente a tu sitio.",
  },
];
