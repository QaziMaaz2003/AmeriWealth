import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, GraduationCap, HeartHandshake, ShieldCheck } from "lucide-react";
import { GeoBackdrop } from "@/components/GeoBackdrop";
import { approachSteps, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Craig Anger",
  description:
    "Learn about Craig Anger, Certified Financial Fiduciary and Retirement Specialist at AmeriWealth Financial, and his approach to retirement planning.",
};

const credentials = [
  { icon: BadgeCheck, label: site.credential },
  { icon: ShieldCheck, label: "Life Insurance License" },
  { icon: ShieldCheck, label: "Accident & Health License" },
  { icon: GraduationCap, label: `NPN #${site.npn}` },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <GeoBackdrop variant="light" />
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass-600">
            About Us
          </p>
          <h1 className="mt-4 max-w-2xl font-serif-display text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
            Meet {site.advisorName}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-navy-700">
            {site.advisorTitle} at {site.businessName}, built on one idea: listen first, then
            help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl border border-navy-100 shadow-lg shadow-navy-900/10">
              <Image
                src="/images/craig-headshot.png"
                alt={site.advisorName}
                width={540}
                height={684}
                preload
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="mt-6 rounded-2xl border border-navy-100 bg-mist-50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-navy-500">
                Credentials
              </h2>
              <ul className="mt-4 space-y-3">
                {credentials.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm font-medium text-navy-800">
                    <Icon className="h-4.5 w-4.5 shrink-0 text-brass-600" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <blockquote className="border-l-4 border-brass-400 pl-6 font-serif-display text-2xl font-medium leading-snug text-navy-900 sm:text-3xl">
              &ldquo;My passion has always been finding ways to help people.&rdquo;
            </blockquote>

            <div className="mt-8 space-y-5 text-navy-700 leading-relaxed">
              <p>
                Craig started in Life and Health insurance after graduating from college with
                Mutual of New York, working alongside his father. Together, they grew to
                specialize in buying term insurance and, with the cost savings, investing the
                difference in mutual funds. That philosophy — protect efficiently, then invest the
                rest — naturally led Craig to a career as a financial consultant, where he
                currently serves as a {site.credential.toLowerCase()} and holds Life, Accident and
                Health licenses.
              </p>
              <p>
                Because of the complexity of our financial system, Craig believes the best way to
                channel his passion for helping people is by listening to the needs and goals of
                each client, taking the time to educate, and making every effort to provide
                thoughtful solutions — not off-the-shelf products.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="font-serif-display text-2xl font-semibold text-navy-900">
                How Craig works with you
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {approachSteps.map((step) => (
                  <div key={step.title} className="rounded-2xl border border-navy-100 p-5">
                    <HeartHandshake className="h-5 w-5 text-brass-600" />
                    <h3 className="mt-3 font-semibold text-navy-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-navy-900 p-8 sm:p-10">
              <h2 className="font-serif-display text-2xl font-semibold text-white">
                Ready to talk through your goals?
              </h2>
              <p className="mt-2 max-w-md text-navy-200">
                Schedule a no-pressure conversation with Craig about where you are today and
                where you want to be.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brass-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-brass-400"
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
