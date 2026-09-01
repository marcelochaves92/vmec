import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { aboutImage, site } from "@/lib/site";

const highlights = [
  "Atendimento direto pelo WhatsApp",
  "Nacionais e importados",
  "Diagnóstico antes do reparo",
  "Oficina no Tatuapé",
];

export function About() {
  return (
    <Section id="sobre" className="bg-secondary/60">
      <SectionHeading
        eyebrow="Sobre a oficina"
        title="Uma oficina que trata o seu carro com respeito"
      />
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
          <Image
            src={aboutImage.src}
            alt={aboutImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
            A {site.name} fica no Tatuapé, em São Paulo. Cuidamos de cada veículo
            como se fosse nosso: explicamos o que precisa ser feito, fazemos o
            serviço com capricho e mantemos o cliente informado.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            Manutenção, revisão e serviços automotivos para quem quer confiança —
            sem enrolação e com horário de segunda a sexta.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
