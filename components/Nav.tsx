"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { EucaLeaf } from "@/components/euca";

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
    <header className="sticky top-0 z-50 border-b border-line bg-washi/95 text-ink backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-2.5" aria-label={site.name}>
          <span
            aria-hidden="true"
            className="grid h-10 w-10 place-items-center rounded-full bg-euca-700 text-washi"
          >
            <EucaLeaf className="h-5 w-5" />
          </span>
          <span className="font-display text-[1.35rem] leading-none text-ink">
            studio Aula
          </span>
        </Link>

        {/* PC ナビ */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-full px-3.5 py-2.5 text-[15px] font-bold text-ink transition-colors hover:bg-euca-100"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={cycleSize}
            className="hidden items-baseline gap-0.5 rounded-full border border-line bg-card px-3.5 py-2 font-bold text-ink transition-colors hover:bg-euca-50 sm:flex"
            aria-label="文字サイズを変える"
          >
            <span className="text-xs">あ</span>
            <span className="text-base">あ</span>
          </button>

          <Link
            href="/contact"
            className="hidden rounded-full bg-euca-700 px-5 py-3 text-[15px] font-bold text-white shadow-leaf transition-colors hover:bg-euca-800 md:inline-block"
          >
            体験申込
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-ink lg:hidden"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* モバイル メニュー */}
      {open && (
        <div className="border-t border-line bg-washi lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-leaf px-4 py-4 text-lg font-bold text-ink transition-colors hover:bg-euca-50"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-euca-700 px-5 py-4 text-center text-lg font-bold text-white"
              >
                体験を申し込む
              </Link>
              <button
                onClick={cycleSize}
                className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-line bg-card font-bold text-ink"
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
