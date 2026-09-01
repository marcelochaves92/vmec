import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InstagramIcon } from "@/components/instagram-icon";
import { Section, SectionHeading } from "@/components/section";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site, whatsappUrl } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contato">
      <SectionHeading
        eyebrow="Contato"
        title="Fale com a VMEC"
        description="Agende pelo WhatsApp ou acompanhe o dia a dia no Instagram."
      />
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="mb-2 flex size-11 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#128C7E]">
              <WhatsAppIcon className="size-5" />
            </div>
            <CardTitle>WhatsApp</CardTitle>
            <CardDescription>{site.phoneDisplay}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="h-10 w-full">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Enviar mensagem
              </a>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="mb-2 flex size-11 items-center justify-center rounded-lg bg-accent text-primary">
              <InstagramIcon className="size-5" />
            </div>
            <CardTitle>Instagram</CardTitle>
            <CardDescription>{site.instagramHandle}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="h-10 w-full">
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                Ver perfil
              </a>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="mb-2 flex size-11 items-center justify-center rounded-lg bg-accent text-primary">
              <Phone className="size-5" aria-hidden="true" />
            </div>
            <CardTitle>Telefone</CardTitle>
            <CardDescription>{site.phoneDisplay}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="h-10 w-full">
              <a href={`tel:+${site.phoneE164}`}>Ligar agora</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
