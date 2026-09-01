import { Car, ClipboardCheck, ScanSearch, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/section";
import { services } from "@/lib/site";

const icons = {
  wrench: Wrench,
  clipboard: ClipboardCheck,
  scan: ScanSearch,
  car: Car,
} as const;

export function Services() {
  return (
    <Section id="servicos">
      <SectionHeading
        eyebrow="O que fazemos"
        title="Serviços automotivos com diagnóstico claro"
        description="Do check-up preventivo ao reparo, cuidamos de nacionais e importados com o mesmo padrão."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = icons[service.icon];
          return (
            <Card key={service.title} className="h-full">
              <CardHeader>
                <div className="mb-2 flex size-11 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
