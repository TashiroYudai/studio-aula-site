// サイト共通データ。本人ヒアリング前の項目は仮置き（PLACEHOLDER）。
export const site = {
  name: "Studio Aula",
  tagline: "一生モノの、動ける体をつくろう。",
  subTagline: "経験、年齢問わず、あなたに合わせたトレーニング。",
  // PLACEHOLDER: 本人確定待ち
  tel: "00-0000-0000",
  email: "hello@example.com",
  address: "〒000-0000 ○○県○○市○○ 0-0-0",
  hours: [
    { day: "平日", time: "10:00 – 21:00" },
    { day: "土曜", time: "9:00 – 18:00" },
    { day: "日・祝", time: "定休日" },
  ],
  mapQuery: "熊本市", // PLACEHOLDER: 実住所に差し替え（@aula.kumamo より熊本と推定）
} as const;

export const nav = [
  { label: "ホーム", href: "/" },
  { label: "レッスン", href: "/lessons" },
  { label: "コース・料金", href: "/programs" },
  { label: "教室紹介", href: "/about" },
  { label: "アクセス・お問い合わせ", href: "/contact" },
] as const;

export type Generation = "kids" | "adult" | "senior";

export const generations: {
  id: Generation;
  badge: string;
  title: string;
  lead: string;
  points: string[];
  image: string;
}[] = [
  {
    id: "kids",
    badge: "キッズ",
    title: "運動が好きになる！基礎体力を育む",
    lead: "正しい姿勢と体幹を育て、運動能力の土台をつくります。",
    points: ["正しい姿勢づくり", "体幹・バランス強化", "運動能力の向上"],
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "adult",
    badge: "大人・現役世代",
    title: "不調を改善し、理想の体へ",
    lead: "肩こり・腰痛のケアから、ボディメイク・疲労回復まで。",
    points: ["肩こり・腰痛改善", "ボディメイク", "疲労回復"],
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "senior",
    badge: "シニア",
    title: "10年後も、自分の足で歩くために",
    lead: "ロコモ予防と歩行の安定で、健康寿命をのばします。",
    points: ["ロコモ予防", "歩行の安定", "健康寿命の延伸"],
    image:
      "https://images.unsplash.com/photo-1559963110-71b394e7494d?auto=format&fit=crop&w=900&q=80",
  },
];

// ニーズに合わせた4つのレッスン
export const lessons: {
  id: string;
  name: string;
  sub: string;
  lead: string;
  need: string;
  dot: string;
  image: string;
  description: string;
  points: string[]; // レッスンの内容・特徴
  effects: string[]; // こんな方に / 得られること
  note?: string;
}[] = [
  {
    id: "sb",
    name: "SB",
    sub: "Soft & balance",
    lead: "体のしくみ・使い方を知り、整える。",
    need: "座学・ストレッチ・ソフトな運動",
    dot: "#7BB342",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=80",
    description:
      "体のしくみや使い方、自分のクセや状態を知ることから始めるクラスです。座学で体を理解し、ストレッチとソフトな運動で、無理なくバランスを整えていきます。",
    points: [
      "体のしくみ・使い方を学ぶ座学",
      "ストレッチでやさしく整える",
      "ソフトな運動でバランスを養う",
    ],
    effects: ["自分の体のクセを知りたい", "やさしい運動から始めたい", "姿勢・バランスを整えたい"],
  },
  {
    id: "ms",
    name: "MS",
    sub: "Move & Stretch",
    lead: "体の正しい動かし方とストレッチ。",
    need: "筋力・体力アップ",
    dot: "#F79545",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
    description:
      "体の正しい動かし方を身につけながら、ストレッチで可動域を広げるクラスです。しっかり動けるようにしながら、筋力・体力アップを目指します。",
    points: ["正しい体の動かし方を習得", "ストレッチで柔軟性アップ", "筋力・体力づくり"],
    effects: ["筋力・体力をつけたい", "正しく動ける体になりたい", "運動を習慣にしたい"],
  },
  {
    id: "personal",
    name: "パーソナル",
    sub: "完全マンツーマン",
    lead: "あなただけのオーダーメイド。目標に最短で。",
    need: "ボディメイク・不調改善",
    dot: "#B84E12",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=80",
    description:
      "専属トレーナーによる完全マンツーマン。目標・体・生活に合わせて、あなただけのメニューを設計します。ボディメイクから不調の改善まで、一人ひとりに最適なプログラムで。",
    points: ["完全マンツーマン指導", "オーダーメイドのメニュー", "目標に合わせて柔軟に調整"],
    effects: ["目標に最短で近づきたい", "周りの目を気にせず取り組みたい", "体の悩みを根本から改善したい"],
    note: "予約制です。空き状況は Instagram でご確認ください。",
  },
  {
    id: "zumba",
    name: "ZUMBA",
    sub: "ダンスエクササイズ",
    lead: "世界中の音楽とステップで、踊って燃やす。",
    need: "ダイエット・ストレス発散・体力増進",
    dot: "#C2706B",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=900&q=80",
    description:
      "世界中の音楽とステップを使ったダンスエクササイズ。音楽に合わせて楽しく動くうちに、自然と燃えてダイエット効果も。ストレス発散にもぴったりです。振り付けは少しずつ覚えればOK。",
    points: ["世界中の音楽とステップ", "ダンスで楽しく有酸素運動", "振り付けは少しずつでOK"],
    effects: ["楽しく続けたい", "ダイエット・体力増進", "ストレスを発散したい"],
    note: "木曜は帯西コミュニティセンターで開催します（通常スタジオと会場が異なります）。",
  },
];

