import type { ProductCategory } from "@/types/product";

export const categories: ProductCategory[] = [
  {
    id: "higienico",
    slug: "higienico",
    name: "Higiénico",
    home: {
      label: "Papel higiénico",
      imageSrc: "/images/categories/papel-higienico.png",
    },
  },
  {
    id: "toalla-intercalada",
    slug: "toalla-intercalada",
    name: "Toalla intercalada",
    home: {
      label: "Toalla intercalada",
      imageSrc: "/images/categories/toalla-intercalada.png",
    },
  },
  {
    id: "toalla-en-rollo",
    slug: "toalla-en-rollo",
    name: "Toalla en rollo",
    home: {
      label: "Toalla en rollo",
      imageSrc: "/images/categories/toalla-en-rollo.png",
    },
  },
  {
    id: "bobina-industrial",
    slug: "bobina-industrial",
    name: "Bobina industrial",
    home: {
      label: "Bobina industrial",
      imageSrc: "/images/categories/bobina-industrial.png",
    },
  },
];
