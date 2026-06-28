// ブランドマーク：芽（「育てる」＝体を育てる の象徴）
export function Sprout({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 21v-8.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 13C12 9.5 9.2 7.4 5.8 7.2 5.6 10.7 8.4 12.9 12 13Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M12 12C12 8.7 14.7 6.8 18 6.8 18.2 10 15.5 11.9 12 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
