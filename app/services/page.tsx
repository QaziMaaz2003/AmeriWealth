import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, DollarSign, Shield, ShieldPlus } from "lucide-react";
import { Eyebrow, NumberBadge } from "@/components/IconBadge";
import { ServiceIcon } from "@/components/ServiceIcon";
import {
  incomeSources,
  insuranceSteps,
  lifeStages,
  processSteps,
  retirementPlanningItems,
  wealthProtectionItems,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Retirement planning, income strategies, wealth protection, and insurance solutions from Craig Anger at AmeriWealth Financial.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Retirement Planning */}
      <section id="retirement-planning" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <Eyebrow>Retirement Planning</Eyebrow>
          <h1 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Retirement Planning That Starts With Your Goals
          </h1>
          <p className="mt-4 text-navy-600">
            A sound plan answers practical questions about the years ahead: what you will need,
            when you will need it, and how your current resources line up with those needs.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {retirementPlanningItems.map((item) => (
            <div key={item.title} className="rounded-2xl border border-navy-100 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist-100 text-navy-800">
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

      {/* Retirement Income Strategies */}
      <section className="bg-mist-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Retirement Income Strategies</Eyebrow>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Turning Savings Into Dependable Income
            </h2>
            <p className="mt-5 leading-relaxed text-navy-600">
              Many people reach retirement with several potential income sources. The question is
              how they work together, and how each one is timed, taxed, and coordinated.
            </p>
            <p className="mt-4 leading-relaxed text-navy-600">
              Evaluating these sources carefully helps you understand which ones may provide
              steady income, which may be variable, and how to plan for inflation and a
              potentially long retirement.
            </p>
          </div>

          <div className="rounded-3xl bg-navy-900 p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-400">
              Potential Income Sources
            </p>
            <ul className="mt-5 divide-y divide-white/10">
              {incomeSources.map((source, i) => (
                <li key={source} className="flex items-center gap-4 py-3.5">
                  <span className="font-serif-display text-lg text-brass-400">0{i + 1}</span>
                  <span className="text-sm text-navy-100">{source}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-white/5 p-5">
              <p className="text-sm leading-relaxed text-navy-200">
                Each source is reviewed for its timing, flexibility, and tax considerations, then
                coordinated into a single income picture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wealth Protection */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-brass-400">
              <Shield className="h-5 w-5" />
            </div>
            <Eyebrow className="mt-4">Wealth Protection</Eyebrow>
            <h2 className="mt-2 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Protecting What You Have Built
            </h2>
            <p className="mt-5 leading-relaxed text-navy-600">
              Protecting retirement savings is about more than growing them. It is about reducing
              avoidable gaps and making sure your plan holds up when circumstances change.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-navy-500">
              Where legal or tax questions arise, we recommend involving your qualified attorney
              or tax professional.
            </p>
          </div>

          <div className="rounded-2xl border border-navy-100">
            {wealthProtectionItems.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-4 px-6 py-5 ${
                  i < wealthProtectionItems.length - 1 ? "border-b border-navy-100" : ""
                }`}
              >
                <DollarSign className="h-5 w-5 shrink-0 text-brass-500" />
                <span className="text-navy-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Solutions */}
      <section className="bg-mist-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-brass-400">
              <ShieldPlus className="h-5 w-5" />
            </div>
            <Eyebrow className="mt-4">Insurance Solutions</Eyebrow>
            <h2 className="mt-2 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Insurance as Part of a Complete Retirement Plan
            </h2>
            <p className="mt-5 leading-relaxed text-navy-600">
              Insurance can support a retirement plan by helping protect income, cover certain
              long-term costs, and reduce the impact of unexpected events.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-navy-500">
              Insurance is discussed only where it fits your goals, and only within the products
              Craig is authorized to discuss. Specific options are reviewed during your
              consultation.
            </p>
          </div>

          <ul className="space-y-6">
            {insuranceSteps.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <NumberBadge n={i + 1} />
                <p className="pt-2 text-navy-800">{step}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Life stages */}
      <section className="relative overflow-hidden bg-navy-900 bg-radial-navy">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Financial Future Preparation</Eyebrow>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-white sm:text-4xl">
              Preparing for Every Stage of Life
            </h2>
            <p className="mt-4 text-navy-200">
              The right priorities change over time. Knowing where you are in the journey makes it
              easier to focus on the decisions that matter most right now.
            </p>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
            {lifeStages.map((stage) => (
              <div key={stage.phase} className="lg:px-6 lg:first:pl-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-400">
                  {stage.phase}
                </p>
                <h3 className="mt-2 font-serif-display text-2xl font-semibold text-white">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-300">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-20 mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <Eyebrow>Our Process</Eyebrow>
        <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
          A Simple Three-Step Path Forward
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-navy-600">
          No pressure and no jargon. Each step builds on the one before it.
        </p>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {processSteps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center">
              <NumberBadge n={`0${i + 1}`} />
              <h3 className="mt-4 font-serif-display text-xl font-semibold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{step.description}</p>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="mt-14 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brass-600"
        >
          Schedule a Consultation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
