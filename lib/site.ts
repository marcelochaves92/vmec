export const site = {
  name: "VMEC Oficina Mecânica",
  shortName: "VMEC",
  slogan: "Cuidamos do seu carro como ele merece",
  description:
    "Manutenção, revisão e serviços automotivos para nacionais e importados no Tatuapé, em São Paulo.",
  phoneDisplay: "(11) 97112-7270",
  phoneE164: "5511971127270",
  whatsappMessage: "Olá, vim pelo site e gostaria de agendar",
  instagramUrl: "https://www.instagram.com/vmecoficinamecanica/",
  instagramHandle: "@vmecoficinamecanica",
  address: {
    street: "Av. Celso Garcia, 6014",
    neighborhood: "Tatuapé",
    city: "São Paulo",
    state: "SP",
    zip: "03064-000",
    full: "Av. Celso Garcia, 6014 — Tatuapé, São Paulo — SP, 03064-000",
  },
  hours: {
    label: "Segunda a sexta, 8h–18h",
    weekdays: "Segunda a sexta",
    time: "8h–18h",
    weekend: "Fechado aos sábados e domingos",
  },
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Av.%20Celso%20Garcia%206014%20Tatuap%C3%A9%20S%C3%A3o%20Paulo&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Celso+Garcia,+6014+Tatuapé+São+Paulo",
} as const;

export const whatsappUrl = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Onde estamos" },
  { href: "#contato", label: "Contato" },
] as const;

export const services = [
  {
    title: "Manutenção",
    description:
      "Óleo, filtros, freios, suspensão e o que o carro precisa para rodar seguro no dia a dia.",
    icon: "wrench",
  },
  {
    title: "Revisão",
    description:
      "Checklist completo para deixar o veículo pronto, com transparência no que precisa ser feito.",
    icon: "clipboard",
  },
  {
    title: "Diagnóstico",
    description:
      "Identificamos a causa do problema com precisão antes de qualquer reparo desnecessário.",
    icon: "scan",
  },
  {
    title: "Nacionais e importados",
    description:
      "Atendemos diferentes marcas com o mesmo cuidado — do popular ao importado.",
    icon: "car",
  },
] as const;

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80",
    alt: "Mecânico trabalhando no motor de um carro",
  },
  {
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    alt: "Revisão de veículo na oficina",
  },
  {
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
    alt: "Mecânico em atendimento na oficina",
  },
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
    alt: "Veículo pronto após revisão",
  },
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    alt: "Carro em atendimento na oficina",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    alt: "Detalhe de veículo em manutenção",
  },
] as const;

export const heroImage = {
  src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2000&q=80",
  alt: "Equipe da oficina trabalhando em um veículo",
};

export const aboutImage = {
  src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1400&q=80",
  alt: "Interior da oficina mecânica",
};
