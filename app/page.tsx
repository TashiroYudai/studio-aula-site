import Link from "next/link";
import { lessons, features, testimonials, generations, line } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { HeroHologram } from "@/components/HeroHologram";

/* ──────────────────────────────────────────────────────────────────────────
   Studio Aula — トップページ「生体ホログラム / Body-as-Data」
   体を“読み取れるデータ”として捉える冷色のテック表現。ヒーローは点群の人体。
   下層セクションは計器パネル調（モノスペースのラベル＋シアンの罫）で静かに構成。
   文言は旧サイト（肩こり/腰痛/膝痛・4レッスン・ワンコイン・3世代）を踏襲。
   ────────────────────────────────────────────────────────────────────────── */

const SKY = "#EAF4FA";
const CYAN = "#0FA5CB";
const CYAN_DEEP = "#0A6E8C";
const INK = "#0C2230";
const SUB = "#5A7180";
const DEEP = "#08283A"; // ダーク・データパネル
const LINE_G = "#06C755";

const F_DISPLAY = '"Zen Kaku Gothic New", system-ui, sans-serif';
const F_GROTESK = '"Space Grotesk", "Zen Kaku Gothic New", sans-serif';
const F_MONO = '"Space Mono", monospace';

// セクションのモノスペース見出しラベル（“計測ログ”＝データの世界観を担う）
function Label({ code, children }: { code: string; children: React.ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-2.5" style={{ fontFamily: F_MONO }}>
      <span className="text-[13px] font-bold tracking-widest" style={{ color: CYAN_DEEP }}>
        {code}
      </span>
      <span aria-hidden className="h-px w-8" style={{ background: `${CYAN}66` }} />
      <span className="text-[12px] tracking-wide" style={{ color: SUB }}>
        {children}
      </span>
    </p>
  );
}

