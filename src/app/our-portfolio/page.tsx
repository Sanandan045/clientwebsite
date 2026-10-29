import type { Metadata } from "next";
import ProductCard from "../../components/products/ProductCard";
import { PRODUCTS } from "../../constants/products";

export const metadata: Metadata = {
  title: "Our Products | Shib Dass & Sons",
  description:
    "Explore flat products, long products, and speciality steel from Shib Dass & Sons.",
};

export default function ProductsPage() {
  return (
    <main className="bg-[#f3f7fb]">
      <section className="px-6 pb-14 pt-36 sm:pb-20 sm:pt-44 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
            Our portfolio
          </p>
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <h1 className="max-w-3xl text-5xl font-medium leading-[1.08] tracking-[-0.055em] text-[#17232c] sm:text-6xl lg:text-7xl">
              Steel made for
              <span className="text-slate-400"> what comes next.</span>
            </h1>
            <p className="max-w-xl pb-1 text-base leading-7 text-slate-600 md:justify-self-end">
              Explore our range of steel products for infrastructure,
              construction, manufacturing, and more. Select a product to learn
              how it can support your next project.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="Steel products"
        className="px-6 pb-24 lg:px-16 lg:pb-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
