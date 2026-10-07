import Image from "next/image";

import { companyLinks } from "@/data/company";
import { cn } from "@/lib/utils";

type BannerProps = {
  titleClassName?: string;
};

export function SocialBanner({ titleClassName }: BannerProps = {}) {
  return (
    <section className="hidden min-h-36 items-center justify-center bg-[#e8edee] px-6 text-center lg:flex lg:min-h-[198px] lg:bg-surface lg:bg-linear-to-r lg:from-border/35 lg:to-border/35">
      <h2
        className={cn(
          "-translate-y-px text-base leading-7 font-semibold text-brand lg:translate-y-0 lg:text-[clamp(1.25rem,6.5vw,1.5rem)] lg:leading-[46px] lg:whitespace-nowrap lg:text-brand-dark",
          titleClassName,
        )}
      >
        <a
          href={companyLinks.instagram.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Seguinos en Instagram, @${companyLinks.instagram.handle}`}
        >
          Seguinos en @{companyLinks.instagram.handle}
        </a>
      </h2>
    </section>
  );
}

export function VisitBanner({ titleClassName }: BannerProps = {}) {
  return (
    <section className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-ink px-6 text-center text-surface lg:min-h-[244px] lg:bg-placeholder">
      <picture className="absolute inset-0">
        <source
          media="(max-width: 1023px)"
          srcSet="/images/mobile/planta-industrial-argenpel.jpg"
        />
        <Image
          alt=""
          src="/images/shared/planta-industrial-argenpel-banner-inferior.jpg"
          fill
          sizes="100vw"
          className="top-[-103.09%]! left-[-17.16%]! h-[273.11%]! w-[120.17%]! max-w-none opacity-48 lg:top-0! lg:left-0! lg:h-full! lg:w-full! lg:object-cover lg:object-center lg:opacity-100"
        />
      </picture>
      <div className="relative z-10 translate-y-px lg:translate-y-0">
        <h2
          className={cn(
            "text-base leading-7 font-semibold lg:text-[clamp(1.5rem,7.5vw,2.5rem)] lg:leading-tight lg:font-bold lg:whitespace-nowrap",
            titleClassName,
          )}
        >
          Gracias por visitarnos
        </h2>
        <a
          className="block text-sm leading-5 font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface lg:hidden"
          href={companyLinks.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Seguinos en @{companyLinks.instagram.handle}
        </a>
      </div>
    </section>
  );
}
