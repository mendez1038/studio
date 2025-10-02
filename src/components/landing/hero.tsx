import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-foreground">
              David Méndez Martínez. Desarrollador Web.
            </h1>
            <p className="text-lg text-foreground/80 md:text-xl">
              Transformo ideas en webs funcionales, atractivas y optimizadas que generan resultados. Especialista en WordPress, PrestaShop y desarrollo a medida.
            </p>
          </div>
          {/*
          <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center">
            <Button asChild size="lg">
              <Link href="#projects">Ver mis proyectos</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#contact">Contactar</Link>
            </Button>
          </div>*/}
        </div>
      </div>
    </section>
  );
}
