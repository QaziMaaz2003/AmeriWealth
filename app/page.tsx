import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Eyebrow } from "@/components/IconBadge";
import { ServiceIcon } from "@/components/ServiceIcon";
import {
  aboutFeatures,
  heroStats,
  lifeStages,
  philosophySteps,
  serviceCategories,
  site,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-navy-900 bg-radial-navy">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
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

      {/* Services preview */}
      <section className="bg-mist-50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <Eyebrow>What We Do</Eyebrow>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
                Four Ways We Help You Prepare
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-navy-800 hover:text-brass-600"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm shadow-navy-900/5 transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist-100 text-navy-800 group-hover:bg-navy-800 group-hover:text-brass-400">
                  <ServiceIcon icon={service.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif-display text-lg font-semibold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{service.description}</p>
              </Link>
            ))}
          </div>
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

      {/* Lifestyle / life stages */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/hero/home-lifestyle.jpg"
              alt="A retired couple laughing together at home"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Eyebrow>Financial Future Preparation</Eyebrow>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Preparing for Every Stage of Life
            </h2>
            <p className="mt-4 leading-relaxed text-navy-600">
              The right priorities change over time. Knowing where you are in the journey makes it
              easier to focus on the decisions that matter most right now.
            </p>

            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {lifeStages.map((stage) => (
                <div key={stage.phase} className="border-l-2 border-brass-400 pl-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-600">
                    {stage.phase}
                  </dt>
                  <dd className="mt-1 font-serif-display text-lg font-semibold text-navy-900">
                    {stage.title}
                  </dd>
                  <dd className="mt-1 text-sm leading-relaxed text-navy-600">
                    {stage.description}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="/services#retirement-planning"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-brass-600"
            >
              Explore retirement planning
              <ArrowRight className="h-4 w-4" />
            </Link>
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
