import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Message Sent",
  description: "Thank you for reaching out to AmeriWealth Financial.",
};

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden bg-navy-900 bg-radial-navy">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-32">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brass-400">
          <CheckCircle2 className="h-8 w-8 text-navy-950" />
        </div>
        <h1 className="mt-6 font-serif-display text-3xl font-semibold text-white sm:text-4xl">
          Thank you for reaching out
        </h1>
        <p className="mt-4 text-lg text-navy-200">
          Your message has been sent to {site.businessName}. {site.advisorName} typically
          responds within one business day — feel free to call {site.phoneDisplay} in the
          meantime.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brass-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-brass-300"
        >
          Back to home
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
