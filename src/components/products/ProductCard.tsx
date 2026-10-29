import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "../../constants/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/our-portfolio/${product.slug}`}
      className="group overflow-hidden rounded-sm bg-white shadow-[0_12px_40px_rgba(15,35,55,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,35,55,0.14)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#122b45]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${product.image}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f33]/75 via-transparent to-black/10" />
        <span className="absolute left-5 top-5 border border-white/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-white">
          {product.category}
        </span>
        <span className="absolute bottom-5 right-5 text-xs tracking-[0.15em] text-white/75">
          {product.number}
        </span>
      </div>
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h2 className="text-2xl font-medium tracking-[-0.035em] text-[#17232c]">
              {product.name}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {product.summary}
            </p>
          </div>
          <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </Link>
  );
}
