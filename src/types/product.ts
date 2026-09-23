export type ProductSpecification = {
  label: string;
  value: string;
  unit?: string;
};

export type ProductCategory = {
  id:
    | "higienico"
    | "toalla-intercalada"
    | "toalla-en-rollo"
    | "bobina-industrial";
  slug: string;
  name: string;
  description?: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  titleLines?: 2;
  code?: string;
  category: ProductCategory["id"];
  family:
    | "institutional-toilet-paper"
    | "family-toilet-paper-30"
    | "family-toilet-paper-12-handle"
    | "roll-towel"
    | "industrial-roll"
    | "interfolded-towel";
  qualities: string[];
  packageType: "pack" | "box";
  unitsPerPackage: number[];
  customUnits?: true;
  packagesPerPallet: number;
  // Preserve the specified decimal notation until the weights are confirmed.
  packWeightsKg?: string[];
  customPackWeight?: true;
  coreSizes?: ("small" | "large")[];
  perforation?: ("with" | "without")[];
  ply?: 1 | 2;
  rollHeightCm?: number[];
  carryHandle?: true;
  sheetSizes?: string[];
  images: {
    src: string;
    alt: string;
    objectPosition?: string;
    scale?: number;
  }[];
};
