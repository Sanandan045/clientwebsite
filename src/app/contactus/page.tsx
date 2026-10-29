
"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

type Fields = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string; // honeypot
};

const initial: Fields = {
  name: "",
  email: "",
  phone: "",
  subject: "General Enquiry",
  message: "",
  website: "",
};

const subjects = [
  "General Enquiry",
  "Products & Sales",
  "Investor Relations",
  "Careers",
  "Media & Press",
  "Vendor / Partnership",
];

const input =
  "w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-600/10";

function ContactForm() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const e: typeof errors = {};
    if (values.name.trim().length < 2) e.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = "Enter a valid email";
    if (values.phone && !/^[+\d][\d\s-]{6,15}$/.test(values.phone))
      e.phone = "Enter a valid phone number";
    if (values.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      // Frontend only: simulate sending. Replace with a real request later.
      if (values.website) throw new Error(); // honeypot
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <CheckCircle2 size={56} className="text-emerald-600" />
        <h3 className="mt-4 text-xl font-semibold">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm text-neutral-500">
          Your message has been sent. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-neutral-300 px-6 py-2.5 text-sm font-medium transition hover:bg-neutral-100"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name *" error={errors.name}>
          <input
            className={input}
            placeholder="John Doe"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            autoComplete="name"
          />
        </Field>
        <Field label="Email *" error={errors.email}>
          <input
            type="email"
            className={input}
            placeholder="you@company.com"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            autoComplete="email"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" error={errors.phone}>
          <input
            type="tel"
            className={input}
            placeholder="+91 98765 43210"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            autoComplete="tel"
          />
        </Field>
        <Field label="Subject">
          <select
            className={input}
            value={values.subject}
            onChange={(e) => set("subject", e.target.value)}
          >
            {subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message *" error={errors.message}>
        <textarea
          rows={5}
          className={`${input} resize-none`}
          placeholder="How can we help you?"
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
        />
      </Field>

      {/* Honeypot: hidden from real users */}
      <input
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        value={values.website}
        onChange={(e) => set("website", e.target.value)}
      />

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700 disabled:opacity-70 sm:w-fit"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send message <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-neutral-600">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}

export default function ContactPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#0b1f33] px-6 pb-16 pt-36 text-white sm:pb-20 sm:pt-44 lg:px-16">
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute -right-24 -top-40 -z-10 h-[500px] w-[500px] rounded-full border border-white/10" />
        <div className="absolute -right-5 -top-20 -z-10 h-[350px] w-[350px] rounded-full border border-white/10" />
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.26em] text-brand-300">
            <span className="h-px w-9 bg-brand-400" />
            We&apos;re here to help
          </p>
          <h1 className="max-w-4xl text-5xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-7xl">
            Let&apos;s start a
            <span className="block text-brand-300">conversation.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            Whether you&apos;re planning a project or simply have a question,
            our team is ready to connect.
          </p>
        </div>
      </section>

      <section className="bg-[#f3f7fb] px-6 py-12 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="flex flex-col justify-between bg-[#122b45] p-7 text-white sm:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
                Ways to connect
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                Find the right team.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
                Choose the topic that best fits your enquiry. We&apos;ll use your
                message to direct it to the right team.
              </p>
            </div>

            <div className="mt-10 grid gap-6 border-t border-white/15 pt-8">
              <ContactDetail
                icon={<Mail size={19} />}
                label="Products & sales"
                value="Steel enquiries and project support"
              />
              <ContactDetail
                icon={<Phone size={19} />}
                label="Investors & media"
                value="Corporate information and press enquiries"
              />
              <ContactDetail
                icon={<MapPin size={19} />}
                label="Careers & partnerships"
                value="Opportunities and vendor enquiries"
              />
            </div>

            <a
              href="#contact-form"
              className="mt-10 flex items-start gap-3 border-t border-white/15 pt-6 text-white/65 transition hover:text-white"
            >
              <p className="text-xs leading-6">
                Not sure where to start? Send us a message
              </p>
              <ArrowRight size={16} className="mt-1 shrink-0 text-brand-300" />
            </a>
          </aside>

          <div
            id="contact-form"
            className="bg-white p-6 shadow-[0_20px_60px_rgba(23,35,44,0.07)] sm:p-10 lg:p-12"
          >
            <div className="mb-8 flex items-end justify-between gap-5 border-b border-neutral-200 pb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                  Send us a message
                </p>
                <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-[#17232c] sm:text-3xl">
                  How can we help?
                </h2>
              </div>
              <ArrowRight className="mb-1 hidden text-brand-600 sm:block" size={22} />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactDetail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 text-brand-300">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-[0.15em] text-white/45">{label}</p>
        <p className="mt-1 text-sm leading-6 text-white/85">{value}</p>
      </div>
    </div>
  );
}