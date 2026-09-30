# Product catalog

## Source of truth

`src/data/products.ts` contains eight informational records in four categories,
defined in `src/data/categories.ts` (which also holds the home card label and
image). The site reads local product data and images at build time.

## Modeling decisions

- Option lists are independent. They do not define every possible sale combination.
- Weights are strings written as integer kilograms or with three decimals
  (`"2.200"`). They are shown with a decimal comma: `2,200 kg`. A test enforces
  the notation.
- Interfolded towel dimensions are shown without a unit because none is specified.
- Product codes, unsupported descriptions and unspecified technical fields are
  omitted. Internal IDs are not commercial codes.
- Photos of the x12 and x30 families are not assigned to a quality based on
  packaging color. Their alternative text describes only what is visible.
- Visible specifications are derived by `getProductSpecifications` from the
  record fields, including core sizes, perforation and roll heights. There is no
  separately maintained copy of the same values in component markup.

## Images

Files in `public/images/products/` are served through Next.js Image. The first
photo is the initial view; arrow controls rotate through remaining photos in the
same card.

## Updates and verification

Review the product information and images before editing local records. Keep
unknown values absent.

Run `npm run check` (lint, typecheck, formatting, tests and build). Update
`src/lib/product-specifications.test.ts` when a visible specification changes. Check all four
category routes and the home category links on mobile and desktop. Verify image
loading, product framing, long specifications and absence of placeholder codes.
