import Link from "next/link";
import { ArrowRight, BadgeCheck, Layers3, MoveUpRight } from "lucide-react";
import { HOMEPAGE_COMPANY_CONTENT } from "../../constants/homepage";

export default function CompanySection() {
  return (
    <section className="relative overflow-hidden bg-[#122b45] px-6 py-20 text-white sm:py-24 lg:px-16">
      <div className="absolute -right-24 -top-40 h-[460px] w-[460px] rounded-full border border-white/10" />
      <div className="absolute -right-10 -top-24 h-[330px] w-[330px] rounded-full border border-white/10" />
      <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-300">
            {HOMEPAGE_COMPANY_CONTENT.eyebrow}
          </p>
          <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
            {HOMEPAGE_COMPANY_CONTENT.title}
            <span className="text-brand-300">
              {HOMEPAGE_COMPANY_CONTENT.titleAccent}
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
            {HOMEPAGE_COMPANY_CONTENT.description}
          </p>
          <Link
            href={HOMEPAGE_COMPANY_CONTENT.storyLinkHref}
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white transition hover:text-brand-300"
          >
            {HOMEPAGE_COMPANY_CONTENT.storyLinkLabel} <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {HOMEPAGE_COMPANY_CONTENT.features.map((feature) => {
            const Icon = feature.icon === "integrated" ? Layers3 : BadgeCheck;

            return (
              <div
                key={feature.title}
                className={`border border-white/15 bg-white/[0.04] p-6 sm:p-7 ${
                  feature.icon === "responsible" ? "sm:mt-12" : ""
                }`}
              >
                <Icon
                  className="mb-9 text-brand-300"
                  size={25}
                  strokeWidth={1.5}
                />
                <p className="text-2xl font-medium">{feature.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  {feature.description}
                </p>
              </div>
            );
          })}
          <div className="col-span-full mt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
            <p className="max-w-sm text-sm leading-6 text-white/55">
              {HOMEPAGE_COMPANY_CONTENT.contactMessage}
            </p>
            <Link
              href={HOMEPAGE_COMPANY_CONTENT.contactLinkHref}
              className="inline-flex items-center gap-3 bg-white px-6 py-3.5 text-sm font-semibold text-[#17232c] transition hover:bg-brand-100"
            >
              {HOMEPAGE_COMPANY_CONTENT.contactLinkLabel}
              <MoveUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
