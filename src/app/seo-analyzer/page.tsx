import { SEOAnalyzerForm } from "@/components/seo-analyzer-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function SEOAnalyzerPage() {
  return (
    <div className="min-h-screen bg-secondary">
       <div className="container mx-auto p-4 md:p-8">
        <Button asChild variant="ghost" className="mb-4">
            <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Portfolio
            </Link>
        </Button>
        <Card className="max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle className="font-headline text-3xl">SEO Keyword Suggestion Tool</CardTitle>
                <CardDescription>
                Pega el contenido de tu web o portfolio aquí para obtener sugerencias de palabras clave SEO relevantes para el dominio del desarrollo web.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <SEOAnalyzerForm />
            </CardContent>
        </Card>
       </div>
    </div>
  );
}
