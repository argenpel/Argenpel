import Image from "next/image";

import { LocationMap } from "@/components/sections/location-map";
import { PageHero } from "@/components/sections/page-hero";
import { VisitBanner } from "@/components/sections/shared-banners";
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
    width: 24.8803,
    height: 25,
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
    width: 25,
    height: 25,
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
    width: 27,
    height: 21,
    mobileWidth: 31,
    mobileHeight: 24,
    links: [
      { label: companyLinks.email.address, href: companyLinks.email.url },
    ],
  },
];

const fieldClassName =
  "contact-field min-h-12 w-full rounded-md border-0 border-b-2 border-brand bg-surface px-3 text-base text-ink outline-none transition-colors focus:border-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark focus-visible:outline-solid lg:min-h-[44px]";

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

      <section className="grid grid-cols-[minmax(0,1fr)] lg:mx-auto lg:min-h-[631px] lg:w-[calc(100%-2*var(--ap-page-gutter))] lg:max-w-[1259px] lg:grid-cols-[minmax(280px,510fr)_minmax(0,665fr)] lg:gap-x-[clamp(2rem,5.84vw,5.25rem)]">
        <div className="order-1 min-w-0 bg-[#e8edee] bg-linear-to-r from-border/35 to-border/35 lg:order-2 lg:bg-transparent lg:bg-none lg:py-7">
          <form className="mx-auto w-full max-w-[665px] min-w-0 px-6 pt-[34px] pb-[45px] lg:mx-0 lg:min-h-[575px] lg:bg-border/35 lg:pt-[39px] lg:pr-[79px] lg:pb-[38px] lg:pl-[65px]">
            <h2 className="min-h-[90px] max-w-[535px] text-xl leading-[30px] font-semibold lg:min-h-0 lg:w-[calc(100%+14px)] lg:text-2xl lg:leading-[31px]">
              Contanos qué necesitás y te responderemos a la brevedad.
            </h2>

            <div className="mt-[26px] grid gap-[25px] lg:mt-4 lg:gap-[14px]">
              <label className="grid gap-[7px] text-sm leading-5 font-medium lg:gap-1 lg:text-base lg:font-semibold lg:tracking-[0.012em]">
                Nombre y empresa
                <input
                  autoComplete="name"
                  className={fieldClassName}
                  name="name"
                  type="text"
                />
              </label>
              <label className="grid gap-[7px] text-sm leading-5 font-medium lg:gap-[3px] lg:text-base lg:font-semibold lg:tracking-[0.012em]">
                Email
                <input
                  autoComplete="email"
                  className={cn(fieldClassName, "lg:min-h-[43px]")}
                  name="email"
                  type="email"
                />
              </label>
              <label className="grid gap-[7px] text-sm leading-5 font-medium lg:gap-1 lg:text-base lg:font-semibold lg:tracking-[0.012em]">
                Teléfono
                <input
                  autoComplete="tel"
                  className={cn(fieldClassName, "lg:min-h-[43px]")}
                  name="phone"
                  type="tel"
                />
              </label>
              <label className="grid gap-[7px] text-sm leading-5 font-medium lg:gap-[3px] lg:text-base lg:font-semibold lg:tracking-[0.012em]">
                Mensaje / comentario
                <textarea
                  className={cn(
                    fieldClassName,
                    "min-h-[107px] resize-y py-3 lg:min-h-[84px]",
                  )}
                  name="message"
                />
              </label>
            </div>

            <button
              aria-disabled="true"
              className="mt-[30px] inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-full bg-brand px-7 text-sm leading-5 font-medium text-surface lg:mt-[22px] lg:ml-auto lg:flex lg:w-[207px] lg:px-6 lg:text-base lg:font-semibold lg:tracking-[0.012em] lg:whitespace-nowrap"
              title="El envío se habilitará al definir el canal de recepción"
              type="button"
            >
              ENVIAR CONSULTA
            </button>
          </form>
        </div>

        <aside className="order-2 min-h-[168px] min-w-0 bg-brand px-6 pt-9 pb-10 text-surface lg:relative lg:isolate lg:order-1 lg:py-12 lg:pr-8 lg:pl-[15px] lg:before:absolute lg:before:inset-y-0 lg:before:right-0 lg:before:-z-10 lg:before:w-screen lg:before:bg-brand">
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
          <div className="mt-[27px] hidden lg:block">
            {contactChannels.map((channel) => (
              <div
                key={channel.key}
                className={cn(
                  "grid grid-cols-[25px_minmax(0,1fr)] gap-x-[13px]",
                  channel.key !== "whatsapp" && "mt-4",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-[5px] flex size-[25px] items-center justify-center",
                    channel.key === "email" && "translate-y-[0.5px]",
                    channel.key === "whatsapp" &&
                      "[mask-image:url('/icons/contact-whatsapp-mask.svg')] [mask-mode:alpha] [mask-size:25px_25px] [mask-repeat:no-repeat]",
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

      <LocationMap />
      <VisitBanner />
    </main>
  );
}
