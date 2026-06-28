import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { lessons } from "@/lib/site";

export const metadata: Metadata = {
  title: "レッスン紹介 | Studio Aula",
  description:
    "SB（Soft & balance）/ MS（Move & Stretch）/ パーソナル / ZUMBA。ニーズに合わせた4つのレッスンの詳しい内容をご紹介します。",
};

export default function LessonsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Lessons / 04"
        title="ニーズに合わせた、4つのレッスン"
        lead="目的や好みに合わせて選べます。組み合わせも自由。気になるレッスンは、ぜひ体験してみてください。"
      />

      {/* レッスン一覧クイックリンク */}
      <div className="mx-auto max-w-5xl px-6 pt-10 md:px-8">
        <div className="flex flex-wrap gap-3">
          {lessons.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2.5 font-bold text-ink transition hover:border-pine-300 hover:text-pine-700"
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: l.dot }} />
              {l.name}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-14 md:px-8">
        <div className="space-y-20">
          {lessons.map((l, i) => (
            <article
              key={l.id}
              id={l.id}
              className="grid scroll-mt-24 grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              {/* 画像 */}
              <div className={`relative ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div
                  className="absolute inset-0 -rotate-2 rounded-frame"
                  style={{ background: l.dot + "26" }}
                  aria-hidden
                />
                <img
                  src={l.image}
                  alt={l.name}
                  className="relative aspect-[4/3] w-full rounded-frame border border-line object-cover shadow-card"
                  loading="lazy"
                />
              </div>

              {/* テキスト */}
              <div>
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-sm font-bold tracking-wider text-white"
                    style={{ background: l.dot }}
                  >
                    {l.name}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-sub">
                    {l.sub}
                  </span>
                </div>

                <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-ink md:text-3xl">
                  {l.lead}
                </h2>
                <p className="mt-4 leading-relaxed text-sub">{l.description}</p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="label">Contents — レッスンの内容</p>
                    <ul className="mt-2.5 space-y-2">
                      {l.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sub">
                          <Dot color={l.dot} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="label">For — こんな方に</p>
                    <ul className="mt-2.5 flex flex-wrap gap-2">
                      {l.effects.map((e) => (
                        <li
                          key={e}
                          className="rounded-full bg-mist px-3 py-1.5 text-sm font-bold text-sub"
                        >
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-card border border-line bg-card px-5 py-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-sub">Price</span>
                  <span className="font-display text-xl font-bold text-ink">{l.price}</span>
                </div>

                {l.note && (
                  <p className="mt-3 rounded-card bg-honey-50 px-4 py-3 text-sm font-medium text-honey-600">
                    ※ {l.note}
                  </p>
                )}

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full bg-pine-600 px-7 py-3.5 font-bold text-card shadow-soft transition hover:bg-pine-700"
                  >
                    このレッスンを体験する
                  </Link>
                  <Link
                    href="/#schedule"
                    className="rounded-full border border-line bg-card px-7 py-3.5 font-bold text-ink transition hover:border-pine-300 hover:text-pine-700"
                  >
                    スケジュールを見る
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-8">
        <div className="mx-auto max-w-4xl rounded-frame bg-pine-700 px-8 py-14 text-center text-paper shadow-lift">
          <p className="font-mono text-xs uppercase tracking-label text-honey-300">Not sure?</p>
          <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">どれが合うか、迷ったら</h2>
          <p className="mx-auto mt-3 max-w-md text-paper/85">
            体験＆カウンセリングで、あなたにぴったりのレッスンをご提案します。
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-full bg-honey-300 px-9 py-4 text-lg font-bold text-pine-800 shadow-soft transition hover:scale-[1.03]"
          >
            体験を申し込む
          </Link>
        </div>
      </section>
    </>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span
      className="mt-2.5 h-2 w-2 shrink-0 rounded-full"
      style={{ background: color }}
      aria-hidden
    />
  );
}
