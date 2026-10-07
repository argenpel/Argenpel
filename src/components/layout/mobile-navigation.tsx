"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { HeaderContactLinks } from "@/components/layout/header-contact-links";
import { Disclosure } from "@/components/ui/disclosure";
import { categories } from "@/data/categories";
import { companyContactLinks } from "@/data/company";
import { navigation, type NavigationKey } from "@/data/navigation";

const linkClassName =
  "flex min-h-[62px] items-start rounded-sm pt-[10px] pb-[14px] text-[30px] leading-[38px] font-semibold hover:text-brand-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface";

export function MobileNavigation({ active }: { active?: NavigationKey }) {
  const pathname = usePathname();
  const id = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef<string | null>(null);
  const [open, setOpen] = useState(false);

  const close = () => dialogRef.current?.close();

  const restoreScroll = () => {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  };

  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => {
      if (desktop.matches) dialogRef.current?.close();
    };
    desktop.addEventListener("change", handleResize);
    return () => {
      desktop.removeEventListener("change", handleResize);
      restoreScroll();
    };
  }, []);

  const show = () => {
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.showModal();
    setOpen(true);
    dialogRef.current?.focus({ preventScroll: true });
  };

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label="Abrir menú"
        aria-controls={id}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="flex size-11 translate-x-0.5 items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
        onClick={show}
      >
        <Image
          alt=""
          height={20}
          width={20}
          src="/icons/mobile-menu-open.svg"
          unoptimized
        />
      </button>

      <dialog
        ref={dialogRef}
        id={id}
        tabIndex={-1}
        aria-label="Menú principal"
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none flex-col overflow-hidden border-0 bg-brand p-0 text-left text-surface backdrop:bg-brand open:flex"
        onClose={() => {
          restoreScroll();
          setOpen(false);
          triggerRef.current?.focus({ preventScroll: true });
        }}
      >
        <div className="flex h-[108px] shrink-0 items-start justify-between px-6 pt-[33px]">
          <Link
            href="/"
            aria-label="Argenpel, inicio"
            onClick={close}
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
          >
            <Image
              alt="Papelera Argenpel"
              height={43.2449}
              width={163}
              src="/brand/argenpel-mobile-menu-logo.svg"
              unoptimized
            />
          </Link>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={close}
            className="flex size-11 translate-x-0.5 items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
          >
            <Image
              alt=""
              height={20}
              width={20}
              src="/icons/mobile-menu-close.svg"
              unoptimized
            />
          </button>
        </div>

        <nav
          aria-label="Navegación principal"
          className="min-h-0 flex-1 overflow-y-auto px-6 pt-3 pb-6"
          onClick={(event) => {
            if (event.target instanceof Element && event.target.closest("a"))
              close();
          }}
        >
          <ul className="grid gap-[18px]">
            {navigation.map((item) => (
              <li
                key={item.key}
                className="border-b border-surface/28 pb-[5px]"
              >
                {item.key === "products" ? (
                  <Disclosure className="group">
                    <summary
                      className={`${linkClassName} relative cursor-pointer list-none [&::-webkit-details-marker]:hidden`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className="absolute top-[25.5px] right-3 rotate-90 transition-transform group-open:-rotate-90"
                      >
                        <Image
                          alt=""
                          height={14.7279}
                          width={8.36396}
                          src="/icons/mobile-products-chevron.svg"
                          unoptimized
                        />
                      </span>
                    </summary>
                    <ul className="grid pb-3 pl-4 text-lg leading-6">
                      {categories.map((category) => (
                        <li key={category.id}>
                          <Link
                            href={`/productos/${category.slug}`}
                            className="flex min-h-11 items-center rounded-sm hover:text-brand-light focus-visible:outline-2 focus-visible:outline-surface"
                          >
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Disclosure>
                ) : (
                  <Link
                    className={linkClassName}
                    href={item.href}
                    aria-current={active === item.key ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 flex-wrap items-center justify-between gap-y-2 px-6 pb-[13px]">
          <p className="text-[9px] leading-[13.5px] text-border">
            © 2026 Argenpel ·<br />
            Todos los derechos reservados.
          </p>
          <HeaderContactLinks links={companyContactLinks} variant="menu" />
        </div>
        <div aria-hidden="true" className="h-6 shrink-0 bg-ink" />
      </dialog>
    </div>
  );
}
