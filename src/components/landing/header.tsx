'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Code } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Inicio' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-6 text-sm font-medium', className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-foreground/80 transition-colors hover:text-foreground"
          onClick={() => setMobileMenuOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'border-b border-border/40 bg-background/95 backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="#home" className="mr-6 flex items-center gap-2">
          <Code className="h-6 w-6 text-accent" />
          <span className="font-bold font-headline">DevFolio Pro</span>
        </Link>
        <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
          <NavLinks />
          <ThemeToggle />
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <ThemeToggle />
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] pt-12">
              <NavLinks className="flex-col items-start space-y-4" />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
