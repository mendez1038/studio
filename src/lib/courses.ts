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
        duration: 4.5,
        year: 2025,
        specialty: "Desarrollo Web",
        projectUrl: "https://studio--studio-5778713093-90171.us-central1.hosted.app/",
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
    }
];
