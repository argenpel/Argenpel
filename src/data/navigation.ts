import { categories } from "@/data/categories";

export const navigation = [
  { key: "home", label: "Inicio", href: "/" },
  {
    key: "products",
    label: "Productos",
    href: `/productos/${categories[0].slug}`,
  },
  { key: "company", label: "Empresa", href: "/empresa" },
  { key: "contact", label: "Contacto", href: "/contacto" },
] as const;

export type NavigationKey = (typeof navigation)[number]["key"];
