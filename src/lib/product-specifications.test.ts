import { describe, expect, it } from "vitest";

import { products } from "@/data/products";
import { getProductSpecifications } from "@/lib/product-specifications";

const specificationsOf = (id: string) => {
  const product = products.find((item) => item.id === id);

  if (!product) {
    throw new Error(`Unknown product: ${id}`);
  }

  return getProductSpecifications(product).map(
    ({ label, value }) => `${label}: ${value}`,
  );
};

describe("getProductSpecifications", () => {
  it("describes institutional toilet paper", () => {
    expect(specificationsOf("institutional-toilet-paper-eco")).toEqual([
      "Calidad: blanco ecológico",
      "Presentación: 8 unidades · pallet: 90 packs",
      "Peso por pack: 2 / 2,200 / 2,300 / 2,400 kg o a medida",
      "Opciones: cono chico/grande · con/sin precorte",
    ]);
    expect(specificationsOf("institutional-toilet-paper-premium")).toEqual([
      "Calidad: blanco premium",
      "Presentación: 8 unidades · pallet: 90 packs",
      "Peso por pack: 2,200 / 2,300 / 2,400 kg o a medida",
      "Opciones: cono chico/grande · con/sin precorte",
    ]);
  });

  it("describes household toilet paper x30", () => {
    expect(specificationsOf("family-toilet-paper-30")).toEqual([
      "Calidad: blanco eco / blanco premium",
      "Presentación: 30 unidades · pallet: 80 packs",
      "Peso por pack: 2,500 / 3 kg o a medida",
      "Precorte: con o sin precorte",
    ]);
  });

  it("describes toilet paper x12 with carry handle", () => {
    expect(specificationsOf("family-toilet-paper-12-handle")).toEqual([
      "Calidad: blanco premium / blanco eco",
      "Presentación: 12 rollos · pallet: 90 packs",
      "Empaque: con agarre",
      "Peso por pack: 2,400 kg o a medida",
    ]);
  });

  it("describes interfolded towels", () => {
    expect(specificationsOf("interfolded-towel-white")).toEqual([
      "Calidad: blanco premium",
      "Presentación: 1.500 / 2.000 / 2.500 unidades o a medida",
      "Pallet: 90 cajas",
      "Medida: 20 × 24 o 20 × 36",
    ]);
    expect(specificationsOf("interfolded-towel-beige")).toEqual([
      "Calidad: beige premium",
      "Presentación: 1.500 / 2.000 / 2.500 unidades o a medida",
      "Pallet: 90 cajas",
      "Medida: 20 × 24 o 20 × 36",
    ]);
  });

  it("describes roll towel", () => {
    expect(specificationsOf("roll-towel")).toEqual([
      "Calidad: blanco premium / beige premium",
      "Presentación: 2 / 3 / 4 unidades · pallet: 90 packs",
      "Peso por pack: 1,800 / 2,100 / 3 kg o a medida",
      "Precorte: con o sin precorte",
    ]);
  });

  it("describes industrial roll", () => {
    expect(specificationsOf("industrial-double-ply-roll")).toEqual([
      "Calidad: blanco premium / blanco eco / beige eco",
      "Presentación: 2 unidades · pallet: 80 packs",
      "Peso por pack: 2,800 / 3,400 kg o a medida",
      "Opciones: con/sin precorte · alto: 21 o 24 cm",
    ]);
  });

  it("compacts mobile weights without changing other specifications", () => {
    const expectedWeights: Record<string, string> = {
      "institutional-toilet-paper-eco": "2 / 2,2 / 2,3 / 2,4 kg o a medida",
      "institutional-toilet-paper-premium": "2,2 / 2,3 / 2,4 kg o a medida",
      "family-toilet-paper-30": "2,5 / 3 kg o a medida",
      "family-toilet-paper-12-handle": "2,4 kg o a medida",
      "roll-towel": "1,8 / 2,1 / 3 kg o a medida",
      "industrial-double-ply-roll": "2,8 / 3,4 kg o a medida",
    };

    for (const product of products) {
      const catalog = getProductSpecifications(product);
      const compact = getProductSpecifications(product, {
        compactWeights: true,
      });

      expect(compact.map(({ label }) => label)).toEqual(
        catalog.map(({ label }) => label),
      );
      expect(compact.filter(({ label }) => label !== "Peso por pack")).toEqual(
        catalog.filter(({ label }) => label !== "Peso por pack"),
      );

      expect(
        compact.find(({ label }) => label === "Peso por pack")?.value,
      ).toBe(expectedWeights[product.id]);
    }
  });
});
