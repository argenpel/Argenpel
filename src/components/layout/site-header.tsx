import Image from "next/image";
import Link from "next/link";

import { HeaderContactLinks } from "@/components/layout/header-contact-links";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Disclosure } from "@/components/ui/disclosure";
import { categories } from "@/data/categories";
import { companyContactLinks } from "@/data/company";
import { navigation, type NavigationKey } from "@/data/navigation";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  active?: NavigationKey;
};

const menuLinkClassName =
  "flex min-h-11 items-center rounded-md px-3 transition-colors hover:bg-brand-light hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-brand";

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
    <svg
      aria-hidden="true"
      className={className}
      height={11.0459}
      viewBox="0 0 6.27297 11.0459"
      width={6.27297}
      fill="currentColor"
    >
      <path d="M6.0533 6.0533C6.34619 5.76041 6.34619 5.28553 6.0533 4.99264L1.28033 0.21967C0.987437 -0.0732231 0.512564 -0.0732231 0.21967 0.21967C-0.0732231 0.512564 -0.0732231 0.987437 0.21967 1.28033L4.46231 5.52297L0.21967 9.76561C-0.0732231 10.0585 -0.0732231 10.5334 0.21967 10.8263C0.512564 11.1192 0.987437 11.1192 1.28033 10.8263L6.0533 6.0533ZM4.52297 5.52297V6.27297H5.52297V5.52297V4.77297H4.52297V5.52297Z" />
    </svg>
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
                  <ChevronIcon className="rotate-90 transition-transform group-open/products:-rotate-90" />
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
    <header className="relative z-20 w-full shrink-0 bg-brand lg:bg-transparent">
      <div className="mx-auto flex h-[88px] w-full max-w-[calc(1264px+2*var(--ap-page-gutter))] items-center justify-between gap-4 px-6 lg:h-auto lg:gap-5 lg:px-[var(--ap-page-gutter)] lg:py-[38px]">
        <Link
          className="relative aspect-[162.077/43] w-[162.077px] shrink-0 -translate-y-[2.5px] rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface lg:aspect-[279/74] lg:w-[279px] lg:translate-y-0"
          href="/"
          aria-label="Argenpel, inicio"
        >
          <picture>
            <source
              media="(max-width: 1023px)"
              srcSet="/brand/argenpel-mobile-logo.svg"
            />
            <Image
              alt="Papelera Argenpel"
              className="object-contain"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 279px, 163px"
              src="/brand/argenpel-logo.svg"
            />
          </picture>
        </Link>

        <MobileNavigation active={active} />

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-[11px] lg:flex"
        >
          <NavigationList active={active} variant="desktop" />
          <HeaderContactLinks links={companyContactLinks} variant="desktop" />
        </nav>
      </div>
    </header>
  );
}
