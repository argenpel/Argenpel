import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { LocationMap } from "@/components/sections/location-map";
import { PageHero } from "@/components/sections/page-hero";
import {
  SocialBanner,
  VisitBanner,
} from "@/components/sections/shared-banners";

export const metadata: Metadata = {
  title: "Contacto",
};

const contactChannels = [
  { label: "WhatsApp", value: "[Número comercial]" },
  { label: "Teléfono", value: "[Número comercial]" },
  { label: "Email", value: "[Correo comercial]" },
];

const fieldClassName =
  "contact-field min-h-12 w-full rounded-md border-0 border-b-2 border-brand bg-white px-3 text-base text-ink outline-none transition-colors focus:border-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark focus-visible:outline-solid";

export default function ContactPage() {
  return (
    <main>
      <PageHero active="contact" title="Contactanos" />

      <section className="grid grid-cols-[minmax(0,1fr)] lg:min-h-[824px] lg:grid-cols-[minmax(320px,510px)_minmax(0,1fr)]">
        <aside className="min-w-0 bg-brand px-[clamp(1.5rem,8vw,3.5rem)] py-16 text-surface lg:px-[clamp(3.5rem,6.3vw,5.6875rem)] lg:py-[105px]">
          <h2 className="max-w-[313px] text-[clamp(1.75rem,7vw,2.25rem)] leading-9 font-semibold">
            Nuestros canales de contacto
          </h2>
          <div className="mt-10 space-y-10">
            {contactChannels.map((channel) => (
              <div key={channel.label}>
                <h3 className="text-2xl leading-9 font-semibold">
                  {channel.label}
                </h3>
                <p className="mt-0.5 text-base leading-6 text-brand-light">
                  {channel.value}
                </p>
              </div>
            ))}
          </div>
        </aside>

        <div className="min-w-0 px-[var(--ap-page-gutter)] py-12 lg:px-[clamp(4rem,10vw,8.6875rem)] lg:py-12">
          <form className="mx-auto w-full max-w-[665px] min-w-0 bg-white px-[clamp(1.25rem,7vw,4rem)] py-12 sm:py-14">
            <h2 className="max-w-[535px] text-[clamp(1.75rem,7vw,2.25rem)] leading-9 font-semibold">
              Contanos qué necesitás y te responderemos a la brevedad.
            </h2>

            <div className="mt-10 grid gap-7">
              <label className="grid gap-1.5 text-base leading-5 font-semibold tracking-[0.012em]">
                Nombre y empresa
                <input className={fieldClassName} name="name" type="text" />
              </label>
              <label className="grid gap-1.5 text-base leading-5 font-semibold tracking-[0.012em]">
                Email
                <input className={fieldClassName} name="email" type="email" />
              </label>
              <label className="grid gap-1.5 text-base leading-5 font-semibold tracking-[0.012em]">
                Teléfono
                <input className={fieldClassName} name="phone" type="tel" />
              </label>
              <label className="grid gap-1.5 text-base leading-5 font-semibold tracking-[0.012em]">
                Mensaje / comentario
                <textarea
                  className={`${fieldClassName} min-h-[92px] resize-y py-3`}
                  name="message"
                />
              </label>
            </div>

            <button
              aria-disabled="true"
              className="mt-8 inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-full bg-brand px-7 text-base font-semibold tracking-[0.012em] text-surface"
              title="El envío se habilitará al definir el canal de recepción"
              type="button"
            >
              ENVIAR CONSULTA
            </button>
          </form>
        </div>
      </section>

      <LocationMap />
      <SocialBanner />
      <VisitBanner />
      <SiteFooter />
    </main>
  );
}
