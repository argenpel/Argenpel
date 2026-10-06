import Image from "next/image";

import { SiteHeader } from "@/components/layout/site-header";

type PageHeroProps = {
  active?: "products" | "company" | "contact";
  imageSrc?: string;
  label?: string;
  title: string;
};

export function PageHero({ active, imageSrc, label, title }: PageHeroProps) {
  return (
    <section className="relative grid min-h-80 grid-rows-[auto_minmax(0,1fr)] bg-placeholder text-center text-surface lg:min-h-72">
      {imageSrc ? (
        <Image
          alt=""
          src={imageSrc}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      ) : null}
      <SiteHeader active={active} />
      <div className="relative z-10 flex min-h-0 items-end justify-center px-[var(--ap-page-gutter)] pb-10 lg:pb-[62px]">
        <div>
          {label ? (
            <p className="mb-2 text-base font-semibold tracking-[0.012em]">
              {label}
            </p>
          ) : null}
          <h1 className="text-[clamp(1.75rem,8vw,2.5rem)] leading-tight font-bold whitespace-nowrap">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
