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
    mobileWidth: 28.7547,
    mobileHeight: 28.8931,
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
    mobileWidth: 29,
    mobileHeight: 29,
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
    mobileWidth: 31,
    mobileHeight: 24,
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
        titleClassName="lg:text-[32px] lg:leading-[48px] lg:font-semibold"
        contentClassName="lg:pb-[75px]"
      />

      <section className="grid grid-cols-[minmax(0,1fr)] lg:min-h-[824px] lg:grid-cols-[minmax(320px,510px)_minmax(0,1fr)]">
        <div className="order-1 min-w-0 bg-[#e8edee] bg-linear-to-r from-border/35 to-border/35 lg:order-2 lg:bg-transparent lg:bg-none lg:px-[var(--ap-page-gutter)] lg:py-12 lg:pr-8 lg:pl-[clamp(2rem,9.65vw,8.6875rem)]">
          <form className="mx-auto w-full max-w-[665px] min-w-0 px-6 pt-[34px] pb-[45px] lg:mx-0 lg:bg-border/35 lg:pt-[58px] lg:pr-[79px] lg:pb-8 lg:pl-[65px]">
            <h2 className="min-h-[90px] max-w-[535px] text-xl leading-[30px] font-semibold lg:min-h-0 lg:w-[calc(100%+14px)] lg:text-2xl lg:leading-[31px]">
              Contanos qué necesitás y te responderemos a la brevedad.
            </h2>

            <div className="mt-[26px] grid gap-[25px] lg:mt-[59px] lg:gap-8">
              <label className="grid gap-[7px] text-sm leading-5 font-semibold lg:gap-1.5 lg:text-base lg:tracking-[0.012em]">
                Nombre y empresa
                <input
                  autoComplete="name"
                  className={fieldClassName}
                  name="name"
                  type="text"
                />
              </label>
              <label className="grid gap-[7px] text-sm leading-5 font-semibold lg:gap-1.5 lg:text-base lg:tracking-[0.012em]">
                Email
                <input
                  autoComplete="email"
                  className={fieldClassName}
                  name="email"
                  type="email"
                />
              </label>
              <label className="grid gap-[7px] text-sm leading-5 font-semibold lg:gap-1.5 lg:text-base lg:tracking-[0.012em]">
                Teléfono
                <input
                  autoComplete="tel"
                  className={fieldClassName}
                  name="phone"
                  type="tel"
                />
              </label>
              <label className="grid gap-[7px] text-sm leading-5 font-semibold lg:gap-1.5 lg:text-base lg:tracking-[0.012em]">
                Mensaje / comentario
                <textarea
                  className={`${fieldClassName} min-h-[107px] resize-y py-3 lg:min-h-[92px]`}
                  name="message"
                />
              </label>
            </div>

            <button
              aria-disabled="true"
              className="mt-[30px] inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-full bg-brand px-7 text-sm leading-5 font-semibold text-surface lg:mt-8 lg:w-auto lg:text-base lg:tracking-[0.012em]"
              title="El envío se habilitará al definir el canal de recepción"
              type="button"
            >
              ENVIAR CONSULTA
            </button>
          </form>
        </div>

        <aside className="order-2 min-h-[168px] min-w-0 bg-brand px-6 pt-9 pb-10 text-surface lg:order-1 lg:px-[clamp(3.5rem,6.3vw,5.6875rem)] lg:py-[111px]">
          <h2 className="text-center text-xl leading-[30px] font-semibold lg:max-w-[313px] lg:text-left lg:text-2xl lg:leading-[31px]">
            Nuestros canales de contacto
          </h2>
          <div className="mt-[18px] flex justify-center gap-[39px] lg:hidden">
            {contactChannels.map((channel) => (
              <a
                aria-label={`Contactar por ${channel.label}`}
                className="flex size-11 shrink-0 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
                href={channel.links[0].href}
                key={channel.key}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex items-center justify-center",
                    channel.key === "whatsapp" &&
                      "[mask-image:url('/icons/contact-mobile-whatsapp-mask.svg')] [mask-mode:alpha] [mask-size:28.893px_28.893px] [mask-repeat:no-repeat]",
                  )}
                >
                  <Image
                    alt=""
                    className="max-w-none shrink-0"
                    height={channel.mobileHeight}
                    src={`/icons/contact-mobile-${channel.key}.svg`}
                    unoptimized
                    width={channel.mobileWidth}
                  />
                </span>
              </a>
            ))}
          </div>
          <div className="mt-[59px] hidden lg:block">
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
      </section>

      <section
        className="flex min-h-[188px] items-center justify-center px-6 text-center text-[15px] leading-6 lg:hidden"
        aria-label="Ubicación de Argenpel"
      >
        <a
          className="-translate-y-[5px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          href={companyLinks.location.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ecuador 2615, Villa Maipú,
          <br />
          San Martín, Buenos Aires
        </a>
      </section>
      <div className="hidden lg:block">
        <LocationMap />
      </div>
      <SocialBanner />
      <VisitBanner />
    </main>
  );
}
