export interface ItemData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'work' | 'project';
  role: string;
  client?: string;
  duration: string;
  technologies: Technology[];
  features: Feature[];
  process: ProcessStep[];
  links: {
    demo?: string;
    github?: string;
    linkedin?: string;
  };
  images: {
    hero: string;
    gallery?: string[];
  };
  status: 'completed' | 'in-progress' | 'planned';
}

export interface Technology {
  name: string;
  color: 'blue' | 'purple' | 'green' | 'pink' | 'yellow' | 'red' | 'indigo';
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: 'blue' | 'purple' | 'green' | 'yellow' | 'red' | 'indigo';
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  color: 'blue' | 'purple' | 'green' | 'yellow' | 'red' | 'indigo';
}

// Datos de trabajos
export const worksData: ItemData[] = [
  {
    slug: 'mamparas-esmeralda',
    title: 'Mamparas Esmeralda',
    subtitle: 'Sitio web corporativo para empresa de mamparas',
    description: 'Encargado del diseño y desarrollo del sitio web para Mamparas Esmeralda, donde lideré la planificación del proyecto y realicé el diseño personalizado del sitio.',
    longDescription: 'Proyecto completo de diseño y desarrollo web para una empresa especializada en mamparas de baño. El sitio incluye catálogo de productos, información corporativa y sistema de contacto optimizado para conversiones.',
    category: 'work',
    role: 'Freelancer',
    client: 'Mamparas Esmeralda',
    duration: '2-3 semanas',
    technologies: [
      { name: 'Astro', color: 'blue' },
      { name: 'TypeScript', color: 'purple' },
      { name: 'Tailwind CSS', color: 'green' },
      { name: 'Figma', color: 'pink' }
    ],
    features: [
      {
        title: 'Diseño Responsive',
        description: 'Adaptación perfecta a todos los dispositivos móviles y de escritorio.',
        icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
        color: 'blue'
      },
      {
        title: 'Carga Rápida',
        description: 'Optimización de rendimiento con Astro para tiempos de carga mínimos.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        color: 'yellow'
      },
      {
        title: 'SEO Optimizado',
        description: 'Estructura semántica y metadatos optimizados para buscadores.',
        icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
        color: 'green'
      },
      {
        title: 'Diseño Personalizado',
        description: 'Identidad visual única adaptada a la marca del cliente.',
        icon: 'M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z',
        color: 'purple'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Planificación y análisis',
        description: 'Trabajé estrechamente con el cliente para entender sus necesidades específicas y el público objetivo, definiendo los objetivos del sitio web.',
        color: 'blue'
      },
      {
        step: 2,
        title: 'Diseño y prototipado',
        description: 'Utilicé Figma para crear wireframes y prototipos interactivos, asegurando una experiencia de usuario óptima antes del desarrollo.',
        color: 'purple'
      },
      {
        step: 3,
        title: 'Desarrollo e implementación',
        description: 'Desarrollé el sitio utilizando Astro y TypeScript, implementando un diseño responsive con Tailwind CSS para garantizar compatibilidad en todos los dispositivos.',
        color: 'green'
      }
    ],
    links: {
      demo: 'https://mamparasesmeralda.com.ar',
      linkedin: 'https://www.linkedin.com/in/juan-peñalba-0025b6246/'
    },
    images: {
      hero: '/images/work-1.webp',
      gallery: ['/images/work-1.webp']
    },
    status: 'completed'
  }
];

