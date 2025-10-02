import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Webs Destacadas
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Aquí tienes una selección de mis trabajos más recientes. Cada proyecto fue un reto único donde apliqué diferentes tecnologías para cumplir los objetivos del cliente.
            </p>
          </div>
        </div>
        <div className="grid gap-8 mt-12 sm:grid-cols-1 md:grid-cols-2">
          {projectsData.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col group">
              {project.image && (
                <div className="aspect-video overflow-hidden">
                    <Image
                        src={project.image.imageUrl}
                        alt={project.alt}
                        width={800}
                        height={600}
                        className="object-cover w-full h-full object-top"
                        data-ai-hint={project.image.imageHint}
                    />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="px-0">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver Web <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