export default function Home() {
  return (
    <div style={{ background: SKY, color: INK, fontFamily: F_DISPLAY }}>
      {/* ───────── ① HERO ＝ 点群の人体ホログラム ───────── */}
      <HeroHologram />

      {/* ───────── ③ 選ばれる理由（features） ───────── */}
      <section className="px-5 py-16 md:px-8 md:py-20" style={{ background: "#F2FAFD" }} aria-labelledby="why-h">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Label code="DATA //">Aula が大切にしていること</Label>
            <h2 id="why-h" className="text-2xl font-black md:text-4xl" style={{ color: INK }}>
              その場しのぎでなく、<span style={{ color: CYAN }}>根本から</span>。
            </h2>
          </Reveal>
          <Reveal className="reveal-stagger mt-10 grid gap-5 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="relative overflow-hidden rounded-2xl border bg-white p-7"
                style={{ borderColor: `${CYAN}22`, boxShadow: "0 20px 44px -32px rgba(10,60,90,.35)" }}
              >
                <span aria-hidden className="absolute right-4 top-4 text-lg font-bold" style={{ fontFamily: F_MONO, color: `${CYAN}66` }}>
                  +
                </span>
                <span aria-hidden className="block h-1.5 w-10 rounded-full" style={{ background: `linear-gradient(90deg, ${CYAN}, ${CYAN_DEEP})` }} />
                <h3 className="mt-5 text-lg font-black" style={{ color: INK }}>
                  {f.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed" style={{ color: SUB }}>
                  {f.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ───────── ④ 4つのレッスン ───────── */}
      <section className="px-5 py-16 md:px-8 md:py-24" aria-labelledby="lesson-h">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Label code="INDEX //">目的で選ぶ</Label>
              <h2 id="lesson-h" className="text-3xl font-black md:text-5xl" style={{ color: INK }}>
                4つのレッスン
              </h2>
            </div>
            <p className="text-[13px]" style={{ fontFamily: F_MONO, color: SUB }}>
              SB / MS / ZUMBA / PERSONAL
            </p>
          </Reveal>

          <Reveal className="reveal-stagger mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {lessons.map((l) => (
              <Link
                key={l.id}
                href={`/lessons#${l.id}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border bg-white transition-transform hover:-translate-y-1"
                style={{ borderColor: `${CYAN}22`, boxShadow: "0 22px 46px -30px rgba(10,60,90,.4)" }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={l.image}
                    alt={`${l.name}（${l.sub}）`}
                    className="aspect-[5/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "saturate(.72) contrast(1.03)" }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,165,203,0) 45%, rgba(8,40,58,.5))" }} />
                  <span
                    className="absolute left-3 top-3 rounded-md px-2 py-1 text-[11px] font-bold tracking-widest text-white"
                    style={{ fontFamily: F_MONO, background: "rgba(8,40,58,.55)", border: "1px solid rgba(127,205,230,.4)" }}
                  >
                    {l.id.toUpperCase()}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <span aria-hidden className="h-2.5 w-2.5 rounded-full" style={{ background: l.dot }} />
                    <h3 className="text-xl font-black" style={{ color: INK }}>
                      {l.name}
                    </h3>
                  </div>
                  <p className="mt-1 text-[12px] font-bold tracking-wide" style={{ fontFamily: F_MONO, color: CYAN_DEEP }}>
                    {l.sub}
                  </p>
                  <p className="mt-2.5 text-[14px] leading-relaxed" style={{ color: SUB }}>
                    {l.lead}
                  </p>
                  <p className="mt-auto pt-4 text-[13px] font-bold" style={{ color: INK }}>
                    <span className="rounded px-2 py-1" style={{ background: `${CYAN}12`, color: CYAN_DEEP }}>
                      {l.need}
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ───────── ⑤ データパネル：3世代 × ワンコイン ───────── */}
      <section className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28" style={{ background: DEEP }} aria-labelledby="deep-h">
        {/* 薄い罫のグリッド */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(127,205,230,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(127,205,230,.06) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <Label code="ACCESS //">みんなの場所</Label>
            <h2 id="deep-h" className="text-3xl font-black leading-tight text-white md:text-5xl">
              キッズも、大人も、シニアも。<br />
              <span style={{ color: "#7FCDE6" }}>3世代が同じ場所で。</span>
            </h2>
          </Reveal>

          <Reveal className="reveal-stagger mt-10 grid gap-5 sm:grid-cols-3">
            {generations.map((g) => (
              <figure key={g.id} className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(127,205,230,.22)" }}>
                <div className="relative">
                  <img src={g.image} alt={`${g.badge}のレッスン`} className="aspect-[4/3] w-full object-cover" style={{ filter: "saturate(.55) contrast(1.05) brightness(.92)" }} loading="lazy" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,40,58,0) 40%, rgba(8,40,58,.72))" }} />
                  <figcaption className="absolute bottom-3 left-4 text-lg font-black text-white">
                    {g.badge}
                    <span className="ml-2 text-[11px] font-bold" style={{ fontFamily: F_MONO, color: "#7FCDE6" }}>
                      {g.id.toUpperCase()}
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </Reveal>

          <div className="mt-12 flex flex-col items-start gap-2 border-t pt-10 sm:flex-row sm:items-end sm:justify-between" style={{ borderColor: "rgba(127,205,230,.2)" }}>
            <div>
              <p className="text-base font-bold" style={{ color: "#BFE0EC" }}>
                グループレッスンは、1回
              </p>
              <p className="flex items-baseline gap-2 leading-none">
                <span className="text-7xl font-black text-white md:text-8xl" style={{ fontFamily: F_GROTESK }}>
                  500
                </span>
                <span className="text-2xl font-black text-white">円</span>
                <span className="ml-1 rounded-full px-3 py-1 text-sm font-bold" style={{ background: `${CYAN}`, color: DEEP }}>
                  ワンコイン
                </span>
              </p>
              <p className="mt-3 text-sm" style={{ color: "#8FB6C8", fontFamily: F_MONO }}>
                PERSONAL ¥2,500 / 入会金 無料 / エアコン使用日 +¥100
              </p>
            </div>
            <Link
              href="/programs"
              className="rounded-full border px-6 py-3 text-base font-bold text-white transition-colors hover:bg-white/10"
              style={{ borderColor: "rgba(127,205,230,.5)" }}
            >
              料金を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── ⑥ お客様の声 ───────── */}
      <section className="px-5 py-16 md:px-8 md:py-24" style={{ background: "#F2FAFD" }} aria-labelledby="voice-h">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Label code="LOG //">通っている方の声</Label>
            <h2 id="voice-h" className="text-2xl font-black md:text-4xl" style={{ color: INK }}>
              変化は、ちゃんと起きている。
            </h2>
          </Reveal>
          <Reveal as="ul" className="reveal-stagger mt-10 grid gap-5 sm:grid-cols-3">
            {testimonials.map((t) => (
              <li
                key={t.who}
                className="relative rounded-2xl border bg-white p-7"
                style={{ borderColor: `${CYAN}22`, boxShadow: "0 20px 44px -32px rgba(10,60,90,.35)" }}
              >
                <span aria-hidden className="text-4xl font-black leading-none" style={{ color: `${CYAN}44`, fontFamily: F_GROTESK }}>
                  &ldquo;
                </span>
                <p className="mt-1 text-[15px] leading-relaxed" style={{ color: INK }}>
                  {t.body}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-sm font-black" style={{ color: INK }}>
                    {t.who}
                  </p>
                  <span className="rounded-full px-2.5 py-1 text-[11px] font-bold" style={{ fontFamily: F_MONO, background: `${CYAN}14`, color: CYAN_DEEP }}>
                    {t.tag}
                  </span>
                </div>
              </li>
            ))}
          </Reveal>
          <p className="mt-6 text-xs" style={{ color: SUB }}>
            ※ 掲載は一例です（実際にいただいた声に差し替え予定）。
          </p>
        </div>
      </section>

      {/* ───────── ⑦ CTA ───────── */}
      <section className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28" aria-labelledby="cta-h">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-60"
          style={{ background: "radial-gradient(circle, rgba(15,165,203,.18), rgba(15,165,203,0) 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest" style={{ fontFamily: F_MONO, color: CYAN_DEEP }}>
            READY TO START
          </p>
          <h2 id="cta-h" className="mt-3 text-3xl font-black leading-tight md:text-6xl" style={{ color: INK }}>
            自分のカラダは、<br className="sm:hidden" />
            <span style={{ color: CYAN }}>自分次第。</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base" style={{ color: SUB }}>
            まずは体験から。運動が初めての方も、マンツーマンだから安心です。
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full px-8 py-4 text-lg font-black text-white transition-transform hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg, #12b0d8, ${CYAN_DEEP})`, boxShadow: "0 18px 36px -14px rgba(15,165,203,.8)" }}
            >
              体験を申し込む
            </Link>
            <a
              href={line.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-lg font-black text-white transition-transform hover:-translate-y-0.5"
              style={{ background: LINE_G, boxShadow: "0 18px 36px -14px rgba(6,199,85,.6)" }}
            >
              LINEで相談
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
