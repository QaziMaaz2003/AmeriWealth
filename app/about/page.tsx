import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Eyebrow } from "@/components/IconBadge";
import { PageHero } from "@/components/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
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
      <PageHero
        image="/images/hero/about-hero.jpg"
        imageAlt="Two professionals shaking hands over a signed agreement"
        eyebrow="About Us"
        title={
          <>
            A Partner for Every Stage of{" "}
            <span className="font-serif-display italic text-brass-400">
              Your Retirement Journey
            </span>
          </>
        }
        description={`${site.businessName} was built on a simple idea: good decisions come from understanding your options, not from rushed recommendations.`}
      />

      {/* About AmeriWealth */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Eyebrow>About AmeriWealth Financial</Eyebrow>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              A Thoughtful Approach to{" "}
              <span className="italic text-brass-600">
                Retirement Preparation
              </span>
            </h2>
          </Reveal>
          <Reveal
            delay={0.1}
            className="space-y-5 text-navy-600 leading-relaxed"
          >
            <p>
              AmeriWealth Financial was built around a simple belief: good
              retirement decisions come from understanding your options, not
              from rushed recommendations. We take the time to learn how you
              live, what you hope retirement will look like, and what concerns
              you most about the years ahead.
            </p>
            <p>
              Our work centers on retirement preparation, helping individuals
              understand their financial choices and how income, savings, and
              protection fit together. We believe the strongest plans are the
              ones clients understand and feel comfortable acting on.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-3">
          {aboutFeatures.map((feature) => (
            <RevealItem
              key={feature.title}
              className="group rounded-2xl bg-mist-100 p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-brass-400">
                <ServiceIcon icon={feature.icon} className="h-5 w-5" />
              </div>
              <h3 className="relative mt-5 inline-block font-serif-display text-xl font-semibold text-navy-900">
                {feature.title}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brass-500 transition-all duration-300 group-hover:w-full" />
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-navy-600">
                {feature.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Meet Craig */}
      <section id="meet-craig" className="scroll-mt-20 bg-mist-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <Reveal className="relative mx-auto w-full max-w-xs">
            <div className="overflow-hidden rounded-[1.75rem] border-2 border-brass-400 bg-navy-800 shadow-xl shadow-navy-900/10">
              <Image
                src="/images/craig-headshot-retouched.png"
                alt={site.advisorName}
                width={1080}
                height={1440}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>Meet Craig Anger</Eyebrow>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Guidance Rooted in{" "}
              <span className="italic text-brass-600">Clarity and Care</span>
            </h2>
            <p className="mt-6 leading-relaxed text-navy-600">
              <span className="font-semibold text-navy-900">
                {site.advisorName}
              </span>{" "}
              is a Retirement Specialist with {site.businessName}, serving
              clients throughout {site.location}. He works with people who are
              approaching retirement, have recently retired, or are beginning to
              think seriously about how their savings, income, and protections
              fit together.
            </p>
            <p className="mt-4 leading-relaxed text-navy-600">
              His personal approach is straightforward: slow down, ask good
              questions, and make sure every decision is understood before it is
              made.
            </p>

            <ul className="mt-6 space-y-3">
              {craigPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-navy-700"
                >
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
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <Eyebrow>Why Choose AmeriWealth Financial</Eyebrow>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Credibility Built on{" "}
            <span className="italic text-brass-600">Attention and Clarity</span>
          </h2>
          <p className="mt-4 text-navy-600">
            Choosing a retirement adviser is a personal decision. These are the
            qualities clients can expect when they work with {site.businessName}
            .
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {whyChooseUs.map((item) => (
            <RevealItem key={item.title} className="group">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brass-100 text-brass-600 ring-1 ring-brass-300 transition-colors group-hover:bg-brass-400 group-hover:text-navy-950">
                <ServiceIcon icon={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="relative mt-4 inline-block font-serif-display text-lg font-semibold text-navy-900">
                {item.title}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brass-500 transition-all duration-300 group-hover:w-full" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {item.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="flex flex-col items-start gap-8 rounded-3xl bg-mist-100 p-10 sm:p-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Ready to talk through{" "}
              <span className="italic text-brass-600">your goals?</span>
            </h2>
            <p className="mt-3 max-w-xl text-navy-600">
              Schedule a no-pressure conversation with {site.advisorName} about
              where you are today and where you want to be.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brass-600"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
