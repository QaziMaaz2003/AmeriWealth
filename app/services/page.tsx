import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CalendarCheck, MessageCircle, NotebookPen } from "lucide-react";
import { GeoBackdrop } from "@/components/GeoBackdrop";
import { ServiceIcon } from "@/components/ServiceIcon";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Retirement planning, life insurance, investments and mutual funds, and fiduciary financial consulting from Craig Anger at AmeriWealth Financial.",
};

const process = [
  {
    icon: CalendarCheck,
    title: "Schedule a conversation",
    description: "Reach out by phone or the contact form to set up an introductory call.",
  },
  {
    icon: MessageCircle,
    title: "Discovery conversation",
    description: "Craig listens to your goals, your timeline, and what matters most to you.",
  },
  {
    icon: NotebookPen,
    title: "A personalized plan",
    description: "You'll walk away with clear, educated options — not a one-size-fits-all pitch.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <GeoBackdrop variant="light" />
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass-600">
            Services
          </p>
          <h1 className="mt-4 max-w-2xl font-serif-display text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
            Planning built around your whole financial picture
          </h1>
          <p className="mt-5 max-w-xl text-lg text-navy-700">
            From protecting your family to growing what you&rsquo;ve saved, every recommendation
            starts with your goals.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="space-y-6">
          {services.map((service, i) => (
            <div
              key={service.slug}
              id={service.slug}
              className="grid scroll-mt-28 gap-6 rounded-2xl border border-navy-100 bg-white p-7 shadow-sm shadow-navy-900/5 sm:p-9 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-800">
                <ServiceIcon icon={service.icon} className="h-7 w-7" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brass-600">
                  0{i + 1}
                </span>
                <h2 className="mt-1 font-serif-display text-2xl font-semibold text-navy-900">
                  {service.title}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-navy-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist-50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass-600">
              What to Expect
            </p>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Getting started is simple
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {process.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl bg-white p-7 shadow-sm shadow-navy-900/5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white">
                  {i + 1}
                </div>
                <step.icon className="mt-5 h-6 w-6 text-brass-600" />
                <h3 className="mt-3 font-semibold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900">
        <GeoBackdrop variant="dark" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-serif-display text-3xl font-semibold text-white sm:text-4xl">
              Not sure where to start?
            </h2>
            <p className="mt-3 max-w-xl text-navy-200">
              That&rsquo;s what the first conversation is for. Reach out to {site.advisorName} and
              talk through your options.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brass-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-brass-400"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
