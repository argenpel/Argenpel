import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/sections/page-hero";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";

export const metadata: Metadata = {
  title: "Empresa",
};

const differentiators = [
  {
    number: "01",
    title: "Producción",
    description: "Placeholder de capacidad o especialización.",
  },
  {
    number: "02",
    title: "Calidad",
    description: "Placeholder de proceso o estándar.",
  },
  {
    number: "03",
    title: "Distribución",
    description: "Placeholder de cobertura o logística.",
  },
];

export default function CompanyPage() {
  return (
    <main>
      <PageHero active="company" label="SOBRE NOSOTROS" title="Empresa" />

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:py-16">
        <div className="mx-auto max-w-[1262px]">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,33.375rem)] lg:gap-[clamp(3rem,7.8vw,7.0625rem)]">
            <div className="pt-4 lg:pl-8">
              <h2 className="text-[clamp(1.75rem,8vw,2.5rem)] leading-tight font-bold whitespace-nowrap">
                Quiénes somos
              </h2>
              <p className="mt-4 max-w-[510px] text-base leading-5 font-semibold tracking-[0.012em]">
                Placeholder de introducción en 2 o 3 líneas.
                <br />
                Evitar una historia institucional extensa.
              </p>
            </div>
            <PlaceholderMedia className="aspect-[534/250] w-full rounded-xl border border-border" />
          </div>

          <div className="mt-[76px] grid gap-6 lg:grid-cols-3 lg:gap-[clamp(1.5rem,5.3vw,4.75rem)]">
            {differentiators.map((item) => (
              <article
                className="min-h-[190px] rounded-xl border border-border p-7"
                key={item.number}
              >
                <p className="text-base leading-5 font-semibold tracking-[0.012em]">
                  {item.number}
                </p>
                <h3 className="mt-3 text-3xl leading-9 font-semibold sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-base leading-5 font-semibold tracking-[0.012em]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
