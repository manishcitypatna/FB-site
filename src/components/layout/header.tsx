
"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={closeSheet}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-primary">
            <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17L12 12L2 17Z" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 7V17" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 7V17" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 12V22" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M12 2V12" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 7L12 12" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 7L12 12" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-2xl font-bold tracking-tight text-foreground">
            GSMA<span className="text-primary">Tech</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary font-semibold" : "text-foreground/80"}`}
            >
              {link.label}
            </Link>
          ))}
          {/* ThemeToggleButton removed */}
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="mb-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2" onClick={closeSheet}>
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17L12 12L2 17Z" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 7V17" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 7V17" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12V22" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2V12" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 7L12 12" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 7L12 12" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-xl font-bold text-foreground">GSMA<span className="text-primary">Tech</span></span>
                </Link>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeSheet}
                    className={`text-lg font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary" : "text-foreground/80"}`}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* ThemeToggleButton removed from mobile sheet */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
