import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { lessons, instagram } from "@/lib/site";
import { EucaLeaf } from "@/components/euca";

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
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2.5 font-bold text-ink transition-colors hover:border-euca-400 hover:text-euca-700"
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
                  className={`absolute inset-0 ${
                    i % 2 === 0
                      ? "leaf-frame translate-x-3 translate-y-3"
                      : "leaf-frame-r -translate-x-3 translate-y-3"
                  }`}
                  style={{ background: l.dot + "26" }}
                  aria-hidden
                />
                <img
                  src={l.image}
                  alt={l.name}
                  className={`relative aspect-[4/3] w-full overflow-hidden border border-line object-cover shadow-leaf ${
                    i % 2 === 0 ? "leaf-frame" : "leaf-frame-r"
                  }`}
                  loading="lazy"
                />
              </div>

              {/* テキスト */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-euca-800 px-4 py-1.5 text-sm font-bold tracking-wider text-white">
                    <span className="h-2 w-2 rounded-full" style={{ background: l.dot }} aria-hidden />
                    {l.name}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-label text-euca-600">
                    {l.sub}
                  </span>
                </div>

                <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
                  {l.lead}
                </h2>
                <p className="mt-4 leading-relaxed text-sub">{l.description}</p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="label">Contents — レッスンの内容</p>
                    <ul className="mt-2.5 space-y-2">
                      {l.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sub">
                          <EucaLeaf className="mt-1.5 h-4 w-4 shrink-0 text-euca-500" aria-hidden />
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
                          className="rounded-full bg-euca-100 px-3 py-1.5 text-sm font-bold text-ink"
                        >
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-leaf border border-line bg-card px-5 py-4">
                  <span className="text-xs font-bold uppercase tracking-label text-euca-600">Price</span>
                  <span className="keep-all font-display text-xl font-medium text-ink">{l.price}</span>
                </div>

                {l.note && (
                  <p className="mt-3 rounded-leaf border border-euca-200 bg-euca-50 px-4 py-3 text-sm font-medium text-euca-800">
                    ※ {l.note}
                  </p>
                )}

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full bg-euca-700 px-7 py-3.5 font-bold text-white shadow-leaf transition-colors hover:bg-euca-800"
                  >
                    このレッスンを体験する
                  </Link>
                  <Link
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-line bg-card px-7 py-3.5 font-bold text-ink transition-colors hover:border-euca-400 hover:text-euca-700"
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
        <div className="mx-auto max-w-4xl rounded-frame bg-euca-800 px-8 py-14 text-center text-washi shadow-lift">
          <p className="text-xs font-bold uppercase tracking-label text-euca-200">Not sure?</p>
          <h2 className="mt-3 font-display text-2xl font-medium md:text-3xl">どれが合うか、迷ったら</h2>
          <p className="mx-auto mt-3 max-w-md text-washi/85">
            体験＆カウンセリングで、あなたにぴったりのレッスンをご提案します。
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-full bg-washi px-9 py-4 text-lg font-bold text-euca-800 shadow-lift transition-transform hover:-translate-y-0.5"
          >
            体験を申し込む
          </Link>
        </div>
      </section>
    </>
  );
}
