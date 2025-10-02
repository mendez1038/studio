"use client";

import { useState } from 'react';
import { suggestSeoKeywords } from '@/ai/flows/seo-keyword-suggestions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function SEOAnalyzerForm() {
    const [content, setContent] = useState('');
    const [keywords, setKeywords] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!content.trim()) {
            toast({
                title: 'Contenido vacío',
                description: 'Por favor, introduce algún contenido para analizar.',
                variant: 'destructive',
            });
            return;
        }
        setLoading(true);
        setKeywords([]);
        try {
            const result = await suggestSeoKeywords({ portfolioContent: content });
            setKeywords(result.keywords);
            toast({
                title: '¡Sugerencias generadas!',
                description: 'Aquí tienes tus palabras clave SEO.',
            });
        } catch (error) {
            console.error(error);
            toast({
                title: 'Error',
                description: 'No se pudieron generar las sugerencias. Inténtalo de nuevo.',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Pega aquí el contenido de tu portfolio o artículo..."
                    rows={10}
                    className="text-base"
                />
                <Button type="submit" disabled={loading} className="w-full sm:w-auto">
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Analizando...
                        </>
                    ) : (
                        <>
                           <Wand2 className="mr-2 h-4 w-4" />
                           Obtener Palabras Clave
                        </>
                    )}
                </Button>
            </form>
            
            {keywords.length > 0 && (
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-headline">Palabras Clave Sugeridas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {keywords.map((keyword, index) => (
                                <Badge key={index} variant="default" className="text-sm">
                                    {keyword}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
