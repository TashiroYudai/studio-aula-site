import Link from "next/link";
import { lessons, features, testimonials, concerns, line } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { EucaBranch, EucaLeaf, EucaSprig, EucaDivider } from "@/components/euca";

/* ──────────────────────────────────────────────────────────────────────────
   Studio Aula — トップページ「ユーカリ — 新生・再生」
   体を根本から育て直し、すくすく上へ伸びる。署名＝ヒーローの枝：
   スクロールインで幹が描き起こされ、葉が下から順にふくらみ、
   肩こり・腰痛・膝のお悩みが「標本タグ」として枝に掛かる。
   本文は常に ink/washi の高コントラスト。モチーフは節度をもって。
   ────────────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="w-full">
      {/* ───────────────────── ① HERO ＝ 上へ伸びる枝 ───────────────────── */}
      <section
        className="relative mx-auto max-w-6xl px-5 pb-10 pt-6 md:px-8 md:pb-14 md:pt-16"
        aria-labelledby="hero-heading"
      >
        {/* スマホ: メッセージ→枝→アクション の縦並び。PC: コピー左／枝右。 */}
        <div className="flex flex-col items-center gap-7 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10">
          {/* 左カラム（PC）／スマホは contents で子を並べ替え可能に */}
          <div className="contents md:flex md:min-w-0 md:flex-col md:justify-center">
            {/* メッセージ群 */}
            <div className="order-1 w-full md:order-none">
              <p className="mb-4 font-display text-xl text-ink">
                そのお悩み{" "}
                <span className="font-medium text-euca-700">身体のクセ</span>{" "}
                かも？
              </p>

              <h1 id="hero-heading" className="relative leading-[1.15]">
                <span className="block font-display text-[clamp(2.5rem,11vw,4.4rem)] font-medium text-ink">
                  自分のカラダは
                </span>
                <span className="block font-display text-[clamp(2.5rem,11vw,4.4rem)] font-medium text-euca-700">
                  自分次第
                </span>
              </h1>

              <Reveal>
                <p className="mt-6 text-xl font-bold text-ink md:text-2xl">
                  <span className="marker">『私を育てる』</span>
                  <span className="inline-block">トレーニングスタジオ</span>
                </p>
              </Reveal>
            </div>

            {/* アクション群 */}
            <div className="order-3 w-full md:order-none md:mt-8">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-euca-700 px-7 py-3.5 text-lg font-bold text-white shadow-leaf transition-colors hover:bg-euca-800"
                >
                  体験を申し込む
                </Link>
                <a
                  href={line.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-5 py-3.5 text-base font-bold text-white shadow-leaf transition-transform hover:-translate-y-0.5"
                  style={{ background: "#06C755" }}
                >
                  LINEで相談
                </a>
                <Link
                  href="/lessons"
                  className="rounded-full border-2 border-euca-700 bg-transparent px-5 py-3 text-base font-bold text-euca-700 transition-colors hover:bg-euca-100"
                >
                  レッスンを見る
                </Link>
              </div>

              <p className="mt-6 flex items-center gap-2 font-display text-2xl text-euca-600 md:mt-7">
                <EucaLeaf className="h-5 w-5 text-euca-500" aria-hidden />
                studio Aula
              </p>
            </div>
          </div>

          {/* 枝＝署名。お悩みは枝に掛かる「標本タグ」（上=肩・中=腰・下=膝） */}
          <div className="relative order-2 mx-auto w-full max-w-[300px] sm:max-w-[340px] md:order-none md:max-w-[400px]">
            <Reveal className="relative">
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[86%] w-[108%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-euca-50"
              />
              <EucaBranch className="relative block h-auto w-full" />
              <span
                className="leaf-pop leaf-frame absolute right-0 top-[24%] -translate-y-1/2 border border-euca-200 bg-card px-4 py-1.5 text-base font-bold text-ink shadow-leaf"
                style={{ "--delay": "1.05s" } as React.CSSProperties}
              >
                肩こり
              </span>
              <span
                className="leaf-pop leaf-frame-r absolute left-0 top-[54%] -translate-y-1/2 border border-euca-200 bg-card px-4 py-1.5 text-base font-bold text-ink shadow-leaf"
                style={{ "--delay": "1.17s" } as React.CSSProperties}
              >
                腰痛
              </span>
              <span
                className="leaf-pop leaf-frame absolute right-0 top-[80%] -translate-y-1/2 border border-euca-200 bg-card px-4 py-1.5 text-base font-bold text-ink shadow-leaf"
                style={{ "--delay": "1.29s" } as React.CSSProperties}
              >
                膝・歩行
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 区切りの枝 */}
      <div className="mx-auto max-w-3xl px-5">
        <EucaDivider className="mx-auto h-6 w-full text-euca-300" />
      </div>

      {/* ───────────────── ② お悩み相談 ＝ 相談メモ ───────────────── */}
      <section className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14" aria-labelledby="concern-heading">
        <div className="relative rounded-frame border border-line bg-card p-7 shadow-leaf md:p-10">
          <span className="leaf-frame-r absolute -top-4 left-6 inline-block bg-euca-100 px-4 py-1.5 text-base font-bold text-euca-800">
            相談メモ
          </span>
          <h2 id="concern-heading" className="font-display text-xl font-medium text-ink md:text-3xl">
            こんなこと、<br className="sm:hidden" />ありませんか？
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-base font-bold text-euca-600">◎ こうなりたい</p>
              <ul className="flex flex-wrap gap-2.5">
                {concerns.goals.map((g) => (
                  <li key={g} className="rounded-full bg-euca-100 px-4 py-2 text-base font-bold text-ink">
                    {g}↑
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-base font-bold text-hana-deep">◯ こんなお悩み</p>
              <ul className="flex flex-wrap gap-x-5 gap-y-3">
                {concerns.troubles.map((t) => (
                  <li key={t} className="flex items-center gap-2 py-2 text-lg font-black text-ink">
                    <EucaLeaf className="h-4 w-4 shrink-0 text-euca-500" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Reveal className="mt-6">
            <p className="text-base text-ink md:text-lg">
              …もちろん、ぜんぶ大丈夫。まずは <span className="marker font-bold">あなたの体のクセ</span> を一緒に見つけるところから。
            </p>
          </Reveal>
          <Link
            href="/contact"
            className="mt-5 inline-block rounded-full bg-euca-700 px-6 py-3 text-base font-bold text-white transition-colors hover:bg-euca-800"
          >
            お悩みを相談する
          </Link>
        </div>
      </section>

      {/* ─────────── ③ 3世代の帯（フルブリード・深緑地） ─────────── */}
      <section className="relative w-full bg-euca-700 py-12 text-white md:py-16" aria-labelledby="gen-heading">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="font-display text-base text-euca-100">キッズも、大人も、シニアも。</p>
          <h2 id="gen-heading" className="mt-1 font-display text-xl font-medium text-white md:text-4xl">
            家族みんなで通えるスタジオ
          </h2>

          <Reveal className="reveal-stagger relative mt-8 flex flex-wrap items-start justify-center gap-6 md:gap-10">
            {[
              { label: "キッズ", img: lessons[1].image },
              { label: "大人", img: lessons[2].image },
              { label: "シニア", img: lessons[0].image },
            ].map((g, i) => (
              <figure key={g.label} className="relative w-36 sm:w-48 md:w-60">
                <div
                  className={`overflow-hidden border-4 border-washi shadow-lift ${i % 2 === 0 ? "leaf-frame" : "leaf-frame-r"}`}
                >
                  <img
                    src={g.img}
                    alt={`${g.label}世代のレッスンの様子`}
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 text-center text-base font-bold text-euca-50">
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </Reveal>
          <p className="mt-6 text-base font-bold text-euca-100 sm:hidden">→ 3世代が同じ場所で。</p>
        </div>
      </section>

      {/* ────────────── ④ 4つのレッスン ────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20" aria-labelledby="lessons-heading">
        <div className="mb-10">
          <EucaSprig className="h-4 w-11 text-euca-500" aria-hidden />
          <h2 id="lessons-heading" className="mt-3 font-display text-2xl font-medium text-ink md:text-4xl">
            4つのレッスン
          </h2>
        </div>

        <Reveal className="reveal-stagger grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {lessons.map((l, i) => (
            <article key={l.id} className={`relative ${i % 2 === 0 ? "lg:mt-0" : "lg:mt-10"}`}>
              <Link
                href={`/lessons#${l.id}`}
                className="block rounded-frame border border-line bg-card p-3 pb-5 shadow-leaf transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className={`overflow-hidden ${i % 2 === 0 ? "leaf-frame" : "leaf-frame-r"}`}>
                  <img
                    src={l.image}
                    alt={`${l.name}（${l.sub}）のレッスンの様子`}
                    className="aspect-[5/4] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="px-1 pt-4">
                  <div className="flex items-center gap-2">
                    <span aria-hidden="true" className="h-3.5 w-3.5 rounded-full" style={{ background: l.dot }} />
                    <h3 className="font-display text-xl font-medium text-ink">{l.name}</h3>
                  </div>
                  <p className="mt-1 text-sm font-bold text-euca-600">{l.sub}</p>
                  <p className="mt-2 text-base leading-relaxed text-ink">{l.lead}</p>
                  <p className="mt-3 inline-block rounded-full bg-euca-100 px-3 py-1 text-sm font-bold text-ink">
                    {l.need}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </Reveal>

        <div className="relative mt-16 flex flex-col items-center text-center">
          <p className="text-lg font-bold text-ink">グループレッスンは</p>
          <div className="mt-1 flex items-center gap-4">
            <EucaSprig className="h-5 w-14 -scale-x-100 text-euca-400" aria-hidden />
            <p className="font-display text-[clamp(4rem,15vw,5.5rem)] font-medium leading-none text-hana">
              500
              <span className="text-3xl">円</span>
            </p>
            <EucaSprig className="h-5 w-14 text-euca-400" aria-hidden />
          </div>
          <p className="mt-3 font-display text-lg font-medium text-euca-700">1回ワンコイン！</p>
          <p className="mt-2 text-sm text-sub">（パーソナルは 1回 2,500円・エアコン使用日は +100円）</p>
        </div>
      </section>

      {/* ───────────── ⑤ お客様の声 ───────────── */}
      <section className="relative w-full border-y border-line bg-euca-50 py-14 md:py-20" aria-labelledby="voice-heading">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10">
            <EucaSprig className="h-4 w-11 text-euca-500" aria-hidden />
            <h2 id="voice-heading" className="mt-3 font-display text-2xl font-medium text-ink md:text-4xl">
              通っている方の声
            </h2>
          </div>

          <Reveal as="ul" className="reveal-stagger grid gap-8 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <li
                key={t.who}
                className={`relative border border-line bg-card p-6 pt-7 shadow-leaf ${i % 2 === 0 ? "leaf-frame" : "leaf-frame-r"}`}
              >
                <EucaLeaf
                  className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 text-euca-500"
                  aria-hidden
                />
                <p className="text-base leading-relaxed text-ink">「{t.body}」</p>
                <p className="mt-4 text-lg font-bold text-ink">{t.who}</p>
                <p className="mt-1 inline-block rounded-full bg-euca-100 px-3 py-0.5 text-sm font-bold text-euca-700">
                  {t.tag}
                </p>
              </li>
            ))}
          </Reveal>
          <p className="mt-6 text-sm text-sub">※ 掲載は一例です（実際にいただいた声に差し替え予定）。</p>
        </div>
      </section>

      {/* ─────────────── なぜ選ばれる（features） ─────────────── */}
      <section className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-16" aria-labelledby="why-heading">
        <div className="mb-8">
          <EucaSprig className="h-4 w-11 text-euca-500" aria-hidden />
          <h2 id="why-heading" className="mt-3 font-display text-xl font-medium text-ink md:text-3xl">
            Aula が大切にしていること
          </h2>
        </div>
        <Reveal as="ul" className="space-y-5">
          {features.map((f, i) => (
            <li key={f.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-euca-700 text-lg font-bold text-white"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-black text-ink">
                  <span className="marker">{f.title}</span>
                </h3>
                <p className="mt-1 text-base leading-relaxed text-ink">{f.body}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </section>

      {/* ──────────────────────── ⑥ CTA バンド（深緑全面） ──────────────────────── */}
      <section
        className="relative w-full overflow-hidden bg-euca-800 py-16 text-white md:py-24"
        aria-labelledby="cta-heading"
      >
        <EucaBranch
          decorative
          className="pointer-events-none absolute -right-10 top-1/2 h-[130%] -translate-y-1/2 text-euca-300 opacity-10 md:right-6"
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="font-display text-lg text-euca-200">考えるより、まず一歩。</p>
          <h2 id="cta-heading" className="mt-2 font-display text-3xl font-medium text-white md:text-6xl">
            まずは、体験から。
          </h2>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-washi px-8 py-4 text-lg font-black text-euca-800 shadow-lift transition-transform hover:-translate-y-0.5"
            >
              体験を申し込む
            </Link>
            <Link
              href="/contact"
              className="rounded-full px-7 py-4 text-lg font-black text-white shadow-lift transition-transform hover:-translate-y-0.5"
              style={{ background: "#06C755" }}
            >
              LINEで相談
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
