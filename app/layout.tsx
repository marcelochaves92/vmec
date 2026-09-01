import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VMEC Oficina Mecânica | Manutenção e revisão no Tatuapé",
    template: "%s | VMEC Oficina Mecânica",
  },
  description: site.description,
  keywords: [
    "oficina mecânica",
    "Tatuapé",
    "São Paulo",
    "manutenção automotiva",
    "revisão de carro",
    "VMEC",
  ],
  openGraph: {
    title: "VMEC Oficina Mecânica | Manutenção e revisão no Tatuapé",
    description: site.description,
    locale: "pt_BR",
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "VMEC Oficina Mecânica | Manutenção e revisão no Tatuapé",
    description: site.description,
  },
  icons: {
    icon: "/logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <Analytics />
      <body className="flex min-h-svh flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
