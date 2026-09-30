// NEXT_PUBLIC_SITE_URL is the final public domain. Until it is set, the site
// uses the Vercel production URL and asks search engines not to index it.
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = new URL(
  configuredUrl ??
    (vercelHost ? `https://${vercelHost}` : "http://localhost:3000"),
);

export const isIndexable = Boolean(configuredUrl);

export const siteDescription =
  "Papel higiénico, toallas intercaladas, toallas en rollo y bobinas industriales. Venta por mayor.";
