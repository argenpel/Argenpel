import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { ProductGallery } from "@/components/product-gallery";
import { PageHero } from "@/components/sections/page-hero";
import { VisitBanner } from "@/components/sections/shared-banners";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
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

  return {
    title: category?.name ?? "Productos",
  };
}

function ProductCard({
  product,
  reverse,
}: {
  product: Product;
  reverse: boolean;
}) {
  const specifications = getProductSpecifications(product);

  return (
    <article
      id={product.slug}
      className="grid items-center gap-8 py-9 min-[1330px]:min-h-[423px] min-[1330px]:grid-cols-[500px_500px] min-[1330px]:gap-[120px] min-[1330px]:px-[65px] min-[1330px]:py-[37px]"
    >
      {product.images.length > 0 && (
        <div
          className={cn(
            "max-w-[500px] min-w-0",
            reverse && "min-[1330px]:order-2",
          )}
        >
          <ProductGallery images={product.images} productName={product.name} />
        </div>
      )}

      <div
        className={cn(
          "min-w-0",
          product.images.length === 0
            ? "min-[1330px]:col-span-2"
            : reverse && "min-[1330px]:order-1",
        )}
      >
        <h2 className="max-w-[500px] text-3xl leading-9 font-semibold min-[1330px]:min-h-[52px] sm:text-[36px] sm:leading-[46px]">
          {product.name}
        </h2>
        <dl
          className={cn(
            "mt-[15px] max-w-[480px]",
            product.titleLines === 2 && "min-[1330px]:mt-[25px]",
          )}
        >
          {specifications.map((specification) => (
            <div
              className="border-b border-border pt-[13px] pb-[10px] text-base leading-5 font-semibold tracking-[0.012em] first:pt-0 first:pb-[9px]"
              key={specification.label}
            >
              <dt className="inline">
                <span aria-hidden="true" className="mr-1">
                  ›
                </span>
                {specification.label}:{" "}
              </dt>
              <dd className="inline">
                {specification.value}
                {specification.unit ? ` ${specification.unit}` : ""}
              </dd>
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
      <PageHero active="products" label="PRODUCTOS" title={category.name} />

      <section className="px-6 py-2 sm:px-10 lg:py-2">
        <div className="mx-auto max-w-[1250px]">
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
      <SiteFooter />
    </main>
  );
}
