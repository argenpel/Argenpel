export const companyLocation = {
  name: "Argen Pel",
  locality: "San Martín, Buenos Aires",
  address: "Ecuador 2615, Villa Maipú, San Martín, Buenos Aires",
  latitude: -34.5580155,
  longitude: -58.5244546,
  embedUrl:
    "https://www.google.com/maps?q=Ecuador%202615%2C%20San%20Martin%2C%20Buenos%20Aires%2C%20Argentina&z=17&output=embed",
} as const;

export const companyLinks = {
  email: {
    address: "ofertas@argen-pel.com.ar",
    url: "mailto:ofertas@argen-pel.com.ar",
  },
  whatsapp: {
    number: "+54 11 3468 2903",
    url: "https://wa.me/5491134682903",
    secondaryNumber: "+54 11 4196 7167",
    secondaryUrl: "https://wa.me/5491141967167",
  },
  location: {
    url: "https://www.google.com/maps?cid=10825244353343472492",
  },
  catalog:
    "https://drive.google.com/file/d/1L4Qa29-MlqF6nlCG-Q5xqnvUORYnlf5G/view?usp=drive_link",
  instagram: {
    handle: "argenpel",
    url: "https://www.instagram.com/argenpel/?hl=es",
  },
} as const;

export const companyContactLinks = [
  {
    key: "whatsapp",
    label: "Contactar por WhatsApp",
    href: companyLinks.whatsapp.url,
  },
  {
    key: "instagram",
    label: "Argenpel en Instagram",
    href: companyLinks.instagram.url,
  },
  {
    key: "email",
    label: "Enviar correo a Argenpel",
    href: companyLinks.email.url,
  },
  {
    key: "location",
    label: "Ver ubicación en Google Maps",
    href: companyLinks.location.url,
  },
] as const;
