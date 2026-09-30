import { existsSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { heroImages } from "@/data/home";

describe("home data", () => {
  it("references hero images that exist", () => {
    expect(heroImages.length).toBeGreaterThan(0);

    for (const image of heroImages) {
      expect(
        existsSync(join(process.cwd(), "public", image.src)),
        image.src,
      ).toBe(true);
    }
  });
});
