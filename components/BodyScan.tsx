"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* 暖色トークン（page.tsx と合わせる） */
const CREAM = "#FBF3DC";
const SUN = "#F0851F";
const TERRA = "#C0492A";
const INK = "#4A2E18";
const LEAF = "#4F9B53";
const HAND = '"Yomogi", "Zen Maru Gothic", cursive';
const DISPLAY = '"Dela Gothic One", system-ui, sans-serif';

/* 体のアンカー点（viewBox 0 0 220 560 座標）。採用フィギュアに合わせて調整する。
   side: ラベルを body の左(l)/右(r) どちらに出すか。at: この進捗で点灯。 */
type Pt = { key: string; label: string; sub: string; x: number; y: number; side: "l" | "r"; at: number };
const POINTS: Pt[] = [
  { key: "shoulder", label: "肩こり", sub: "肩・首", x: 140, y: 112, side: "r", at: 0.08 },
  { key: "posture", label: "姿勢のクセ", sub: "背中", x: 88, y: 158, side: "l", at: 0.22 },
  { key: "waist", label: "腰痛", sub: "腰", x: 127, y: 246, side: "r", at: 0.44 },
  { key: "knee", label: "膝痛", sub: "ひざ・歩行", x: 91, y: 418, side: "l", at: 0.8 },
];

const VB_W = 220;
const VB_H = 560;
const CX = 110; // 回転中心
const CY = 280;
const SCAN_TOP = 95;
const SCAN_BOTTOM = 500;

const rad = (deg: number) => (deg * Math.PI) / 180;
/* SVG rotate(deg, CX, CY) と同符号（y下向き・正で時計回り）で点を回す */
function rot(x: number, y: number, deg: number): [number, number] {
  const a = rad(deg);
  const c = Math.cos(a);
  const s = Math.sin(a);
  const dx = x - CX;
  const dy = y - CY;
  return [CX + dx * c - dy * s, CY + dx * s + dy * c];
}

