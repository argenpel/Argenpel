# Product catalog

## Source of truth

`src/data/products.ts` contains eight informational records in four categories.
The site reads local product data and images at build time.

## Modeling decisions

- Option lists are independent. They do not define every possible sale combination.
- Weights remain strings in the data model to preserve the specified decimal notation.
- Interfolded towel dimensions are shown without a unit because none is specified.
- Product codes, unsupported descriptions and unspecified technical fields are
  omitted. Internal IDs are not commercial codes.
- Photos of the x12 and x30 families are not assigned to a quality based on
  packaging color. Their alternative text describes only what is visible.
- Visible specifications are derived by `getProductSpecifications`; there is no
  separately maintained copy of the same values in component markup.

## Images

Files in `public/images/products/` are served through Next.js Image. The first
photo is the initial view; arrow controls rotate through remaining photos in the
same card.

## Updates and verification

Review the product information and images before editing local records. Keep
unknown values absent.

Run the README lint, typecheck, formatting and build commands. Check all four
category routes and the home category links on mobile and desktop. Verify image
loading, product framing, long specifications and absence of placeholder codes.
