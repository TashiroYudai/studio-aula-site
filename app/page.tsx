import Link from "next/link";
import { lessons, features, testimonials, concerns } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Scribble } from "@/components/Scribble";

/* ──────────────────────────────────────────────────────────────────────────
   Studio Aula — トップページ「陽だまりのスクラップブック — 育てるノート」
   ページ全体を、先生が3世代分の記録を貼り重ねた一冊の手書きノートに見立てる。
   署名：朱の手描き矢印/丸囲み＋付箋＋マステ。テキスト本体は常に水平・高コントラスト。
   ────────────────────────────────────────────────────────────────────────── */

// 暖色トークン
const CREAM = "#FBF3DC"; // 陽だまりの紙
const SUN = "#F0851F"; // 主役オレンジ
const MUSTARD = "#E8B73A"; // マステ・付箋
const TERRA = "#C0492A"; // 手描きの朱（丸・矢印）
const INK = "#4A2E18"; // 琥珀ブラウン（本文の濃色）
const LEAF = "#4F9B53"; // 若葉グリーン（“身体のクセ”一語のみ）

const FONT_DISPLAY = '"Dela Gothic One", system-ui, sans-serif';
const FONT_BODY = '"Zen Maru Gothic", system-ui, sans-serif';
const FONT_HAND = '"Yomogi", "Zen Maru Gothic", cursive';

// 紙片の傾き（-2.5°〜+2° の小角度に固定）
const TILT = ["-2.5deg", "1.6deg", "-1.4deg", "2deg", "-2deg", "1.2deg"];

// マスキングテープ（半透明マスタード）
function Tape({ className = "", rotate = "-6deg" }: { className?: string; rotate?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute h-6 w-20 ${className}`}
      style={{
        transform: `rotate(${rotate})`,
        background: `${MUSTARD}cc`,
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,.25)",
      }}
    />
  );
}

// 付箋ラベル（Yomogi）
function Sticky({
  children,
  rotate = "-3deg",
  bg = MUSTARD,
  className = "",
}: {
  children: React.ReactNode;
  rotate?: string;
  bg?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-block px-3 py-1.5 text-base font-bold shadow-[0_8px_18px_-10px_rgba(74,46,24,.55)] ${className}`}
      style={{ transform: `rotate(${rotate})`, background: bg, color: INK, fontFamily: FONT_HAND }}
    >
      {children}
    </span>
  );
}

