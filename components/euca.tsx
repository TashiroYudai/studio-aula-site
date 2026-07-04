/* ──────────────────────────────────────────────────────────────
   ユーカリのモチーフキット（サイト内の植物装飾はすべてここから）
   節度の律: 大きなモチーフは 1 ビューポートに 1 つまで。
   繰り返し使用が許されるのは SectionLabel 内の EucaSprig のみ。
   - EucaLeaf    … 丸葉1枚（リストマーカー・ロゴ・小アクセント）
   - EucaSprig   … 3枚の小枝（SectionLabel 専用）
   - EucaDivider … 横に流れる細い枝（セクションの区切り）
   - EucaBranch  … 上へ伸びる枝＝ヒーローの署名（decorative で透かし用）
   ────────────────────────────────────────────────────────────── */

type Tone = "light" | "mid" | "deep" | "hana";

const TONE_FILL: Record<Tone, string> = {
  light: "fill-euca-300",
  mid: "fill-euca-400",
  deep: "fill-euca-500",
  hana: "fill-hana",
};
// decorative（単色透かし）時は色の代わりに濃淡で奥行きを出す
const TONE_OPACITY: Record<Tone, number> = {
  light: 0.4,
  mid: 0.6,
  deep: 0.85,
  hana: 0.7,
};

/** 丸葉1枚（ユーカリ・銀丸葉）。色は currentColor。 */
export function EucaLeaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        d="M12 21.5c-.35-2.3-.35-4.1 0-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12 15.6c-4.7 0-7.7-2.9-7.5-6.6C4.7 5.4 8 2.55 12 2.7c4-.15 7.3 2.7 7.5 6.3.2 3.7-2.8 6.6-7.5 6.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** 3枚の小枝（SectionLabel の眉飾り専用）。 */
export function EucaSprig({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 18" className={className} aria-hidden="true" focusable="false">
      <path
        d="M1.5 13.5C14 13 30 11.5 46.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <ellipse cx="10" cy="8.4" rx="4.3" ry="4" fill="currentColor" opacity="0.5" />
      <ellipse cx="24" cy="13.6" rx="4.7" ry="4.4" fill="currentColor" opacity="0.75" />
      <ellipse cx="38" cy="6.4" rx="3.7" ry="3.4" fill="currentColor" />
    </svg>
  );
}

/** 横に流れる細い枝。セクションの区切りに（w-full / h-5〜6 目安）。 */
export function EucaDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 26"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M10 15c120-4 240 2 350-2s230 2 350-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <ellipse cx="84" cy="8.5" rx="5" ry="4.6" fill="currentColor" opacity="0.5" />
      <ellipse cx="166" cy="19" rx="5.8" ry="5.4" fill="currentColor" opacity="0.75" />
      <ellipse cx="252" cy="8" rx="4.6" ry="4.2" fill="currentColor" opacity="0.55" />
      <ellipse cx="360" cy="18.5" rx="5.4" ry="5" fill="currentColor" />
      <ellipse cx="468" cy="8" rx="5" ry="4.6" fill="currentColor" opacity="0.6" />
      <ellipse cx="556" cy="18.5" rx="5.8" ry="5.4" fill="currentColor" opacity="0.8" />
      <ellipse cx="642" cy="7.5" rx="4.4" ry="4" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

/* ── EucaBranch ──────────────────────────────────────────────── */

// 幹・側枝（viewBox 0 0 320 560、下→上）
const STEMS = [
  { d: "M168 552C150 480 178 420 160 352 146 296 172 240 158 180 150 140 162 96 148 40", delay: "0s" },
  { d: "M163 430C130 415 105 418 82 430", delay: "0.3s" },
  { d: "M160 310C195 295 225 300 250 288", delay: "0.4s" },
  { d: "M155 160C125 150 108 138 96 118", delay: "0.5s" },
] as const;

