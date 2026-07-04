import Link from "next/link";
import { line } from "@/lib/site";

// スマホ用：画面下に固定の申し込み導線（PCでは非表示）
export function MobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-washi/95 shadow-[0_-10px_24px_-16px_rgba(38,51,31,.5)] backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-md items-center gap-2.5 px-4 py-2.5">
        <a
          href={line.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full py-3.5 text-base font-black text-white active:scale-[0.98]"
          style={{ background: "#06C755" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 3C6.9 3 2.8 6.3 2.8 10.4c0 3.7 3.3 6.8 7.7 7.4.3.06.7.2.8.46.07.24.05.6.02.85l-.13.8c-.04.24-.19.94.82.51 1.01-.42 5.45-3.21 7.44-5.5 1.37-1.5 2.03-3.02 2.03-4.52C21.5 6.3 17.4 3 12 3z" />
          </svg>
          LINEで相談
        </a>
        <Link
          href="/contact"
          className="flex flex-1 items-center justify-center rounded-full bg-euca-700 py-3.5 text-base font-black text-white active:scale-[0.98]"
        >
          体験を申し込む
        </Link>
      </div>
    </div>
  );
}
