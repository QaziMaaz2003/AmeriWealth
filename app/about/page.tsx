import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Eyebrow } from "@/components/IconBadge";
import { ServiceIcon } from "@/components/ServiceIcon";
import { aboutFeatures, craigPoints, site, whyChooseUs } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "AmeriWealth Financial and Craig Anger, Certified Financial Fiduciary and Retirement Specialist serving clients across Texas.",
};

export default function AboutPage() {
  return (
    <>
      {/* About AmeriWealth */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>About AmeriWealth Financial</Eyebrow>
            <h1 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              A Thoughtful Approach to Retirement Preparation
            </h1>
          </div>
          <div className="space-y-5 text-navy-600 leading-relaxed">
            <p>
              AmeriWealth Financial was built around a simple belief: good retirement decisions
              come from understanding your options, not from rushed recommendations. We take the
              time to learn how you live, what you hope retirement will look like, and what
              concerns you most about the years ahead.
            </p>
            <p>
              Our work centers on retirement preparation, helping individuals understand their
              financial choices and how income, savings, and protection fit together. We believe
              the strongest plans are the ones clients understand and feel comfortable acting on.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {aboutFeatures.map((feature) => (
            <div key={feature.title} className="rounded-2xl bg-mist-100 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-brass-400">
                <ServiceIcon icon={feature.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif-display text-xl font-semibold text-navy-900">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-navy-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Craig */}
      <section id="meet-craig" className="scroll-mt-20 bg-mist-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="flex aspect-[4/5] w-full items-center justify-center rounded-[1.75rem] bg-navy-800 shadow-xl shadow-navy-900/10">
              <span className="font-serif-display text-6xl font-medium text-white">CA</span>
            </div>
          </div>

          <div>
            <Eyebrow>Meet Craig Anger</Eyebrow>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Guidance Rooted in Clarity and Care
            </h2>
            <p className="mt-6 leading-relaxed text-navy-600">
              <span className="font-semibold text-navy-900">{site.advisorName}</span> is a
              Retirement Specialist with {site.businessName}, serving clients throughout{" "}
              {site.location}. He works with people who are approaching retirement, have recently
              retired, or are beginning to think seriously about how their savings, income, and
              protections fit together.
            </p>
            <p className="mt-4 leading-relaxed text-navy-600">
              His personal approach is straightforward: slow down, ask good questions, and make
              sure every decision is understood before it is made.
            </p>

            <ul className="mt-6 space-y-3">
              {craigPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-navy-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brass-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brass-600"
              >
                Schedule a Consultation with Craig
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-brass-600"
              >
                <Phone className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Why Choose AmeriWealth Financial</Eyebrow>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Credibility Built on Attention and Clarity
          </h2>
          <p className="mt-4 text-navy-600">
            Choosing a retirement adviser is a personal decision. These are the qualities clients
            can expect when they work with {site.businessName}.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div key={item.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy-800 shadow-sm shadow-navy-900/10">
                <ServiceIcon icon={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif-display text-lg font-semibold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy-900 bg-radial-navy">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-serif-display text-3xl font-semibold text-white sm:text-4xl">
              Ready to talk through your goals?
            </h2>
            <p className="mt-3 max-w-xl text-navy-200">
              Schedule a no-pressure conversation with {site.advisorName} about where you are
              today and where you want to be.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brass-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-brass-300"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
