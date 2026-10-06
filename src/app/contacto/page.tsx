import Image from "next/image";

import { LocationMap } from "@/components/sections/location-map";
import { PageHero } from "@/components/sections/page-hero";
import {
  SocialBanner,
  VisitBanner,
} from "@/components/sections/shared-banners";
import { companyLinks } from "@/data/company";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Contacto",
  description:
    "Contactá a Argenpel para consultas y pedidos de venta por mayor.",
  path: "/contacto",
});

const contactChannels = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    width: 21.8946,
    height: 22,
    links: [
      {
        label: companyLinks.whatsapp.number.replace("+54 ", ""),
        href: companyLinks.whatsapp.url,
      },
      {
        label: companyLinks.whatsapp.secondaryNumber.replace("+54 ", ""),
        href: companyLinks.whatsapp.secondaryUrl,
      },
    ],
  },
  {
    key: "instagram",
    label: "Instagram",
    width: 22,
    height: 22,
    links: [
      {
        label: `@${companyLinks.instagram.handle}`,
        href: companyLinks.instagram.url,
      },
    ],
  },
  {
    key: "email",
    label: "Email",
    width: 24,
    height: 19,
    links: [
      { label: companyLinks.email.address, href: companyLinks.email.url },
    ],
  },
];

const fieldClassName =
  "contact-field min-h-12 w-full rounded-md border-0 border-b-2 border-brand bg-surface px-3 text-base text-ink outline-none transition-colors focus:border-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark focus-visible:outline-solid";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        active="contact"
        imageSrc="/images/contact/bobinas-papel-argenpel-contacto.jpg"
        title="Contactanos"
        titleClassName="text-[32px] leading-[48px] font-semibold"
        contentClassName="lg:pb-[75px]"
      />

      <section className="grid grid-cols-[minmax(0,1fr)] lg:min-h-[824px] lg:grid-cols-[minmax(320px,510px)_minmax(0,1fr)]">
        <aside className="min-w-0 bg-brand px-[clamp(1.5rem,8vw,3.5rem)] py-16 text-surface lg:px-[clamp(3.5rem,6.3vw,5.6875rem)] lg:py-[111px]">
          <h2 className="max-w-[313px] text-2xl leading-[31px] font-semibold">
            Nuestros canales de contacto
          </h2>
          <div className="mt-[59px]">
            {contactChannels.map((channel) => (
              <div
                key={channel.key}
                className={cn(
                  "grid grid-cols-[22px_minmax(0,1fr)] gap-x-4",
                  channel.key === "instagram" && "mt-[29px]",
                  channel.key === "email" && "mt-[47px]",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-[7px] flex size-[22px] items-center justify-center",
                    channel.key === "email" && "translate-y-[0.5px]",
                    channel.key === "whatsapp" &&
                      "[mask-image:url('/icons/contact-whatsapp-mask.svg')] [mask-mode:alpha] [mask-size:22px_22px] [mask-repeat:no-repeat]",
                  )}
                >
                  <Image
                    alt=""
                    className="max-w-none shrink-0"
                    height={channel.height}
                    src={`/icons/contact-${channel.key}.svg`}
                    unoptimized
                    width={channel.width}
                  />
                </span>
                <div>
                  <h3 className="text-2xl leading-9 font-semibold">
                    {channel.label}
                  </h3>
                  <ul className="mt-0.5 text-sm leading-6 text-brand-light">
                    {channel.links.map((link) => (
                      <li key={link.href}>
                        <a
                          className="break-words hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
                          href={link.href}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <div className="min-w-0 px-[var(--ap-page-gutter)] py-12 lg:pr-8 lg:pl-[clamp(2rem,9.65vw,8.6875rem)]">
          <form className="mx-auto w-full max-w-[665px] min-w-0 bg-border/35 px-[clamp(1.25rem,7vw,4rem)] pt-[58px] pb-8 lg:mx-0 lg:pr-[79px] lg:pl-[65px]">
            <h2 className="w-[calc(100%+14px)] max-w-[535px] text-2xl leading-[31px] font-semibold">
              Contanos qué necesitás y te responderemos a la brevedad.
            </h2>

            <div className="mt-[59px] grid gap-8">
              <label className="grid gap-1.5 text-base leading-5 font-semibold tracking-[0.012em]">
                Nombre y empresa
                <input
                  autoComplete="name"
                  className={fieldClassName}
                  name="name"
                  type="text"
                />
              </label>
              <label className="grid gap-1.5 text-base leading-5 font-semibold tracking-[0.012em]">
                Email
                <input
                  autoComplete="email"
                  className={fieldClassName}
                  name="email"
                  type="email"
                />
              </label>
              <label className="grid gap-1.5 text-base leading-5 font-semibold tracking-[0.012em]">
                Teléfono
                <input
                  autoComplete="tel"
                  className={fieldClassName}
                  name="phone"
                  type="tel"
                />
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
              className="mt-8 inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-full bg-brand px-7 text-base leading-5 font-semibold tracking-[0.012em] text-surface"
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
    </main>
  );
}
