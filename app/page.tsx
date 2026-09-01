import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { Services } from "@/components/services";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
