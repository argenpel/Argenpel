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
    <section className="relative grid min-h-[219px] grid-rows-[auto_minmax(0,1fr)] bg-ink text-center text-surface lg:min-h-72">
      {imageSrc ? (
        <div
          className={cn(
            "absolute inset-0 overflow-hidden",
            active === "company" && "lg:top-0.5",
          )}
        >
          <picture
            className={cn(
              active === "contact" &&
                "lg:relative lg:block lg:aspect-[4/3] lg:w-full",
            )}
          >
            <source media="(max-width: 1023px)" srcSet={mobileImageSrc} />
            <Image
              alt=""
              src={mobileImageSrc ?? imageSrc}
              fill
              priority
              sizes="100vw"
              className={cn(
                "h-[288px]! object-cover object-center",
                active === "company" ? "opacity-48" : "opacity-42",
                active === "company" &&
                  "lg:top-[-294.28%]! lg:left-[0.02%]! lg:h-auto! lg:w-full! lg:opacity-50",
                active === "products" &&
                  "lg:top-[-200%]! lg:h-auto! lg:w-full! lg:opacity-50",
                active === "contact" &&
                  "lg:top-[99.989533%]! lg:left-[0.034414%]! lg:h-auto! lg:w-3/4! lg:origin-top-left lg:-rotate-90 lg:opacity-50",
                !active && "lg:h-full! lg:opacity-100",
              )}
            />
          </picture>
        </div>
      ) : null}
      <SiteHeader active={active} />
      <div
        className={cn(
          "relative z-10 flex min-h-0 items-end justify-center px-6 pb-[54px] lg:px-[var(--ap-page-gutter)] lg:pb-[75px]",
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
              "text-2xl leading-9 font-semibold lg:text-[32px] lg:leading-[48px] lg:whitespace-nowrap",
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
