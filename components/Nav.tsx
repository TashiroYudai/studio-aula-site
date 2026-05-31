"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

const SIZES = ["", "text-lg", "text-xl"] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [sizeIdx, setSizeIdx] = useState(0);

  function cycleSize() {
    const next = (sizeIdx + 1) % SIZES.length;
    setSizeIdx(next);
    const el = document.documentElement;
    el.classList.remove("text-lg", "text-xl");
    if (SIZES[next]) el.classList.add(SIZES[next]);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-2.5" aria-label={site.name}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-sun-500 text-white shadow-soft">
            <SunMark />
          </span>
          <span className="font-display text-xl font-bold tracking-wide text-ink">
            {site.name}
          </span>
        </Link>

        {/* PC ナビ */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-full px-4 py-2.5 text-[15px] font-medium text-ink/80 transition hover:bg-sand hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={cycleSize}
            className="hidden items-center gap-1 rounded-full border border-line bg-white px-3 py-2 text-sm font-bold text-sub transition hover:border-sun-300 hover:text-sun-600 sm:flex"
            aria-label="文字サイズを変える"
          >
            <span className="text-xs">あ</span>
            <span className="text-base">あ</span>
          </button>

          <Link
            href="/contact"
            className="hidden rounded-full bg-sun-500 px-5 py-3 text-[15px] font-bold text-white shadow-soft transition hover:bg-sun-600 hover:shadow-lift md:inline-block"
          >
            体験申込
          </Link>

          {/* モバイル ハンバーガー */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink lg:hidden"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* モバイル メニュー */}
      {open && (
        <div className="border-t border-line bg-cream lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-4 text-lg font-medium text-ink transition hover:bg-sand"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-sun-500 px-5 py-4 text-center text-lg font-bold text-white shadow-soft"
              >
                体験を申し込む
              </Link>
              <button
                onClick={cycleSize}
                className="grid h-14 w-14 place-items-center rounded-full border border-line bg-white font-bold text-sub"
                aria-label="文字サイズを変える"
              >
                <span className="text-sm">あ</span>
                <span className="text-lg">あ</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function SunMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="5" fill="currentColor" />
      {Array.from({ length: 8 }).map((_, i) => (
        <rect
          key={i}
          x="11.1"
          y="0.5"
          width="1.8"
          height="3.4"
          rx="0.9"
          fill="currentColor"
          transform={`rotate(${i * 45} 12 12)`}
        />
      ))}
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
