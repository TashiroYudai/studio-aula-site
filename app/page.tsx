import Link from "next/link";
import { site, lessons, features, news, schedule, instagram, concerns, testimonials, line } from "@/lib/site";

const lessonMap = Object.fromEntries(lessons.map((l) => [l.id, l]));

export default function Home() {
  return (
    <>
      <Hero />
      <Concerns />
      <Features />
      <Lessons />
      <Schedule />
      <Voices />
      <News />
      <CtaBand />
    </>
  );
}

/* ── お客様の声 ───────────────────────────────── */
function Voices() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="VOICE"
          title="通ってくれている方の声"
          lead="少人数・完全予約制だからこそ、一人ひとりに寄り添えます。実際に通われている方の声をご紹介します。"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-4xl border border-line bg-cream p-7 shadow-card"
            >
              <span className="font-display text-4xl leading-none text-sun-300" aria-hidden>
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-ink">
                {t.body}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-sun-100 font-display font-bold text-sun-600">
                  {t.who.slice(0, 1)}
                </span>
                <span>
                  <span className="block font-bold text-ink">{t.who}</span>
                  <span className="mt-0.5 inline-block rounded-full bg-leaf/10 px-2.5 py-0.5 text-xs font-bold text-leaf">
                    {t.tag}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-sub">
          ※ 掲載は一例です（実際にいただいた声に差し替え予定）。
        </p>
      </div>
    </section>
  );
}

/* ── お悩み相談バンド ───────────────────────── */
function Concerns() {
  return (
    <section className="px-6 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl rounded-5xl border border-sun-200 bg-gradient-to-br from-sun-50 to-cream p-8 text-center shadow-card md:p-12">
        {/* 前置き（小さめ） */}
        <p className="text-base font-bold text-sub md:text-lg">
          {concerns.goals.join("・")}は&thinsp;もちろん
        </p>

        {/* お悩み（主役・大きく強調） */}
        <h2 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
          その<span className="text-leaf">体のお悩み</span>、ご相談ください！
        </h2>

        <div className="mt-7 flex flex-wrap justify-center gap-3 md:gap-4">
          {concerns.troubles.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2.5 rounded-2xl bg-leaf px-7 py-4 font-display text-2xl font-bold text-white shadow-lift md:px-9 md:py-5 md:text-[2rem]"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M20.8 8.6a5.4 5.4 0 00-9-2.5 5.4 5.4 0 00-9 2.5C2 13 7.5 17 12 20c4.5-3 10-7 8.8-11.4z"
                  fill="currentColor"
                  opacity=".55"
                />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <p className="mt-6 text-base text-sub md:text-lg">
          そのほかの不調も、お気軽にどうぞ。
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-ink px-9 py-4 text-lg font-bold text-cream shadow-soft transition hover:scale-[1.03]"
        >
          お悩みを相談してみる
        </Link>
      </div>
    </section>
  );
}

/* ── ヒーロー ───────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 背景の陽だまりブロブ */}
      <div className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-sun-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-leaf/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-14 md:grid-cols-2 md:px-8 md:pb-24 md:pt-20">
        <div>
          <div className="flex animate-fade-up flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-sun-500 px-4 py-1.5 text-sm font-bold text-white shadow-soft">
              <span className="h-2 w-2 rounded-full bg-white" />
              少人数・完全予約制
            </span>
            <span className="inline-flex items-center rounded-full bg-sun-100 px-4 py-1.5 text-sm font-bold text-sun-700">
              子供からお年寄りまで
            </span>
          </div>
          <h1
            className="mt-5 animate-fade-up font-display text-[2rem] font-bold leading-[1.3] tracking-tight text-ink sm:text-5xl sm:leading-[1.25]"
            style={{ animationDelay: "0.08s" }}
          >
            一生モノの、<br />
            <span className="relative inline-block">
              動ける体
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  className="draw-underline"
                  d="M2 8 C 50 2, 150 2, 198 7"
                  stroke="#F79545"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
              {/* 最後にキラッと弾ける星 */}
              <svg
                className="underline-sparkle absolute -right-4 -bottom-4 h-5 w-5 text-sun-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 1.5l2.1 7.2c.2.6.6 1 1.2 1.2L22.5 12l-7.2 2.1c-.6.2-1 .6-1.2 1.2L12 22.5l-2.1-7.2c-.2-.6-.6-1-1.2-1.2L1.5 12l7.2-2.1c.6-.2 1-.6 1.2-1.2z" />
              </svg>
            </span>
            をつくろう。
          </h1>
          <p
            className="mt-7 max-w-md animate-fade-up text-lg leading-relaxed text-sub"
            style={{ animationDelay: "0.16s" }}
          >
            {site.subTagline}
          </p>
          <div
            className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.24s" }}
          >
            <Link
              href="/contact"
              className="rounded-full bg-sun-500 px-8 py-4 text-center text-lg font-bold text-white shadow-soft transition hover:bg-sun-600 hover:shadow-lift"
            >
              体験を申し込む
            </Link>
            <Link
              href="/programs"
              className="rounded-full border-2 border-line bg-white px-8 py-4 text-center text-lg font-bold text-ink transition hover:border-sun-300 hover:text-sun-600"
            >
              コースを見る
            </Link>
          </div>
          <p
            className="mt-6 animate-fade-up text-sm text-sub"
            style={{ animationDelay: "0.3s" }}
          >
            お電話でも受付：
            <a href={`tel:${site.tel}`} className="font-bold text-ink underline-offset-4 hover:underline">
              {site.tel}
            </a>
          </p>
        </div>

        {/* ヒーロー画像 */}
        <div className="relative">
          <div className="absolute inset-0 -rotate-3 rounded-[2.75rem] bg-sun-300/40" aria-hidden />
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1100&q=80"
            alt="笑顔で運動する様子"
            className="relative aspect-[4/5] w-full rounded-[2.75rem] object-cover shadow-card md:aspect-[4/4.4]"
            loading="eager"
          />
          {/* 浮かぶバッジ */}
          <div className="absolute -left-4 bottom-10 hidden animate-float rounded-2xl bg-white px-5 py-3 shadow-card sm:block">
            <p className="text-xs font-bold text-sub">通う世代</p>
            <p className="font-display text-lg font-bold text-sun-600">3世代いっしょに</p>
          </div>
          <div
            className="absolute -right-3 top-8 hidden animate-float rounded-2xl bg-leaf px-5 py-3 text-white shadow-card sm:block"
            style={{ animationDelay: "1.5s" }}
          >
            <p className="font-display text-lg font-bold">オーダーメイド</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── なぜ選ばれるのか ───────────────────────── */
