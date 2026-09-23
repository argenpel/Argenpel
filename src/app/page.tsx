import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import {
  SocialBanner,
  VisitBanner,
} from "@/components/sections/shared-banners";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <main>
      <section className="relative grid min-h-[100svh] grid-rows-[auto_minmax(0,1fr)] overflow-hidden bg-placeholder text-center text-surface">
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

      <section className="bg-surface px-6 py-20 sm:py-[88px]">
        <div className="mx-auto max-w-[1240px] text-center">
          <h2 className="text-[clamp(1.75rem,8vw,2.5rem)] leading-tight font-bold whitespace-nowrap">
            Nuestros productos
          </h2>

          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {categories.map((category) => {
              const photo = products.find(
                (product) => product.category === category.id,
              )?.images[0];
              return (
                <Link
                  className="group flex min-h-56 flex-col items-center justify-start rounded-xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-brand"
                  href={`/productos/${category.slug}`}
                  key={category.id}
                >
                  {photo && (
                    <div className="relative aspect-[4/3] w-full max-w-[240px] overflow-hidden rounded-xl border border-border bg-white">
                      <Image
                        alt=""
                        src={photo.src}
                        fill
                        sizes="240px"
                        className="object-contain"
                      />
                    </div>
                  )}
                  <h3 className="mt-9 text-2xl leading-9 font-semibold uppercase transition-colors group-hover:text-brand-dark">
                    {category.name}
                  </h3>
                </Link>
              );
            })}
          </div>

          <span
            aria-disabled="true"
            className="mt-12 inline-flex min-h-12 items-center justify-center rounded-full border border-border px-9 text-base font-semibold tracking-[0.012em] text-brand-dark"
            title="El catálogo todavía no está disponible"
          >
            DESCARGÁ NUESTRO CATÁLOGO
          </span>
        </div>
      </section>

      <SocialBanner />
      <VisitBanner />
      <SiteFooter />
    </main>
  );
}