// Instagram（実アカウント @aula.kumamo）
export const instagram = "https://www.instagram.com/aula.kumamo";

// LINE公式アカウント @sim5277r（申し込み・お問い合わせ）
export const line = {
  qr: "/line-qr.png",
  url: "https://line.me/R/ti/p/@sim5277r",
};

// 週間スケジュール（グループレッスンのみ。パーソナルは予約制 → Instagram）
// 日によって変更あり → 最新は Instagram で告知
export const schedule: {
  day: string;
  kind?: "sat" | "sun";
  sessions: { time: string; lessonId: string; note?: string }[];
}[] = [
  { day: "月", sessions: [
    { time: "11:00", lessonId: "sb" },
    { time: "13:00", lessonId: "ms" },
    { time: "17:00", lessonId: "ms" },
  ] },
  { day: "火", sessions: [
    { time: "11:00", lessonId: "ms" },
    { time: "18:00", lessonId: "ms" },
    { time: "19:30", lessonId: "zumba" },
  ] },
  { day: "水", sessions: [
    { time: "10:30", lessonId: "zumba" },
    { time: "13:00", lessonId: "ms" },
    { time: "17:00", lessonId: "ms" },
    { time: "19:00", lessonId: "ms" },
  ] },
  { day: "木", sessions: [
    { time: "10:30", lessonId: "sb" },
    { time: "13:00", lessonId: "ms" },
    { time: "18:20", lessonId: "zumba", note: "帯西コミセン" },
    { time: "19:30", lessonId: "zumba", note: "帯西コミセン" },
    { time: "20:40", lessonId: "zumba", note: "帯西コミセン" },
  ] },
  { day: "金", sessions: [
    { time: "11:00", lessonId: "ms" },
    { time: "17:00", lessonId: "ms" },
    { time: "19:00", lessonId: "ms" },
  ] },
  { day: "土", kind: "sat", sessions: [
    { time: "14:00", lessonId: "ms" },
  ] },
  { day: "日", kind: "sun", sessions: [] },
];

// トップの「お悩み相談」訴求
export const concerns = {
  goals: ["体力アップ", "筋力アップ", "ダイエット"],
  troubles: ["肩こり", "腰痛", "膝痛"],
};

export const features = [
  {
    title: "オーダーメイドのメニュー",
    body: "一人ひとりの体・目標・生活に合わせて、専属トレーナーがプログラムを設計します。",
    icon: "person",
  },
  {
    title: "「体を育てる」アプローチ",
    body: "解剖学・運動生理学にもとづき、その場しのぎでなく根本から動ける体へ。",
    icon: "book",
  },
  {
    title: "家族で通えるアットホームな空間",
    body: "お子さまからご年配の方まで。安心して通える、明るく温かいスタジオです。",
    icon: "home",
  },
];

