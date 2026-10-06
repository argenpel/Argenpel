import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/layout/site-header";
import { HeroSlideshow } from "@/components/sections/hero-slideshow";
import {
  SocialBanner,
  VisitBanner,
} from "@/components/sections/shared-banners";
import { categories } from "@/data/categories";
import { companyLinks } from "@/data/company";
import { heroImages } from "@/data/home";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ path: "/" });

export default function HomePage() {
  return (
    <main>
      <section className="relative grid min-h-[100svh] grid-rows-[auto_minmax(0,1fr)] overflow-hidden bg-placeholder text-center text-surface">
        <HeroSlideshow images={heroImages} />
        <SiteHeader active="home" />
        <div className="relative z-10 flex min-h-0 items-center justify-center px-[var(--ap-page-gutter)] pt-4 pb-[clamp(2rem,calc(90svh-37rem),11.5rem)]">
          <div className="flex flex-col items-center">
            <h1 className="text-[clamp(1.75rem,9vw,4rem)] leading-none font-bold whitespace-nowrap">
              Sabemos de papel
            </h1>
            <p className="mt-5 text-2xl font-semibold sm:text-4xl sm:leading-9">
              VENTA POR MAYOR
            </p>
            <Link
              className="mt-[clamp(2.5rem,12svh,6rem)] inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-9 text-base font-semibold tracking-[0.012em] transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface"
              href="/contacto"
            >
              CONTACTANOS
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-20 sm:px-6 sm:pt-[88px] sm:pb-[81px]">
        <div className="mx-auto max-w-[1240px] text-center">
          <h2 className="text-[clamp(1.75rem,8vw,2rem)] leading-[48px] font-medium whitespace-nowrap">
            Nuestros productos
          </h2>

          <div className="mt-[70px] grid gap-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            {categories.map((category) => (
              <Link
                className="group flex flex-col items-center justify-start rounded-xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-brand"
                href={`/productos/${category.slug}`}
                key={category.id}
              >
                <div className="relative size-[152px]">
                  <Image
                    alt=""
                    src={category.home.imageSrc}
                    fill
                    unoptimized
                    sizes="152px"
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-[18px] text-2xl leading-9 font-semibold uppercase transition-colors group-hover:text-brand-dark">
                  {category.home.label}
                </h3>
              </Link>
            ))}
          </div>

          <a
            href={companyLinks.catalog}
            target="_blank"
            rel="noreferrer"
            className="mt-[54px] inline-flex min-h-[45px] w-[331px] max-w-full items-center justify-center rounded-full border border-border px-4 text-sm font-semibold tracking-[0.012em] text-brand-dark sm:text-base"
          >
            DESCARGÁ NUESTRO CATÁLOGO
          </a>
        </div>
      </section>

      <SocialBanner />
      <VisitBanner />
    </main>
  );
}
