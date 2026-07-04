import Link from "next/link";
import { nav, site, instagram, line } from "@/lib/site";
import { EucaLeaf, EucaBranch } from "@/components/euca";

// フッター＝「土」。ページの一番下で枝を支える深い緑。
export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-euca-900 text-washi">
      <EucaBranch
        decorative
        className="pointer-events-none absolute -right-10 -top-16 h-[26rem] text-euca-300 opacity-[0.08]"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] md:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-full bg-euca-100 text-euca-800"
            >
              <EucaLeaf className="h-[18px] w-[18px]" />
            </span>
            <span className="font-display text-2xl">studio Aula</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#C9D2BE]">
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
              className="inline-flex items-center gap-2 rounded-full border border-euca-700 px-4 py-2.5 text-sm font-bold text-washi transition-colors hover:bg-euca-800"
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
          <h3 className="font-display text-base text-euca-300">メニュー</h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="font-bold text-washi/90 transition-colors hover:text-euca-200"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-euca-300">アクセス</h3>
          <ul className="mt-4 space-y-2.5 text-[#C9D2BE]">
            <li className="keep-all font-bold text-washi/90">{site.address}</li>
            <li className="text-sm">ご予約：LINE・フォームから</li>
            {site.hours.map((h) => (
              <li key={h.day} className="text-sm">
                {h.day}　{h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative border-t border-euca-800">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-washi/60 md:px-8">
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
