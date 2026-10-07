import Image from "next/image";

import { companyLinks } from "@/data/company";
import { cn } from "@/lib/utils";

type BannerProps = {
  titleClassName?: string;
};

export function VisitBanner({ titleClassName }: BannerProps = {}) {
  return (
    <section className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-ink px-6 text-center text-surface lg:min-h-[244px]">
      <picture className="absolute inset-0 lg:top-px">
        <source
          media="(max-width: 1023px)"
          srcSet="/images/mobile/planta-industrial-argenpel.jpg"
        />
        <Image
          alt=""
          src="/images/mobile/planta-industrial-argenpel.jpg"
          fill
          sizes="100vw"
          className="top-[-103.09%]! left-[-17.16%]! h-[273.11%]! w-[120.17%]! max-w-none opacity-48 lg:top-[-364.05%]! lg:left-[0.02%]! lg:h-auto! lg:w-full! lg:opacity-50"
        />
      </picture>
      <div className="relative z-10 translate-y-px lg:translate-y-[3.5px]">
        <h2
          className={cn(
            "text-base leading-7 font-semibold lg:text-[32px] lg:leading-[48px] lg:whitespace-nowrap",
            titleClassName,
          )}
        >
          Gracias por visitarnos
        </h2>
        <a
          className="block text-sm leading-5 font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface lg:text-2xl lg:leading-[31px] lg:font-semibold"
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
