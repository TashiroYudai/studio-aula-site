/** @type {import('next').NextConfig} */

// GitHub Pages はサブパス（/studio-aula-site/）配信。
// NEXT_PUBLIC_BASE_PATH がある時だけ basePath を付ける（ローカル dev/build は素のまま）。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export", // 静的HTML書き出し（out/）
  trailingSlash: true, // /lessons/ → index.html で静的ホストでも解決
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
