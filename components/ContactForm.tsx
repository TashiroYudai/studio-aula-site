"use client";

import { useState } from "react";

const AGE_GROUPS = ["子供", "成人", "シニア"] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [age, setAge] = useState<(typeof AGE_GROUPS)[number]>("成人");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // PLACEHOLDER: 後で Supabase / Resend 送信に接続する
    setSent(true);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (sent) {
    return (
      <div className="rounded-4xl border border-line bg-cream p-10 text-center shadow-card">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-leaf/15 text-leaf">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M5 12.5l4.5 4.5L19 6.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-ink">送信しました</h3>
        <p className="mt-3 text-sub">
          お問い合わせありがとうございます。担当より折り返しご連絡いたします。
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-7 rounded-full border-2 border-line bg-white px-7 py-3 font-bold text-ink transition hover:border-sun-300"
        >
          続けて入力する
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-4xl border border-line bg-cream p-6 shadow-card md:p-9">
      <div className="grid gap-6">
        <Field label="お名前" required>
          <input name="name" required placeholder="山田 太郎" className={inputCls} />
        </Field>

        <Field label="ご連絡先（電話 または メール）" required>
          <input name="contact" required placeholder="090-0000-0000 / you@example.com" className={inputCls} />
        </Field>

        <Field label="年齢層" required>
          <div className="flex flex-wrap gap-3">
            {AGE_GROUPS.map((g) => (
              <label
                key={g}
                className={`cursor-pointer rounded-full border-2 px-6 py-3 text-base font-bold transition ${
                  age === g
                    ? "border-sun-500 bg-sun-50 text-sun-700"
                    : "border-line bg-white text-sub hover:border-sun-300"
                }`}
              >
                <input
                  type="radio"
                  name="ageGroup"
                  value={g}
                  checked={age === g}
                  onChange={() => setAge(g)}
                  className="sr-only"
                />
                {g}
              </label>
            ))}
          </div>
        </Field>

        <Field label="ご希望の日時（任意）">
          <input name="preferred" placeholder="例）平日の午前中、土曜午後 など" className={inputCls} />
        </Field>

        <Field label="お悩み・ご相談（任意）">
          <textarea
            name="concern"
            rows={4}
            placeholder="肩こりを改善したい / 子供の運動能力を伸ばしたい など"
            className={`${inputCls} h-auto py-3 leading-relaxed`}
          />
        </Field>

        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-sun-500 px-8 py-4 text-lg font-bold text-white shadow-soft transition hover:bg-sun-600 hover:shadow-lift"
        >
          この内容で申し込む
        </button>
        <p className="text-center text-sm text-sub">
          ※ 送信後、担当より折り返しご連絡します。お支払いは当日に現金または PayPay が使えます。
        </p>
      </div>
    </form>
  );
}

const inputCls =
  "w-full rounded-2xl border-2 border-line bg-white px-4 text-lg text-ink placeholder:text-sub/50 transition focus:border-sun-400 h-14";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-base font-bold text-ink">
        {label}
        {required && (
          <span className="rounded bg-sun-100 px-2 py-0.5 text-xs font-bold text-sun-700">
            必須
          </span>
        )}
      </span>
      {children}
    </label>
  );
}
