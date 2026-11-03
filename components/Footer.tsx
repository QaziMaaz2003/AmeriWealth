import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, services, site } from "@/lib/site";

const year = 2026;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-navy-800 bg-navy-900 text-navy-200">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
              Fiduciary retirement and financial planning for Texas families — listening first,
              educating always, and building plans around what matters to you.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brass-400">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-navy-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              {services.slice(0, 2).map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="text-navy-300 hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brass-400">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-300">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brass-400" />
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brass-400" />
                <a href={site.emailHref} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-brass-400" />
                Serving clients across {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-navy-800 pt-6 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.businessName}. {site.advisorName}, {site.advisorTitle} &middot; NPN #
            {site.npn}
          </p>
          <p className="max-w-xl sm:text-right">
            {site.advisorName} is licensed in Life, Accident and Health insurance and holds a{" "}
            {site.credential} designation. Information on this site is for general educational
            purposes and does not constitute financial, legal, or tax advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
