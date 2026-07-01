"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

const SIZES = ["", "text-lg", "text-xl"] as const;

const CYAN = "#0FA5CB";
const CYAN_DEEP = "#0A6E8C";
const INK = "#0C2230";
const BRAND = '"Space Grotesk", "Zen Kaku Gothic New", sans-serif';
const BODY = '"Zen Kaku Gothic New", system-ui, sans-serif';

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
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ borderColor: `${INK}14`, background: "rgba(248,253,254,0.82)", color: INK, fontFamily: BODY }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-2.5" aria-label={site.name}>
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-lg text-lg font-bold text-white"
            style={{ background: `linear-gradient(135deg, #12b0d8, ${CYAN_DEEP})`, fontFamily: BRAND }}
          >
            A
          </span>
          <span className="text-xl font-semibold leading-none tracking-tight" style={{ fontFamily: BRAND, color: INK }}>
            studio Aula
          </span>
        </Link>

        {/* PC ナビ */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-lg px-3.5 py-2.5 text-[15px] font-bold transition-colors hover:bg-[#0FA5CB18]"
              style={{ color: INK }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={cycleSize}
            className="hidden items-baseline gap-0.5 rounded-lg border px-3 py-2 font-bold transition-transform hover:-translate-y-0.5 sm:flex"
            style={{ borderColor: `${INK}22`, color: INK, background: "#fff" }}
            aria-label="文字サイズを変える"
          >
            <span className="text-xs">あ</span>
            <span className="text-base">あ</span>
          </button>

          <Link
            href="/contact"
            className="hidden rounded-full px-5 py-2.5 text-[15px] font-bold text-white shadow-[0_10px_20px_-10px_rgba(15,165,203,1)] transition-transform hover:-translate-y-0.5 md:inline-block"
            style={{ background: `linear-gradient(135deg, #12b0d8, ${CYAN_DEEP})` }}
          >
            体験申込
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-lg border lg:hidden"
            style={{ borderColor: `${INK}22`, color: INK, background: "#fff" }}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* モバイル メニュー */}
      {open && (
        <div className="border-t lg:hidden" style={{ borderColor: `${INK}14`, background: "#F8FDFE" }}>
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-4 text-lg font-bold"
                style={{ color: INK }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full px-5 py-4 text-center text-lg font-bold text-white"
                style={{ background: `linear-gradient(135deg, #12b0d8, ${CYAN_DEEP})` }}
              >
                体験を申し込む
              </Link>
              <button
                onClick={cycleSize}
                className="grid h-14 w-14 shrink-0 place-items-center rounded-lg border font-bold"
                style={{ borderColor: `${INK}22`, color: INK, background: "#fff" }}
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
