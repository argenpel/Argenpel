// NEXT_PUBLIC_SITE_URL is the final public domain. Until it is set, the site
// uses the Vercel production URL and asks search engines not to index it.
export function resolveSiteUrl(
  configuredUrl: string | undefined,
  vercelHost: string | undefined,
) {
  const configured = configuredUrl?.trim();

  if (!configured) {
    return {
      url: new URL(
        vercelHost ? `https://${vercelHost}` : "http://localhost:3000",
      ),
      indexable: false,
    };
  }

  // Accept the domain without protocol or with a trailing slash.
  const withProtocol = /^https?:\/\//i.test(configured)
    ? configured
    : `https://${configured}`;

  try {
    return { url: new URL(new URL(withProtocol).origin), indexable: true };
  } catch {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL is not a valid URL: "${configuredUrl}"`,
    );
  }
}

const site = resolveSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL,
  process.env.VERCEL_PROJECT_PRODUCTION_URL,
);

export const siteUrl = site.url;

export const isIndexable = site.indexable;

export const siteDescription =
  "Papel higiénico, toallas intercaladas, toallas en rollo y bobinas industriales. Venta por mayor.";
