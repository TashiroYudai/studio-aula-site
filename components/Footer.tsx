import Link from "next/link";
import { nav, site, instagram, line } from "@/lib/site";
import { Sprout } from "@/components/Sprout";

export function Footer() {
  return (
    <footer className="mt-24 bg-pine-800 text-paper/85">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] md:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-honey-300 text-pine-800">
              <Sprout className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold text-paper">{site.name}</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/65">
            子供からお年寄りまで、一人ひとりに必要なトレーニングで
            「動ける体」を育てるパーソナルトレーニング教室です。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={line.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-4 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
            >
              <LineGlyph /> LINE
            </a>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-4 py-2.5 text-sm font-bold text-paper/90 transition hover:border-honey-300 hover:text-paper"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h3 className="label text-honey-300">Menu</h3>
          <ul className="mt-5 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-paper/80 transition hover:text-paper">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label text-honey-300">Access</h3>
          <ul className="mt-5 space-y-2.5 text-paper/80">
            <li>{site.address}</li>
            <li className="text-sm text-paper/60">ご予約：LINE・フォームから</li>
            {site.hours.map((h) => (
              <li key={h.day} className="text-sm text-paper/60">
                {h.day}　{h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <p className="mx-auto max-w-6xl px-6 py-5 font-mono text-[11px] tracking-wider text-paper/45 md:px-8">
          © {new Date().getFullYear()} {site.name} — Kumamoto. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function LineGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3C6.9 3 2.8 6.3 2.8 10.4c0 3.7 3.3 6.8 7.7 7.4.3.06.7.2.8.46.07.24.05.6.02.85l-.13.8c-.04.24-.19.94.82.51 1.01-.42 5.45-3.21 7.44-5.5 1.37-1.5 2.03-3.02 2.03-4.52C21.5 6.3 17.4 3 12 3z" />
    </svg>
  );
}
