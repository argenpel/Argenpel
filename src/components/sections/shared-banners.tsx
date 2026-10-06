import Image from "next/image";

import { companyLinks } from "@/data/company";
import { cn } from "@/lib/utils";

type BannerProps = {
  titleClassName?: string;
};

export function SocialBanner({ titleClassName }: BannerProps = {}) {
  return (
    <section className="flex min-h-[198px] items-center justify-center bg-surface bg-linear-to-r from-border/35 to-border/35 px-6 text-center">
      <h2
        className={cn(
          "text-[clamp(1.25rem,6.5vw,1.5rem)] leading-[46px] font-semibold whitespace-nowrap text-brand-dark",
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
    <section className="relative flex min-h-[244px] items-center justify-center overflow-hidden bg-placeholder px-6 text-center text-surface">
      <Image
        alt=""
        src="/images/shared/planta-industrial-argenpel-banner-inferior.jpg"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <h2
        className={cn(
          "relative z-10 text-[clamp(1.5rem,7.5vw,2.5rem)] leading-tight font-bold whitespace-nowrap",
          titleClassName,
        )}
      >
        Gracias por visitarnos
      </h2>
    </section>
  );
}
