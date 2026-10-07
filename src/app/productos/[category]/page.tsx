import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductGallery } from "@/components/product-gallery";
import { PageHero } from "@/components/sections/page-hero";
import { VisitBanner } from "@/components/sections/shared-banners";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { pageMetadata } from "@/lib/metadata";
import { getProductSpecifications } from "@/lib/product-specifications";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = categories.find((item) => item.slug === categorySlug);

  if (!category) {
    return { title: "Productos" };
  }

  const productNames = products
    .filter((product) => product.category === category.id)
    .map((product) => product.name);

  return pageMetadata({
    title: category.name,
    description: `${productNames.join(", ")}. Venta por mayor de Argenpel.`,
    path: `/productos/${category.slug}`,
  });
}

function ProductCard({
  product,
  reverse,
}: {
  product: Product;
  reverse: boolean;
}) {
  const specifications = getProductSpecifications(product, {
    compactWeights: true,
  });
  const [institutionalTitle, institutionalQuality] =
    product.family === "institutional-toilet-paper"
      ? product.name.split(" Blanco ")
      : [];

  return (
    <article
      id={product.slug}
      className="grid items-start gap-6 min-[1024px]:items-center min-[1024px]:gap-8 min-[1024px]:py-9 min-[1330px]:min-h-[423px] min-[1330px]:grid-cols-[500px_500px] min-[1330px]:gap-[120px] min-[1330px]:px-[65px] min-[1330px]:py-[37px]"
    >
      {product.images.length > 0 && (
        <div
          className={cn(
            "order-2 max-w-[500px] min-w-0 min-[1024px]:order-none",
            reverse && "min-[1330px]:order-2",
          )}
        >
          <ProductGallery
            images={product.images}
            productName={product.name}
            className={
              product.id === "institutional-toilet-paper-eco"
                ? "lg:aspect-[500/347]"
                : undefined
            }
          />
        </div>
      )}

      <div
        className={cn(
          "order-1 min-w-0 min-[1024px]:order-none",
          product.images.length === 0
            ? "min-[1330px]:col-span-2"
            : reverse && "min-[1330px]:order-1",
        )}
      >
        <h2 className="max-w-[500px] text-xl leading-[26px] font-semibold min-[1024px]:min-h-0 min-[1024px]:text-[24px] min-[1024px]:leading-[31px] min-[1330px]:min-h-[52px]">
          {institutionalQuality ? (
            <>
              {institutionalTitle} <br className="hidden min-[1024px]:block" />
              Blanco {institutionalQuality}
            </>
          ) : (
            product.name
          )}
        </h2>
        <dl
          className={cn(
            "mt-[8px] max-w-[480px] min-[1024px]:mt-[15px]",
            institutionalQuality && "min-[1330px]:mt-[55px]",
          )}
        >
          {specifications.map((specification) => (
            <div
              className="min-h-[33px] border-b border-border py-[6px] text-sm leading-5 font-medium min-[1024px]:min-h-0 min-[1024px]:pt-[13px] min-[1024px]:pb-[10px] min-[1024px]:text-base min-[1024px]:font-semibold min-[1024px]:tracking-[0.012em] min-[1024px]:first:pt-0 min-[1024px]:first:pb-[9px]"
              key={specification.label}
            >
              <dt className="inline">{specification.label}: </dt>
              <dd className="inline">{specification.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = categories.find((item) => item.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (product) => product.category === category.id,
  );

  return (
    <main>
      <PageHero
        active="products"
        imageSrc="/images/products/papeles-argenpel-header-productos.jpg"
        title={category.name}
      />

      <section className="px-6 py-[47px] min-[1024px]:px-10 min-[1024px]:pt-[43px] min-[1024px]:pb-8">
        <div className="mx-auto grid max-w-[1250px] gap-[47px] min-[1024px]:gap-[66px]">
          {categoryProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <VisitBanner />
    </main>
  );
}
