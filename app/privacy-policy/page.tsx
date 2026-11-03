import type { Metadata } from "next";
import { Eyebrow } from "@/components/IconBadge";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.businessName}, explaining what information is collected through this website and how it is used.`,
};

const lastUpdated = "November 2026";

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-3 font-serif-display text-4xl font-semibold text-navy-900 sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-navy-500">Last updated: {lastUpdated}</p>

      <div className="mt-10 space-y-10 leading-relaxed text-navy-700">
        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">
            Introduction
          </h2>
          <p className="mt-3">
            {site.businessName} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            respects your privacy. This policy explains what information this website collects,
            how it is used, and the choices available to you. By using this website, you agree to
            the practices described here.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">
            Information We Collect
          </h2>
          <p className="mt-3">
            When you submit the contact form on this website, we collect the information you
            provide directly, which may include your name, email address, phone number, and the
            message or details you share about your retirement or financial planning questions.
            We do not collect this information unless you choose to submit it.
          </p>
          <p className="mt-3">
            This website may also collect limited technical information automatically, such as
            browser type and general usage data, through standard web hosting and analytics
            infrastructure. This information is used only to maintain and improve the site.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">
            How We Use Your Information
          </h2>
          <p className="mt-3">Information submitted through this website is used only to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Respond to your inquiry and schedule a consultation, if requested;</li>
            <li>Communicate with you about the retirement planning services you asked about;</li>
            <li>Maintain accurate records of client and prospective client communications.</li>
          </ul>
          <p className="mt-3">
            We do not sell, rent, or trade your personal information to third parties for
            marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">
            How Your Information Is Shared
          </h2>
          <p className="mt-3">
            Contact form submissions are delivered using a third-party form processing service.
            That service transmits your submission to {site.advisorName} and is not used for any
            other purpose. We do not share your information with any other third party except
            where required by law.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">
            Data Security
          </h2>
          <p className="mt-3">
            We take reasonable steps to protect the information submitted through this website.
            However, no method of electronic transmission or storage is completely secure, and we
            cannot guarantee absolute security.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">
            Your Choices
          </h2>
          <p className="mt-3">
            You are never required to submit personal information to browse this website. If you
            have previously submitted information and would like it corrected or removed from our
            records, contact us using the information below.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">
            Children&rsquo;s Privacy
          </h2>
          <p className="mt-3">
            This website is intended for adults and is not directed at individuals under the age
            of 18. We do not knowingly collect information from children.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">
            Changes to This Policy
          </h2>
          <p className="mt-3">
            This policy may be updated from time to time. Any changes will be reflected on this
            page with a new &ldquo;last updated&rdquo; date.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-xl font-semibold text-navy-900">Contact Us</h2>
          <p className="mt-3">
            If you have questions about this privacy policy or how your information is handled,
            contact {site.advisorName} at{" "}
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