// お客様の声（PLACEHOLDER: 実際の体験談に差し替え）
export const testimonials: { body: string; who: string; tag: string }[] = [
  {
    body: "長年の肩こりが、ずいぶん楽になりました。自分の体のクセが分かって、家でのケアも続けられています。",
    who: "50代・女性",
    tag: "肩こり",
  },
  {
    body: "運動は苦手でしたが、少人数で気兼ねなく続けられています。毎週のZUMBAが楽しみで、体も軽くなりました。",
    who: "40代・女性",
    tag: "ダイエット",
  },
  {
    body: "膝の不安で諦めていた階段が、楽になってきました。先生が丁寧に見てくれるので、安心して通えます。",
    who: "80代・女性",
    tag: "膝痛・健康維持",
  },
];

export type NewsItem = {
  date: string;
  category: string;
  title: string;
  body?: string;
};

// 料金（実情報）
export const pricing = {
  admission: "無料",
  payment: "当日に現金 または PayPay",
  belongings: "動きやすい服装・室内シューズ・タオル・お飲み物",
  items: [
    {
      name: "グループレッスン",
      target: "SB / MS / ZUMBA",
      price: "500",
      per: "1回",
      note: "エアコンを使う日は +100円",
      dot: "#F07B22",
    },
    {
      name: "パーソナル",
      target: "完全マンツーマン・予約制",
      price: "2,500",
      per: "1回",
      note: "はじめての方におすすめ",
      dot: "#B84E12",
    },
  ],
};

// トレーナー（PLACEHOLDER: 名前・写真・資格は本人確定待ち）
export const trainers: {
  name: string;
  role: string;
  qualifications: string[];
  message: string;
  image: string;
}[] = [
  {
    name: "代表トレーナー（お名前）",
    role: "代表 / パーソナルトレーナー",
    qualifications: ["NSCA-CPT", "健康運動指導士", "機能解剖学トレーナー"],
    message:
      "その場しのぎではなく、10年後も動ける体へ。一人ひとりの体と暮らしに寄り添って、いっしょに「育てる」サポートをします。",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "トレーナー（お名前）",
    role: "キッズ・シニア担当",
    qualifications: ["キッズコーチング", "介護予防運動指導員"],
    message:
      "「運動って楽しい！」から始めましょう。お子さまもご年配の方も、笑顔で通える時間にします。",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=700&q=80",
  },
];

export const steps: { title: string; body: string }[] = [
  { title: "お問い合わせ", body: "フォーム・お電話・LINEからお気軽にご連絡ください。" },
  { title: "日程のご案内", body: "ご希望に合わせて体験の日時を調整します。" },
  { title: "カウンセリング＆体験", body: "お悩みや目標を伺い、体験トレーニングを行います。" },
  { title: "プランのご提案", body: "無理のないプランをご提案。当日入会の強制はありません。" },
];

export const gallery: string[] = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
];

export const faq: { q: string; a: string }[] = [
  { q: "運動が苦手・初めてでも大丈夫ですか？", a: "もちろん大丈夫です。体力や経験に合わせて、できるところから一緒に始めます。マンツーマンなので周りの目も気になりません。" },
  { q: "子供は何歳から通えますか？", a: "未就学のお子さまから通っていただけます。年齢と発達に合わせて、遊びの要素を取り入れたメニューで行います。" },
  { q: "シニアですが体力に自信がありません。", a: "歩行や日常動作の安定を目的に、負担の少ないメニューから始めます。ロコモ予防・健康維持に多くの方が通われています。" },
  { q: "持ち物や服装は？", a: "動きやすい服装と室内用シューズ、タオル・お飲み物をお持ちください。お着替えスペースもございます。" },
  { q: "支払い方法は？", a: "当日現金でのお支払いに対応しています（オンライン決済は不要です）。回数券・月謝もご用意しています。" },
  { q: "キャンセルはできますか？", a: "前日までのご連絡で無料です。当日キャンセルは1回分の消化となる場合があります（PLACEHOLDER：要確定）。" },
];

// PLACEHOLDER: 後でブログ/お知らせ機能（CMS or Supabase）に接続
export const news: NewsItem[] = [
  {
    date: "2026.05.20",
    category: "お知らせ",
    title: "親子で参加できる「姿勢づくり体験会」を開催します",
    body: "週末に、お子さまと一緒に参加いただける体験会を行います。",
  },
  {
    date: "2026.05.10",
    category: "イベント",
    title: "シニア向け「歩行改善プログラム」体験キャンペーン",
  },
  {
    date: "2026.04.28",
    category: "休館",
    title: "ゴールデンウィーク中の営業時間のお知らせ",
  },
];
