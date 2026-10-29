import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { HOMEPAGE_HERO } from "../../constants/homepage";

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[720px] items-center overflow-hidden bg-[#0b1f33] px-6 pb-28 pt-36 text-white sm:min-h-[800px] lg:min-h-[850px] lg:px-16">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url('${HOMEPAGE_HERO.backgroundImage}')` }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,15,21,0.96)_0%,rgba(8,15,21,0.83)_48%,rgba(8,15,21,0.22)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b1f33] via-transparent to-black/15" />

      <div className="mx-auto grid w-full max-w-[1440px] items-end gap-12 lg:grid-cols-[1fr_250px]">
        <div className="max-w-4xl">
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-300 sm:text-sm">
            <span className="h-px w-9 bg-brand-400" />
            {HOMEPAGE_HERO.eyebrow}
          </p>
          <h1 className="text-5xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-7xl lg:text-[92px]">
            {HOMEPAGE_HERO.title}
            <span className="block text-brand-300">
              {HOMEPAGE_HERO.titleAccent}
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            {HOMEPAGE_HERO.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={HOMEPAGE_HERO.primaryLink.href}
              className="group inline-flex items-center gap-4 bg-brand-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-brand-500"
            >
              {HOMEPAGE_HERO.primaryLink.label}
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href={HOMEPAGE_HERO.secondaryLink.href}
              className="inline-flex items-center gap-3 px-4 py-4 text-sm font-medium text-white/90 transition hover:text-brand-300"
            >
              {HOMEPAGE_HERO.secondaryLink.label} <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="hidden border-l border-white/25 pb-2 pl-7 lg:block">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">
            {HOMEPAGE_HERO.companyHighlight.eyebrow}
          </p>
          <p className="mt-3 text-3xl font-medium tracking-tight">
            {HOMEPAGE_HERO.companyHighlight.title}
          </p>
          <p className="mt-2 max-w-[180px] text-sm leading-6 text-white/65">
            {HOMEPAGE_HERO.companyHighlight.description}
          </p>
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-10 left-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65 transition hover:text-white lg:left-16"
      >
        Scroll to explore
        <ArrowDown size={15} />
      </a>
      <span className="absolute bottom-10 right-6 hidden text-xs tracking-[0.16em] text-white/50 sm:block lg:right-16">
        {HOMEPAGE_HERO.location}
      </span>
    </section>
  );
}
