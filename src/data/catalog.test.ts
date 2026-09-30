import { existsSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { categories } from "@/data/categories";
import { products } from "@/data/products";

const publicPath = (src: string) => join(process.cwd(), "public", src);

describe("catalog data", () => {
  it("uses unique ids and slugs", () => {
    for (const items of [categories, products]) {
      expect(new Set(items.map((item) => item.id)).size).toBe(items.length);
      expect(new Set(items.map((item) => item.slug)).size).toBe(items.length);
    }
  });

  it("assigns every product to a known category", () => {
    const categoryIds = new Set(categories.map((category) => category.id));

    for (const product of products) {
      expect(categoryIds).toContain(product.category);
    }
  });

  it("has at least one product per category", () => {
    for (const category of categories) {
      expect(products.some((product) => product.category === category.id)).toBe(
        true,
      );
    }
  });

  it("writes pack weights as integers or with three decimals", () => {
    for (const product of products) {
      for (const weight of product.packWeightsKg ?? []) {
        expect(weight, product.id).toMatch(/^\d+(\.\d{3})?$/);
      }
    }
  });

  it("references images that exist", () => {
    for (const category of categories) {
      expect(existsSync(publicPath(category.home.imageSrc))).toBe(true);
    }

    for (const product of products) {
      for (const image of product.images) {
        expect(existsSync(publicPath(image.src)), image.src).toBe(true);
        expect(image.alt.trim(), image.src).not.toBe("");
      }
    }
  });
});
