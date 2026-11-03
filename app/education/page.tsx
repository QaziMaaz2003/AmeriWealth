import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Eyebrow } from "@/components/IconBadge";
import { PageHero } from "@/components/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import { FaqAccordion } from "@/components/FaqAccordion";
import { educationConcepts, educationalResources, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Financial education and retirement planning resources from AmeriWealth Financial, covering income, protection, and the concepts behind good decisions.",
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        image="/images/hero/education-hero.jpg"
        imageAlt="A woman reading by a sunlit window"
        eyebrow="Financial Education"
        title={
          <>
            Knowledge That Puts You{" "}
            <span className="font-serif-display italic text-brass-400">
              in Control
            </span>
          </>
        }
        description="Confident retirement decisions start with understanding. Explore the concepts and resources behind the choices that matter most."
        ctaLabel="Browse the FAQ"
        ctaHref="#faq"
      />

      {/* Financial Education */}
      <section className="bg-mist-50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal className="max-w-2xl">
            <Eyebrow>Financial Education</Eyebrow>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Understand the{" "}
              <span className="italic text-brass-600">
                Concepts Behind Good Decisions
              </span>
            </h2>
            <p className="mt-4 text-navy-600">
              Confident decisions start with understanding. These foundational
              ideas shape nearly every retirement conversation.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {educationConcepts.map((concept) => (
              <RevealItem
                key={concept.title}
                className="group rounded-2xl bg-white p-6"
              >
                <ServiceIcon
                  icon={concept.icon}
                  className="h-6 w-6 text-brass-500"
                />
                <h3 className="relative mt-4 inline-block font-serif-display text-lg font-semibold text-navy-900">
                  {concept.title}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brass-500 transition-all duration-300 group-hover:w-full" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {concept.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal className="flex items-start justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Educational Resources</Eyebrow>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Learn at{" "}
              <span className="italic text-brass-600">Your Own Pace</span>
            </h2>
            <p className="mt-4 text-navy-600">
              Explore the topics that matter most to your planning. Have a
              question about any of them? Bring it to a consultation.
            </p>
          </div>
          <BookOpen className="hidden h-10 w-10 shrink-0 text-brass-400 sm:block" />
        </Reveal>

        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {educationalResources.map((resource) => (
            <RevealItem
              key={resource.title}
              className="group flex flex-col rounded-2xl border border-navy-100 p-7 transition-colors hover:border-brass-300"
            >
              <h3 className="relative inline-block self-start font-serif-display text-xl font-semibold text-navy-900">
                {resource.title}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brass-500 transition-all duration-300 group-hover:w-full" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {resource.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-navy-100 pt-5 text-sm text-navy-600">
                {resource.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass-500" />
                    {topic}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-brass-600"
              >
                Discuss this topic
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 bg-mist-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Questions Clients{" "}
              <span className="italic text-brass-600">Often Ask</span>
            </h2>
            <p className="mt-4 text-navy-600">
              Clear answers to common retirement questions. If yours is not
              listed, reach out and we will be glad to talk it through.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-navy-300 px-6 py-3 text-sm font-semibold text-navy-800 transition-colors hover:border-navy-900"
            >
              Ask Your Question
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl bg-white p-2 sm:p-4">
            <FaqAccordion />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy-900 bg-radial-navy">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 text-left sm:px-8 sm:py-20">
          <h2 className="font-serif-display text-3xl font-semibold text-white sm:text-4xl">
            Bring your{" "}
            <span className="italic text-brass-400">
              questions to a consultation
            </span>
          </h2>
          <p className="max-w-xl text-navy-200">
            {site.advisorName} is glad to walk through any of these topics in
            more detail, at a pace that works for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brass-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-brass-300"
          >
            Schedule a Consultation
          </Link>
        </Reveal>
      </section>
    </>
  );
}
