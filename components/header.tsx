"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { navItems, site, whatsappUrl } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt={site.name}
            width={44}
            height={44}
            priority
            unoptimized
            className="size-11 rounded-full"
          />
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold tracking-wide text-primary">
              {site.shortName}
            </span>
            <span className="block text-[11px] font-medium tracking-wider text-muted-foreground uppercase">
              Oficina Mecânica
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex h-10 px-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-4" />
              Agendar
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Abrir menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle>{site.shortName}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a
                      href={item.href}
                      className="rounded-lg px-3 py-3 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto p-4">
                <Button asChild className="h-11 w-full">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="size-4" />
                    Agendar no WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
