import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | 一生モノの、動ける体をつくろう`,
  description:
    "子供からお年寄りまで、一人ひとりに必要なトレーニングで体を育てるパーソナルトレーニング教室。キッズの基礎体力づくりから、現役世代の不調改善、シニアの健康寿命まで。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* JS有効時のみ手描きアニメの初期非表示を有効化（無効でも崩れない） */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;500;600;700;900&family=Zen+Kaku+Gothic+New:wght@400;500;700&family=Space+Mono:wght@400;700&family=Yusei+Magic&family=Dela+Gothic+One&family=Yomogi&family=Reggae+One&family=Zen+Maru+Gothic:wght@500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        {/* スマホ固定バーの高さ分のスペーサー（最下部が隠れないように） */}
        <div className="h-[72px] lg:hidden" aria-hidden />
        <MobileCTA />
      </body>
    </html>
  );
}
