export const companyLocation = {
  name: "Argen Pel",
  locality: "San Martín, Buenos Aires",
  address: null,
  latitude: -34.584103,
  longitude: -58.5004938,
  embedUrl:
    "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s-34.584103,-58.5004938!6i17",
} as const;

export const companyLinks = {
  email: {
    address: "ofertas@argen-pel.com.ar",
    url: "mailto:ofertas@argen-pel.com.ar",
  },
  whatsapp: {
    number: "+54 11 3468 2903",
    url: "https://wa.me/5491134682903",
  },
  location: {
    url: `https://www.google.com/maps/search/?api=1&query=${companyLocation.latitude},${companyLocation.longitude}`,
  },
  catalog:
    "https://drive.google.com/file/d/1L4Qa29-MlqF6nlCG-Q5xqnvUORYnlf5G/view?usp=drive_link",
  instagram: {
    handle: "argenpel",
    url: "https://www.instagram.com/argenpel/?hl=es",
  },
} as const;
