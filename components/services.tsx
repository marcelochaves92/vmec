import { Cog, Disc, Paintbrush, ScanSearch, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/section";
import { services } from "@/lib/site";

const icons = {
  wrench: Wrench,
  disc: Disc,
  scan: ScanSearch,
  cog: Cog,
  paint: Paintbrush,
} as const;

export function Services() {
  return (
    <Section id="servicos">
      <SectionHeading
        eyebrow="O que fazemos"
        title="Serviços automotivos com diagnóstico claro"
        description="Do check-up preventivo ao reparo, cuidamos de nacionais e importados com o mesmo padrão."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => {
          const Icon = icons[service.icon];
          return (
            <Card
              key={service.title}
              className={service.optional ? "md:col-span-2" : undefined}
            >
              <CardHeader>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-accent text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  {service.optional ? <Badge variant="outline">Opcional</Badge> : null}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-4">
                  {service.items.map((item) => (
                    <li key={item.title}>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
