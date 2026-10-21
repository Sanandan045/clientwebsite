"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

type Sub = { label: string; href: string };
type NavItem = {
  label: string;
  href: string;
  description?: string; // shown in the left column of the mega menu
  items?: Sub[];
};

const NAV: NavItem[] = [
  {
    label: "Our Story",
    href: "/about-us",
    description:
      "Jindal Steel is one of India’s leading steel manufacturers, with a significant presence in steel, power, mining and infrastructure.",
    items: [
      { label: "Overview", href: "/about-us" },
      { label: "Our Leadership", href: "/leadership" },
      { label: "Awards & Recognition", href: "/awards" },
    ],
  },
  {
    label: "Mine to Metal",
    href: "/mine-to-metal",
    description:
      "An integrated value chain that takes us from raw material to finished steel. (Replace with your own text.)",
    items: [
      { label: "Overview", href: "/mine-to-metal" },
      { label: "Mining", href: "/mining" },
      { label: "Captive Power", href: "/power" },
      { label: "Steel", href: "/steel" },
      { label: "Our Portfolio", href: "/our-portfolio" },
      { label: "India Operations", href: "/india-operations" },
      { label: "Africa Operations", href: "/africa-operations" },
    ],
  },
  { label: "Our Portfolio", href: "/our-portfolio" },
  {
    label: "Sustainability",
    href: "/sustainability-at-jindal-steel",
    description:
      "Building a responsible future for our people, communities and planet. (Replace with your own text.)",
    items: [
      { label: "Overview", href: "/sustainability-at-jindal-steel" },
      { label: "R.I.S.E", href: "/sustainability-rise" },
      { label: "Responsible Governance", href: "/responsible-governance" },
      { label: "Inclusive Growth", href: "/inclusive-growth" },
      { label: "Sustainable Environment", href: "/sustainable-environment" },
      { label: "Ethical Partnerships", href: "/ethical-partnerships" },
    ],
  },
  {
    label: "People",
    href: "/people",
    description:
      "Our people are the strength behind everything we build. (Replace with your own text.)",
    items: [
      { label: "Overview", href: "/people" },
      { label: "Career", href: "/career-opportunity" },
      { label: "Jindal Steel Edge", href: "/jindal-steel-edge" },
      { label: "Life at Jindal Steel", href: "/life-at-jindal-steel" },
    ],
  },
  { label: "Investor", href: "/investor-media" },
  { label: "Newsroom", href: "/press-releases" },
  { label: "Steel of India", href: "/steel-of-india" },
];

// Download both into /public/images/logo/ for production.
// The white logo URL is a guess: verify it, or export a white version yourself.
const LOGO_DARK = "https://www.jindalsteel.in/images/logo/jindal-steel-logo-black.svg";
const LOGO_LIGHT = "https://www.jindalsteel.in/images/logo/jindal-steel-logo-white.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const activeItem = NAV.find((n) => n.label === active && n.items);
  const solid = scrolled || !!activeItem || mobileOpen;

  function closeMobile() {
    setMobileOpen(false);
    setExpanded(null);
  }

  return (
    <header
      onMouseLeave={() => setActive(null)}
      className={`${poppins.className} fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[88px] max-w-[1600px] items-center justify-between px-5 lg:h-[110px] lg:px-12">
        {/* Logo: both versions stacked, cross-faded */}
        <Link href="/" aria-label="Jindal Steel home" className="relative block h-12 w-40 lg:h-16 lg:w-52">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_LIGHT}
            alt="Jindal Steel"
            className={`absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300 ${
              solid ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_DARK}
            alt=""
            aria-hidden
            className={`absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300 ${
              solid ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-6 xl:flex 2xl:gap-9">
          {NAV.map((item) => {
            const isActive = active === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => setActive(item.label)}
                onFocus={() => setActive(item.label)}
                className={`relative whitespace-nowrap py-2 text-[15px] font-medium uppercase tracking-wide transition-colors 2xl:text-[17px] ${
                  isActive
                    ? "text-orange-500"
                    : solid
                    ? "text-neutral-700 hover:text-orange-500"
                    : "text-white hover:text-orange-300"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-left bg-orange-500 transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
          className={`p-2 xl:hidden ${solid ? "text-neutral-900" : "text-white"}`}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mega menu (desktop) */}
      <div
        className={`hidden overflow-hidden bg-white transition-all duration-300 xl:block ${
          activeItem ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {activeItem && (
          <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,560px)_1fr] gap-16 px-12 pb-14 pt-6">
            <div>
              <h3 className="border-b border-orange-400 pb-4 text-2xl font-medium uppercase text-neutral-600">
                {activeItem.label}
              </h3>
              {activeItem.description && (
                <p className="mt-6 text-xl font-light leading-9 text-neutral-500">
                  {activeItem.description}
                </p>
              )}
            </div>

            <ul className="grid content-start gap-x-16 gap-y-1 pt-3 sm:grid-cols-2 2xl:grid-cols-3">
              {activeItem.items!.map((sub) => (
                <li key={sub.label}>
                  <Link
                    href={sub.href}
                    onClick={() => setActive(null)}
                    className="group flex items-center gap-4 py-3 text-lg font-light text-neutral-600 transition-colors hover:text-orange-500"
                  >
                    <ChevronRight
                      size={18}
                      className="text-emerald-600 transition-transform group-hover:translate-x-1"
                    />
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="max-h-[calc(100vh-88px)] overflow-y-auto border-t border-neutral-200 bg-white px-5 pb-8 xl:hidden"
        >
          {NAV.map((item) => {
            const open = expanded === item.label;
            return (
              <div key={item.label} className="border-b border-neutral-100">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className="flex-1 py-4 text-sm font-medium uppercase tracking-wide text-neutral-800"
                  >
                    {item.label}
                  </Link>
                  {item.items && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label}`}
                      aria-expanded={open}
                      onClick={() => setExpanded(open ? null : item.label)}
                      className="p-3"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${open ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {item.items && open && (
                  <div className="pb-3 pl-2">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={closeMobile}
                        className="flex items-center gap-3 py-2.5 text-sm font-light text-neutral-600 hover:text-orange-500"
                      >
                        <ChevronRight size={14} className="text-emerald-600" />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      )}
    </header>
  );
}