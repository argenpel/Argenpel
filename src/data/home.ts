export type HeroImage = {
  src: string;
  mobileSrc?: string;
  objectPosition?: string;
};

// Home hero slideshow, in display order. The first image is the initial view.
// Images preserve Figma's crops without darkening; the hero applies its tint.
export const heroImages: HeroImage[] = [
  {
    src: "/images/home/planta-industrial-argenpel-hero.jpg",
    mobileSrc: "/images/mobile/planta-industrial-argenpel.jpg",
  },
  { src: "/images/home/stock-rollos-argenpel-hero.jpg" },
  { src: "/images/home/rollos-papel-argenpel-hero.jpg" },
];
