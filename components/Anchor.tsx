/**
 * Stylized Rhode Island anchor, drawn to match the state flag's emblem.
 * Inherits color via currentColor so it can be gold, navy, or white.
 */
export default function Anchor({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      >
        <circle cx="50" cy="13" r="8" />
        <path d="M50 21v63" />
        <path d="M31 35h38" />
        <path d="M15 60c5 19 19 25 35 25s30-6 35-25" />
      </g>
      <path d="M17 57 L3 63 L21 72 Z" fill="currentColor" />
      <path d="M83 57 L97 63 L79 72 Z" fill="currentColor" />
    </svg>
  );
}
