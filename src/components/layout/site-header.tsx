import Image from "next/image";
import Link from "next/link";

import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  active?: "home" | "products" | "company" | "contact";
};

const navigation = [
  { key: "home", label: "Inicio", href: "/" },
  { key: "products", label: "Productos", href: "/productos/higienico" },
  { key: "company", label: "Empresa", href: "/empresa" },
  { key: "contact", label: "Contacto", href: "/contacto" },
] as const;

function ChevronIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 6.27297 11.0459"
    >
      <path d="M6.0533 6.0533C6.34619 5.76041 6.34619 5.28553 6.0533 4.99264L1.28033 0.21967C0.987437 -0.0732231 0.512564 -0.0732231 0.21967 0.21967C-0.0732231 0.512564 -0.0732231 0.987437 0.21967 1.28033L4.46231 5.52297L0.21967 9.76561C-0.0732231 10.0585 -0.0732231 10.5334 0.21967 10.8263C0.512564 11.1192 0.987437 11.1192 1.28033 10.8263L6.0533 6.0533ZM4.52297 5.52297V6.27297H5.52297V5.52297V4.77297H4.52297V5.52297Z" />
    </svg>
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

        <details className="group relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-md px-2 text-sm font-semibold tracking-[0.012em] text-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
            MENÚ
            <ChevronIcon className="h-3 w-2 rotate-90 transition-transform group-open:-rotate-90" />
          </summary>
          <nav
            aria-label="Navegación principal"
            className="absolute top-[calc(100%+0.5rem)] right-0 w-52 rounded-lg bg-surface p-2 text-ink shadow-lg"
          >
            <ul className="grid text-base font-semibold tracking-[0.012em]">
              {navigation.map((item) => {
                if (item.key === "products") {
                  return (
                    <li key={item.key}>
                      <details className="group/products">
                        <summary
                          className={cn(
                            "flex min-h-11 cursor-pointer list-none items-center justify-between rounded-md px-3 transition-colors hover:bg-brand-light hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden",
                            active === item.key && "text-brand-dark",
                          )}
                        >
                          {item.label}
                          <ChevronIcon className="h-3 w-2 rotate-90 transition-transform group-open/products:-rotate-90" />
                        </summary>
                        <ul className="grid border-l border-border py-1 pl-3 text-sm font-medium">
                          {categories.map((category) => (
                            <li key={category.id}>
                              <Link
                                className="flex min-h-11 items-center rounded-md px-3 transition-colors hover:bg-brand-light hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-brand"
                                href={`/productos/${category.slug}`}
                              >
                                {category.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  );
                }

                return (
                  <li key={item.key}>
                    <Link
                      aria-current={active === item.key ? "page" : undefined}
                      className={cn(
                        "flex min-h-11 items-center rounded-md px-3 transition-colors hover:bg-brand-light hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-brand",
                        active === item.key && "text-brand-dark",
                      )}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </details>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-x-8 text-base font-semibold tracking-[0.012em]">
            {navigation.map((item) => {
              if (item.key === "products") {
                return (
                  <li className="relative" key={item.key}>
                    <details className="group/products">
                      <summary
                        className={cn(
                          "flex min-h-11 cursor-pointer list-none items-center justify-center gap-2 rounded-md px-1 text-surface transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:px-2 [&::-webkit-details-marker]:hidden",
                          active === item.key && "text-brand",
                        )}
                      >
                        {item.label}
                        <ChevronIcon className="h-3 w-2 rotate-90 transition-transform group-open/products:-rotate-90" />
                      </summary>
                      <ul className="absolute top-full left-1/2 z-30 mt-1 grid w-60 -translate-x-1/2 rounded-lg bg-surface p-2 text-sm font-semibold text-ink shadow-lg">
                        {categories.map((category) => (
                          <li key={category.id}>
                            <Link
                              className="flex min-h-11 items-center rounded-md px-3 transition-colors hover:bg-brand-light hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-brand"
                              href={`/productos/${category.slug}`}
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                );
              }

              return (
                <li key={item.key}>
                  <Link
                    aria-current={active === item.key ? "page" : undefined}
                    className={cn(
                      "flex min-h-11 items-center justify-center gap-2 rounded-md px-1 text-surface transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:px-2",
                      active === item.key && "text-brand",
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
