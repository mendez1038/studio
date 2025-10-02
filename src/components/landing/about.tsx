import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, ShoppingCart, Wordpress } from "lucide-react";

const skills = [
  {
    category: "CMS y E-commerce",
    details: "WordPress (Divi, GeneratePress, Child Theming), PrestaShop.",
    icon: <Wordpress className="h-6 w-6" />
  },
  {
    category: "Desarrollo Frontend",
    details: "HTML5, CSS3, JavaScript (ES6+), Responsive Design.",
    icon: <Code className="h-6 w-6" />
  },
  {
    category: "Metodología",
    details: "Enfoque en la experiencia de usuario (UX), optimización de rendimiento (WPO) y buenas prácticas SEO.",
    icon: <ShoppingCart className="h-6 w-6" />
  }
];

export function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
              Más que código, soluciones digitales
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Soy un desarrollador web con más de 2 años de experiencia ayudando a empresas a crecer en el entorno digital. Mi pasión es construir sitios web que no solo sean visualmente atractivos, sino también robustos, intuitivos para el usuario y optimizados para los motores de búsqueda.
              </p>
              <p>
                Mi trayectoria en agencias como Tamarino Web&Marketing y Bankoi Software Factory, y en una gran compañía como Grupo Hotusa, me ha permitido trabajar en proyectos de diversa envergadura, desde e-commerce con PrestaShop hasta webs corporativas a medida con WordPress y desarrollos específicos con HTML, CSS y JavaScript.
              </p>
              <p>
                Actualmente, busco activamente nuevas oportunidades para aportar mi experiencia, creatividad y compromiso a un equipo innovador.
              </p>
            </div>
          </div>
          <div className="space-y-6 lg:col-span-3">
             <div className="grid gap-6 sm:grid-cols-1">
                {skills.map((skill) => (
                    <Card key={skill.category} className="bg-background">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            {skill.icon}
                            <CardTitle className="text-xl font-headline">{skill.category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{skill.details}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
