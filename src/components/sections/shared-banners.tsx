export function SocialBanner() {
  return (
    <section className="flex min-h-[198px] items-center justify-center bg-surface px-6 text-center">
      <h2 className="text-[clamp(1.75rem,8vw,2.25rem)] leading-tight font-semibold whitespace-nowrap text-brand-dark">
        <a
          href="https://www.instagram.com/argenpel/?hl=es"
          target="_blank"
          rel="noreferrer"
          aria-label="Seguinos en Instagram, @argenpel"
          className="inline-flex items-center gap-2"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-[1em] shrink-0"
          >
            <rect width="18" height="18" x="3" y="3" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>
          <span>Seguinos en @argenpel</span>
        </a>
      </h2>
    </section>
  );
}

export function VisitBanner() {
  return (
    <section className="relative flex min-h-[244px] items-center justify-center overflow-hidden bg-placeholder px-6 text-center text-surface">
      <h2 className="text-[clamp(1.5rem,7.5vw,2.5rem)] leading-tight font-bold whitespace-nowrap">
        Gracias por visitarnos
      </h2>
    </section>
  );
}
