import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Eyebrow } from "@/components/IconBadge";
import { ServiceIcon } from "@/components/ServiceIcon";
import { aboutFeatures, heroStats, philosophySteps, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 bg-radial-navy">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-px w-8 bg-brass-400" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brass-400">
                {site.businessName} &middot; {site.location}
              </p>
            </div>
            <h1 className="mt-5 font-serif-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.3rem]">
              Plan Today. Prepare for Tomorrow.{" "}
              <span className="font-serif-display italic text-brass-400">
                Retire with Confidence.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
              Discover retirement-focused strategies and personalized guidance designed to help
              you make informed decisions about your financial future.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brass-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-brass-300"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-navy-200">
              {heroStats.map((stat) => (
                <li key={stat} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brass-400" />
                  {stat}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-800 shadow-2xl shadow-navy-950/40">
              <Image
                src="/images/craig-headshot-hd.png"
                alt={`${site.advisorName}, ${site.advisorTitle} at ${site.businessName}`}
                width={600}
                height={800}
                preload
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 w-[80%] rounded-2xl border border-white/10 bg-navy-800/95 px-5 py-4 shadow-xl backdrop-blur sm:-right-8">
              <p className="font-serif-display text-lg font-semibold text-white">
                {site.advisorName}
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-brass-400">
                {site.advisorTitle}
              </p>
              <a
                href={site.phoneHref}
                className="mt-2 flex items-center gap-2 text-sm text-navy-200 hover:text-brass-400"
              >
                <Phone className="h-3.5 w-3.5" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>About AmeriWealth Financial</Eyebrow>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              A Thoughtful Approach to Retirement Preparation
            </h2>
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
              financial choices and how income, savings, and protection fit together.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-brass-600"
            >
              Read more about our approach
              <ArrowRight className="h-4 w-4" />
            </Link>
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

      {/* Philosophy */}
      <section className="relative overflow-hidden bg-navy-900 bg-radial-navy">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <Eyebrow>Our Philosophy</Eyebrow>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-white sm:text-4xl">
            Preparation Is the Foundation of Confidence
          </h2>
          <p className="mt-8 font-serif-display text-xl italic leading-relaxed text-navy-100 sm:text-2xl">
            &ldquo;Retirement is not a single date on the calendar. It is a transition shaped by
            decisions made years in advance.&rdquo;
          </p>

          <div className="mt-14 grid gap-8 text-left sm:grid-cols-3">
            {philosophySteps.map((step, i) => (
              <div key={step.title} className="border-t border-brass-400/40 pt-5">
                <span className="text-sm font-semibold text-brass-400">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col items-start gap-8 rounded-3xl bg-mist-100 p-10 sm:p-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Let&rsquo;s Start a Conversation
            </h2>
            <p className="mt-3 max-w-xl text-navy-600">
              Share a few details and {site.advisorName} will follow up to schedule a consultation
              at a time that works for you.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brass-600"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
