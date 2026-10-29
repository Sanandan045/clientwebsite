"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react";
import {
  HEADER_NAV_ITEMS,
  NAVBAR_SCROLL_THRESHOLD,
  SITE_LOGO,
} from "../../constants/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > NAVBAR_SCROLL_THRESHOLD);
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

  const activeItem = HEADER_NAV_ITEMS.find(
    (item) => item.label === active && item.items?.length,
  );
  const solid = scrolled || !!activeItem || mobileOpen;

  function closeMobile() {
    setMobileOpen(false);
    setExpanded(null);
  }

  return (
    <header
      onMouseLeave={() => setActive(null)}
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        solid ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex h-[88px] max-w-[1600px] items-center justify-between px-5 lg:h-[110px] lg:px-12">
        <Link
          href="/"
          aria-label="Shib Dass & Sons home"
          className="relative block h-12 w-40 lg:h-16 lg:w-52"
        >
          <Image
            src={SITE_LOGO}
            alt="Shib Dass & Sons Pvt Limited"
            fill
            priority
            sizes="(min-width: 1024px) 208px, 160px"
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-6 xl:flex 2xl:gap-9">
          {HEADER_NAV_ITEMS.map((item) => {
            const isActive = active === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => setActive(item.label)}
                onFocus={() => setActive(item.label)}
                className={`relative whitespace-nowrap py-2 text-[15px] font-medium uppercase tracking-wide transition-colors 2xl:text-[17px] ${
                  isActive
                    ? "text-brand-700"
                    : "text-slate-800 hover:text-brand-700"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-left bg-brand-600 transition-transform duration-300 ${
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
          className="p-2 text-slate-800 transition-colors hover:text-brand-700 xl:hidden"
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
              <h3 className="border-b border-brand-400 pb-4 text-2xl font-medium uppercase text-slate-700">
                {activeItem.label}
              </h3>
              {activeItem.description && (
                <p className="mt-6 text-xl font-light leading-9 text-neutral-500">
                  {activeItem.description}
                </p>
              )}
            </div>

            <ul className="grid content-start gap-x-16 gap-y-1 pt-3 sm:grid-cols-2 2xl:grid-cols-3">
              {activeItem.items?.map((sub) => (
                <li key={sub.label}>
                  <Link
                    href={sub.href}
                    onClick={() => setActive(null)}
                    className="group flex items-center gap-4 py-3 text-lg font-light text-slate-600 transition-colors hover:text-brand-700"
                  >
                    <ChevronRight
                      size={18}
                      className="text-brand-600 transition-transform group-hover:translate-x-1"
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
          {HEADER_NAV_ITEMS.map((item) => {
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
                        className="flex items-center gap-3 py-2.5 text-sm font-light text-slate-600 hover:text-brand-700"
                      >
                        <ChevronRight size={14} className="text-brand-600" />
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