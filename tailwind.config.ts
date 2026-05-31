import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 陽だまりのオレンジ
        sun: {
          50: "#FFF7EE",
          100: "#FFE9D2",
          200: "#FFD0A1",
          300: "#FCB36B",
          400: "#F79545",
          500: "#F07B22", // primary
          600: "#DD6413",
          700: "#B84E12",
          800: "#8F3D12",
        },
        cream: "#FBF6EE", // ページ背景（ナチュラル）
        sand: "#F4EADA", // サブ面
        ink: "#2B2620", // 本文（高コントラスト）
        sub: "#6E655A", // 二次テキスト
        line: "#ECE1D0", // 罫線
        leaf: "#5E9E6E", // 健康の差し色（控えめ）
      },
      fontFamily: {
        display: ['"Zen Maru Gothic"', "system-ui", "sans-serif"],
        sans: ['"Zen Kaku Gothic New"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 40px -20px rgba(180, 90, 20, 0.28)",
        card: "0 10px 30px -16px rgba(70, 50, 25, 0.22)",
        lift: "0 24px 50px -22px rgba(180, 90, 20, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "blob-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(.21,.6,.35,1) both",
        float: "float 7s ease-in-out infinite",
        "blob-spin": "blob-spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
