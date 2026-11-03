import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/IconBadge";

export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  ctaLabel = "Schedule a Consultation",
  ctaHref = "/contact",
  children,
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-navy-950">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/88 to-navy-900/70" />
      <div className="absolute inset-0 bg-navy-950/35" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2.5">
            <span className="h-px w-8 bg-brass-400" />
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-5 font-serif-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.2rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100">{description}</p>
          {children ?? (
            <div className="mt-9">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brass-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-brass-300"
              >
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
