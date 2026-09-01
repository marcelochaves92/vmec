import { Clock, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/section";
import { site } from "@/lib/site";

export function Location() {
  return (
    <Section id="localizacao" className="bg-secondary/60">
      <SectionHeading
        eyebrow="Onde estamos"
        title="Tatuapé, São Paulo"
        description="Venha até a oficina ou chame no WhatsApp para agendar."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col justify-center gap-6">
          <div className="flex gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
              <MapPin className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold">Endereço</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {site.address.street}
                <br />
                {site.address.neighborhood}, {site.address.city} — {site.address.state}
                <br />
                CEP {site.address.zip}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
              <Clock className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold">Horário</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {site.hours.weekdays}: {site.hours.time}
                <br />
                {site.hours.weekend}
              </p>
            </div>
          </div>
          <Button asChild variant="outline" className="h-11 w-fit px-4">
            <a href={site.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="size-4" />
              Como chegar
            </a>
          </Button>
        </div>
        <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
          <iframe
            title={`Mapa de ${site.name}`}
            src={site.mapsEmbedUrl}
            className="h-72 w-full border-0 md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
