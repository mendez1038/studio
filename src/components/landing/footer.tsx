import { Github, Linkedin, Code } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
           <p className="text-sm text-muted-foreground">
             David Méndez Martínez © {new Date().getFullYear()} | Desarrollador Web
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="#" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
