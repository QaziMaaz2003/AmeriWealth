"use client";

import Script from "next/script";
import { CalendarClock, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function CalendlyEmbed() {
  if (!site.calendlyUrl) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-navy-200 bg-mist-50 px-6 py-16 text-center">
        <CalendarClock className="h-10 w-10 text-brass-500" />
        <h3 className="mt-4 font-serif-display text-xl font-semibold text-navy-900">
          Online Scheduling Coming Soon
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-600">
          Direct calendar booking isn&rsquo;t connected yet. In the meantime, use the form above
          or call {site.advisorName} directly to set up a time.
        </p>
        <a
          href={site.phoneHref}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brass-600"
        >
          <Phone className="h-4 w-4" />
          Call {site.phoneDisplay}
        </a>
      </div>
    );
  }

  const embedUrl = `${site.calendlyUrl}?primary_color=dcc08e&text_color=16213a&background_color=ffffff`;

  return (
    <>
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <div
        className="calendly-inline-widget overflow-hidden rounded-2xl"
        data-url={embedUrl}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </>
  );
}
