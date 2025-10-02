import { PlaceHolderImages } from '@/lib/placeholder-images';

export const projectsData = [
    {
        id: "galtlantic",
        title: "Galtlantic - Web Corporativa y Blog",
        description: "Desarrollo de una web corporativa moderna y optimizada para una consultora, utilizando un Child Theme de GeneratePress para máxima flexibilidad y rendimiento. El foco principal fue crear una estructura de contenidos limpia y una velocidad de carga excelente.",
        technologies: ["WordPress", "GeneratePress", "Child Theme", "CSS3", "SEO On-Page"],
        link: "https://galtlantic.com/",
        image: PlaceHolderImages.find(img => img.id === 'galtlantic'),
        alt: "Página de inicio de Galtlantic, web corporativa desarrollada en WordPress por David Méndez."
    },
    {
        id: "gr-100",
        title: "GR-100 - Plataforma de Eventos",
        description: "Creación de un sitio web visualmente impactante para una empresa de organización de eventos. Se implementó con WordPress y el constructor Divi, permitiendo una gestión de contenidos muy visual y sencilla para el cliente final.",
        technologies: ["WordPress", "Divi Builder", "CSS Personalizado"],
        link: "https://gr-100.com/",
        image: PlaceHolderImages.find(img => img.id === 'gr-100'),
        alt: "Página de la plataforma de eventos GR-100, creada con WordPress y Divi por David Méndez."
    },
    {
        id: "toycosur",
        title: "Toycosur - Tienda Online (E-commerce)",
        description: "Implementación y personalización de una tienda online B2B sobre PrestaShop. El proyecto incluyó la configuración de módulos específicos, optimización del proceso de compra y adaptación del diseño a la identidad de marca de la empresa.",
        technologies: ["PrestaShop", "Smarty", "CSS3", "MySQL"],
        link: "https://toycosur.com/es/",
        image: PlaceHolderImages.find(img => img.id === 'toycosur'),
        alt: "Tienda online B2B de Toycosur, implementada en PrestaShop por David Méndez."
    },
    {
        id: "elia-spa",
        title: "Elia Spa - Landing Page a Medida",
        description: "Desarrollo de una landing page estática desde cero con HTML, CSS y JavaScript puro. El objetivo era conseguir un diseño elegante, totalmente responsive y con un rendimiento de carga casi instantáneo, ideal para campañas de marketing.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Mobile-First"],
        link: "https://www.elyaspa.com/",
        image: PlaceHolderImages.find(img => img.id === 'elia-spa'),
        alt: "Landing page para Elia Spa, desarrollada a medida con HTML, CSS y JS por David Méndez."
    }
]
