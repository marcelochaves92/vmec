import Image from "next/image";
import { Section, SectionHeading } from "@/components/section";
import { gallery } from "@/lib/site";

export function Gallery() {
  return (
    <Section id="galeria">
      <SectionHeading
        eyebrow="Galeria"
        title="O dia a dia na VMEC"
        description="Manutenção, revisão e o cuidado de quem trata o carro como se fosse seu."
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {gallery.map((item) => (
          <figure
            key={item.src}
            className="relative aspect-square overflow-hidden rounded-xl ring-1 ring-white/10"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
              style={{ objectPosition: item.objectPosition }}
            />
          </figure>
        ))}
      </div>
    </Section>
  );
}
