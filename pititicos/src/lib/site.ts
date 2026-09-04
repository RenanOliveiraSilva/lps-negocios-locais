export const BUSINESS = {
  name: "Pititicos",
  city: "São Joaquim da Barra – SP",
  phone: "5516999984506",
  phoneDisplay: "(16) 99998-4506",
  instagram: "@pititicosloja",
  address: "São Joaquim da Barra, SP",
};

export const REAL_PHOTOS = {
  storefront: "/place.png",
  logo: "/logo.png",
  heroMain: "/hero-main.png",
  heroSecondary: "/hero-secondary.png",
};

export const WA_MESSAGES = {
  hero: "Olá! Vim pelo site da Pititicos e gostaria de conhecer as novidades.",
  contact: "Olá! Gostaria de falar com o atendimento da Pititicos.",
};

export function waLink(message: string, phone = BUSINESS.phone) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
