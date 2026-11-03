import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const exploreLinks = [
  { href: "/about", label: "About AmeriWealth" },
  { href: "/about#meet-craig", label: "Meet Craig Anger" },
  { href: "/services", label: "Retirement Services" },
  { href: "/education", label: "Financial Education" },
  { href: "/education#faq", label: "Frequently Asked Questions" },
];

const year = 2026;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-navy-900 text-navy-200">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
              Retirement-focused planning and personal guidance for individuals preparing for the
              next chapter of life.
            </p>
          </div>

          <div>
            <h3 className="font-serif-display text-lg font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-navy-300 hover:text-brass-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif-display text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-300">
              <li>
                {site.advisorName}, {site.advisorTitle}
              </li>
              <li>
                <a href={site.phoneHref} className="hover:text-brass-400">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>{site.location}, USA</li>
              <li>
                <Link href="/contact" className="font-medium text-brass-400 hover:text-brass-300">
                  Schedule a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs leading-relaxed text-navy-400">
          <p>
            The information on this website is provided for general educational purposes only. It
            is not tax, legal, or investment advice, and it is not an offer or solicitation to buy
            or sell any security or insurance product. Retirement outcomes depend on individual
            circumstances, and no particular result is guaranteed. Consult qualified tax and legal
            professionals regarding your specific situation. {site.advisorName} is licensed in
            Life, Accident and Health insurance and holds a {site.credential} designation.
          </p>
          <p className="mt-4">
            &copy; {year} {site.businessName}. All rights reserved. NPN #{site.npn}
          </p>
        </div>
      </div>
    </footer>
  );
}
