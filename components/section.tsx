import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}
