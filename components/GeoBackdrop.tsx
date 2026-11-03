export function GeoBackdrop({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <svg
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <polygon
        points="0,0 42,0 10,100 0,100"
        fill={isDark ? "var(--color-navy-800)" : "var(--color-mist-100)"}
      />
      <polygon
        points="42,0 58,0 26,100 10,100"
        fill={isDark ? "var(--color-navy-700)" : "var(--color-mist-200)"}
      />
      <polygon
        points="100,0 100,35 70,100 55,100"
        fill={isDark ? "var(--color-navy-800)" : "var(--color-mist-100)"}
        opacity="0.6"
      />
    </svg>
  );
}
