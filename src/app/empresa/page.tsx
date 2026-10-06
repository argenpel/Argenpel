import { PageHero } from "@/components/sections/page-hero";
import {
  SocialBanner,
  VisitBanner,
} from "@/components/sections/shared-banners";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Empresa",
  description:
    "Conocé a Argenpel: rebobinado y fraccionamiento de papel tissue para el mercado industrial y doméstico.",
  path: "/empresa",
});

const companyDetails = [
  {
    title: "Líneas de producción",
    description:
      "Contamos con dos líneas de producción: una línea PREMIUM de papel celulosa pura importado de Brasil, y por otro lado, una línea ECOLÓGICA pensada en la comodidad y el rendimiento diario.",
  },
  {
    title: "Marca de nuestros clientes",
    description:
      "Nuestra producción se desarrolla sin marca propia, pero a su vez nos adaptamos a las necesidades de nuestros clientes con su propia marca.",
  },
  {
    title: "Capacidad productiva",
    description:
      "Nuestra capacidad productiva abarca una amplia variedad de productos, entre ellos: Papel higiénico de bajo y alto metraje, toalla en rollo de diferentes gramajes, bobina doble hoja industrial, y una amplia línea de toallas intercaladas blancas y beige.",
  },
  {
    title: "Tecnología y calidad",
    description:
      "La constante inversión en tecnología y maquinaria nos permite ampliar y optimizar nuestra capacidad productiva, garantizando eficiencia y un alto estándar de calidad en cada etapa de producción.",
  },
];

function CompanySeparator() {
  return (
    <div
      aria-hidden="true"
      className="h-px bg-[url('/images/company/empresa-separator.svg')] bg-cover bg-center"
    />
  );
}

export default function CompanyPage() {
  return (
    <main>
      <PageHero
        active="company"
        imageSrc="/images/company/planta-industrial-argenpel-header-empresa.jpg"
        title="Empresa"
        titleClassName="text-[32px] leading-[48px] font-semibold"
        contentClassName="lg:pb-[74px]"
      />

      <section className="px-6 py-12 sm:px-10 sm:py-20 lg:min-h-[1313px] lg:pt-[112px] lg:pb-[148px]">
        <div className="mx-auto max-w-[1260px]">
          <div className="grid items-start gap-12 lg:max-w-[1229px] lg:grid-cols-[minmax(0,492fr)_minmax(0,652fr)] lg:gap-[clamp(2rem,5.9vw,85px)]">
            <PlaceholderMedia className="order-2 mx-auto aspect-[492/540] w-full max-w-[492px] rounded-xl border border-border bg-surface lg:order-none lg:mt-[5px]" />
            <div className="min-w-0">
              <h2 className="text-[clamp(1.75rem,8vw,2rem)] leading-[48px] font-semibold text-brand">
                Quiénes somos
              </h2>
              <div className="mt-7 max-w-[618px] space-y-7 text-xl leading-7">
                <p>
                  Desde hace más de una década trabajamos con un propósito
                  claro: satisfacer las necesidades de nuestros clientes,
                  ofreciendo productos de calidad y desarrollando nuestra
                  actividad bajo sólidos principios de ética, compromiso y
                  responsabilidad.
                </p>
                <p>
                  ARGENPEL es una empresa dedicada al rebobinado y
                  fraccionamiento de papel tissue, con una propuesta orientada
                  tanto al mercado industrial como al sector doméstico.
                </p>
              </div>

              <div className="mt-7">
                <CompanySeparator />
                {companyDetails.map((item) => (
                  <div key={item.title}>
                    <article className="grid gap-4 px-0 pt-7 pb-[29px] sm:grid-cols-[minmax(0,238fr)_minmax(0,343fr)] sm:gap-6 lg:px-6">
                      <h3 className="text-2xl leading-[31px] font-semibold text-brand">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-6">{item.description}</p>
                    </article>
                    <CompanySeparator />
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-5 lg:px-6">
                <p className="text-2xl leading-[31px] font-semibold lg:translate-y-[3.5px]">
                  Conocé a nuestro socio
                </p>
                <a
                  href="https://www.argen-bols.com.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-brand px-[31px] py-4 text-base leading-5 font-semibold tracking-[0.012em] text-surface transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-dark"
                >
                  Argenbols
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialBanner titleClassName="-translate-y-[8.5px] leading-[31px]" />
      <VisitBanner titleClassName="text-[clamp(1.5rem,7.5vw,2rem)] leading-[48px] font-semibold" />
    </main>
  );
}
