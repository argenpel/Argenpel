import Image from "next/image";

import { companyLinks } from "@/data/company";

export function SocialBanner() {
  return (
    <section className="flex min-h-[198px] items-center justify-center bg-surface bg-linear-to-r from-border/35 to-border/35 px-6 text-center">
      <h2 className="text-[clamp(1.25rem,6.5vw,1.5rem)] leading-[46px] font-semibold whitespace-nowrap text-brand-dark">
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

export function VisitBanner() {
  return (
    <section className="relative flex min-h-[244px] items-center justify-center overflow-hidden bg-placeholder px-6 text-center text-surface">
      <Image
        alt=""
        src="/images/shared/planta-industrial-argenpel-banner-inferior.jpg"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <h2 className="relative z-10 text-[clamp(1.5rem,7.5vw,2.5rem)] leading-tight font-bold whitespace-nowrap">
        Gracias por visitarnos
      </h2>
    </section>
  );
}
