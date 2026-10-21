import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Layers3,
  MoveUpRight,
} from "lucide-react";

const products = [
  {
    name: "Plates & Coils",
    category: "Flat products",
    description: "Precision-rolled steel engineered for demanding applications.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=85",
    number: "01",
  },
  {
    name: "Rails & Structures",
    category: "Long products",
    description: "High-strength sections made to carry ambitious projects.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85",
    number: "02",
  },
  {
    name: "Wire Rods",
    category: "Speciality steel",
    description: "Consistent performance, from the smallest detail to the big picture.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
    number: "03",
  },
];

export default function HomePage() {
  return (
    <main id="top">
      <section className="relative isolate flex min-h-[720px] items-center overflow-hidden bg-[#101a23] px-6 pb-28 pt-36 text-white sm:min-h-[800px] lg:min-h-[850px] lg:px-16">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2400&q=90')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,15,21,0.96)_0%,rgba(8,15,21,0.83)_48%,rgba(8,15,21,0.22)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101a23] via-transparent to-black/15" />

        <div className="mx-auto grid w-full max-w-[1440px] items-end gap-12 lg:grid-cols-[1fr_250px]">
          <div className="max-w-4xl">
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-orange-300 sm:text-sm">
              <span className="h-px w-9 bg-orange-400" />
              Engineering a stronger tomorrow
            </p>
            <h1 className="text-5xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-7xl lg:text-[92px]">
              Steel for
              <span className="block text-orange-400">what&apos;s next.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              From the ground beneath us to the skylines ahead, we make the
              materials that move the world forward.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/our-portfolio"
                className="group inline-flex items-center gap-4 bg-orange-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                Explore our portfolio
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-3 px-4 py-4 text-sm font-medium text-white/90 transition hover:text-orange-300"
              >
                Discover our story <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="hidden border-l border-white/25 pb-2 pl-7 lg:block">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">
              Built on purpose
            </p>
            <p className="mt-3 text-3xl font-medium tracking-tight">Since 1952</p>
            <p className="mt-2 max-w-[180px] text-sm leading-6 text-white/65">
              A legacy of progress, with a vision for generations to come.
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
          20°17&apos;N 85°06&apos;E
        </span>
      </section>

      <section id="products" className="bg-[#f5f4f1] px-6 py-24 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-7 md:mb-16 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-orange-600">
                Made for the real world
              </p>
              <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] text-[#17232c] sm:text-5xl">
                Materials that
                <span className="text-neutral-400"> make more possible.</span>
              </h2>
            </div>
            <Link
              href="/our-portfolio"
              className="group inline-flex w-fit items-center gap-3 border-b border-neutral-400 pb-2 text-sm font-semibold text-[#17232c] transition hover:border-orange-500 hover:text-orange-600"
            >
              View all products
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.number}
                href="/our-portfolio"
                className="group relative flex min-h-[420px] flex-col justify-between overflow-hidden bg-[#17232c] p-6 text-white sm:min-h-[490px] sm:p-8"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${product.image}')` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-[#101a23]/95" />
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
                  <span className="mt-7 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 transition group-hover:border-orange-400 group-hover:bg-orange-500">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#17232c] px-6 py-20 text-white sm:py-24 lg:px-16">
        <div className="absolute -right-24 -top-40 h-[460px] w-[460px] rounded-full border border-white/10" />
        <div className="absolute -right-10 -top-24 h-[330px] w-[330px] rounded-full border border-white/10" />
        <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
              The Jindal Steel difference
            </p>
            <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              Progress is built
              <span className="text-orange-300"> together.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              A fully integrated journey, a commitment to responsible growth,
              and the expertise to turn big ideas into lasting impact.
            </p>
            <Link
              href="/mine-to-metal"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white transition hover:text-orange-300"
            >
              Discover mine to metal <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-white/15 bg-white/[0.04] p-6 sm:p-7">
              <Layers3 className="mb-9 text-orange-300" size={25} strokeWidth={1.5} />
              <p className="text-2xl font-medium">Integrated</p>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Connected capability from resource to finished product.
              </p>
            </div>
            <div className="border border-white/15 bg-white/[0.04] p-6 sm:mt-12 sm:p-7">
              <BadgeCheck className="mb-9 text-orange-300" size={25} strokeWidth={1.5} />
              <p className="text-2xl font-medium">Responsible</p>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Building progress with people, communities, and planet in mind.
              </p>
            </div>
            <div className="col-span-full mt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
              <p className="max-w-sm text-sm leading-6 text-white/55">
                Have a project in mind? Let&apos;s find the right steel for it.
              </p>
              <Link
                href="/contactus"
                className="inline-flex items-center gap-3 bg-white px-6 py-3.5 text-sm font-semibold text-[#17232c] transition hover:bg-orange-300"
              >
                Talk to our team <MoveUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
