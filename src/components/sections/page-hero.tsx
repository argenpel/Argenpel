import Image from "next/image";

import { SiteHeader } from "@/components/layout/site-header";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  active?: "products" | "company" | "contact";
  imageSrc?: string;
  label?: string;
  title: string;
  titleClassName?: string;
  contentClassName?: string;
};

export function PageHero({
  active,
  imageSrc,
  label,
  title,
  titleClassName,
  contentClassName,
}: PageHeroProps) {
  const mobileImageSrc = active
    ? `/images/mobile/${
        active === "company"
          ? "planta-industrial-argenpel"
          : active === "contact"
            ? "contacto-portada"
            : "productos-portada"
      }.jpg`
    : imageSrc;

  return (
    <section className="relative grid min-h-[219px] grid-rows-[auto_minmax(0,1fr)] bg-ink text-center text-surface lg:min-h-72 lg:bg-placeholder">
      {imageSrc ? (
        <div className="absolute inset-0 overflow-hidden">
          <picture>
            <source media="(max-width: 1023px)" srcSet={mobileImageSrc} />
            <Image
              alt=""
              src={imageSrc}
              fill
              priority
              sizes="100vw"
              className={cn(
                "h-[288px]! object-cover object-center lg:h-full! lg:opacity-100",
                active === "company" ? "opacity-48" : "opacity-42",
              )}
            />
          </picture>
        </div>
      ) : null}
      <SiteHeader active={active} />
      <div
        className={cn(
          "relative z-10 flex min-h-0 items-end justify-center px-6 pb-[60px] lg:px-[var(--ap-page-gutter)] lg:pb-[62px]",
          contentClassName,
        )}
      >
        <div>
          {label ? (
            <p className="mb-2 hidden text-base font-semibold tracking-[0.012em] lg:block">
              {label}
            </p>
          ) : null}
          <h1
            className={cn(
              "text-xl leading-[30px] font-semibold lg:text-[clamp(1.75rem,8vw,2.5rem)] lg:leading-tight lg:font-bold lg:whitespace-nowrap",
              titleClassName,
            )}
          >
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