export function BodyScan() {
  const secRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0); // セクション内スクロール進捗 0..1
  const [animate, setAnimate] = useState(false); // JS+motion許可で true（＝スクロール演出ON）

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // 演出OFF → 全アノテーションを静的表示のまま
    setAnimate(true);

    const el = secRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height - vh;
        const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
        setP(total > 0 ? scrolled / total : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const scanY = SCAN_TOP + p * (SCAN_BOTTOM - SCAN_TOP);
  const isActive = (pt: Pt) => !animate || p >= pt.at;

  /* ── 動き（派手め）: 入場でぐいっと起き上がり → スクロール中はスウェイ回転＋ズーム ── */
  const ent = Math.min(p / 0.12, 1);
  const settle = 1 - Math.pow(1 - ent, 3); // easeOutCubic
  const sway = Math.sin(p * Math.PI * 2.4) * 8; // ±8° の揺れ
  const theta = animate ? -14 * (1 - settle) + sway * (0.35 + 0.65 * settle) : 0;
  const scale = animate ? 0.9 + 0.12 * Math.min(p * 1.2, 1) + 0.02 * Math.sin(p * Math.PI * 4) : 1;
  const ty = animate ? -p * 14 : 0;

  return (
    <section
      ref={secRef}
      className="relative"
      style={{ height: animate ? "280vh" : undefined, background: CREAM }}
      aria-label="あなたの体の気になるところ"
    >
      {/* 全幅の sticky レイヤー：スクロール中ずっと画面に貼り付く＝ノート罫線は動かない */}
      <div className="sticky top-0 h-[100svh] w-full">
        {/* ノートの罫線（固定） */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0, transparent 37px, rgba(192,73,42,0.08) 37px, rgba(192,73,42,0.08) 38px)",
          }}
        />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-start gap-2 px-5 pt-[68px] md:flex-row md:items-center md:justify-between md:px-8 md:pt-0">
          {/* コピー */}
          <div className="relative z-10 shrink-0 text-center md:max-w-[42%] md:text-left">
            <p className="text-lg md:text-xl" style={{ fontFamily: HAND, color: INK }}>
              その悩み、<span style={{ color: LEAF }}>身体のクセ</span>かも？
            </p>
            <h1 className="mt-2 text-[9vw] leading-[1.12] sm:text-5xl md:text-[3.4rem]" style={{ fontFamily: DISPLAY, color: INK }}>
              自分のカラダは
              <br />
              <span style={{ color: SUN }}>自分次第</span>
            </h1>
            <p className="mt-3 hidden text-base md:block" style={{ color: INK }}>
              スクロールで、体の気になるところをチェック。
            </p>
            <p className="mt-4 hidden md:block" style={{ fontFamily: HAND, color: TERRA, fontSize: "1.5rem" }}>
              ✎ studio Aula
            </p>
            <div className="mt-4 hidden md:block">
              <Link
                href="/contact"
                className="inline-block rounded-md px-6 py-3 text-base font-bold text-white shadow-[0_14px_26px_-12px_rgba(240,133,31,1)] transition-transform hover:-translate-y-0.5"
                style={{ background: SUN, transform: "rotate(-1.5deg)" }}
              >
                体験を申し込む
              </Link>
            </div>
          </div>

          {/* 体のイラスト＋スキャン＋注釈（スクロールで回転・ズーム） */}
          <div
            className="relative mx-auto h-[62svh] max-h-[540px] md:h-[86svh]"
            style={{
              aspectRatio: `${VB_W} / ${VB_H}`,
              transform: `translateY(${ty.toFixed(1)}px) scale(${scale.toFixed(3)})`,
              transformOrigin: "50% 42%",
              willChange: "transform",
            }}
          >
            <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 h-full w-full overflow-visible" fill="none">
              <defs>
                <linearGradient id="bs-scan-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor={SUN} stopOpacity="0" />
                  <stop offset="0.5" stopColor={SUN} stopOpacity="1" />
                  <stop offset="1" stopColor={SUN} stopOpacity="0" />
                </linearGradient>
                <filter id="bs-glow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="3.2" />
                </filter>
              </defs>

              {/* 図形（回転する） */}
              <g transform={`rotate(${theta.toFixed(2)} ${CX} ${CY})`}>
                {/* 中心の点線ガイド（croquis風） */}
                <line x1={CX} y1="22" x2={CX} y2="540" stroke={TERRA} strokeWidth="1" strokeDasharray="2 5" opacity="0.32" />

                {/* ▼ 体のフィギュア（採用SVGに差し替え予定のプレースホルダ／左半身をミラー） */}
                <g stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="110" cy="48" rx="20" ry="24" />
                  <path d="M104 72 C 104 80 105 86 105 90 M116 72 C 116 80 115 86 115 90" />
                  <g id="bs-half">
                    <path d="M110 90 C 99 90 84 92 75 102 C 69 135 64 205 61 268 C 60 280 65 286 71 281 C 77 262 82 200 88 138 C 91 178 93 210 94 240 C 90 262 84 280 83 296 C 87 348 89 380 90 418 C 91 465 94 508 97 534 C 91 540 87 546 90 551 L 101 551 C 100 528 99 470 99 418 C 101 372 105 340 110 320" />
                    <path d="M92 118 C 100 122 104 122 110 122" opacity="0.4" />
                  </g>
                  <use href="#bs-half" transform="matrix(-1,0,0,1,220,0)" />
                </g>
              </g>

              {/* スキャンライン（画面基準・水平・下降／光る） */}
              {animate && (
                <g style={{ transition: "opacity .3s" }} opacity={p > 0.02 && p < 0.99 ? 1 : 0}>
                  <rect x="18" y={scanY - 17} width="184" height="34" fill={SUN} opacity="0.09" />
                  <line x1="22" y1={scanY} x2="198" y2={scanY} stroke="url(#bs-scan-grad)" strokeWidth="6" filter="url(#bs-glow)" opacity="0.75" />
                  <line x1="22" y1={scanY} x2="198" y2={scanY} stroke="url(#bs-scan-grad)" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx={CX} cy={scanY} r="3.2" fill={SUN} />
                </g>
              )}

              {/* アンカー点＋引き出し線（点は回転した体の上／ラベルは固定位置へ結ぶ） */}
              {POINTS.map((pt) => {
                const active = isActive(pt);
                const [dx, dy] = rot(pt.x, pt.y, theta);
                const lx = pt.side === "r" ? 200 : 20;
                return (
                  <g key={pt.key} opacity={active ? 1 : 0.16} style={{ transition: "opacity .4s" }}>
                    <line
                      x1={dx}
                      y1={dy}
                      x2={lx}
                      y2={pt.y}
                      stroke={TERRA}
                      strokeWidth="1.6"
                      strokeDasharray="3 3"
                      opacity={active ? 0.85 : 0}
                      style={{ transition: "opacity .4s" }}
                    />
                    {active && <circle cx={dx} cy={dy} r="11" fill={SUN} opacity="0.28" className="bs-ping" />}
                    <circle cx={dx} cy={dy} r="5" fill={active ? SUN : "#00000018"} stroke="#fff" strokeWidth="2" />
                  </g>
                );
              })}
            </svg>

            {/* ラベル（HTML・固定位置・手書き調・ポップ表示） */}
            {POINTS.map((pt) => {
              const active = isActive(pt);
              const leftPct = ((pt.side === "r" ? 200 : 20) / VB_W) * 100;
              const topPct = (pt.y / VB_H) * 100;
              const tilt = pt.side === "r" ? -2 : 2;
              return (
                <div
                  key={pt.key}
                  className="absolute z-20"
                  style={{
                    left: `${leftPct}%`,
                    top: `${topPct}%`,
                    transformOrigin: pt.side === "r" ? "left center" : "right center",
                    transform: `translate(${pt.side === "r" ? "0" : "-100%"}, -50%) rotate(${tilt}deg) scale(${active ? 1 : 0.55})`,
                    opacity: active ? 1 : 0,
                    transition: "opacity .35s ease, transform .5s cubic-bezier(.34,1.56,.64,1)",
                  }}
                >
                  <span
                    className="inline-block whitespace-nowrap rounded-md px-3 py-1.5 text-base font-black shadow-[0_8px_18px_-10px_rgba(74,46,24,.55)]"
                    style={{ background: "#fff", color: TERRA, border: `2px solid ${TERRA}` }}
                  >
                    {pt.label}
                    <span className="ml-1.5 text-[11px] font-bold" style={{ color: INK, fontFamily: HAND }}>
                      {pt.sub}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>

          {/* スクロール誘導（演出中・上部のみ） */}
          {animate && p < 0.05 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-sm md:hidden" style={{ color: INK, fontFamily: HAND }} aria-hidden>
              ↓ スクロール
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
