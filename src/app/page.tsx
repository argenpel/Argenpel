import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/layout/site-header";
import { HeroSlideshow } from "@/components/sections/hero-slideshow";
import { VisitBanner } from "@/components/sections/shared-banners";
import { categories } from "@/data/categories";
import { companyLinks } from "@/data/company";
import { heroImages } from "@/data/home";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ path: "/" });

export default function HomePage() {
  return (
    <main>
      <section className="relative grid h-[calc(100svh-91px)] min-h-[721px] grid-rows-[auto_minmax(0,1fr)] overflow-hidden bg-ink text-center text-surface lg:h-auto lg:min-h-[100svh] lg:bg-[#0e2021]">
        <HeroSlideshow images={heroImages} />
        <SiteHeader active="home" />
        <div className="relative z-10 flex items-stretch justify-center px-6 pt-[168px] pb-[53px] lg:px-[var(--ap-page-gutter)] lg:pt-0 lg:pb-0">
          <div className="flex w-full max-w-[895px] flex-col items-center justify-between lg:grid lg:grid-rows-[minmax(min-content,2fr)_auto_minmax(0,1fr)]">
            <h1 className="max-w-[283px] text-[18px] leading-7 font-semibold tracking-normal lg:max-w-none lg:self-center lg:text-[clamp(1.25rem,5vw,2rem)] lg:leading-normal lg:tracking-[-0.05px]">
              Somos ARGENPEL, una empresa dedicada a la fabricación y desarrollo
              de productos de papel&nbsp;tissue&nbsp;para la higiene
              institucional, reconocida en el mercado por brindar excelente
              relación precio-calidad.
            </h1>
            <Link
              className="mt-12 inline-flex min-h-12 w-full max-w-full items-center justify-center rounded-full bg-brand px-4 text-sm leading-5 font-medium tracking-normal transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface lg:mt-0 lg:min-h-[45px] lg:w-[196px] lg:justify-self-center lg:text-base lg:font-semibold lg:tracking-[0.012em]"
              href="/contacto"
            >
              CONTACTANOS
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 pt-[46px] pb-[110px] lg:pt-[88px] lg:pb-[81px]">
        <div className="mx-auto max-w-[1240px] text-center">
          <h2 className="text-xl leading-[30px] font-semibold lg:text-[clamp(1.75rem,8vw,2rem)] lg:leading-[48px] lg:whitespace-nowrap">
            Nuestros productos
          </h2>

          <div className="mt-[67px] grid gap-12 lg:mt-[70px] lg:grid-cols-2 xl:grid-cols-4 xl:gap-8 xl:[&>a:nth-child(1)]:-translate-x-[9px] xl:[&>a:nth-child(2)]:-translate-x-[10px] xl:[&>a:nth-child(3)]:-translate-x-[5px] xl:[&>a:nth-child(4)]:-translate-x-[14.5px]">
            {categories.map((category) => (
              <Link
                className="group flex flex-col items-center justify-start rounded-xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-brand"
                href={`/productos/${category.slug}`}
                key={category.id}
              >
                <div
                  className={
                    category.id === "toalla-intercalada"
                      ? "relative h-[129px] w-[153px] overflow-hidden lg:size-[152px]"
                      : "relative size-[153px] lg:size-[152px]"
                  }
                >
                  <div
                    className={
                      category.id === "toalla-intercalada"
                        ? "relative -top-6 size-[153px] lg:top-0 lg:size-[152px]"
                        : "relative size-full"
                    }
                  >
                    <Image
                      alt=""
                      src={category.home.imageSrc}
                      fill
                      unoptimized
                      sizes="153px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="mt-[5px] text-sm leading-5 font-semibold uppercase transition-colors group-hover:text-brand-dark lg:mt-[18px] lg:text-2xl lg:leading-9">
                  {category.home.label}
                </h3>
              </Link>
            ))}
          </div>

          <a
            href={companyLinks.catalog}
            target="_blank"
            rel="noreferrer"
            className="mt-[67px] inline-flex min-h-12 w-full max-w-full items-center justify-center rounded-full border border-brand px-4 text-sm leading-5 font-medium tracking-normal text-brand lg:mt-[54px] lg:min-h-[45px] lg:w-[331px] lg:border-border lg:text-base lg:leading-normal lg:font-semibold lg:tracking-[0.012em] lg:text-brand-dark"
          >
            DESCARGÁ NUESTRO CATÁLOGO
          </a>
        </div>
      </section>

      <VisitBanner />
    </main>
  );
}
