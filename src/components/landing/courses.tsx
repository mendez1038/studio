"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { coursesData, Course } from "@/lib/courses";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Book, FileText } from "lucide-react";

const specialties = ["Todos", ...Array.from(new Set(coursesData.map(c => c.specialty)))];

export function Courses() {
  const [filter, setFilter] = useState("Desarrollo Web");

  const filteredCourses = filter === "Todos" 
    ? coursesData 
    : coursesData.filter(course => course.specialty === filter);

  return (
    <section id="courses" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Formación y Cursos
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mi ruta de aprendizaje continuo con formaciones reguladas y de forma autodidacta.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {specialties.map(specialty => (
              <Button
                key={specialty}
                variant={filter === specialty ? "default" : "outline"}
                onClick={() => setFilter(specialty)}
              >
                {specialty}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid gap-8 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden flex flex-col group">
              {course.image && (
                 <div className="aspect-video overflow-hidden">
                    <Image
                        src={course.image.imageUrl}
                        alt={course.alt}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full object-top"
                        data-ai-hint={course.image.imageHint}
                    />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-xl">{course.title}</CardTitle>
                <CardDescription>{course.entity} - {course.year}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{course.specialty}</Badge>
                    <Badge variant="outline">{course.duration}h</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex-wrap gap-4">
                {course.certificateUrl && (
                    <Button asChild variant="link" className="px-0">
                        <Link href={course.certificateUrl} target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2"/> Ver Certificado
                        </Link>
                    </Button>
                )}
                {course.projectUrl && (
                    <Button asChild variant="link" className="px-0">
                        <Link href={course.projectUrl} target="_blank" rel="noopener noreferrer">
                           <Book className="mr-2"/> Ver Proyecto
                        </Link>
                    </Button>
                )}
                {course.projectUrl2 && (
                    <Button asChild variant="link" className="px-0">
                        <Link href={course.projectUrl2} target="_blank" rel="noopener noreferrer">
                           <Book className="mr-2"/> Ver Proyecto
                        </Link>
                    </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