export default function Home() {
  const heroPhoto = lessons[0].image;

  return (
    <div
      className="w-full overflow-x-hidden"
      style={{
        color: INK,
        fontFamily: FONT_BODY,
        backgroundColor: CREAM,
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent 0, transparent 37px, rgba(192,73,42,0.10) 37px, rgba(192,73,42,0.10) 38px)",
      }}
    >
      {/* ───────────────────── ① HERO ＝ ノートの見開き ───────────────────── */}
      <section className="relative mx-auto max-w-6xl px-5 pb-14 pt-3 md:px-8 md:pb-20 md:pt-16" aria-labelledby="hero-heading">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          {/* 左：手書きコピー。スマホは画面いっぱいに、メッセージ＝上／アクション＝下で配分（テキストは常に水平） */}
          <div className="relative flex min-h-[calc(100svh-168px)] flex-col justify-between md:block md:min-h-0">
            {/* メッセージ群（上） */}
            <div className="md:contents">
            <p className="mb-4 text-xl" style={{ fontFamily: FONT_HAND }}>
              そのお悩み{" "}
              <span style={{ color: LEAF }} className="hand-bold">
                身体のクセ
              </span>{" "}
              かも？
            </p>

            <h1 id="hero-heading" className="relative leading-[1.08]">
              <span className="block text-[12vw] sm:text-6xl md:text-7xl" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                自分のカラダは
              </span>
              <span className="block text-[12vw] sm:text-6xl md:text-7xl" style={{ fontFamily: FONT_DISPLAY, color: SUN }}>
                自分次第
              </span>
            </h1>

            <p className="mt-6 text-xl font-bold md:text-2xl" style={{ color: INK }}>
              <span className="marker">『私を育てる』</span>
              <span className="inline-block">トレーニングスタジオ</span>
            </p>

            </div>

            {/* アクション群（下） */}
            <div className="md:contents">
            <div className="mt-0 flex flex-wrap items-center gap-3 md:mt-8">
              {/* 体験/LINE はスマホでは下部固定バーにあるため非表示（PCのみ表示） */}
              <Link
                href="/contact"
                className="hidden rounded-md px-6 py-3.5 text-lg font-bold text-white shadow-[0_14px_26px_-12px_rgba(240,133,31,1)] transition-transform hover:-translate-y-0.5 lg:inline-block"
                style={{ background: SUN, transform: "rotate(-1.8deg)" }}
              >
                体験を申し込む
              </Link>
              <Link
                href="/lessons"
                className="rounded-md border-2 px-5 py-3 text-base font-bold transition-transform hover:-translate-y-0.5"
                style={{ borderColor: INK, color: INK, transform: "rotate(1.2deg)", background: CREAM }}
              >
                レッスンを見る
              </Link>
              <Link
                href="/contact"
                className="hidden rounded-md px-5 py-3 text-base font-bold text-white transition-transform hover:-translate-y-0.5 lg:inline-block"
                style={{ background: "#06C755", transform: "rotate(-0.8deg)" }}
              >
                LINEで相談
              </Link>
            </div>

            <p className="mt-6 text-3xl md:mt-7" style={{ fontFamily: FONT_HAND, color: TERRA, transform: "rotate(-3deg)", transformOrigin: "left" }}>
              ✎ studio Aula
            </p>
            </div>
          </div>

          {/* 右：傾いた写真スナップ＋マステ＋付箋＋矢印注釈 */}
          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="relative" style={{ transform: `rotate(${TILT[0]})` }}>
              <Tape className="-left-2 -top-3" rotate="-9deg" />
              <Tape className="-right-3 top-1/2" rotate="84deg" />
              <div className="overflow-hidden rounded-sm border-[6px] border-white shadow-[0_26px_50px_-24px_rgba(74,46,24,.7)]">
                <img
                  src={heroPhoto}
                  alt="Studio Aula のレッスンで笑顔で体を動かす様子"
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
              </div>
              <Sticky rotate="6deg" className="absolute -right-4 -top-4">
                肩こり
              </Sticky>
              <Sticky rotate="-7deg" bg="#F5C95A" className="absolute -bottom-5 -left-4">
                膝・歩行
              </Sticky>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── ② お悩み相談 ＝ 朱の手描き枠の「相談メモ」 ───────────────── */}
      <section className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14" aria-labelledby="concern-heading">
        <div
          className="relative rounded-md border-[3px] border-dashed p-7 md:p-10"
          style={{ borderColor: TERRA, background: "#FFFFFF", transform: `rotate(${TILT[2]})` }}
        >
          <Sticky rotate="-4deg" className="absolute -left-3 -top-5">
            相談メモ
          </Sticky>
          <h2 id="concern-heading" className="text-xl font-black md:text-3xl" style={{ color: INK }}>
            こんなこと、<br className="sm:hidden" />ありませんか？
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-base font-bold" style={{ color: SUN, fontFamily: FONT_HAND }}>
                ◎ こうなりたい
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {concerns.goals.map((g) => (
                  <li key={g} className="rounded-full px-4 py-2 text-base font-bold" style={{ background: `${MUSTARD}55`, color: INK }}>
                    {g}↑
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-base font-bold" style={{ color: TERRA, fontFamily: FONT_HAND }}>
                ◯ こんなお悩み
              </p>
              <ul className="flex flex-wrap gap-3">
                {concerns.troubles.map((t) => (
                  <li key={t} className="px-2 py-2 text-lg font-black" style={{ color: INK }}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Reveal className="mt-6">
            <p className="text-base md:text-lg" style={{ color: INK }}>
              …もちろん、ぜんぶ大丈夫。まずは <span className="marker font-bold">あなたの体のクセ</span> を一緒に見つけるところから。
            </p>
          </Reveal>
          <Link
            href="/contact"
            className="mt-5 inline-block rounded-md px-5 py-3 text-base font-bold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: TERRA }}
          >
            お悩みを相談する
          </Link>
        </div>
      </section>

      {/* ─────────── ③ 3世代の帯（フルブリード・オレンジ地） ─────────── */}
      <section className="relative w-full py-12 md:py-16" style={{ background: SUN }} aria-labelledby="gen-heading">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="text-base font-bold" style={{ color: "#FFE9CF", fontFamily: FONT_HAND }}>
            キッズも、大人も、シニアも。
          </p>
          <Reveal className="relative mt-1 inline-block">
            <h2 id="gen-heading" className="text-xl font-black text-white md:text-4xl" style={{ fontFamily: FONT_DISPLAY }}>
              家族みんなで通えるスタジオ
            </h2>
            <Scribble className="absolute -bottom-2 left-0 h-2.5 w-full" color="#FFE3C2" delay="0.15s" />
          </Reveal>

          <Reveal className="reveal-stagger relative mt-8 flex flex-wrap items-start justify-center gap-x-2 gap-y-8 sm:justify-start">
            {[
              { label: "キッズ", img: lessons[1].image },
              { label: "大人", img: lessons[2].image },
              { label: "シニア", img: lessons[0].image },
            ].map((g, i) => (
              <figure
                key={g.label}
                className="relative w-36 sm:-ml-4 sm:w-44 md:w-52"
                style={{ transform: `rotate(${TILT[i + 1]})`, zIndex: 3 - i }}
              >
                <Tape className="left-1/2 -top-2 -ml-10" rotate="-5deg" />
                <div className="overflow-hidden rounded-sm border-[5px] border-white shadow-[0_20px_36px_-20px_rgba(74,46,24,.85)]">
                  <img src={g.img} alt={`${g.label}世代のレッスンの様子`} className="aspect-square w-full object-cover" loading="lazy" />
                </div>
                <figcaption className="mt-2 text-center text-base font-black text-white" style={{ fontFamily: FONT_HAND }}>
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </Reveal>
          <p className="mt-6 text-base font-bold text-white sm:hidden" style={{ fontFamily: FONT_HAND }}>
            → 3世代が同じ場所で。
          </p>
        </div>
      </section>

      {/* ────────────── ④ 4つのレッスン ＝ ノートに貼った“ポラ写真” ────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20" aria-labelledby="lessons-heading">
        <div className="mb-10 flex items-end justify-between">
          <Reveal className="relative">
            <h2 id="lessons-heading" className="text-2xl font-black md:text-4xl" style={{ color: INK, fontFamily: FONT_DISPLAY }}>
              4つのレッスン
            </h2>
            <Scribble className="absolute -bottom-2 left-0 h-2.5 w-full" delay="0.1s" />
          </Reveal>
          <Sticky rotate="3deg" className="hidden sm:inline-block">
            貼ってみた
          </Sticky>
        </div>

        <Reveal className="reveal-stagger grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {lessons.map((l, i) => (
            <article
              key={l.id}
              className={`relative ${i % 2 === 0 ? "lg:mt-0" : "lg:mt-10"}`}
              style={{ transform: `rotate(${TILT[i % TILT.length]})` }}
            >
              <Tape className="left-1/2 -top-3 -ml-10" rotate={i % 2 ? "5deg" : "-6deg"} />
              <Link href={`/lessons#${l.id}`} className="block bg-white p-3 pb-5 shadow-[0_22px_44px_-22px_rgba(74,46,24,.8)] transition-transform hover:-translate-y-1">
                <div className="overflow-hidden">
                  <img src={l.image} alt={`${l.name}（${l.sub}）のレッスンの様子`} className="aspect-[5/4] w-full object-cover" loading="lazy" />
                </div>
                <div className="px-1 pt-4">
                  <div className="flex items-center gap-2">
                    <span aria-hidden="true" className="h-3.5 w-3.5 rounded-full" style={{ background: l.dot }} />
                    <h3 className="text-xl font-black" style={{ color: INK, fontFamily: FONT_DISPLAY }}>
                      {l.name}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm font-bold" style={{ color: SUN, fontFamily: FONT_HAND }}>
                    {l.sub}
                  </p>
                  <p className="mt-2 text-base leading-relaxed" style={{ color: INK }}>
                    {l.lead}
                  </p>
                  <p className="mt-3 inline-block rounded px-2 py-1 text-sm font-bold" style={{ background: `${MUSTARD}44`, color: INK }}>
                    {l.need}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </Reveal>

        <div className="relative mt-16 flex flex-col items-center text-center">
          <p className="text-lg font-bold" style={{ color: INK }}>
            グループレッスンは
          </p>
          <p className="text-[15vw] leading-none sm:text-7xl" style={{ fontFamily: FONT_DISPLAY, color: TERRA }}>
            500
            <span className="text-3xl">円</span>
          </p>
          <p className="mt-2 text-lg font-bold" style={{ fontFamily: FONT_HAND, color: SUN }}>
            1回ワンコイン！
          </p>
          <p className="mt-2 text-sm" style={{ color: INK }}>
            （パーソナルは 1回 2,500円・エアコン使用日は +100円）
          </p>
        </div>
      </section>

      {/* ───────────── ⑤ お客様の声 ＝ 壁に貼った付箋3色 ───────────── */}
      <section className="relative w-full py-14 md:py-20" style={{ background: "#FCE7C0" }} aria-labelledby="voice-heading">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="relative mb-10 inline-block">
            <h2 id="voice-heading" className="text-2xl font-black md:text-4xl" style={{ color: INK, fontFamily: FONT_DISPLAY }}>
              通っている方の声
            </h2>
            <Scribble className="absolute -bottom-2 left-0 h-2.5 w-full" delay="0.1s" />
          </Reveal>

          <Reveal as="ul" className="reveal-stagger grid gap-8 sm:grid-cols-3">
            {testimonials.map((t, i) => {
              const bg = [MUSTARD + "dd", "#F5B0A0", "#FFD27A"][i % 3];
              return (
                <li
                  key={t.who}
                  className="relative p-6 shadow-[0_22px_40px_-22px_rgba(74,46,24,.85)]"
                  style={{ background: bg, color: INK, transform: `rotate(${TILT[i + 2]})` }}
                >
                  <span aria-hidden="true" className="absolute left-1/2 -top-2 -ml-1.5 h-3 w-3 rounded-full shadow-md" style={{ background: TERRA }} />
                  <p className="text-base leading-relaxed" style={{ fontFamily: FONT_BODY }}>
                    「{t.body}」
                  </p>
                  <p className="mt-4 text-lg font-bold" style={{ fontFamily: FONT_HAND }}>
                    {t.who}
                  </p>
                  <p className="mt-1 inline-block rounded px-2 py-0.5 text-sm font-bold" style={{ background: "#ffffffaa", color: TERRA }}>
                    {t.tag}
                  </p>
                </li>
              );
            })}
          </Reveal>
          <p className="mt-6 text-sm" style={{ color: INK }}>
            ※ 掲載は一例です（実際にいただいた声に差し替え予定）。
          </p>
        </div>
      </section>

      {/* ─────────────── なぜ選ばれる（features）＝メモの箇条書き ─────────────── */}
      <section className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-16" aria-labelledby="why-heading">
        <Reveal className="relative mb-8 inline-block">
          <h2 id="why-heading" className="text-xl font-black md:text-3xl" style={{ color: INK, fontFamily: FONT_DISPLAY }}>
            Aula が大切にしていること
          </h2>
          <Scribble className="absolute -bottom-2 left-0 h-2.5 w-full" delay="0.1s" />
        </Reveal>
        <Reveal as="ul" className="space-y-5">
          {features.map((f, i) => (
            <li key={f.title} className="flex gap-4" style={{ transform: `rotate(${i % 2 ? "0.5deg" : "-0.5deg"})` }}>
              <span
                aria-hidden="true"
                className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full text-lg font-black"
                style={{ background: [SUN, TERRA, MUSTARD][i % 3], color: i === 2 ? INK : "#fff", fontFamily: FONT_HAND }}
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-black" style={{ color: INK }}>
                  <span className="marker">{f.title}</span>
                </h3>
                <p className="mt-1 text-base leading-relaxed" style={{ color: INK }}>
                  {f.body}
                </p>
              </div>
            </li>
          ))}
        </Reveal>
      </section>

      {/* ──────────────────────── ⑥ CTA バンド（オレンジ全面） ──────────────────────── */}
      <section className="relative w-full overflow-hidden py-16 md:py-24" style={{ background: SUN }} aria-labelledby="cta-heading">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none text-[40vw] leading-none opacity-10 md:text-[20rem]"
          style={{ fontFamily: FONT_DISPLAY, color: "#fff" }}
        >
          育
        </span>
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-lg font-bold" style={{ color: "#FFE9CF", fontFamily: FONT_HAND }}>
            考えるより、まず一歩。
          </p>
          <h2 id="cta-heading" className="mt-2 text-3xl font-black text-white md:text-6xl" style={{ fontFamily: FONT_DISPLAY }}>
            まずは、体験から。
          </h2>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-white px-8 py-4 text-lg font-black shadow-[0_18px_34px_-16px_rgba(74,46,24,1)] transition-transform hover:-translate-y-0.5"
              style={{ color: TERRA, transform: "rotate(-1.5deg)" }}
            >
              体験を申し込む
            </Link>
            <Link
              href="/contact"
              className="rounded-md px-7 py-4 text-lg font-black text-white shadow-[0_18px_34px_-16px_rgba(6,199,85,1)] transition-transform hover:-translate-y-0.5"
              style={{ background: "#06C755", transform: "rotate(1.2deg)" }}
            >
              LINEで相談
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
