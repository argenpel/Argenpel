import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/sections/page-hero";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <main>
      <PageHero
        imageSrc="/images/shared/planta-industrial-argenpel-banner-inferior.jpg"
        label="ERROR 404"
        title="Página no encontrada"
      />

      <section className="px-6 py-20 text-center sm:py-[88px]">
        <p className="mx-auto max-w-[510px] text-base leading-6 font-semibold tracking-[0.012em]">
          La página que buscás no existe o cambió de dirección.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-9 text-base font-semibold tracking-[0.012em] text-surface transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-dark"
            href="/"
          >
            VOLVER AL INICIO
          </Link>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-9 text-base font-semibold tracking-[0.012em] text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-dark"
            href={`/productos/${categories[0].slug}`}
          >
            VER PRODUCTOS
          </Link>
        </div>
      </section>
    </main>
  );
}
