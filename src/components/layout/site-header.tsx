import Image from "next/image";
import Link from "next/link";

import { HeaderContactLinks } from "@/components/layout/header-contact-links";
import { Disclosure } from "@/components/ui/disclosure";
import { categories } from "@/data/categories";
import { companyLinks } from "@/data/company";
import { navigation, type NavigationKey } from "@/data/navigation";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  active?: NavigationKey;
};

const menuLinkClassName =
  "flex min-h-11 items-center rounded-md px-3 transition-colors hover:bg-brand-light hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-brand";

const headerContactLinks = [
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

const navigationStyles = {
  mobile: {
    list: "grid text-base font-semibold tracking-[0.012em]",
    productsItem: undefined,
    summary:
      "flex min-h-11 cursor-pointer list-none items-center justify-between rounded-md px-3 transition-colors hover:bg-brand-light hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden",
    submenu: "grid border-l border-border py-1 pl-3 text-sm font-medium",
    link: menuLinkClassName,
    active: "text-brand-dark",
  },
  desktop: {
    list: "flex items-center gap-x-[31px] text-base leading-5 font-semibold tracking-[0.012em]",
    productsItem: "relative",
    summary:
      "flex min-h-11 cursor-pointer list-none items-center justify-center gap-[11px] rounded-md px-2 text-surface transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand [&::-webkit-details-marker]:hidden",
    submenu:
      "absolute top-full left-1/2 z-30 mt-1 grid w-60 -translate-x-1/2 rounded-lg bg-surface p-2 text-sm font-semibold text-ink shadow-lg",
    link: "flex min-h-11 items-center justify-center gap-2 rounded-md px-2 text-surface text-shadow-[4px_4px_10.4px_rgba(0,0,0,0.25)] transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
    active: "text-brand",
  },
};

function ChevronIcon({ className }: { className: string }) {
  return (
    <Image
      alt=""
      className={className}
      height={11.0459}
      src="/icons/header-chevron.svg"
      unoptimized
      width={6.27297}
    />
  );
}

function NavigationList({
  active,
  variant,
}: SiteHeaderProps & { variant: keyof typeof navigationStyles }) {
  const styles = navigationStyles[variant];

  return (
    <ul className={styles.list}>
      {navigation.map((item) =>
        item.key === "products" ? (
          <li className={styles.productsItem} key={item.key}>
            <Disclosure className="group/products">
              <summary
                className={cn(
                  styles.summary,
                  active === item.key && styles.active,
                )}
              >
                {item.label}
                <span className="flex w-[10.273px] shrink-0 items-center">
                  <ChevronIcon className="rotate-90 brightness-0 transition-transform group-open/products:-rotate-90 lg:brightness-100" />
                </span>
              </summary>
              <ul className={styles.submenu}>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      className={menuLinkClassName}
                      href={`/productos/${category.slug}`}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Disclosure>
          </li>
        ) : (
          <li key={item.key}>
            <Link
              aria-current={active === item.key ? "page" : undefined}
              className={cn(styles.link, active === item.key && styles.active)}
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ),
      )}
    </ul>
  );
}

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="relative z-20 w-full shrink-0">
      <div className="mx-auto flex w-full max-w-[calc(1264px+2*var(--ap-page-gutter))] items-center justify-between gap-4 px-[var(--ap-page-gutter)] py-5 sm:py-7 lg:gap-5 lg:py-[38px]">
        <Link
          className="relative aspect-[241/64] w-[min(190px,56vw)] shrink-0 lg:aspect-[279/74] lg:w-[279px]"
          href="/"
          aria-label="Argenpel, inicio"
        >
          <Image
            alt="Papelera Argenpel"
            className="object-contain"
            fill
            loading="eager"
            sizes="(min-width: 1024px) 279px, 241px"
            src="/brand/argenpel-logo.svg"
          />
        </Link>

        <Disclosure className="group relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-md px-2 text-sm font-semibold tracking-[0.012em] text-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
            MENÚ
            <ChevronIcon className="rotate-90 transition-transform group-open:-rotate-90" />
          </summary>
          <nav
            aria-label="Navegación principal"
            className="absolute top-[calc(100%+0.5rem)] right-0 max-h-[calc(100svh-6rem)] w-52 overflow-y-auto rounded-lg bg-surface p-2 text-ink shadow-lg"
          >
            <NavigationList active={active} variant="mobile" />
            <HeaderContactLinks links={headerContactLinks} variant="mobile" />
          </nav>
        </Disclosure>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-[11px] lg:flex"
        >
          <NavigationList active={active} variant="desktop" />
          <HeaderContactLinks links={headerContactLinks} variant="desktop" />
        </nav>
      </div>
    </header>
  );
}
