import type { CSSProperties } from "react";

/** 手描き風の波線（見出しの下線など）。親に .reveal.in が付くと左から描かれる。 */
export function Scribble({
  className = "",
  color = "#C0492A",
  delay = "0.1s",
}: {
  className?: string;
  color?: string;
  delay?: string;
}) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 300 16"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="draw"
        d="M3 10 C 48 3 92 13 140 8 C 188 3 236 13 297 8"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        style={{ "--len": 340, "--delay": delay } as CSSProperties}
      />
    </svg>
  );
}
