import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site, whatsappUrl } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com a ${site.name} no WhatsApp`}
      className="fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] md:right-6 md:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
