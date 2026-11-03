"use client";

import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { GeoBackdrop } from "@/components/GeoBackdrop";
import { site } from "@/lib/site";

export default function ContactPage() {
  const nextInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <section className="relative overflow-hidden">
        <GeoBackdrop variant="light" />
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass-600">
            Contact
          </p>
          <h1 className="mt-4 max-w-2xl font-serif-display text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
            Let&rsquo;s talk about your retirement
          </h1>
          <p className="mt-5 max-w-xl text-lg text-navy-700">
            Reach out by phone, email, or the form below — {site.advisorName} typically responds
            within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <div className="rounded-2xl border border-navy-100 bg-mist-50 p-7">
              <h2 className="font-serif-display text-xl font-semibold text-navy-900">
                Get in touch
              </h2>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brass-600" />
                  <div>
                    <p className="text-sm font-medium text-navy-900">Phone</p>
                    <a href={site.phoneHref} className="text-sm text-navy-600 hover:text-brass-600">
                      {site.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brass-600" />
                  <div>
                    <p className="text-sm font-medium text-navy-900">Email</p>
                    <a href={site.emailHref} className="text-sm text-navy-600 hover:text-brass-600">
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brass-600" />
                  <div>
                    <p className="text-sm font-medium text-navy-900">Service Area</p>
                    <p className="text-sm text-navy-600">Serving clients across {site.location}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-navy-100 p-7">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-navy-500">
                {site.advisorName}
              </h2>
              <p className="mt-1 text-sm text-navy-600">{site.advisorTitle}</p>
              <p className="mt-3 text-sm text-navy-600">
                {site.credential} &middot; NPN #{site.npn}
              </p>
            </div>
          </div>

          <form
            action={site.contactFormEndpoint}
            method="POST"
            onSubmit={() => {
              if (nextInputRef.current) {
                nextInputRef.current.value = `${window.location.origin}/contact/thank-you`;
              }
            }}
            className="rounded-2xl border border-navy-100 bg-white p-7 shadow-sm shadow-navy-900/5 sm:p-9"
          >
            <input type="hidden" name="_subject" value="New inquiry from AmeriWealth Financial website" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" ref={nextInputRef} defaultValue="" />
            <input
              type="text"
              name="_honey"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="text-sm font-medium text-navy-800">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
                  placeholder="Jane Smith"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="phone" className="text-sm font-medium text-navy-800">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-2 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
                  placeholder="(555) 555-5555"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="text-sm font-medium text-navy-800">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-navy-800">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
                  placeholder="Tell us a bit about your goals..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brass-600 sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
