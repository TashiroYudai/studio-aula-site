"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/**
 * 子要素がビューポートに入ったら自身に `in` クラスを付与する薄いラッパー。
 * 手描きの描き起こし・マーカーの塗り・紙片のふわっと表示を CSS 側で発火させる。
 * JS無効 / IntersectionObserver非対応時は即 in（最終状態を表示）。
 */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  style,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "section";
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
