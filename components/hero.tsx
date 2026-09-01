import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { heroImage, site, whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-black text-white"
    >
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 md:py-32">
        <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-white/70 uppercase">
          Tatuapé · São Paulo
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
          {site.slogan}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 text-pretty">
          {site.description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            className="h-12 px-6 text-base"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              Agendar no WhatsApp
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 border-white/30 bg-white/5 px-6 text-base text-white hover:bg-white/15 hover:text-white"
          >
            <a href="#servicos">Ver serviços</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
