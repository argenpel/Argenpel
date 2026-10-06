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

export function HeaderContactLinks({
  links,
  variant,
}: {
  links: readonly ContactLink[];
  variant: "mobile" | "desktop" | "footer";
}) {
  return (
    <ul
      aria-label="Canales de contacto"
      className={cn(
        "flex items-center",
        variant === "mobile"
          ? "mt-2 justify-between border-t border-border pt-3"
          : variant === "footer"
            ? "gap-0 lg:gap-0.5"
            : "-mr-1.5 gap-0.5",
      )}
    >
      {links.map(({ key, label, href }) => (
        <li key={key}>
          <a
            aria-label={label}
            className={cn(
              "flex h-11 items-center justify-center rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
              variant === "mobile"
                ? "w-11 bg-brand hover:bg-brand-dark focus-visible:outline-brand-dark"
                : variant === "footer"
                  ? "w-11 hover:bg-brand/30 focus-visible:outline-surface lg:w-8"
                  : "w-8 hover:bg-brand/30 focus-visible:outline-surface",
            )}
            href={href}
          >
            <span
              aria-hidden="true"
              className={cn(
                "flex items-center justify-center",
                variant !== "mobile" && key === "whatsapp" && "translate-x-0.5",
                variant !== "mobile" &&
                  key === "email" &&
                  "translate-x-px translate-y-[0.5px]",
                key === "whatsapp" &&
                  "size-5 [mask-image:url('/icons/header-whatsapp-mask.svg')] [mask-mode:alpha] [mask-size:20px_20px] [mask-repeat:no-repeat]",
              )}
            >
              <Image
                alt=""
                height={iconSizes[key].height}
                src={`/icons/header-${key}.svg`}
                unoptimized
                width={iconSizes[key].width}
              />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
