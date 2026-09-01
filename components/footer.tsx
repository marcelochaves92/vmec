import Image from "next/image";
import { InstagramIcon } from "@/components/instagram-icon";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt=""
            width={48}
            height={48}
            unoptimized
            className="size-12 rounded-full"
          />
          <div>
            <p className="font-bold tracking-wide">{site.shortName}</p>
            <p className="text-sm text-white/70">Oficina Mecânica · Tatuapé</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <InstagramIcon className="size-4" />
            Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/50">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
