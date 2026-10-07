import { PageHero } from "@/components/sections/page-hero";
import { VisitBanner } from "@/components/sections/shared-banners";
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
        titleClassName="lg:text-[32px] lg:leading-[48px] lg:font-semibold"
        contentClassName="lg:pb-[74px]"
      />

      <section className="px-6 pt-10 pb-[45px] lg:min-h-[1313px] lg:px-10 lg:pt-[112px] lg:pb-[148px]">
        <div className="mx-auto max-w-[1260px]">
          <div className="grid items-start lg:max-w-[1229px] lg:translate-x-0.5 lg:grid-cols-[minmax(0,492fr)_minmax(0,652fr)] lg:gap-[clamp(2rem,5.9vw,85px)]">
            <PlaceholderMedia className="order-2 mx-auto aspect-[327/356] w-full max-w-[492px] rounded-lg border border-border bg-surface lg:sticky lg:top-8 lg:order-none lg:mt-[5px] lg:aspect-[492/540] lg:max-w-[min(492px,calc((100svh-64px)*492/540))] lg:rounded-xl" />
            <div className="contents min-w-0 lg:block">
              <div className="order-1 mb-10 lg:mb-0">
                <h2 className="text-xl leading-[30px] font-semibold text-brand lg:text-[clamp(1.75rem,8vw,2rem)] lg:leading-[48px]">
                  Quiénes somos
                </h2>
                <div className="mt-5 max-w-[618px] space-y-6 text-[15px] leading-6 lg:mt-7 lg:space-y-7 lg:text-xl lg:leading-7 lg:tracking-[-0.1px]">
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
              </div>

              <div className="order-3 mt-12 lg:mt-14">
                <CompanySeparator />
                {companyDetails.map((item) => (
                  <div key={item.title}>
                    <article className="grid gap-2.5 px-0 py-[30px] lg:grid-cols-[minmax(0,238fr)_minmax(0,343fr)] lg:gap-6 lg:px-6 lg:pt-7 lg:pb-[29px]">
                      <h3 className="text-xl leading-[26px] font-semibold text-brand lg:text-2xl lg:leading-[31px]">
                        {item.title}
                      </h3>
                      <p className="pl-12 text-[15px] leading-6 lg:pl-0 lg:text-sm">
                        {item.description}
                      </p>
                    </article>
                    <CompanySeparator />
                  </div>
                ))}

                <div className="mt-[47px] flex items-center justify-between gap-2 lg:mt-7 lg:flex-wrap lg:justify-start lg:gap-x-8 lg:gap-y-5 lg:px-6">
                  <p className="text-base leading-6 font-semibold lg:min-w-[277px] lg:translate-y-[3.5px] lg:text-2xl lg:leading-[31px]">
                    Conocé a nuestro socio
                  </p>
                  <a
                    href="https://www.argen-bols.com.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[52px] w-[129px] shrink-0 items-center justify-center rounded-full bg-brand px-5 py-4 text-base leading-5 font-semibold tracking-[0.012em] text-surface transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-dark lg:w-auto lg:px-[31px]"
                  >
                    Argenbols
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VisitBanner />
    </main>
  );
}
