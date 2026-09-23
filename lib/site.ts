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
    title: "Manutenção preventiva e revisão",
    icon: "wrench",
    items: [
      {
        title: "Revisão geral (check-up)",
        description:
          "Análise completa de itens de segurança e funcionamento, geralmente feita por quilometragem ou antes de viagens.",
      },
      {
        title: "Troca de óleo e filtros",
        description:
          "Substituição do óleo do motor, filtro de óleo, filtro de ar do motor, filtro de combustível e filtro do ar-condicionado.",
      },
      {
        title: "Revisão do sistema de ar-condicionado",
        description:
          "Higienização, recarga de gás refrigerante e detecção de vazamentos.",
      },
    ],
  },
  {
    title: "Sistema de suspensão, direção e freios",
    icon: "disc",
    items: [
      {
        title: "Alinhamento e balanceamento",
        description:
          "Ajuste dos ângulos das rodas e equilíbrio dos pneus para evitar desgaste irregular e garantir estabilidade.",
      },
      {
        title: "Sistema de freios",
        description:
          "Troca de pastilhas, discos, lonas, tambores e substituição do fluido de freio.",
      },
      {
        title: "Suspensão e direção",
        description:
          "Troca de amortecedores, kit do amortecedor, molas, pivôs, barras de direção e buchas.",
      },
    ],
  },
  {
    title: "Injeção eletrônica e diagnóstico",
    icon: "scan",
    items: [
      {
        title: "Diagnóstico scanner",
        description:
          "Uso de computadores (scanners) para ler os códigos de falha da central eletrônica do carro (injeção, ABS, airbags).",
      },
      {
        title: "Limpeza de bicos injetores",
        description:
          "Desobstrução dos bicos para garantir a queima correta do combustível.",
      },
      {
        title: "Sistema elétrico",
        description:
          "Troca e teste de bateria, alternador, motor de partida, velas e cabos de ignição.",
      },
    ],
  },
  {
    title: "Motor e câmbio",
    icon: "cog",
    items: [
      {
        title: "Reparo de motor",
        description:
          "Troca de junta de cabeçote, retífica de motor completo, substituição da correia dentada ou corrente de sincronismo.",
      },
      {
        title: "Sistema de arrefecimento",
        description:
          "Limpeza do radiador e troca do líquido de arrefecimento (aditivo).",
      },
      {
        title: "Transmissão (câmbio)",
        description:
          "Troca do óleo do câmbio (manual ou automático) e manutenção de embreagem.",
      },
    ],
  },
  {
    title: "Serviços especializados",
    icon: "paint",
    wide: true,
    items: [
      {
        title: "Funilaria e pintura",
        description: "Reparo de batidas, arranhões e amassados na lataria.",
      },
    ],
  },
] as const;

export const gallery = [
  {
    src: "/fotos/fachada.jpg",
    alt: "Fachada da VMEC Oficina Mecânica no Tatuapé",
    objectPosition: "center 30%",
  },
  {
    src: "/fotos/equipe.jpg",
    alt: "Mecânicos da VMEC atendendo um veículo",
    objectPosition: "center 45%",
  },
  {
    src: "/fotos/importado.jpg",
    alt: "Mecânico da VMEC em serviço num carro importado",
    objectPosition: "center 40%",
  },
  {
    src: "/fotos/uniforme.jpg",
    alt: "Mecânico da VMEC trabalhando no motor",
    objectPosition: "center 40%",
  },
  {
    src: "/fotos/servico-motor.jpg",
    alt: "Mecânico da VMEC trabalhando no motor com luz de serviço",
    objectPosition: "center 38%",
  },
  {
    src: "/fotos/ferramentas.jpg",
    alt: "Ferramentas organizadas da oficina",
    objectPosition: "center 42%",
  },
] as const;

export const heroImage = {
  src: "/fotos/hero.jpg",
  alt: "Mecânico da VMEC trabalhando no motor de um carro",
  objectPosition: "center 42%",
};

export const aboutImage = {
  src: "/fotos/sobre.jpg",
  alt: "Interior da VMEC Oficina Mecânica",
  objectPosition: "center 38%",
};
