import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="AmeriWealth Financial home">
      <span className="font-serif-display text-xl font-semibold text-white">AW</span>
      <span className="flex flex-col leading-none">
        <span className="font-serif-display text-[1.15rem] font-semibold tracking-tight text-white">
          AmeriWealth
        </span>
        <span className="flex items-center gap-1.5 text-[0.65rem] font-medium tracking-[0.3em] text-brass-400">
          <span className="h-px w-3 bg-brass-400/60" />
          FINANCIAL
          <span className="h-px w-3 bg-brass-400/60" />
        </span>
      </span>
    </Link>
  );
}
