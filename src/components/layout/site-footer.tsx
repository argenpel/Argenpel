import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { HeaderContactLinks } from "@/components/layout/header-contact-links";
import { companyContactLinks } from "@/data/company";
import { navigation } from "@/data/navigation";

const hostGrotesk = localFont({
  src: "../../app/fonts/HostGrotesk-VariableFont_wght.ttf",
  weight: "300 800",
  style: "normal",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export function SiteFooter() {
  return (
    <footer className="bg-ink px-6 text-surface lg:px-[var(--ap-page-gutter)] lg:py-[55px]">
      <div className="mx-auto max-w-[1259px] lg:divide-y lg:divide-border/40 lg:border-y lg:border-border/40">
        <div className="grid border-b border-border/28 pt-7 pb-[9px] lg:min-h-[128px] lg:grid-cols-[207px_minmax(0,1fr)_162px] lg:items-center lg:gap-x-[clamp(1.5rem,7.9vw,114px)] lg:gap-y-0 lg:border-border/40 lg:px-[15px] lg:py-0">
          <Link
            className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface lg:translate-y-[1.5px]"
            href="/"
            aria-label="Argenpel, inicio"
          >
            <picture className="block">
              <source
                media="(max-width: 1023px)"
                srcSet="/brand/argenpel-mobile-footer-logo.svg"
              />
              <Image
                alt="Papelera Argenpel"
                className="h-[49px] w-[184.692px] max-w-none lg:h-[60.0722px] lg:w-[207px]"
                height={60.0722}
                src="/brand/argenpel-footer-logo.svg"
                unoptimized
                width={207}
              />
            </picture>
          </Link>

          <nav
            aria-label="Navegación del pie"
            className="mt-[25px] w-full border-t border-border/40 lg:mt-0 lg:translate-y-[0.5px] lg:border-0"
          >
            <ul className="flex justify-between text-xs leading-[18px] lg:grid lg:grid-cols-[169fr_197fr_189fr_73fr] lg:gap-0 lg:pr-1 lg:text-base lg:leading-5 lg:font-semibold lg:tracking-[0.012em]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="flex min-h-11 items-center justify-center rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface lg:w-fit lg:justify-start"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="-mt-[3px] flex -translate-x-2 justify-center lg:mt-0 lg:block lg:translate-x-0 lg:translate-y-[1.5px]">
            <HeaderContactLinks links={companyContactLinks} variant="footer" />
          </div>
        </div>

        <div className="flex min-h-[61px] items-center justify-between gap-2 pt-3 lg:min-h-[115px] lg:gap-8 lg:py-0 lg:pl-[15px]">
          <p className="text-[9px] leading-[13.5px] text-border lg:text-sm lg:leading-6 lg:text-surface lg:opacity-70">
            © Argenpel ·{" "}
            <span className="block lg:inline">
              Placeholder de datos legales
            </span>
          </p>
          <a
            aria-label="Created by VNT Agencia: abrir Instagram en una nueva pestaña"
            className="group inline-flex min-h-11 shrink-0 items-center gap-2 rounded-sm text-border transition-colors hover:text-surface focus-visible:text-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface md:gap-3"
            href="https://www.instagram.com/vnt.agencia/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span
              className={`${hostGrotesk.className} text-[10px] leading-[1.4] font-medium tracking-[0.06em] whitespace-nowrap md:text-[11px]`}
              lang="en"
            >
              created by
            </span>
            <Image
              alt=""
              className="h-5 w-auto max-w-none opacity-80 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 md:h-7"
              height={588.62}
              src="/brand/vnt-signature-white.svg"
              unoptimized
              width={2150.27}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
