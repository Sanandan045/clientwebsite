import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Our story", href: "/about-us" },
  { label: "Mine to metal", href: "/mine-to-metal" },
  { label: "Our portfolio", href: "/our-portfolio" },
  { label: "Sustainability", href: "/sustainability-at-jindal-steel" },
  { label: "Careers", href: "/career-opportunity" },
  { label: "Contact us", href: "/contactus" },
];

export default function Footer() {
  return (
    <footer className="bg-[#101a23] px-6 text-white lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 border-b border-white/15 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
              Let&apos;s build what&apos;s next
            </p>
            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
              Have a project in mind?
              <span className="block text-white/55">We&apos;re ready to help.</span>
            </h2>
          </div>
          <Link
            href="/contactus"
            className="group inline-flex w-fit items-center gap-4 bg-orange-500 px-7 py-4 text-sm font-semibold transition hover:bg-orange-400"
          >
            Get in touch
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="grid gap-12 py-12 md:grid-cols-[1fr_1.5fr] lg:py-16">
          <div>
            <Link href="/" className="inline-flex flex-col" aria-label="Jindal Steel home">
              <span className="text-2xl font-semibold tracking-[0.08em]">JINDAL</span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.34em] text-white/55">
                Steel
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              Shaping a stronger tomorrow through responsible growth, world-class
              steel, and a belief in what we can build together.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Explore
              </h3>
              <ul className="grid grid-cols-2 gap-x-5 gap-y-4">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition hover:text-orange-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Connect
              </h3>
              <p className="text-sm leading-6 text-white/75">Let&apos;s talk about your next project.</p>
              <Link
                href="/contactus"
                className="mt-3 inline-block text-sm font-medium text-orange-300 transition hover:text-orange-200"
              >
                Contact our team
              </Link>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.linkedin.com/company/jindal-steel-and-power-limited/"
                  aria-label="Jindal Steel on LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition hover:border-orange-300 hover:text-orange-300"
                >
                  <span className="text-sm font-bold tracking-tight">in</span>
                </a>
                <a
                  href="https://www.youtube.com/"
                  aria-label="YouTube"
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition hover:border-orange-300 hover:text-orange-300"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-[17px] w-[17px] fill-current"
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Jindal Steel. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contactus" className="transition hover:text-white">
              Contact
            </Link>
            <a href="/#top" className="transition hover:text-white">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
