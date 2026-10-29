import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  FEATURED_PRODUCTS,
  HOMEPAGE_PRODUCTS_CONTENT,
} from "../../constants/homepage";

export default function FeaturedProductsSection() {
  return (
    <section
      id="products"
      className="bg-[#f3f7fb] px-6 py-24 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col justify-between gap-7 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
              {HOMEPAGE_PRODUCTS_CONTENT.eyebrow}
            </p>
            <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] text-[#17232c] sm:text-5xl">
              {HOMEPAGE_PRODUCTS_CONTENT.title}
              <span className="text-neutral-400">
                {HOMEPAGE_PRODUCTS_CONTENT.titleAccent}
              </span>
            </h2>
          </div>
          <Link
            href={HOMEPAGE_PRODUCTS_CONTENT.linkHref}
            className="group inline-flex w-fit items-center gap-3 border-b border-neutral-400 pb-2 text-sm font-semibold text-[#17232c] transition hover:border-brand-600 hover:text-brand-700"
          >
            {HOMEPAGE_PRODUCTS_CONTENT.linkLabel}
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {FEATURED_PRODUCTS.map((product) => (
            <Link
              key={product.number}
              href={product.href}
              className="group relative flex min-h-[420px] flex-col justify-between overflow-hidden bg-[#122b45] p-6 text-white sm:min-h-[490px] sm:p-8"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${product.image}')` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-[#0b1f33]/95" />
              <div className="relative flex items-start justify-between">
                <span className="border border-white/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.17em]">
                  {product.category}
                </span>
                <span className="text-xs tracking-[0.15em] text-white/75">
                  {product.number}
                </span>
              </div>
              <div className="relative">
                <h3 className="max-w-xs text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                  {product.name}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                  {product.description}
                </p>
                <span className="mt-7 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 transition group-hover:border-brand-400 group-hover:bg-brand-600">
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
