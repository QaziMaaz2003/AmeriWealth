import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MapPin, ShieldCheck } from "lucide-react";
import { GeoBackdrop } from "@/components/GeoBackdrop";
import { ServiceIcon } from "@/components/ServiceIcon";
import { approachSteps, services, site } from "@/lib/site";

const credentials = [
  { icon: BadgeCheck, label: site.credential },
  { icon: ShieldCheck, label: "Licensed: Life, Accident & Health" },
  { icon: MapPin, label: `Serving ${site.location} Families` },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <GeoBackdrop variant="light" />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass-600">
              {site.credential} &middot; {site.location}
            </p>
            <h1 className="mt-4 font-serif-display text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
              Retirement &amp; financial planning guided by fiduciary care
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-700">
              {site.advisorName} has spent his career helping families turn smart insurance
              decisions into long-term investment growth — listening to your goals first, and
              building a plan designed around them.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brass-600"
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-300 px-7 py-3.5 text-sm font-semibold text-navy-800 transition-colors hover:border-navy-900"
              >
                Meet Craig
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {credentials.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-2.5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brass-600" />
                  <dd className="text-sm font-medium text-navy-700">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-navy-100 to-mist-300" />
            <div className="overflow-hidden rounded-[1.75rem] border border-white shadow-xl shadow-navy-900/10">
              <Image
                src="/images/craig-headshot.png"
                alt={`${site.advisorName}, ${site.advisorTitle} at ${site.businessName}`}
                width={540}
                height={684}
                preload
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl border border-navy-100 bg-white px-5 py-4 text-center shadow-lg">
              <p className="font-serif-display text-lg font-semibold text-navy-900">
                {site.advisorName}
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-brass-600">
                {site.advisorTitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass-600">
            How We Help
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            A full picture of your financial future
          </h2>
          <p className="mt-4 text-navy-600">
            From protecting your family to growing what you&apos;ve saved, every recommendation is
            built around your goals — not a product line.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group rounded-2xl border border-navy-100 bg-white p-7 shadow-sm shadow-navy-900/5 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-800 group-hover:bg-brass-100 group-hover:text-brass-700">
                <ServiceIcon icon={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif-display text-xl font-semibold text-navy-900">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-navy-600">{service.short}</p>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-brass-600"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-mist-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-white shadow-lg shadow-navy-900/10">
            <Image
              src="/images/craig-headshot.png"
              alt={site.advisorName}
              width={540}
              height={684}
              className="h-auto w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass-600">
              About {site.advisorName}
            </p>
            <blockquote className="mt-4 font-serif-display text-2xl font-medium leading-snug text-navy-900 sm:text-3xl">
              &ldquo;My passion has always been finding ways to help people.&rdquo;
            </blockquote>
            <p className="mt-6 leading-relaxed text-navy-600">
              Craig started in Life and Health insurance after graduating from college with
              Mutual of New York, working with his father. They grew to specialize in buying
              term insurance and investing the cost savings in mutual funds — a philosophy that
              naturally led Craig to a career as a financial consultant.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-navy-300 px-6 py-3 text-sm font-semibold text-navy-800 transition-colors hover:border-navy-900"
            >
              Read Craig&rsquo;s story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass-600">
            Our Approach
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Listen. Educate. Solve.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {approachSteps.map((step, i) => (
            <div key={step.title}>
              <span className="font-serif-display text-5xl font-semibold text-navy-100">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-navy-900">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-navy-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative overflow-hidden bg-navy-900">
        <GeoBackdrop variant="dark" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-serif-display text-3xl font-semibold text-white sm:text-4xl">
              Let&rsquo;s build a plan for your future
            </h2>
            <p className="mt-3 max-w-xl text-navy-200">
              A conversation costs nothing. Reach out and let&rsquo;s talk through where you are
              today and where you want retirement to take you.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brass-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-brass-400"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
