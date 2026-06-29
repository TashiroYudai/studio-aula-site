"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

const SIZES = ["", "text-lg", "text-xl"] as const;

const CREAM = "#FBF3DC";
const SUN = "#F0851F";
const TERRA = "#C0492A";
const INK = "#4A2E18";
const HAND = '"Yomogi", "Zen Maru Gothic", cursive';
const BODY = '"Zen Maru Gothic", system-ui, sans-serif';

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
    <header
      className="sticky top-0 z-50 border-b-2 border-dashed backdrop-blur-md"
      style={{ borderColor: `${INK}33`, background: `${CREAM}f0`, color: INK, fontFamily: BODY }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-2.5" aria-label={site.name}>
          <span
            aria-hidden="true"
            className="grid h-10 w-10 place-items-center rounded-full text-xl font-black"
            style={{ background: TERRA, color: CREAM, transform: "rotate(-4deg)", fontFamily: HAND }}
          >
            A
          </span>
          <span className="text-2xl leading-none" style={{ fontFamily: HAND, color: INK }}>
            studio Aula
          </span>
        </Link>

        {/* PC ナビ */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-md px-3.5 py-2.5 text-[15px] font-bold transition-colors hover:bg-[#F0851F22]"
              style={{ color: INK }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={cycleSize}
            className="hidden items-baseline gap-0.5 rounded-md border-2 px-3 py-2 font-bold transition-transform hover:-translate-y-0.5 sm:flex"
            style={{ borderColor: `${INK}33`, color: INK, background: "#fff" }}
            aria-label="文字サイズを変える"
          >
            <span className="text-xs">あ</span>
            <span className="text-base">あ</span>
          </button>

          <Link
            href="/contact"
            className="hidden rounded-md px-5 py-3 text-[15px] font-bold text-white shadow-[0_10px_18px_-10px_rgba(240,133,31,1)] transition-transform hover:-translate-y-0.5 md:inline-block"
            style={{ background: SUN, transform: "rotate(-1.5deg)" }}
          >
            体験申込
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-md border-2 lg:hidden"
            style={{ borderColor: `${INK}33`, color: INK, background: "#fff" }}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* モバイル メニュー */}
      {open && (
        <div className="border-t-2 border-dashed lg:hidden" style={{ borderColor: `${INK}33`, background: CREAM }}>
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-4 text-lg font-bold"
                style={{ color: INK }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-md px-5 py-4 text-center text-lg font-bold text-white"
                style={{ background: SUN }}
              >
                体験を申し込む
              </Link>
              <button
                onClick={cycleSize}
                className="grid h-14 w-14 shrink-0 place-items-center rounded-md border-2 font-bold"
                style={{ borderColor: `${INK}33`, color: INK, background: "#fff" }}
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
