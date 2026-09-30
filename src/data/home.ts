export type HeroImage = {
  src: string;
  objectPosition?: string;
};

// Home hero slideshow, in display order. The first image is the initial view.
// Images come from Figma ("Hero / imagen 1-3") with the darkening applied.
export const heroImages: HeroImage[] = [
  { src: "/images/home/planta-industrial-argenpel.jpg" },
  { src: "/images/home/stock-rollos-argenpel.jpg" },
  { src: "/images/home/rollos-papel-argenpel.jpg" },
];
