import { ReactNode } from "react";
import { EucaSprig } from "@/components/euca";

/** 標本ラベル：ユーカリの小枝＋眉ラベル */
export function SectionLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <EucaSprig className="h-4 w-11 shrink-0 text-euca-500" />
      <span className="label">{children}</span>
    </span>
  );
}
