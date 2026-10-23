export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://opticamia.com.ar";

export const copyrightYear = new Date().getFullYear();

export const site = {
  name: "Óptica Mía",
  slogan: "Cambia tu forma de ver",
  cityLine: "Óptica · San Miguel",
  phoneDisplay: "+54 9 11 3328-6907",
  phoneTel: "+5491133286907",
  whatsapp:
    "https://wa.me/5491133286907?text=Hola%20%C3%93ptica%20M%C3%ADa%2C%20quisiera%20consultar...",
  instagram: "https://www.instagram.com/opticamia1/",
  instagramHandle: "@opticamia1",
  tiktok: "https://www.tiktok.com/@opticamia1",
  tiktokHandle: "@opticamia1",
  address: {
    street: "Julio A. Roca 720",
    postalCode: "B1663",
    locality: "San Miguel",
    region: "Provincia de Buenos Aires",
    country: "AR",
  },
} as const;

export function modelWhatsapp(model: string) {
  const text = `Hola Óptica Mía, me interesa el modelo ${model}.`;
  return `https://wa.me/5491133286907?text=${encodeURIComponent(text)}`;
}

export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.locality}, ${site.address.region}`;

const mapsQuery = encodeURIComponent(fullAddress);

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export const mapsEmbed = `https://maps.google.com/maps?q=${mapsQuery}&hl=es&z=17&output=embed`;

export const nav = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/armazones", label: "Armazones" },
  { href: "/visitanos", label: "Visitanos" },
] as const;

export const hours = [
  {
    days: "Lunes, martes, miércoles y viernes",
    time: "15:00 a 19:00",
  },
  {
    days: "Jueves",
    time: "9:30 a 12:30 y 15:00 a 19:00",
  },
  {
    days: "Sábado",
    time: "9:30 a 12:30",
  },
  {
    days: "Domingo",
    time: "Cerrado",
  },
] as const;

// TODO: servicios definitivos — títulos y textos editables
export const services = [
  {
    number: "01",
    title: "Examen visual",
    text: "Medimos tu graduación en el local y te explicamos la receta.",
  },
  {
    number: "02",
    title: "Anteojos con receta",
    text: "Armamos los lentes con tu receta y los dejamos en el marco.",
  },
  {
    number: "03",
    title: "Lentes de sol",
    text: "Elegís el marco y te lo probás con la luz del local.",
  },
  {
    number: "04",
    title: "Lentes de contacto",
    text: "Revisamos tu receta y te indicamos cómo usarlos.",
  },
  {
    number: "05",
    title: "Reparaciones y ajustes",
    text: "Patillas, tornillos y calibrado. Traé el anteojo y lo vemos.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Consulta",
    text: "Venís al local y vemos qué necesitás. Si tenés receta, traela.",
  },
  {
    number: "02",
    title: "Elegí tu marco",
    text: "Te lo probás con calma. Te decimos si te queda bien.",
  },
  {
    number: "03",
    title: "Retirá y ajustamos",
    text: "Cuando está listo, lo retirás y lo ajustamos a tu cara.",
  },
] as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Optician",
  name: site.name,
  slogan: site.slogan,
  url: siteUrl,
  image: `${siteUrl}/fachada.webp`,
  telephone: site.phoneTel,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
      opens: "15:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "09:30",
      closes: "12:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "15:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:30",
      closes: "12:30",
    },
  ],
  sameAs: [site.instagram],
  hasMap: mapsUrl,
};
