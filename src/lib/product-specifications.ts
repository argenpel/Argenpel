import type { Product, ProductSpecification } from "@/types/product";

const number = new Intl.NumberFormat("es-AR");
const slashList = (values: string[]) => values.join(" / ");

const lowerFirst = (value: string) =>
  `${value.charAt(0).toLocaleLowerCase("es-AR")}${value.slice(1)}`;

// Catalog weights preserve their notation; compact weights omit trailing zeros.
const formatWeight = (value: string, compact: boolean) =>
  compact ? number.format(Number(value)) : value.replace(".", ",");

const coreSizeLabels: Record<
  NonNullable<Product["coreSizes"]>[number],
  string
> = {
  small: "chico",
  large: "grande",
};

const formatPerforation = (
  options: NonNullable<Product["perforation"]>,
  separator: string,
) => {
  if (options.includes("with") && options.includes("without")) {
    return `con${separator}sin precorte`;
  }

  return options.includes("with") ? "con precorte" : "sin precorte";
};

function getOptions(product: Product): ProductSpecification | undefined {
  const { coreSizes = [], perforation = [], rollHeightCm = [] } = product;

  if (perforation.length && !coreSizes.length && !rollHeightCm.length) {
    return { label: "Precorte", value: formatPerforation(perforation, " o ") };
  }

  const options = [
    coreSizes.length
      ? `cono ${coreSizes.map((size) => coreSizeLabels[size]).join("/")}`
      : undefined,
    perforation.length ? formatPerforation(perforation, "/") : undefined,
    rollHeightCm.length ? `alto: ${rollHeightCm.join(" o ")} cm` : undefined,
  ].filter((option) => option !== undefined);

  return options.length
    ? { label: "Opciones", value: options.join(" · ") }
    : undefined;
}

export function getProductSpecifications(
  product: Product,
  { compactWeights = false }: { compactWeights?: boolean } = {},
): ProductSpecification[] {
  const quality: ProductSpecification = {
    label: "Calidad",
    value: slashList(product.qualities.map(lowerFirst)),
  };
  const units = slashList(
    product.unitsPerPackage.map((value) => number.format(value)),
  );
  const pallet = `${number.format(product.packagesPerPallet)} ${product.packageType === "box" ? "cajas" : "packs"}`;

  if (product.family === "interfolded-towel") {
    return [
      quality,
      {
        label: "Presentación",
        value: `${units} unidades${product.customUnits ? " o a medida" : ""}`,
      },
      { label: "Pallet", value: pallet },
      ...(product.sheetSizes?.length
        ? [{ label: "Medida", value: product.sheetSizes.join(" o ") }]
        : []),
    ];
  }

  const specifications: (ProductSpecification | undefined)[] = [
    quality,
    {
      label: "Presentación",
      value: `${units} ${product.carryHandle ? "rollos" : "unidades"} · pallet: ${pallet}`,
    },
    product.carryHandle ? { label: "Empaque", value: "con agarre" } : undefined,
    product.packWeightsKg?.length
      ? {
          label: "Peso por pack",
          value: `${slashList(product.packWeightsKg.map((weight) => formatWeight(weight, compactWeights)))} kg${product.customPackWeight ? " o a medida" : ""}`,
        }
      : undefined,
    getOptions(product),
  ];

  return specifications.filter((specification) => specification !== undefined);
}
