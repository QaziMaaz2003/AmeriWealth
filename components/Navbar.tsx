"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brass-400 ${
                  active ? "text-white" : "text-navy-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-navy-200 hover:text-brass-400"
          >
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-brass-400 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-brass-300"
          >
            Schedule a Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-900 px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium ${
                  pathname === link.href ? "text-white" : "text-navy-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="flex items-center gap-2 text-base font-medium text-navy-200">
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-brass-400 px-5 py-3 text-center text-sm font-semibold text-navy-950"
            >
              Schedule a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
