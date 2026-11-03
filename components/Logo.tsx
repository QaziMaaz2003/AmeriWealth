import Link from "next/link";

export function Logo({ dark = false }: { dark?: boolean }) {
  const ink = dark ? "#ffffff" : "var(--color-navy-800)";
  const accent = "var(--color-brass-500)";

  return (
    <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="AmeriWealth Financial home">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke={accent} strokeWidth="1" />
        <text
          x="20"
          y="21.5"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-serif), Georgia, serif"
          fontSize="16"
          fontWeight="700"
          fill={ink}
          letterSpacing="-0.5"
        >
          AW
        </text>
        <line x1="10" y1="29" x2="30" y2="29" stroke={accent} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif-display text-[1.15rem] font-semibold tracking-tight ${dark ? "text-white" : "text-navy-900"}`}
        >
          AmeriWealth
        </span>
        <span
          className={`text-[0.65rem] font-medium tracking-[0.3em] uppercase ${dark ? "text-navy-200" : "text-brass-600"}`}
        >
          Financial
        </span>
      </span>
    </Link>
  );
}
