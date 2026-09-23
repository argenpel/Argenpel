import type { Product, ProductSpecification } from "@/types/product";

const number = new Intl.NumberFormat("es-AR");
const slashList = (values: string[]) => values.join(" / ");

const lowerFirst = (value: string) =>
  `${value.charAt(0).toLocaleLowerCase("es-AR")}${value.slice(1)}`;

const formatWeight = (value: string) => {
  const parsed = Number(value);

  return Number.isFinite(parsed)
    ? new Intl.NumberFormat("es-AR", { maximumFractionDigits: 3 }).format(
        parsed,
      )
    : value;
};

export function getProductSpecifications(
  product: Product,
): ProductSpecification[] {
  const quality: ProductSpecification = {
    label: "Calidad",
    value: slashList(product.qualities.map(lowerFirst)),
  };
  const units = slashList(
    product.unitsPerPackage.map((value) => number.format(value)),
  );
  const pallet = `${number.format(product.packagesPerPallet)} ${product.packageType === "box" ? "cajas" : "packs"}`;
  const weight: ProductSpecification | undefined = product.packWeightsKg?.length
    ? {
        label: "Peso por pack",
        value: `${slashList(product.packWeightsKg.map(formatWeight))} kg${product.customPackWeight ? " o a medida" : ""}`,
      }
    : undefined;

  if (product.family === "interfolded-towel") {
    return [
      quality,
      {
        label: "Presentación",
        value: `${units} unidades${product.customUnits ? " o a medida" : ""}`,
      },
      { label: "Pallet", value: pallet },
      {
        label: "Medida",
        value: product.sheetSizes?.join(" o ") ?? "",
      },
    ];
  }

  const presentation: ProductSpecification = {
    label: "Presentación",
    value: `${units} ${product.carryHandle ? "rollos" : "unidades"} · pallet: ${pallet}`,
  };

  if (product.carryHandle && weight) {
    return [
      quality,
      presentation,
      { label: "Empaque", value: "con agarre" },
      weight,
    ];
  }

  if (!weight) {
    return [quality, presentation];
  }

  if (product.family === "institutional-toilet-paper") {
    return [
      quality,
      presentation,
      weight,
      { label: "Opciones", value: "cono chico/grande · con/sin precorte" },
    ];
  }

  if (product.family === "industrial-roll") {
    return [
      quality,
      presentation,
      weight,
      { label: "Opciones", value: "con/sin precorte · alto: 21 o 24 cm" },
    ];
  }

  return [
    quality,
    presentation,
    weight,
    { label: "Precorte", value: "con o sin precorte" },
  ];
}
