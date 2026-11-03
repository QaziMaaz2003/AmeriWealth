import type { ReactNode } from "react";

const variants = {
  light: "bg-white text-navy-800 shadow-sm shadow-navy-900/5",
  mist: "bg-mist-100 text-navy-800",
  dark: "bg-navy-800 text-brass-400",
} as const;

export function IconBadge({
  children,
  variant = "mist",
  className = "",
}: {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
}

export function NumberBadge({
  n,
  variant = "dark",
}: {
  n: number | string;
  variant?: "dark" | "outline-light";
}) {
  if (variant === "outline-light") {
    return (
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-sm font-semibold text-white">
        {n}
      </div>
    );
  }
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-800 text-sm font-semibold text-brass-400">
      {n}
    </div>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-sm font-semibold uppercase tracking-[0.2em] text-brass-500 ${className}`}>
      {children}
    </p>
  );
}