// 葉：銀丸葉。ax/ay は幹・側枝上の付け根（葉柄で必ず接続し「点」に見せない）。
// 下ほど大きく、上ほど若い。tilt は葉ごとの傾き（deg）。
const LEAVES: {
  cx: number;
  cy: number;
  r: number;
  ax: number;
  ay: number;
  tone: Tone;
  delay: number;
  tilt: number;
}[] = [
  // 幹の下部（大きな成葉の対）
  { cx: 134, cy: 522, r: 24, ax: 161, ay: 522, tone: "deep", delay: 0.2, tilt: -10 },
  { cx: 190, cy: 516, r: 22, ax: 162, ay: 516, tone: "mid", delay: 0.26, tilt: 12 },
  { cx: 138, cy: 478, r: 22, ax: 162, ay: 478, tone: "mid", delay: 0.32, tilt: 8 },
  { cx: 188, cy: 470, r: 20, ax: 163, ay: 470, tone: "light", delay: 0.38, tilt: -10 },
  { cx: 191, cy: 424, r: 19, ax: 166, ay: 424, tone: "deep", delay: 0.46, tilt: 10 },
  // 左の側枝（枝に沿って）
  { cx: 118, cy: 406, r: 15, ax: 118, ay: 419, tone: "mid", delay: 0.52, tilt: -14 },
  { cx: 82, cy: 412, r: 13, ax: 86, ay: 425, tone: "deep", delay: 0.58, tilt: -8 },
  { cx: 106, cy: 442, r: 12, ax: 108, ay: 420, tone: "light", delay: 0.62, tilt: 6 },
  // 幹の中部
  { cx: 141, cy: 388, r: 18, ax: 165, ay: 388, tone: "light", delay: 0.5, tilt: -8 },
  { cx: 185, cy: 342, r: 17, ax: 161, ay: 342, tone: "mid", delay: 0.56, tilt: 10 },
  { cx: 134, cy: 314, r: 16, ax: 158, ay: 314, tone: "deep", delay: 0.62, tilt: -6 },
  // 右の側枝
  { cx: 208, cy: 280, r: 13, ax: 208, ay: 298, tone: "mid", delay: 0.68, tilt: 10 },
  { cx: 241, cy: 278, r: 11, ax: 239, ay: 291, tone: "light", delay: 0.74, tilt: 6 },
  { cx: 227, cy: 306, r: 10, ax: 226, ay: 297, tone: "deep", delay: 0.78, tilt: 12 },
  // 幹の上部（若い葉）
  { cx: 179, cy: 254, r: 15, ax: 159, ay: 258, tone: "light", delay: 0.7, tilt: 8 },
  { cx: 141, cy: 222, r: 14, ax: 161, ay: 222, tone: "mid", delay: 0.76, tilt: -10 },
  { cx: 175, cy: 182, r: 12, ax: 157, ay: 184, tone: "deep", delay: 0.82, tilt: 8 },
  // 左上の側枝
  { cx: 116, cy: 130, r: 10, ax: 119, ay: 141, tone: "mid", delay: 0.88, tilt: -10 },
  { cx: 94, cy: 106, r: 9, ax: 97, ay: 118, tone: "deep", delay: 0.92, tilt: -6 },
  // 幹の先端へ
  { cx: 170, cy: 124, r: 10, ax: 155, ay: 128, tone: "light", delay: 0.9, tilt: 8 },
  { cx: 138, cy: 88, r: 9, ax: 155, ay: 92, tone: "mid", delay: 0.96, tilt: -8 },
  { cx: 165, cy: 56, r: 8, ax: 152, ay: 60, tone: "hana", delay: 1.0, tilt: 10 }, // 新芽＝「新生」
  { cx: 148, cy: 32, r: 7, ax: 148, ay: 40, tone: "deep", delay: 1.05, tilt: 0 },
];

// お悩みタグの節（上=肩 / 中=腰 / 下=膝）。チップ側の % 位置と対応。
const NODES = [
  { x: 155, y: 148, toX: 300, toY: 134 }, // 肩こり → 右上
  { x: 157, y: 288, toX: 20, toY: 300 }, // 腰痛 → 左中
  { x: 166, y: 445, toX: 300, toY: 452 }, // 膝・歩行 → 右下
] as const;

/**
 * 上へ伸びるユーカリの枝（ヒーローの署名）。
 * - 既定: 多色の葉＋お悩みタグの節。`<Reveal>` 内に置くと
 *   幹が描き起こされ、葉が下から順にふくらむ（reduced-motion/JS無効は静止表示）。
 * - decorative: 単色 currentColor の透かし（節・アニメなし）。
 */
export function EucaBranch({
  className = "",
  decorative = false,
}: {
  className?: string;
  decorative?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 320 560"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {STEMS.map((s) => (
        <path
          key={s.d}
          d={s.d}
          pathLength={1}
          fill="none"
          strokeWidth={5}
          strokeLinecap="round"
          className={
            decorative ? "stroke-current" : "draw stroke-euca-600"
          }
          style={
            decorative
              ? undefined
              : ({ "--len": 1, "--delay": s.delay } as React.CSSProperties)
          }
          opacity={decorative ? 0.9 : undefined}
        />
      ))}

      {LEAVES.map((l) => (
        <g
          key={`${l.cx}-${l.cy}`}
          className={decorative ? undefined : "leaf-pop"}
          style={
            decorative
              ? undefined
              : ({ "--delay": `${l.delay}s` } as React.CSSProperties)
          }
        >
          {/* 葉柄：幹と必ず接続する */}
          <path
            d={`M${l.ax} ${l.ay}L${l.cx} ${l.cy}`}
            fill="none"
            strokeWidth={2.5}
            strokeLinecap="round"
            className={decorative ? "stroke-current" : "stroke-euca-600"}
            opacity={decorative ? 0.5 : undefined}
          />
          <ellipse
            cx={l.cx}
            cy={l.cy}
            rx={l.r}
            ry={l.r * 0.92}
            transform={`rotate(${l.tilt} ${l.cx} ${l.cy})`}
            className={decorative ? "fill-current" : TONE_FILL[l.tone]}
            opacity={decorative ? TONE_OPACITY[l.tone] : undefined}
          />
        </g>
      ))}

      {!decorative &&
        NODES.map((n, i) => (
          <g key={n.y}>
            <path
              d={`M${n.x} ${n.y}L${n.toX} ${n.toY}`}
              fill="none"
              strokeWidth={1.5}
              strokeDasharray="4 5"
              className="leaf-pop stroke-euca-600/70"
              style={{ "--delay": `${1.05 + i * 0.12}s` } as React.CSSProperties}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r={5.5}
              strokeWidth={2.5}
              className="leaf-pop fill-card stroke-euca-600"
              style={{ "--delay": `${1.05 + i * 0.12}s` } as React.CSSProperties}
            />
          </g>
        ))}
    </svg>
  );
}
