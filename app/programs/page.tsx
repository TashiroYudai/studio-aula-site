import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionHead";
import { pricing } from "@/lib/site";

export const metadata: Metadata = {
  title: "コース・料金 | Studio Aula",
  description:
    "グループレッスンは1回500円、パーソナルは1回2,500円。入会金無料。はじめての方はまずパーソナルから、あなたに合うレッスンをご提案します。",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="コース・料金"
        lead="シンプルで続けやすい料金です。入会金は無料。まずはパーソナルから、お気軽にどうぞ。"
      />

      {/* はじめての方へ：おすすめの流れ */}
      <section className="mx-auto max-w-5xl px-6 pt-16 md:px-8">
        <div className="overflow-hidden rounded-frame border border-pine-200 bg-pine-50/60 p-7 md:p-10">
          <SectionLabel>For first-timers</SectionLabel>
          <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-ink md:text-3xl">
            まずは「パーソナル」から始めるのがおすすめ
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-sub">
            最初にパーソナル（1回 2,500円）で、体の状態やお悩みをじっくり確認。そのうえで、あなたに合ったグループレッスンをご提案します。
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <FlowStep n="01" title="パーソナルで体を知る" body="専属トレーナーが体の状態とお悩みを確認。" accent="bg-pine-600" />
            <FlowStep n="02" title="合うレッスンへ" body="あなたに合ったグループレッスンをご提案します。" accent="bg-honey-400" />
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {pricing.items.map((it) => (
            <div
              key={it.name}
              className="flex flex-col rounded-frame border border-line bg-card p-8 shadow-card"
            >
              <div className="flex items-center gap-2.5">
                <span className="h-3 w-3 rounded-full" style={{ background: it.dot }} />
                <h3 className="font-display text-xl font-bold text-ink">{it.name}</h3>
              </div>
              <p className="mt-1 text-sm text-sub">{it.target}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-5xl font-bold text-ink">{it.price}</span>
                <span className="mb-1.5 text-lg font-bold text-sub">円</span>
                <span className="mb-2 ml-1 font-mono text-sm text-sub">／ {it.per}</span>
              </div>
              <p className="mt-4 inline-flex w-fit rounded-full bg-mist px-4 py-2 text-sm font-bold text-sub">
                {it.note}
              </p>
              <Link
                href="/contact"
                className="mt-8 block rounded-full bg-pine-600 px-6 py-4 text-center text-lg font-bold text-card shadow-soft transition hover:bg-pine-700"
              >
                体験を申し込む
              </Link>
            </div>
          ))}
        </div>

        {/* 入会金バナー */}
        <div className="mt-6 flex flex-col items-center justify-center gap-2 rounded-frame border border-pine-200 bg-pine-50 px-6 py-6 text-center sm:flex-row sm:gap-4">
          <span className="font-display text-lg font-bold text-ink">入会金</span>
          <span className="font-display text-3xl font-bold text-pine-600">無料</span>
          <span className="text-sub">どなたでもお気軽に始められます。</span>
        </div>
      </section>

      {/* 補足 */}
      <section className="border-y border-line bg-mist py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-3 md:px-8">
          {[
            { t: "お支払い", d: pricing.payment },
            { t: "入会金", d: "無料" },
            { t: "持ち物", d: pricing.belongings },
          ].map((x) => (
            <div key={x.t} className="rounded-card border border-line bg-card p-7 text-center shadow-card">
              <p className="label justify-center">{x.t}</p>
              <p className="mt-2 text-sub">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-5xl px-6 text-center text-sm text-sub md:px-8">
          ※ グループレッスンはエアコンを使う日のみ +100円をいただきます。パーソナルは予約制です（空き状況は Instagram をご確認ください）。
        </p>
      </section>
    </>
  );
}

function FlowStep({
  n,
  title,
  body,
  accent,
}: {
  n: string;
  title: string;
  body: string;
  accent: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-card border border-line bg-card p-5">
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-card font-mono text-base font-bold text-card ${accent}`}
      >
        {n}
      </span>
      <div>
        <p className="font-display font-bold text-ink">{title}</p>
        <p className="mt-1 text-sm text-sub">{body}</p>
      </div>
    </div>
  );
}
