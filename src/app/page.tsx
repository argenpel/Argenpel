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
      <section className="relative grid min-h-[100svh] grid-rows-[auto_minmax(0,1fr)] overflow-hidden bg-[#0e2021] text-center text-surface">
        <HeroSlideshow images={heroImages} />
        <SiteHeader active="home" />
        <div className="relative z-10 flex items-center justify-center px-[var(--ap-page-gutter)] py-12 lg:pt-[34px] lg:pb-0">
          <div className="flex w-full max-w-[895px] flex-col items-center">
            <h1 className="text-[clamp(1.25rem,5vw,2rem)] leading-normal font-semibold tracking-[-0.05px]">
              Somos ARGENPEL, una empresa dedicada a la fabricación y desarrollo
              de productos de papel&nbsp;tissue&nbsp;para la higiene
              institucional, reconocida en el mercado por brindar excelente
              relación precio-calidad.
            </h1>
            <Link
              className="mt-8 inline-flex min-h-[45px] w-[196px] max-w-full items-center justify-center rounded-full bg-brand px-4 text-base leading-5 font-semibold tracking-[0.012em] transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface sm:mt-[57px]"
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
