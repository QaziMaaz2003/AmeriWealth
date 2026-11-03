"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/lib/site";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-navy-100">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={open}
            >
              <span className="font-serif-display text-lg font-medium text-navy-900">
                {faq.question}
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-700">
                {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            {open && (
              <p className="pb-5 pr-14 text-sm leading-relaxed text-navy-600">{faq.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