// Datos de proyectos
export const projectsData: ItemData[] = [
  {
    slug: '2048-game',
    title: 'Juego 2048',
    subtitle: 'Implementación interactiva del popular juego de números',
    description: 'Recreación del famoso juego 2048 con JavaScript vanilla, incluyendo animaciones suaves, sistema de puntuación y controles táctiles.',
    longDescription: 'Proyecto personal para practicar lógica de programación y manipulación del DOM. Incluye todas las mecánicas del juego original con mejoras visuales y de experiencia de usuario.',
    category: 'project',
    role: 'Desarrollador Full-Stack',
    duration: '1-2 semanas',
    technologies: [
      { name: 'JavaScript', color: 'yellow' },
      { name: 'HTML5', color: 'red' },
      { name: 'CSS3', color: 'blue' },
      { name: 'Canvas API', color: 'purple' }
    ],
    features: [
      {
        title: 'Controles Táctiles',
        description: 'Soporte completo para dispositivos móviles con gestos de deslizamiento.',
        icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
        color: 'blue'
      },
      {
        title: 'Animaciones Fluidas',
        description: 'Transiciones suaves entre movimientos para una mejor experiencia.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        color: 'purple'
      },
      {
        title: 'Sistema de Puntuación',
        description: 'Tracking de puntuación actual y mejor puntuación con localStorage.',
        icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        color: 'green'
      },
      {
        title: 'Responsive Design',
        description: 'Adaptación perfecta a diferentes tamaños de pantalla.',
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        color: 'indigo'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Análisis del juego original',
        description: 'Estudié las mecánicas del juego 2048 para entender la lógica de movimiento y combinación de fichas.',
        color: 'blue'
      },
      {
        step: 2,
        title: 'Implementación de la lógica',
        description: 'Desarrollé los algoritmos para el movimiento de fichas, detección de colisiones y combinaciones.',
        color: 'purple'
      },
      {
        step: 3,
        title: 'Interfaz y animaciones',
        description: 'Creé una interfaz atractiva con animaciones CSS y controles tanto para teclado como táctiles.',
        color: 'green'
      }
    ],
    links: {
      demo: 'https://2048-juanpenalba.vercel.app',
      github: 'https://github.com/JuanPE44/2048'
    },
    images: {
      hero: '/images/project-2048.webp',
      gallery: ['/images/project-2048.webp']
    },
    status: 'completed'
  },
  {
    slug: 'analog-clock',
    title: 'Reloj Analógico',
    subtitle: 'Reloj interactivo con JavaScript y Canvas',
    description: 'Implementación de un reloj analógico funcional utilizando Canvas API con actualizaciones en tiempo real.',
    longDescription: 'Proyecto educativo para practicar manipulación de Canvas y matemáticas aplicadas. El reloj muestra la hora actual con manecillas animadas y diseño personalizable.',
    category: 'project',
    role: 'Desarrollador Frontend',
    duration: '3-5 días',
    technologies: [
      { name: 'JavaScript', color: 'yellow' },
      { name: 'Canvas API', color: 'purple' },
      { name: 'CSS3', color: 'blue' },
      { name: 'HTML5', color: 'red' }
    ],
    features: [
      {
        title: 'Tiempo Real',
        description: 'Actualización automática cada segundo con la hora actual del sistema.',
        icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
        color: 'blue'
      },
      {
        title: 'Canvas Rendering',
        description: 'Dibujado dinámico utilizando Canvas API para máximo rendimiento.',
        icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
        color: 'purple'
      },
      {
        title: 'Diseño Clásico',
        description: 'Estética tradicional de reloj analógico con números romanos.',
        icon: 'M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z',
        color: 'green'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Configuración del Canvas',
        description: 'Establecí el lienzo y las funciones básicas de dibujo para crear la base del reloj.',
        color: 'blue'
      },
      {
        step: 2,
        title: 'Lógica de las manecillas',
        description: 'Implementé los cálculos matemáticos para posicionar correctamente las manecillas según la hora.',
        color: 'purple'
      },
      {
        step: 3,
        title: 'Animación y estilo',
        description: 'Agregué animaciones suaves y un diseño visual atractivo con números y marcadores.',
        color: 'green'
      }
    ],
    links: {
      demo: 'https://analogclockjuanpa.vercel.app',
      github: 'https://github.com/JuanPE44/analog-clock'
    },
    images: {
      hero: '/images/project-clock.webp',
      gallery: ['/images/project-clock.webp']
    },
    status: 'completed'
  }
];

// Función para obtener todos los items
export const getAllItems = (): ItemData[] => {
  return [...worksData, ...projectsData];
};

// Función para obtener item por slug
export const getItemBySlug = (slug: string): ItemData | undefined => {
  return getAllItems().find(item => item.slug === slug);
};

// Función para obtener items por categoría
export const getItemsByCategory = (category: 'work' | 'project'): ItemData[] => {
  return getAllItems().filter(item => item.category === category);
};
