# Studio Aula サイト — STATUS

**保存: 2026-05-31。本番公開中: https://lesson-site-three.vercel.app**

三世代向けパーソナルトレーニング教室「Studio Aula」（熊本・@aula.kumamo / LINE @sim5277r）のサイト。
旧コンセプト（SB/MS/ZUMBA 予約・セージグリーン）から刷新し、**オレンジ基調のマーケ型サイト**として本実装。

## スタック / 運用
- Next.js 14 (App Router) + TypeScript + Tailwind v3
- 開発: `cd ~/dev/lesson-site && npm run dev`（確認は :3100 を使用してきた）
- デプロイ: `npx -y vercel@latest --prod --yes` → エイリアス `lesson-site-three.vercel.app` に反映
- データは `lib/site.ts` に集約。画像は Unsplash 仮 + `public/line-qr.png`

## デザイン
「陽だまり＆まるみ」= オレンジ `#F07B22` × クリーム `#FBF6EE`、丸ゴシック見出し（Zen Maru Gothic）＋本文 Zen Kaku Gothic New。高コントラスト・大ボタン・文字サイズ変更ボタン・レスポンシブ。ヒーロー下線に手描き風アニメ＋星。

## ページ / セクション
- **ホーム**: ヒーロー（少人数・完全予約制チップ / キャッチ＋下線アニメ）→ お悩み相談バンド（肩こり・腰痛・膝痛を強調）→ なぜ選ばれるか → 4レッスン → 週間スケジュール → お客様の声 → 新着情報 → CTA
- **レッスン** `/lessons`: SB/MS/パーソナル/ZUMBA の詳細（内容・こんな方に・注記）
- **コース・料金** `/programs`: はじめてはパーソナル推奨 / グループ¥500(エアコン日+¥100) / パーソナル¥2,500 / 入会金無料 / 支払い当日現金orPayPay / 持ち物
- **教室紹介** `/about`: 理念・トレーナー・ギャラリー（仮）
- **アクセス・お問い合わせ** `/contact`: LINEバナー（QR＋友だち追加）/ 体験の流れ / 申込フォーム / Googleマップ / FAQ

## 確定済みの実データ
- 4レッスン: SB=Soft & balance / MS=Move & Stretch / パーソナル / ZUMBA（説明・写真）
- 週間スケジュール（グループのみ。木ZUMBAは帯西コミセン、日は定休）
- 料金・支払い・持ち物・入会金無料
- Instagram @aula.kumamo / LINE 友だち追加 @sim5277r（`line.me/R/ti/p/@sim5277r`）

## 仮置き（本人ヒアリング後に差し替え）= PLACEHOLDER
- 住所 `〒000…`・電話 `00-0000-0000`・メール（→ 地図も正確化。今は「熊本市」仮）
- トレーナー名・写真・資格、各レッスン/ギャラリーの実写真（Unsplash 仮）
- パーソナルの説明文（仮）、お客様の声（サンプル）、新着情報（サンプル）

## 未実装 / 次の候補
- 申込フォームの実送信（Supabase 保存 + Resend 通知）※今は送信しても保存されない
- お知らせ/ブログの更新の仕組み（CMS or Supabase）
- 独自ドメイン、実住所での地図ピン
