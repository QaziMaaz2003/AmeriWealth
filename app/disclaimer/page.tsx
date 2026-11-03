import type { Metadata } from "next";
import { Eyebrow } from "@/components/IconBadge";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Disclaimer",
  description: `Disclosures and limitations relating to the information presented on the ${site.businessName} website.`,
};

const lastUpdated = "November 2026";

export default function DisclaimerPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-3 font-serif-display text-4xl font-semibold text-navy-900 sm:text-5xl">
        Website Disclaimer
      </h1>
      <p className="mt-4 text-sm text-navy-500">Last updated: {lastUpdated}</p>

      <div className="mt-10 space-y-10 leading-relaxed text-navy-700">
        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">
            General Information Only
          </h2>
          <p className="mt-3">
            The content on this website is provided by {site.businessName} for general
            informational and educational purposes only. It does not constitute financial, tax,
            legal, or investment advice, and it is not a recommendation to buy, sell, or hold any
            security or insurance product. Nothing on this site should be relied upon as a
            substitute for individualized advice from a qualified professional familiar with your
            specific circumstances.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">
            No Guarantee of Results
          </h2>
          <p className="mt-3">
            Retirement and financial outcomes depend on each individual&rsquo;s circumstances, and
            no particular result, rate of return, or level of income can be guaranteed. Any
            examples, strategies, or illustrations discussed on this website or during a
            consultation are for educational purposes and do not represent a promise of future
            performance.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">
            Insurance and Advisory Disclosure
          </h2>
          <p className="mt-3">
            {site.advisorName} is licensed in Life, Accident and Health insurance and holds a{" "}
            {site.credential} designation. Insurance products discussed through this website or in
            a consultation are presented only where appropriate and only within the products{" "}
            {site.advisorName} is licensed and authorized to offer. A {site.credential} designation
            reflects a commitment to a fiduciary standard of care but is not a guarantee of any
            specific outcome.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">
            Consult Qualified Professionals
          </h2>
          <p className="mt-3">
            Tax, legal, and estate planning questions should be directed to a qualified attorney
            or tax professional. {site.businessName} does not provide legal or tax advice, and
            nothing on this website should be interpreted as such.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">
            External Links
          </h2>
          <p className="mt-3">
            This website may reference or link to third-party resources for convenience.{" "}
            {site.businessName} does not control and is not responsible for the content, accuracy,
            or practices of any external site.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">
            Limitation of Liability
          </h2>
          <p className="mt-3">
            {site.businessName} makes reasonable efforts to keep the information on this website
            accurate and current but makes no warranty, express or implied, regarding its
            completeness or accuracy. To the fullest extent permitted by law, {site.businessName}
            {" "}and {site.advisorName} disclaim liability for any loss or damage arising from
            reliance on this website&rsquo;s content.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">
            Changes to This Disclaimer
          </h2>
          <p className="mt-3">
            This disclaimer may be updated from time to time. Any changes will be reflected on
            this page with a new &ldquo;last updated&rdquo; date.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">Contact Us</h2>
          <p className="mt-3">
            Questions about this disclaimer can be directed to {site.advisorName} at{" "}
            <a href={site.emailHref} className="font-medium text-navy-900 underline underline-offset-2 hover:text-brass-600">
              {site.email}
            </a>{" "}
            or{" "}
            <a href={site.phoneHref} className="font-medium text-navy-900 underline underline-offset-2 hover:text-brass-600">
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
