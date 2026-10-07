import Image from "next/image";

import { cn } from "@/lib/utils";

type ContactLink = {
  key: "whatsapp" | "instagram" | "email" | "location";
  label: string;
  href: string;
};

const iconSizes = {
  whatsapp: { width: 19.9042, height: 20 },
  instagram: { width: 20, height: 20 },
  email: { width: 22, height: 17 },
  location: { width: 16, height: 20 },
} as const;

const menuIconSizes = {
  whatsapp: { width: 23.2778, height: 23.3899 },
  instagram: { width: 24, height: 24 },
  email: { width: 25, height: 20 },
  location: { width: 18, height: 24 },
} as const;

const menuIconCenters = {
  whatsapp: 12,
  instagram: 58,
  email: 111,
  location: 160,
} as const;

const footerIconPosition = {
  whatsapp: "left-[15.5px]",
  instagram: "left-[47.5px]",
  email: "left-[82.5px]",
  location: "left-[115.5px]",
} as const;

export function HeaderContactLinks({
  links,
  variant,
}: {
  links: readonly ContactLink[];
  variant: "mobile" | "desktop" | "footer" | "menu";
}) {
  return (
    <ul
      aria-label="Canales de contacto"
      className={cn(
        "flex items-center",
        variant === "menu"
          ? "relative mr-px h-11 w-[169px]"
          : variant === "mobile"
            ? "mt-2 justify-between border-t border-border pt-3"
            : variant === "footer"
              ? "relative h-11 w-32 gap-0 lg:h-auto lg:w-auto lg:gap-0.5"
              : "-mr-1.5 gap-0.5",
      )}
    >
      {links.map(({ key, label, href }) => (
        <li key={key}>
          <a
            aria-label={label}
            className={cn(
              "flex h-11 items-center justify-center rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
              variant === "menu"
                ? "absolute top-0 w-11 -translate-x-1/2 hover:bg-brand-dark focus-visible:outline-surface"
                : variant === "mobile"
                  ? "w-11 bg-brand hover:bg-brand-dark focus-visible:outline-brand-dark"
                  : variant === "footer"
                    ? "absolute top-0 w-8 -translate-x-1/2 hover:bg-brand/30 focus-visible:outline-surface lg:static lg:translate-x-0"
                    : "w-8 hover:bg-brand/30 focus-visible:outline-surface",
              variant === "footer" && footerIconPosition[key],
            )}
            href={href}
            style={
              variant === "menu" ? { left: menuIconCenters[key] } : undefined
            }
          >
            <span
              aria-hidden="true"
              className={cn(
                "flex items-center justify-center",
                variant === "desktop" &&
                  key === "whatsapp" &&
                  "translate-x-0.5",
                variant === "footer" &&
                  key === "whatsapp" &&
                  "lg:translate-x-0.5",
                variant === "desktop" &&
                  key === "email" &&
                  "translate-x-px translate-y-[0.5px]",
                variant === "footer" &&
                  key === "email" &&
                  "lg:translate-x-px lg:translate-y-[0.5px]",
                key === "whatsapp" &&
                  variant === "menu" &&
                  "size-[23.3898px] [mask-image:url('/icons/menu-whatsapp-mask.svg')] [mask-mode:alpha] [mask-size:23.3898px_23.3898px] [mask-repeat:no-repeat]",
                key === "whatsapp" &&
                  variant !== "menu" &&
                  "size-5 [mask-image:url('/icons/header-whatsapp-mask.svg')] [mask-mode:alpha] [mask-size:20px_20px] [mask-repeat:no-repeat]",
              )}
            >
              <Image
                alt=""
                height={
                  (variant === "menu" ? menuIconSizes : iconSizes)[key].height
                }
                src={`/icons/${variant === "menu" ? "menu" : "header"}-${key}.svg`}
                unoptimized
                width={
                  (variant === "menu" ? menuIconSizes : iconSizes)[key].width
                }
              />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
