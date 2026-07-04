import type { Config } from "tailwindcss";

/* ──────────────────────────────────────────────────────────────
   Studio Aula「ユーカリ」トークン系（唯一のパレット）
   使用律:
   - 本文テキストは ink / sub のみ
   - euca-400/500 は装飾・大型ディスプレイ専用（明るい地に本文を載せない）
   - 小さいテキストに使える最小の色 = euca-600 / hana-deep
   - JSX 内の生 hex は LINE ブランド #06C755 と lib/site.ts の dot のみ許可
   ────────────────────────────────────────────────────────────── */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        washi: "#F7F4EC", // ページ地色（生成り）
        card: "#FDFCF7", // 持ち上げた面
        ink: "#2E3528", // 本文（緑みの黒）
        sub: "#5A6252", // 二次テキスト
        line: "#DFE3D5", // 罫線

        // 主役：ユーカリの銀緑（新生・再生）
        euca: {
          50: "#F1F4EA", // 淡いセージの面（交互セクション地）
          100: "#E3E9D7", // ピル・チップの地
          200: "#CBD6BA",
          300: "#B2C29E", // 明るい葉
          400: "#9CAF88", // ★ ブランド銀緑 — 装飾専用（テキスト不可）
          500: "#7C9268", // 葉・大型ディスプレイのみ
          600: "#5F7550", // 通常テキストの最小色（ラベル・リンク）
          700: "#43573A", // 深緑アクセント：CTA地・強調テキスト
          800: "#35452D", // 濃いCTAバンド地
          900: "#26331F", // フッター「土」の地
        },
        // 差し色：ユーカリの蕾・花の赤み（ごく少量）
        hana: { DEFAULT: "#B95C50", deep: "#9E4437" },
      },
      fontFamily: {
        // Kiwi Maru に太字はない（400/500のみ）。font-display には font-medium まで。
        display: ['"Kiwi Maru"', "serif"],
        sans: ['"Zen Kaku Gothic New"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        leaf: "0 1px 2px rgba(46,53,40,0.05), 0 18px 40px -24px rgba(67,87,58,0.35)",
        lift: "0 24px 50px -28px rgba(46,53,40,0.4)",
      },
      borderRadius: {
        leaf: "1.25rem",
        frame: "2rem",
      },
      letterSpacing: {
        label: "0.22em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(.21,.6,.35,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
