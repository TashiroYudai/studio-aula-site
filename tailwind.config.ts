import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 紙の地色（暖かい教科書のページ）
        paper: "#F4F0E6",
        card: "#FBF8F1", // 持ち上げた面
        mist: "#ECE6D8", // 交互セクションの地
        ink: "#232620", // 本文（緑みのある黒）
        sub: "#6A685B", // 二次テキスト
        line: "#E0D9C8", // 罫線

        // 主役：深い植物の緑（育てる・知性・落ち着き）
        pine: {
          50: "#EDF1EB",
          100: "#D6E1D5",
          200: "#B0C4AF",
          300: "#7E9C82",
          400: "#4F6E55",
          500: "#3A5A45",
          600: "#2E4A3A",
          700: "#233A2D",
          800: "#1A2C22",
        },
        // 差し色：琥珀・蜂蜜（陽の温度。署名のマーカー）
        honey: {
          50: "#FBF1DC",
          100: "#F6E1B8",
          200: "#EFCA82",
          300: "#E9B45A",
          400: "#E0A33A",
          500: "#C9882A",
          600: "#A66E20",
        },
        clay: "#BD5B3A", // 温かい強調（パーソナル等）

        // ブランドのキービジュアル（手書きノート）
        note: {
          paper: "#FCF4C9", // ノートの黄色
          green: "#4F9B53", // 手書きの緑
          orange: "#E5862B", // studio Aula のオレンジ
        },
      },
      fontFamily: {
        display: ['"Zen Old Mincho"', "serif"],
        sans: ['"Zen Kaku Gothic New"', "system-ui", "sans-serif"],
        mono: ['"Space Mono"', '"Zen Kaku Gothic New"', "monospace"],
        hand: ['"Yusei Magic"', '"Zen Kaku Gothic New"', "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(35,38,32,0.04), 0 14px 30px -20px rgba(35,38,32,0.30)",
        soft: "0 10px 30px -18px rgba(46,74,58,0.40)",
        lift: "0 22px 48px -26px rgba(35,38,32,0.42)",
      },
      borderRadius: {
        card: "1.1rem",
        frame: "1.5rem",
      },
      letterSpacing: {
        label: "0.22em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.7)", opacity: "0.7" },
          "70%,100%": { transform: "scale(1.7)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(.21,.6,.35,1) both",
        "pulse-ring": "pulse-ring 2.6s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
