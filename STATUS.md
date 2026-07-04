# Studio Aula サイト — STATUS

**更新: 2026-07-04。本番公開中: https://tashiroyudai.github.io/studio-aula-site/ （GitHub Pages・master push で自動デプロイ）**

三世代向けパーソナルトレーニング教室「Studio Aula」（熊本・@aula.kumamo / LINE @sim5277r）のサイト。
**現行デザイン=「ユーカリ」コンセプト（花言葉:新生/再生）** — セージ銀緑基調・生成り地・深緑アクセント。

## スタック / 運用
- Next.js 14 (App Router) + TypeScript + Tailwind v3、**静的書き出し (`output:"export"`)**
- 開発: `cd ~/dev/lesson-site && npm run dev`（確認は :3100）
- デプロイ: **`git push origin master`** で `.github/workflows/deploy.yml` が build→GitHub Pages。CI時のみ `NEXT_PUBLIC_BASE_PATH=/studio-aula-site`
- データは `lib/site.ts` に集約。画像は Unsplash 仮 + `public/line-qr.png`

## デザイン（2026-07-04 ユーカリ刷新）
単一トークン系 `euca`(50-900)/`washi`/`ink`/`sub`/`line`＋差し色 `hana`。見出し **Kiwi Maru**（font-mediumのみ）＋本文 Zen Kaku Gothic New。署名=上へ伸びるユーカリの枝 `components/euca.tsx`（`EucaBranch`、スクロールで描き起こし・お悩みは枝の標本タグ）。写真は葉形フレーム `.leaf-frame` 交互。角丸大きめ・余白たっぷり。シニア配慮＝「あ」文字サイズトグル＋和文 `word-break:keep-all`。全ペア WCAG AA。詳細はプロジェクトメモリ [[frontend-design-aula-direction]]。旧デザイン（オレンジ暖色/冷色ホログラム/緑エディトリアル）はすべて置換済み・git履歴に。

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
