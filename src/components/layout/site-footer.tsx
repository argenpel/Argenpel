import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos/higienico" },
  { label: "Empresa", href: "/empresa" },
  { label: "Contacto", href: "/contacto" },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand text-surface">
      <div className="mx-auto flex min-h-44 max-w-[1208px] flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:px-10">
        <Link
          className="relative h-[50px] w-[172px] shrink-0"
          href="/"
          aria-label="Argenpel, inicio"
        >
          <Image
            alt="Papelera Argenpel"
            className="object-contain"
            fill
            sizes="172px"
            src="/brand/argenpel-logo.svg"
          />
        </Link>

        <div className="flex flex-col items-center gap-7 text-center">
          <nav aria-label="Navegación del pie">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold tracking-[0.012em] sm:text-base">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    className="inline-flex min-h-11 items-center rounded-sm px-1 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm opacity-70 sm:text-base">
            © Argenpel · Placeholder de datos legales
          </p>
        </div>
      </div>
    </footer>
  );
}
