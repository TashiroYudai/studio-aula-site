import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { trainers, gallery, features } from "@/lib/site";

export const metadata: Metadata = {
  title: "教室紹介 | Studio Aula",
  description: "代表・トレーナーの紹介とスタジオのご案内。資格をもったトレーナーが、あなたの体づくりをサポートします。",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT & TRAINERS"
        title="私たちが、サポートします"
        lead="資格をもったトレーナーが、一人ひとりの体と暮らしに寄り添います。安心して通える、明るく温かいスタジオです。"
      />

      {/* 理念 */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center md:px-8 md:py-20">
        <p className="font-display text-sm font-bold tracking-[0.2em] text-sun-500">
          OUR PHILOSOPHY
        </p>
        <p className="mt-6 font-display text-2xl font-bold leading-relaxed text-ink md:text-3xl md:leading-relaxed">
          「体を育てる」とは、<br className="hidden sm:block" />
          その人らしく動ける毎日を、<br className="hidden sm:block" />
          長く続けられるようにすること。
        </p>
        <p className="mt-6 leading-relaxed text-sub">
          解剖学・運動生理学にもとづいて、年代や目的に合わせた「正しい体の使い方」を一緒に身につけます。
          子供の成長期も、忙しい現役世代も、これからのシニア世代も。同じ場所で、家族みんなが通えます。
        </p>
      </section>

      {/* トレーナー */}
      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">トレーナー紹介</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {trainers.map((t) => (
              <article
                key={t.name}
                className="flex flex-col gap-6 rounded-4xl border border-line bg-cream p-6 shadow-card sm:flex-row md:p-8"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-40 w-40 shrink-0 rounded-3xl object-cover sm:h-44 sm:w-40"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{t.name}</h3>
                  <p className="mt-1 text-sm font-bold text-sun-600">{t.role}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {t.qualifications.map((q) => (
                      <span key={q} className="rounded-full bg-sand px-3 py-1 text-xs font-bold text-sub">
                        {q}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 leading-relaxed text-sub">{t.message}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 特徴の再掲（安心感） */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-4xl border border-line bg-cream p-7 shadow-card">
              <h3 className="font-display text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-3 text-sub">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ギャラリー */}
      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">スタジオの様子</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`スタジオの様子 ${i + 1}`}
                className="aspect-square w-full rounded-3xl object-cover shadow-card"
                loading="lazy"
              />
            ))}
          </div>
          <p className="mt-4 text-sm text-sub">※ 写真はイメージです（本番では実際のスタジオ写真に差し替え）。</p>
        </div>
      </section>
    </>
  );
}
