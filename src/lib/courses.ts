import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';

export interface Course {
    id: string;
    title: string;
    entity: string;
    duration: number;
    year: number;
    specialty: 'Desarrollo Web' | 'Marketing Digital' | 'Diseño';
    certificateUrl?: string;
    projectUrl?: string;
    image?: ImagePlaceholder;
    alt: string;
}

export const coursesData: Course[] = [
    {
        id: "nextjs-course",
        title: "Next.js: El framework de React para producción",
        entity: "Udemy",
        duration: 25,
        year: 2024,
        specialty: "Desarrollo Web",
        certificateUrl: "/cursos/nextjs.pdf",
        projectUrl: "https://github.com/mendez1038/devtalles-nextjs-14",
        image: PlaceHolderImages.find(img => img.id === 'course-nextjs'),
        alt: "Certificado del curso de Next.js de Udemy"
    },
    {
        id: "prestashop-modules",
        title: "PrestaShop 8- Creación de Módulos",
        entity: "Udemy",
        duration: 10,
        year: 2024,
        specialty: "Desarrollo Web",
        certificateUrl: "/cursos/prestashop-modules.pdf",
        image: PlaceHolderImages.find(img => img.id === 'course-prestashop'),
        alt: "Certificado del curso de creación de módulos en PrestaShop"
    },
    {
        id: "react-course",
        title: "React: De cero a experto",
        entity: "Udemy",
        duration: 54,
        year: 2023,
        specialty: "Desarrollo Web",
        certificateUrl: "/cursos/react-cero-experto.pdf",
        projectUrl: "https://github.com/mendez1038/devtalles-react",
        image: PlaceHolderImages.find(img => img.id === 'course-react'),
        alt: "Certificado del curso de React de cero a experto"
    },
    {
        id: "web-dev-bootcamp",
        title: "The Web Developer Bootcamp 2023",
        entity: "Udemy",
        duration: 63,
        year: 2023,
        specialty: "Desarrollo Web",
        certificateUrl: "/cursos/web-developer-bootcamp.pdf",
        projectUrl: "https://github.com/mendez1038/colt-steele-bootcamp",
        image: PlaceHolderImages.find(img => img.id === 'course-bootcamp'),
        alt: "Certificado de The Web Developer Bootcamp 2023"
    },
    {
        id: "sm-specialist",
        title: "Especialista en Social Media",
        entity: "Tamarino Web & Marketing",
        duration: 300,
        year: 2022,
        specialty: "Marketing Digital",
        certificateUrl: "/cursos/especialista-social-media.pdf",
        image: PlaceHolderImages.find(img => img.id === 'course-social-media'),
        alt: "Certificado de Especialista en Social Media"
    },
    {
        id: "web-design-master",
        title: "Máster en Diseño Web",
        entity: "Tamarino Web & Marketing",
        duration: 600,
        year: 2021,
        specialty: "Diseño",
        certificateUrl: "/cursos/master-diseno-web.pdf",
        image: PlaceHolderImages.find(img => img.id === 'course-design-master'),
        alt: "Certificado de Máster en Diseño Web"
    }
];
