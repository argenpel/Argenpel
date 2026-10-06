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
    <footer className="bg-ink px-[var(--ap-page-gutter)] py-10 text-surface lg:py-[55px]">
      <div className="mx-auto max-w-[1259px] divide-y divide-border/40 border-y border-border/40">
        <div className="flex flex-col items-center gap-8 px-[15px] py-8 lg:grid lg:min-h-[128px] lg:grid-cols-[207px_minmax(0,1fr)_162px] lg:gap-x-[clamp(1.5rem,7.9vw,114px)] lg:gap-y-0 lg:py-0">
          <Link
            className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface lg:translate-y-[1.5px]"
            href="/"
            aria-label="Argenpel, inicio"
          >
            <Image
              alt="Papelera Argenpel"
              className="max-w-none"
              height={60.0722}
              src="/brand/argenpel-footer-logo.svg"
              unoptimized
              width={207}
            />
          </Link>

          <nav
            aria-label="Navegación del pie"
            className="w-full lg:translate-y-[0.5px]"
          >
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-base leading-5 font-semibold tracking-[0.012em] sm:grid-cols-4 lg:grid-cols-[169fr_197fr_189fr_73fr] lg:gap-0 lg:pr-1">
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

          <div className="lg:translate-y-[1.5px]">
            <HeaderContactLinks links={companyContactLinks} variant="footer" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 py-8 text-center lg:min-h-[115px] lg:flex-row lg:justify-between lg:gap-8 lg:py-0 lg:pl-[15px] lg:text-left">
          <p className="text-sm leading-6 opacity-70">
            © Argenpel · Placeholder de datos legales
          </p>
          <a
            aria-label="Created by VNT Agencia: abrir Instagram en una nueva pestaña"
            className="inline-flex min-h-11 shrink-0 items-center gap-[15px] rounded-sm text-border transition-colors hover:text-surface focus-visible:text-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface"
            href="https://www.instagram.com/vnt.agencia/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span
              className={`${hostGrotesk.className} text-[18.232px] leading-[normal] font-medium whitespace-nowrap`}
              lang="en"
            >
              created by
            </span>
            <Image
              alt=""
              className="h-[45px] w-auto max-w-none"
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
