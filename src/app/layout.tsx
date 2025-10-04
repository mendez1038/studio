import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Méndez Martínez | Desarrollador Web experto en WordPress y PrestaShop",
  description:
    "Portfolio de David Méndez, desarrollador web con más de 2 años de experiencia. Descubre mis proyectos en WordPress, PrestaShop y HTML/CSS/JS. ¡Contacta conmigo!",
  keywords: ["Desarrollador Web", "Desarrollador WordPress", "Experto PrestaShop", "Desarrollo a medida", "HTML, CSS, JavaScript", "David Méndez Martínez"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
