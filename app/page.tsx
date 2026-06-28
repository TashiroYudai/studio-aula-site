import Link from "next/link";
import {
  lessons,
  features,
  news,
  schedule,
  instagram,
  concerns,
  testimonials,
  line,
} from "@/lib/site";
import { SectionHead, SectionLabel } from "@/components/SectionHead";

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

/* ── ヒーロー（ブランドのキービジュアル＝手書きノート） ──────── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 pb-16 pt-9 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12 md:px-8 md:pb-24 md:pt-12">
        {/* 左：手書きコピー（キービジュアルの文言・配置を踏襲）＋導線 */}
        <div className="flex animate-fade-up flex-col">
          <HeroCopy />

          <p className="mt-8 max-w-md leading-relaxed text-sub">
            体のしくみを知り、クセを整えて、一生モノの“動ける体”へ。キッズからシニアまで、3世代が同じ場所で通えるパーソナルトレーニングの教室です。
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-pine-600 px-8 py-4 text-center text-lg font-bold text-card shadow-soft transition hover:bg-pine-700 hover:shadow-lift"
            >
              体験を申し込む
            </Link>
            <Link
              href="/lessons"
              className="rounded-full border border-line bg-card px-8 py-4 text-center text-lg font-bold text-ink transition hover:border-pine-300 hover:text-pine-700"
            >
              レッスンを見る
            </Link>
          </div>
          <p className="mt-5 text-sm text-sub">
            ご予約・お問い合わせは LINE・フォームから。
          </p>
        </div>

        {/* 右：注釈写真（PCで併置 / スマホでは下に） */}
        <div className="animate-fade-up md:pt-2" style={{ animationDelay: "0.15s" }}>
          <div className="relative overflow-hidden rounded-frame border border-line bg-card shadow-lift">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1100&q=80"
              alt="トレーニングで笑顔の様子"
              className="aspect-[4/3] w-full object-cover sm:aspect-[4/4.2]"
              loading="eager"
            />
            <Leader side="r" pos="right-3 top-[12%]" label="姿勢" delay="0.5s" />
            <Leader side="r" pos="right-3 top-[42%]" label="肩こり" delay="0.7s" />
            <Leader side="l" pos="left-3 bottom-[16%]" label="ひざ・歩行" delay="0.9s" />
          </div>
          <p className="label mt-3 normal-case">
            Fig. — あなたの悩みは、身体のどこに出ている？
          </p>
        </div>
      </div>
    </section>
  );
}

/* ブランドのキービジュアルの「文言・配置」を踏襲した手書きコピー（背景は通常の紙） */
function HeroCopy() {
  return (
    <div className="font-hand text-ink">
      {/* お悩み（緑・左） */}
      <p className="text-note-green text-[clamp(1.1rem,4.4vw,1.55rem)] leading-snug">
        そのお悩み&thinsp;身体のクセかも？
      </p>
      {/* メインコピー（黒・左・大） */}
      <h1 className="hand-bold mt-4 text-[clamp(2.3rem,10.6vw,3.6rem)] leading-[1.18]">
        自分のカラダは<br />
        自分次第
      </h1>
      {/* サブコピー（中央） */}
      <p className="mt-8 text-center text-[clamp(1.25rem,5.6vw,1.95rem)] leading-snug">
        私を育てる<br />
        トレーニングプレイス
      </p>
      {/* サイン（オレンジ・右下） */}
      <p className="mt-4 text-right text-note-orange text-[clamp(1.3rem,5.8vw,2rem)]">
        studio&nbsp;Aula
      </p>
    </div>
  );
}

/* 注釈リーダー：チップ＋引き出し線＋脈打つ点 */
function Leader({
  side,
  pos,
  label,
  delay,
}: {
  side: "l" | "r";
  pos: string;
  label: string;
  delay: string;
}) {
  const dot = (
    <span className="relative grid h-2 w-2 shrink-0 place-items-center">
      <span className="annot-ping absolute h-2.5 w-2.5 rounded-full bg-honey-400/60" />
      <span className="h-2 w-2 rounded-full bg-honey-400 ring-2 ring-card" />
    </span>
  );
  const lineEl = <span className="h-px w-7 bg-ink/35" aria-hidden />;
  const chip = (
    <span className="rounded-full border border-line bg-card/90 px-2.5 py-1 font-mono text-[11px] font-bold tracking-wider text-ink shadow-sm backdrop-blur-sm">
      {label}
    </span>
  );
  return (
    <div
      className={`annot-chip absolute z-10 flex items-center gap-1.5 ${pos}`}
      style={{ "--delay": delay } as React.CSSProperties}
    >
      {side === "r" ? (
        <>
          {dot}
          {lineEl}
          {chip}
        </>
      ) : (
        <>
          {chip}
          {lineEl}
          {dot}
        </>
      )}
    </div>
  );
}

