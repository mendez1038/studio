import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';

export interface Course {
    id: string;
    title: string;
    entity: string;
    duration: number;
    year: number;
    specialty: 'Desarrollo Web' | 'Análisis de Datos' | 'Desarrollo Multimedia' | 'SEO' | 'IA' | 'Logística' | 'General';
    certificateUrl?: string;
    projectUrl?: string;
    projectUrl2?: string;
    image?: ImagePlaceholder;
    alt: string;
}

export const coursesData: Course[] = [
    {
        id: "data-analyst-course",
        title: "Tu primera experiencia como analista de datos",
        entity: "DS4B",
        duration: 6,
        year: 2025,
        specialty: "Análisis de Datos",
        certificateUrl: "/Certificados/tu-primera-experiencia-como-analista-de-datos.pdf",
        projectUrl: "https://drive.google.com/drive/folders/1KWWRKLa-Lmi_NUChJlrTOG7QxAq8wbh1?usp=sharing",
        image: PlaceHolderImages.find(img => img.id === 'course-ad'),
        alt: "Certificado del curso de Tu primera experiencia como analista de datos de DS4B"
    },
    {
        id: "chatgpt",
        title: "Curso CHATGPT by Upo Technology",
        entity: "Udemy",
        duration: 3.5,
        year: 2024,
        specialty: "IA",
        certificateUrl: "/Certificados/ChatGPT.pdf",
        image: PlaceHolderImages.find(img => img.id === 'course-chatgpt'),
        alt: "Certificado del curso de IA con ChatGPT de Upo Technology"
    },
    {
        id: "daw",
        title: "Ciclo Superior de Desarrollo de Aplicaciones Web",
        entity: "IES Val do Asma",
        duration: 2000,
        year: 2020,
        specialty: "Desarrollo Web",
        projectUrl: "https://github.com/mendez1038/HPRWeb",
        projectUrl2: "https://github.com/mendez1038/HPRWebJS.git",
        image: PlaceHolderImages.find(img => img.id === 'daw'),
        alt: "Certificado del Ciclo Superior de Desarrollo de Aplicaciones Web"
    },
    {
        id: "dam",
        title: "Ciclo Superior de Desarrollo de Aplicaciones Multiplataforma",
        entity: "Campus Politecnico Aceimar",
        duration: 2000,
        year: 2022,
        specialty: "Desarrollo Multimedia",
        projectUrl: "https://github.com/mendez1038/PFC",
        image: PlaceHolderImages.find(img => img.id === 'dam'),
        alt: "Certificado del Ciclo Superior de Desarrollo de Aplicaciones Multiplataforma"
    },
    {
        id: "ia development",
        title: "Desarrollo con IA",
        entity: "BigSchool",
        duration: 6,
        year: 2025,
        specialty: "Desarrollo Web",
        certificateUrl: "/Certificados/David.pdf",
        projectUrl: "https://david-mendez.com/",
        image: PlaceHolderImages.find(img => img.id === 'ia'),
        alt: "Certificado de Desarrollador con IA"
    },
    {
        id: "master php",
        title: "Master en PHP, SQL, POO, MVC, Laravel, Symfony, WordPress +",
        entity: "Udemy",
        duration: 56,
        year: 2021,
        specialty: "Desarrollo Web",
        projectUrl: "https://github.com/mendez1038/draftMartinezApp.git",
        image: PlaceHolderImages.find(img => img.id === 'course-php-master'),
        alt: "Certificado de Máster en PHP, SQL, POO, MVC, Laravel, Symfony, WordPress +"
    },
    {
        id: "adbn1",
        title: "Curso de Analista de Datos en Baloncesto Nivel 1",
        entity: "isportcoach",
        duration: 20,
        year: 2025,
        specialty: "Análisis de Datos",
        certificateUrl: "/Certificados/Certificacin.pdf",
        image: PlaceHolderImages.find(img => img.id === 'adbn1'),
        alt: "Certificado de Curso de Analista de Datos en Baloncesto Nivel 1"
    },
    {
        id: "adbn2",
        title: "Curso de Analista de Datos en Baloncesto Nivel 2",
        entity: "isportcoach",
        duration: 30,
        year: 2025,
        specialty: "Análisis de Datos",
        certificateUrl: "/Certificados/Certificacin_N2.pdf",
        image: PlaceHolderImages.find(img => img.id === 'adbn2'),
        alt: "Certificado de Curso de Analista de Datos en Baloncesto Nivel 2"
    },
    {
        id: "adbn3",
        title: "Curso de Analista de Datos en Baloncesto Nivel 3",
        entity: "isportcoach",
        duration: 70,
        year: 2025,
        specialty: "Análisis de Datos",
        image: PlaceHolderImages.find(img => img.id === 'adbn3'),
        alt: "Certificado de Curso de Analista de Datos en Baloncesto Nivel 3"
    },
    {
        id: "damobile",
        title: "Curso de Desarrollo de Apps Móviles",
        entity: "Google Actívate",
        duration: 40,
        year: 2016,
        specialty: "Desarrollo Multimedia",
        certificateUrl: "/Certificados/Certificado.pdf",
        image: PlaceHolderImages.find(img => img.id === 'damobile'),
        alt: "Certificado de Curso de Desarrollo de Apps Móviles"
    },
    {
        id: "wordpress",
        title: "Curso Práctico de Wordpress",
        entity: "Raiola Networks",
        duration: 20,
        year: 2025,
        specialty: "Desarrollo Web",
        certificateUrl: "/Certificados/certificado-curso-practico-de-wordpress-David_M_ndez_Mart_nez.pdf",
        image: PlaceHolderImages.find(img => img.id === 'wordpress'),
        alt: "Certificado de Curso Práctico de Wordpress"
    },
    {
        id: "mapping",
        title: "Mapping the Modern Web Design Process",
        entity: "LinkedIn Learning",
        duration: 2,
        year: 2025,
        specialty: "Desarrollo Web",
        certificateUrl: "/Certificados/Mapping the Modern Web Design Process.pdf",
        image: PlaceHolderImages.find(img => img.id === 'mapping'),
        alt: "Certificado de Mapping the Modern Web Design Process"
    },
    {
        id: "seo",
        title: "Curso de SEO, SEO Técnico y Palabras Clave para principiantes",
        entity: "Webpositer Academy",
        duration: 7,
        year: 2025,
        specialty: "SEO",
        certificateUrl: "/diploma.pdf",
        projectUrl: "https://adegasdonapaca.com/",
        image: PlaceHolderImages.find(img => img.id === 'seo'),
        alt: "Certificado del Curso de SEO, SEO Técnico y Palabras Clave para principiantes"
    },
    {
        id: "cm",
        title: "Codemotion Online Conference 2023",
        entity: "Codemotion",
        duration: 8,
        year: 2023,
        specialty: "Desarrollo Multimedia",
        certificateUrl: "/Certificados/WF.pdf",
        image: PlaceHolderImages.find(img => img.id === 'cd'),
        alt: "Certificado de Codemotion Online Conference 2023"
    },
    {
        id: "w3",
        title: "HTML5, CSS3, JavaScript, SASS, SQL y Accesibilidad by W3Schools",
        entity: "W3Schools",
        duration: 20,
        year: 2023,
        specialty: "Desarrollo Web",
        image: PlaceHolderImages.find(img => img.id === 'w3'),
        alt: "Certificado de HTML5, CSS3, JavaScript, SASS, SQL y Accesibilidad by W3Schools"
    },
    {
        id: "bd",
        title: "Introducción al Big Data",
        entity: "Imagina Formación",
        duration: 12,
        year: 2025,
        specialty: "Análisis de Datos",
        image: PlaceHolderImages.find(img => img.id === 'bd'),
        alt: "Certificado de Introducción al Big Data"
    },
    {
        id: "mpl",
        title: "Matplotlib Crash Course",
        entity: "Corey Schafer",
        duration: 5,
        year: 2025,
        specialty: "Análisis de Datos",
        projectUrl: "https://github.com/mendez1038/Matplotlib-Crash-Course-Corey-Schafer.git",
        image: PlaceHolderImages.find(img => img.id === 'mpl'),
        alt: "Certificado de Matplotlib Crash Course"
    },
    {
        id: "gl",
        title: "Gestión Logística",
        entity: "Integral Sur",
        duration: 150,
        year: 2025,
        specialty: "Logística",
        image: PlaceHolderImages.find(img => img.id === 'gl'),
        alt: "Certificado de Gestión Logística"
    },
    {
        id: "cc",
        title: "Curso de Prevención y Manejo de Carretilla Elevadora Frontal",
        entity: "Campus Lemos",
        duration: 8,
        year: 2025,
        specialty: "Logística",
        image: PlaceHolderImages.find(img => img.id === 'cc'),
        alt: "Certificado de Curso de Prevención y Manejo de Carretilla Elevadora Frontal"
    },
    {
        id: "bach",
        title: "Bachillerato",
        entity: "IES Lama das Quendas",
        duration: 2000,
        year: 2015,
        specialty: "General",
        image: PlaceHolderImages.find(img => img.id === 'bach'),
        alt: "Certificado de Bachillerato"
    },
    {
        id: "eso",
        title: "ESO",
        entity: "IES Lama das Quendas",
        duration: 4000,
        year: 2013,
        specialty: "General",
        image: PlaceHolderImages.find(img => img.id === 'eso'),
        alt: "Certificado de ESO"
    },
    {
        id: "ceo",
        title: "Creacion de empresa online",
        entity: "FESAN",
        duration: 60,
        year: 2023,
        specialty: "General",
        image: PlaceHolderImages.find(img => img.id === 'ceo'),
        alt: "Certificado de Creacion de empresa online"
    },
    {
        id: "fesi",
        title: "Firma electronica e seguridade en internet",
        entity: "FESAN",
        duration: 30,
        year: 2023,
        specialty: "General",
        image: PlaceHolderImages.find(img => img.id === 'fesi'),
        alt: "Certificado de Firma electronica e seguridade en internet"
    },
    {
        id: "pde",
        title: "Proceso de emprender",
        entity: "FESAN",
        duration: 30,
        year: 2023,
        specialty: "General",
        image: PlaceHolderImages.find(img => img.id === 'pde'),
        alt: "Certificado de El proceso de emprender"
    },
    {
        id: "rcvba",
        title: "Reparación de Carrocerías de Vehículos, Barcos y Aeronaves",
        entity: "IES Val do Asma",
        duration: 220,
        year: 2021,
        specialty: "General",
        image: PlaceHolderImages.find(img => img.id === 'rcvba'),
        alt: "Certificado de Reparación de Carrocerías de Vehículos, Barcos y Aeronaves"
    },
    {
        id: "python-for-everybody",
        title: "Python for Everybody",
        entity: "University of Michigan",
        duration: 40,
        year: 2025,
        specialty: "Análisis de Datos",
        image: PlaceHolderImages.find(img => img.id === 'python-for-everybody'),
        alt: "Curso de Python for Everybody"
    },
    {
        id: "dv",
        title: "Data Visualization Course",
        entity: "Kaggle",
        duration: 4,
        year: 2025,
        specialty: "Análisis de Datos",
        certificateUrl: "/Certificados/dmendez_3 - Data Visualization.png",
        image: PlaceHolderImages.find(img => img.id === 'dv'),
        alt: "Certificado de Data Visualization"
    }
];