function Features() {
  return (
    <section className="relative bg-sand py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading eyebrow="WHY US" title="なぜ、選ばれているのか" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-4xl border border-line bg-cream p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-sun-100 text-sun-600">
                <FeatureIcon name={f.icon} />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold leading-snug text-ink">
                {f.title}
              </h3>
              <p className="mt-3 leading-relaxed text-sub">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── ニーズに合わせた4つのレッスン ─────────────── */
function Lessons() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="LESSONS"
          title="ニーズに合わせた、4つのレッスン"
          lead="目的や好みに合わせて選べます。組み合わせも自由。あなたに合うレッスンが、きっと見つかります。"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lessons.map((l) => (
            <article
              key={l.id}
              className="group flex flex-col overflow-hidden rounded-4xl border border-line bg-cream shadow-card transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[5/3.6] overflow-hidden">
                <img
                  src={l.image}
                  alt={l.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 font-display text-sm font-bold text-ink shadow">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: l.dot }} />
                  {l.name}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold text-sub">{l.sub}</p>
                <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-ink">
                  {l.lead}
                </h3>
                <p className="mt-3 inline-flex w-fit rounded-full bg-sand px-3 py-1 text-xs font-bold text-sub">
                  {l.need}
                </p>
                <Link
                  href={`/lessons#${l.id}`}
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 font-bold text-sun-600 transition hover:gap-3"
                >
                  くわしく見る
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 週間スケジュール ───────────────────────── */
function Schedule() {
  return (
    <section id="schedule" className="bg-sand py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <SectionHeading
          eyebrow="WEEKLY SCHEDULE"
          title="週間スケジュール"
          lead="毎週のグループレッスンの基本スケジュールです。日によって変更があります。最新の予定は Instagram でご確認ください。"
        />

        <div className="mt-10 overflow-hidden rounded-4xl border border-line bg-cream">
          {schedule.map((d, i) => (
            <div
              key={d.day}
              className={`flex items-center gap-4 px-5 py-4 md:gap-6 md:px-7 ${
                i !== schedule.length - 1 ? "border-b border-line" : ""
              } ${d.kind ? "bg-sun-50/40" : ""}`}
            >
              <span
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-display text-xl font-bold ${
                  d.kind === "sat"
                    ? "bg-sky-100 text-sky-700"
                    : d.kind === "sun"
                    ? "bg-rose-100 text-rose-600"
                    : "bg-sand text-ink"
                }`}
              >
                {d.day}
              </span>

              <div className="flex flex-1 flex-wrap gap-2.5">
                {d.sessions.length === 0 ? (
                  <span className="font-bold text-rose-500">定休日</span>
                ) : (
                  d.sessions.map((s, j) => {
                    const l = lessonMap[s.lessonId];
                    return (
                      <span
                        key={j}
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2"
                      >
                        <span className="font-display text-sm font-bold tabular-nums text-ink">
                          {s.time}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-ink">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ background: l?.dot }}
                          />
                          {l?.name}
                        </span>
                        {s.note && (
                          <span className="rounded bg-sand px-1.5 py-0.5 text-xs font-bold text-sub">
                            {s.note}
                          </span>
                        )}
                      </span>
                    );
                  })
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 注記 */}
        <ul className="mt-5 space-y-1.5 px-1 text-sm text-sub">
          <li>※ 表示はグループレッスンのみです。<span className="font-bold text-ink">パーソナルは予約制</span>（空き状況は Instagram をご確認ください）。</li>
          <li>※ <span className="font-bold text-ink">木曜の ZUMBA</span> は<span className="font-bold text-ink">帯西コミュニティセンター</span>で開催します（通常のスタジオとは会場が異なります）。</li>
        </ul>

        {/* Instagram 導線 */}
        <div className="mt-8 flex flex-col items-center gap-4 rounded-4xl border border-line bg-cream p-7 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-lg font-bold text-ink">
              当日の最新スケジュールは Instagram へ
            </p>
            <p className="mt-1 text-sub">
              臨時レッスン・お休み・時間変更はインスタで随時お知らせしています。
            </p>
          </div>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-gradient-to-br from-sun-500 to-sun-600 px-7 py-4 text-lg font-bold text-white shadow-soft transition hover:shadow-lift"
          >
            <InstagramIcon />
            Instagramで確認
          </a>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

/* ── 新着情報 ──────────────────────────────── */
function News() {
  return (
    <section className="bg-sand py-20">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <SectionHeading eyebrow="NEWS" title="新着情報" />
        <ul className="mt-10 divide-y divide-line overflow-hidden rounded-4xl border border-line bg-cream">
          {news.map((n, i) => (
            <li key={i}>
              <Link
                href="/contact"
                className="flex flex-col gap-2 px-7 py-6 transition hover:bg-sand sm:flex-row sm:items-center sm:gap-5"
              >
                <time className="font-display text-sm font-bold tabular-nums text-sub">
                  {n.date}
                </time>
                <span className="w-fit rounded-full bg-sun-100 px-3 py-1 text-xs font-bold text-sun-700">
                  {n.category}
                </span>
                <span className="font-medium text-ink sm:flex-1">{n.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── CTA ───────────────────────────────────── */
function CtaBand() {
  return (
    <section className="px-6 py-20 md:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-5xl bg-gradient-to-br from-sun-500 to-sun-600 px-8 py-16 text-center shadow-lift md:py-20">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10" />
        <h2 className="relative font-display text-3xl font-bold leading-tight text-white md:text-4xl">
          まずは、体験から。
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/90">
          カウンセリングと体験トレーニングで、あなたに合うかを確かめてください。
        </p>
        <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={line.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#06C755] px-10 py-4 text-lg font-bold text-white shadow-soft transition hover:scale-[1.03]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 3C6.9 3 2.8 6.3 2.8 10.4c0 3.7 3.3 6.8 7.7 7.4.3.06.7.2.8.46.07.24.05.6.02.85l-.13.8c-.04.24-.19.94.82.51 1.01-.42 5.45-3.21 7.44-5.5 1.37-1.5 2.03-3.02 2.03-4.52C21.5 6.3 17.4 3 12 3z" />
            </svg>
            LINEで申し込む
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-white px-10 py-4 text-lg font-bold text-sun-600 shadow-soft transition hover:scale-[1.03]"
          >
            フォーム・お電話で
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── 部品 ──────────────────────────────────── */
function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-display text-sm font-bold tracking-[0.2em] text-sun-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-lg leading-relaxed text-sub">{lead}</p>}
    </div>
  );
}

function Check() {
  return (
    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-leaf/15 text-leaf">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M5 12.5l4.5 4.5L19 6.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const p = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "person")
    return (
      <svg width="30" height="30" viewBox="0 0 24 24">
        <circle cx="12" cy="7.5" r="3.2" {...p} />
        <path d="M5.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" {...p} />
      </svg>
    );
  if (name === "book")
    return (
      <svg width="30" height="30" viewBox="0 0 24 24">
        <path d="M4 5.5A1.5 1.5 0 015.5 4H11v15H5.5A1.5 1.5 0 014 17.5z" {...p} />
        <path d="M20 5.5A1.5 1.5 0 0018.5 4H13v15h5.5a1.5 1.5 0 001.5-1.5z" {...p} />
      </svg>
    );
  return (
    <svg width="30" height="30" viewBox="0 0 24 24">
      <path d="M4 11l8-6 8 6" {...p} />
      <path d="M6 10v8.5A1.5 1.5 0 007.5 20h9a1.5 1.5 0 001.5-1.5V10" {...p} />
    </svg>
  );
}