/* ── お悩み相談（フィールドノート） ───────────────── */
function Concerns() {
  return (
    <section className="px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-frame border border-line bg-card shadow-card">
        <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <SectionLabel>Consult</SectionLabel>
            <p className="mt-4 text-sub">
              {concerns.goals.join("・")}は、もちろん——
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold leading-snug text-ink md:text-3xl">
              その<span className="marker">体のお悩み</span>、ご相談ください。
            </h2>
            <div className="mt-7 flex flex-wrap gap-3">
              {concerns.troubles.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-pine-200 bg-pine-50 px-5 py-2.5 font-display text-lg font-bold text-pine-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-honey-400" />
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-sub">そのほかの不調も、お気軽にどうぞ。</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-pine-600 px-8 py-4 text-lg font-bold text-card shadow-soft transition hover:bg-pine-700"
          >
            お悩みを相談する
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── なぜ選ばれるのか ───────────────────────────── */
function Features() {
  return (
    <section className="border-y border-line bg-mist py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHead label="Why Aula" title="なぜ、選ばれているのか" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-card border border-line bg-card p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid h-14 w-14 place-items-center rounded-card bg-pine-50 text-pine-600">
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

/* ── 4つのレッスン ──────────────────────────────── */
function Lessons() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHead
          label="Lessons / 04"
          title="ニーズに合わせた、4つのレッスン"
          lead="目的や好みに合わせて選べます。組み合わせも自由。あなたに合うレッスンが、きっと見つかります。"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lessons.map((l) => (
            <article
              key={l.id}
              className="group flex flex-col overflow-hidden rounded-card border border-line bg-card shadow-card transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[5/3.6] overflow-hidden">
                <img
                  src={l.image}
                  alt={l.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-card/95 px-3 py-1.5 font-mono text-xs font-bold tracking-wider text-ink shadow-sm backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full" style={{ background: l.dot }} />
                  {l.name}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-sub">{l.sub}</p>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink">
                  {l.lead}
                </h3>
                <p className="mt-3 inline-flex w-fit rounded-full bg-mist px-3 py-1 text-xs font-bold text-sub">
                  {l.need}
                </p>
                <Link
                  href={`/lessons#${l.id}`}
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 font-bold text-pine-600 transition hover:gap-3"
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

/* ── 週間スケジュール ───────────────────────────── */
function Schedule() {
  return (
    <section id="schedule" className="border-y border-line bg-mist py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <SectionHead
          label="Weekly Schedule"
          title="週間スケジュール"
          lead="毎週のグループレッスンの基本スケジュールです。日によって変更があります。最新の予定は Instagram でご確認ください。"
        />

        <div className="mt-10 overflow-hidden rounded-card border border-line bg-card">
          {schedule.map((d, i) => {
            const main = d.sessions.filter((s) => !s.venue);
            const venue = d.sessions.find((s) => s.venue)?.venue;
            const venueSessions = d.sessions.filter((s) => s.venue);
            return (
              <div
                key={d.day}
                className={`flex items-center gap-4 px-5 py-4 md:gap-6 md:px-7 ${
                  i !== schedule.length - 1 ? "border-b border-line" : ""
                } ${d.kind ? "bg-pine-50/40" : ""}`}
              >
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-card font-display text-xl font-bold ${
                    d.kind === "sat"
                      ? "bg-sky-100 text-sky-700"
                      : d.kind === "sun"
                      ? "bg-rose-100 text-rose-600"
                      : "bg-mist text-ink"
                  }`}
                >
                  {d.day}
                </span>

                <div className="flex flex-1 flex-col gap-2.5">
                  {d.sessions.length === 0 ? (
                    <span className="font-bold text-rose-500">定休日</span>
                  ) : (
                    <>
                      {main.length > 0 && (
                        <div className="flex flex-wrap gap-2.5">
                          {main.map((s, j) => (
                            <SessionChip key={j} time={s.time} lessonId={s.lessonId} />
                          ))}
                        </div>
                      )}
                      {venueSessions.length > 0 && (
                        <div className="flex w-fit flex-wrap items-center gap-2 rounded-card border border-dashed border-honey-400 bg-honey-50/60 px-3 py-2">
                          {venueSessions.map((s, j) => (
                            <SessionChip key={j} time={s.time} lessonId={s.lessonId} />
                          ))}
                          <span className="inline-flex items-center gap-1 pl-1 font-mono text-[11px] font-bold text-honey-600">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
                              <path d="M12 21s7-5.7 7-11a7 7 0 10-14 0c0 5.3 7 11 7 11z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                              <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            {venue}
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <ul className="mt-5 space-y-1.5 px-1 text-sm text-sub">
          <li>※ 表示はグループレッスンのみです。<span className="font-bold text-ink">パーソナルは予約制</span>（空き状況は Instagram をご確認ください）。</li>
          <li>※ <span className="font-bold text-ink">木曜の ZUMBA</span> は<span className="font-bold text-ink">帯西コミュニティセンター</span>で開催します（通常のスタジオとは会場が異なります）。</li>
        </ul>

        <div className="mt-8 flex flex-col items-center gap-4 rounded-card border border-line bg-card p-7 text-center sm:flex-row sm:justify-between sm:text-left">
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
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-pine-600 px-7 py-4 text-lg font-bold text-card shadow-soft transition hover:bg-pine-700"
          >
            <InstagramIcon />
            Instagramで確認
          </a>
        </div>
      </div>
    </section>
  );
}

function SessionChip({ time, lessonId }: { time: string; lessonId: string }) {
  const l = lessonMap[lessonId];
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-2">
      <span className="font-mono text-sm font-bold tabular-nums text-ink">{time}</span>
      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-ink">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: l?.dot }} />
        {l?.name}
      </span>
    </span>
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

/* ── お客様の声 ─────────────────────────────────── */
function Voices() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHead
          label="Voice"
          title="通ってくれている方の声"
          lead="少人数・完全予約制だからこそ、一人ひとりに寄り添えます。実際に通われている方の声をご紹介します。"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-card border border-line bg-card p-7 shadow-card"
            >
              <span className="font-display text-5xl leading-none text-honey-300" aria-hidden>
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 leading-relaxed text-ink">
                {t.body}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-pine-50 font-display font-bold text-pine-600">
                  {t.who.slice(0, 1)}
                </span>
                <span>
                  <span className="block font-bold text-ink">{t.who}</span>
                  <span className="mt-0.5 inline-block rounded-full bg-honey-100 px-2.5 py-0.5 font-mono text-[11px] font-bold text-honey-600">
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

/* ── 新着情報 ───────────────────────────────────── */
function News() {
  return (
    <section className="border-y border-line bg-mist py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <SectionHead label="News" title="新着情報" />
        <ul className="mt-10 divide-y divide-line overflow-hidden rounded-card border border-line bg-card">
          {news.map((n, i) => (
            <li key={i}>
              <Link
                href="/contact"
                className="flex flex-col gap-2 px-7 py-6 transition hover:bg-pine-50/50 sm:flex-row sm:items-center sm:gap-5"
              >
                <time className="font-mono text-sm font-bold tabular-nums text-sub">
                  {n.date}
                </time>
                <span className="w-fit rounded-full bg-pine-50 px-3 py-1 font-mono text-[11px] font-bold text-pine-600">
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

/* ── CTA（深緑のバンド） ────────────────────────── */
function CtaBand() {
  return (
    <section className="px-6 py-20 md:px-8 md:py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-frame bg-pine-700 px-8 py-16 text-center shadow-lift md:py-20">
        <span
          className="pointer-events-none absolute -right-6 -top-8 select-none font-display text-[8rem] font-black leading-none text-honey-300/10 md:text-[12rem]"
          aria-hidden
        >
          育
        </span>
        <p className="relative font-mono text-xs uppercase tracking-label text-honey-300">
          First step
        </p>
        <h2 className="relative mt-4 font-display text-3xl font-bold leading-tight text-paper md:text-4xl">
          まずは、体験から。
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-paper/85">
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
            className="rounded-full bg-honey-300 px-10 py-4 text-lg font-bold text-pine-800 shadow-soft transition hover:scale-[1.03]"
          >
            フォームで申し込む
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── 部品 ──────────────────────────────────────── */
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
      <svg width="28" height="28" viewBox="0 0 24 24">
        <circle cx="12" cy="7.5" r="3.2" {...p} />
        <path d="M5.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" {...p} />
      </svg>
    );
  if (name === "book")
    return (
      <svg width="28" height="28" viewBox="0 0 24 24">
        <path d="M4 5.5A1.5 1.5 0 015.5 4H11v15H5.5A1.5 1.5 0 014 17.5z" {...p} />
        <path d="M20 5.5A1.5 1.5 0 0018.5 4H13v15h5.5a1.5 1.5 0 001.5-1.5z" {...p} />
      </svg>
    );
  return (
    <svg width="28" height="28" viewBox="0 0 24 24">
      <path d="M4 11l8-6 8 6" {...p} />
      <path d="M6 10v8.5A1.5 1.5 0 007.5 20h9a1.5 1.5 0 001.5-1.5V10" {...p} />
    </svg>
  );
}
