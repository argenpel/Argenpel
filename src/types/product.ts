export type ProductSpecification = {
  label: string;
  value: string;
};

export type ProductCategory = {
  id:
    | "higienico"
    | "toalla-intercalada"
    | "toalla-en-rollo"
    | "bobina-industrial";
  slug: string;
  name: string;
  home: {
    label: string;
    imageSrc: string;
  };
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  titleLines?: 2;
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
  // Written as in the catalog: integer kilograms or three decimals ("2.200").
  packWeightsKg?: string[];
  customPackWeight?: true;
  coreSizes?: ("small" | "large")[];
  perforation?: ("with" | "without")[];
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
