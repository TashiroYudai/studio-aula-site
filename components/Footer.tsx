import Link from "next/link";
import { nav, site, instagram, line } from "@/lib/site";

const CYAN = "#0FA5CB";
const CYAN_DEEP = "#0A6E8C";
const DEEP = "#08283A";
const BRAND = '"Space Grotesk", "Zen Kaku Gothic New", sans-serif';
const MONO = '"Space Mono", monospace';
const BODY = '"Zen Kaku Gothic New", system-ui, sans-serif';

export function Footer() {
  return (
    <footer className="w-full" style={{ background: DEEP, color: "#CFE6EF", fontFamily: BODY }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] md:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-lg text-lg font-bold text-white"
              style={{ background: `linear-gradient(135deg, #12b0d8, ${CYAN_DEEP})`, fontFamily: BRAND }}
            >
              A
            </span>
            <span className="text-xl font-semibold tracking-tight text-white" style={{ fontFamily: BRAND }}>
              studio Aula
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed" style={{ color: "#9FC2D0" }}>
            子供からお年寄りまで、一人ひとりに必要なトレーニングで「動ける体」を育てるパーソナルトレーニング教室です。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={line.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "#06C755" }}
            >
              <LineGlyph /> LINE
            </a>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
              style={{ borderColor: "rgba(127,205,230,.4)", color: "#CFE6EF" }}
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
          <h3 className="text-[12px] font-bold tracking-widest" style={{ fontFamily: MONO, color: CYAN }}>
            MENU
          </h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="font-bold transition-colors hover:text-white" style={{ color: "#CFE6EF" }}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[12px] font-bold tracking-widest" style={{ fontFamily: MONO, color: CYAN }}>
            ACCESS
          </h3>
          <ul className="mt-4 space-y-2.5" style={{ color: "#B7D4DF" }}>
            <li className="font-bold text-white">{site.address}</li>
            <li className="text-sm">ご予約：LINE・フォームから</li>
            {site.hours.map((h) => (
              <li key={h.day} className="text-sm">
                {h.day}　{h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(127,205,230,.16)" }}>
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs md:px-8" style={{ color: "#7FA3B2", fontFamily: MONO }}>
          © {new Date().getFullYear()} {site.name} — 熊本市中央区壺川. All rights reserved.
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
