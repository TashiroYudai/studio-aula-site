import Link from "next/link";
import { nav, site, instagram, line } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-sun-500 text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <circle cx="12" cy="12" r="6" />
              </svg>
            </span>
            <span className="font-display text-lg font-bold text-white">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            子供からお年寄りまで、一人ひとりに必要なトレーニングで
            「動ける体」を育てるパーソナルトレーニング教室です。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={line.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-4 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 3C6.9 3 2.8 6.3 2.8 10.4c0 3.7 3.3 6.8 7.7 7.4.3.06.7.2.8.46.07.24.05.6.02.85l-.13.8c-.04.24-.19.94.82.51 1.01-.42 5.45-3.21 7.44-5.5 1.37-1.5 2.03-3.02 2.03-4.52C21.5 6.3 17.4 3 12 3z" />
              </svg>
              LINE
            </a>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-bold text-cream/90 transition hover:border-sun-300 hover:text-white"
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
          <h3 className="font-display text-sm font-bold tracking-widest text-sun-300">
            メニュー
          </h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-cream/80 transition hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-sun-300">
            アクセス
          </h3>
          <ul className="mt-4 space-y-2.5 text-cream/80">
            <li>{site.address}</li>
            <li>
              TEL{" "}
              <a href={`tel:${site.tel}`} className="hover:text-white">
                {site.tel}
              </a>
            </li>
            {site.hours.map((h) => (
              <li key={h.day} className="text-sm text-cream/70">
                {h.day}　{h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-cream/50 md:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
