import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import ProductCard from "../../../components/products/ProductCard";
import { getProductBySlug, PRODUCTS } from "../../../constants/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found | Shib Dass & Sons" };
  }

  return {
    title: `${product.name} | Shib Dass & Sons`,
    description: product.summary,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter((item) => item.slug !== product.slug);

  return (
    <main className="bg-white">
      <section className="px-6 pb-14 pt-32 sm:pb-20 sm:pt-40 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <Link
            href="/our-portfolio"
            className="group mb-9 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-brand-700"
          >
            <ArrowLeft
              size={17}
              className="transition-transform group-hover:-translate-x-1"
            />
            All products
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                {product.category} <span className="px-2 text-slate-300">/</span>{" "}
                {product.number}
              </p>
              <h1 className="max-w-xl text-5xl font-medium leading-[1.08] tracking-[-0.055em] text-[#17232c] sm:text-6xl lg:text-7xl">
                {product.name}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                {product.summary}
              </p>
              <Link
                href="/contactus"
                className="mt-9 inline-flex items-center gap-3 bg-brand-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Discuss your requirements
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="relative min-h-[340px] overflow-hidden bg-[#122b45] sm:min-h-[480px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${product.image}')` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f33]/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7fb] px-6 py-16 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[1fr_0.8fr] md:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
              Product overview
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.04em] text-[#17232c] sm:text-4xl">
              Built around your project.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              {product.description}
            </p>
            <ul className="mt-8 space-y-4">
              {product.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                >
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-700"
                    aria-hidden="true"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-slate-200 pt-7 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
              Applications
            </p>
            <ul className="mt-5 divide-y divide-slate-200">
              {product.applications.map((application) => (
                <li
                  key={application}
                  className="py-4 text-base font-medium text-[#17232c]"
                >
                  {application}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-slate-500">
              Get in touch with our team to discuss your product requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
                Keep exploring
              </p>
              <h2 className="text-3xl font-medium tracking-[-0.04em] text-[#17232c] sm:text-4xl">
                More from our portfolio
              </h2>
            </div>
            <Link
              href="/our-portfolio"
              className="hidden items-center gap-2 text-sm font-semibold text-[#17232c] transition hover:text-brand-700 sm:inline-flex"
            >
              View all
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.slug} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
