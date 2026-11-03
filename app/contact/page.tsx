"use client";

import { useRef } from "react";
import Image from "next/image";
import { Briefcase, MapPin, Phone } from "lucide-react";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Eyebrow } from "@/components/IconBadge";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const infoItems = [
  {
    icon: Phone,
    label: "Phone",
    value: site.phoneDisplay,
    href: site.phoneHref,
  },
  { icon: Briefcase, label: "Firm", value: site.businessName },
  { icon: MapPin, label: "Location", value: `${site.location}, USA` },
];

export default function ContactPage() {
  const nextInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <section className="relative isolate flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-navy-950">
        <Image
          src="/images/hero/contact-hero.jpg"
          alt="A couple reviewing their finances together at home"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/90" />
        <div className="absolute inset-0 bg-radial-navy" />

        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-3 font-serif-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Let&rsquo;s Start a Conversation About{" "}
              <span className="italic text-brass-400">
                Your Financial Future.
              </span>
            </h1>
            <p className="mt-5 max-w-md text-navy-200">
              Share a few details and {site.advisorName} will follow up to
              schedule a consultation at a time that works for you.
            </p>

            <ul className="mt-10 space-y-5">
              {infoItems.map((item) => (
                <li key={item.label} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-brass-400">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-navy-300">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-base font-semibold text-white hover:text-brass-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-base font-semibold text-white">
                        {item.value}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              action={site.contactFormEndpoint}
              method="POST"
              onSubmit={() => {
                if (nextInputRef.current) {
                  nextInputRef.current.value = `${window.location.origin}/contact/thank-you`;
                }
              }}
              className="rounded-3xl bg-white p-7 shadow-2xl sm:p-9"
            >
              <h2 className="font-serif-display text-2xl font-semibold text-navy-900">
                Request a Consultation
              </h2>
              <p className="mt-1.5 text-sm text-navy-500">
                All fields marked with <span className="text-brass-600">*</span>{" "}
                are required.
              </p>

              <input
                type="hidden"
                name="_subject"
                value="New inquiry from AmeriWealth Financial website"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                ref={nextInputRef}
                defaultValue=""
              />
              <input
                type="text"
                name="_honey"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-navy-800"
                  >
                    Full name <span className="text-brass-600">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-navy-800"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-navy-800"
                  >
                    Email <span className="text-brass-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-navy-800"
                  >
                    How can we help? <span className="text-brass-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your retirement timeline and what you would like to discuss."
                    className="mt-2 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brass-600"
              >
                Schedule a Consultation
              </button>
              <p className="mt-4 text-center text-xs text-navy-500">
                Submitting this form does not create a client relationship or
                obligate you to any product.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Calendly scheduling */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="text-center">
          <Eyebrow>Schedule Directly</Eyebrow>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Prefer to{" "}
            <span className="italic text-brass-600">Pick a Time Yourself?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-600">
            Book a consultation directly on {site.advisorName}&rsquo;s calendar
            — no back-and-forth required.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <CalendlyEmbed />
        </Reveal>
      </section>
    </>
  );
}
