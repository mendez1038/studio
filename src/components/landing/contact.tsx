import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container text-center mx-auto">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            ¿Hablamos? Estoy listo para mi próximo reto profesional.
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Si buscas un desarrollador web proactivo, resolutivo y con pasión por el detalle, me encantaría conocer tu proyecto o tu empresa. Escríbeme y pongámonos en marcha.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="outline" className="bg-background">
            <a href="mailto:dmendez1038@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> dmendez1038@gmail.com
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-background">
            <a href="https://www.linkedin.com/in/david-mendez-martinz/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
          <Button asChild size="lg">
            <a href="/david-mendez-cv.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Descargar mi CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
