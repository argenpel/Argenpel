import { describe, expect, it } from "vitest";

import { resolveSiteUrl } from "@/lib/site";

describe("resolveSiteUrl", () => {
  it("falls back to localhost when the domain is empty", () => {
    for (const value of [undefined, "", "   "]) {
      const site = resolveSiteUrl(value, undefined);

      expect(site.url.href).toBe("http://localhost:3000/");
      expect(site.indexable).toBe(false);
    }
  });

  it("uses the Vercel production host without indexing", () => {
    const site = resolveSiteUrl("", "argenpel.vercel.app");

    expect(site.url.href).toBe("https://argenpel.vercel.app/");
    expect(site.indexable).toBe(false);
  });

  it("normalizes the configured domain", () => {
    for (const value of [
      "www.argenpel.com.ar",
      "https://www.argenpel.com.ar/",
      " https://www.argenpel.com.ar/productos ",
    ]) {
      const site = resolveSiteUrl(value, "argenpel.vercel.app");

      expect(site.url.href, value).toBe("https://www.argenpel.com.ar/");
      expect(site.indexable, value).toBe(true);
    }
  });

  it("rejects an invalid domain", () => {
    expect(() => resolveSiteUrl("argenpel com ar", undefined)).toThrow(
      'NEXT_PUBLIC_SITE_URL is not a valid URL: "argenpel com ar"',
    );
  });
});
