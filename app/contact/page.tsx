import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { site, steps, line } from "@/lib/site";

export const metadata: Metadata = {
  title: "アクセス・お問い合わせ | Studio Aula",
  description: "体験レッスンのお申し込み・お問い合わせ。営業時間・アクセス・よくある質問もこちら。",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="ACCESS & CONTACT"
        title="アクセス・お問い合わせ"
        lead="体験のお申し込み・ご相談はこちらから。LINE・フォーム・お電話、どれでもどうぞ。"
      />

      {/* LINE（いちばん簡単） */}
      <section className="mx-auto max-w-5xl px-6 pt-12 md:px-8">
        <div className="flex flex-col items-center gap-6 rounded-4xl border-2 border-[#06C755]/30 bg-[#06C755]/[0.06] p-7 text-center md:flex-row md:gap-8 md:p-9 md:text-left">
          <img
            src={line.qr}
            alt="LINE友だち追加用QRコード"
            className="h-32 w-32 shrink-0 rounded-2xl border border-line bg-white p-2"
          />
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#06C755] px-3 py-1 text-xs font-bold text-white">
              <LineIcon size={13} /> かんたん
            </span>
            <h2 className="mt-2.5 font-display text-2xl font-bold text-ink">LINEで申し込み・ご相談</h2>
            <p className="mt-2 leading-relaxed text-sub">
              友だち追加して、そのままメッセージで予約・お問い合わせができます。当日の空き状況の確認もスムーズです。
            </p>
          </div>
          <a
            href={line.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-[#06C755] px-8 py-4 text-lg font-bold text-white shadow-soft transition hover:brightness-105"
          >
            <LineIcon size={22} /> 友だち追加する
          </a>
        </div>
      </section>

      {/* 体験の流れ */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">体験レッスンの流れ</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-4xl border border-line bg-cream p-7 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sun-500 font-display text-xl font-bold text-white shadow-soft">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sub">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* フォーム + アクセス情報 */}
      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">体験のお申し込み</h2>
            <p className="mt-3 text-sub">必須項目をご記入のうえ送信してください。</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">アクセス</h2>
            <div className="mt-8 space-y-5 rounded-4xl border border-line bg-cream p-7 shadow-card">
              <InfoRow label="住所" value={site.address} />
              <InfoRow label="電話" value={site.tel} href={`tel:${site.tel}`} />
              <InfoRow label="メール" value={site.email} href={`mailto:${site.email}`} />
              <div>
                <p className="text-sm font-bold text-sun-600">営業時間</p>
                <ul className="mt-2 space-y-1">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between border-b border-line py-1.5 last:border-0">
                      <span className="text-ink">{h.day}</span>
                      <span className="text-sub">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Googleマップ埋め込み */}
            <div className="mt-6 overflow-hidden rounded-4xl border border-line shadow-card">
              <iframe
                title="アクセスマップ"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-sm text-sub">※ 地図は仮の位置です（本番では実住所に差し替え）。</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">よくある質問</h2>
        <div className="mt-10">
          <Faq />
        </div>
      </section>
    </>
  );
}

function LineIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3C6.9 3 2.8 6.3 2.8 10.4c0 3.7 3.3 6.8 7.7 7.4.3.06.7.2.8.46.07.24.05.6.02.85l-.13.8c-.04.24-.19.94.82.51 1.01-.42 5.45-3.21 7.44-5.5 1.37-1.5 2.03-3.02 2.03-4.52C21.5 6.3 17.4 3 12 3z" />
    </svg>
  );
}

function InfoRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <p className="text-sm font-bold text-sun-600">{label}</p>
      {href ? (
        <a href={href} className="mt-1 block text-lg font-medium text-ink underline-offset-4 hover:underline">
          {value}
        </a>
      ) : (
        <p className="mt-1 text-lg font-medium text-ink">{value}</p>
      )}
    </div>
  );
}
