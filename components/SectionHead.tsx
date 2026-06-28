import { ReactNode } from "react";

/** 図番ラベル：短い罫線＋モノスペースの標本ラベル */
export function SectionLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="h-px w-7 bg-honey-400" aria-hidden />
      <span className="label">{children}</span>
    </span>
  );
}

/** セクション見出し：ラベル＋明朝タイトル＋リード */
export function SectionHead({
  label,
  title,
  lead,
  center = false,
  className = "",
}: {
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      <SectionLabel className={center ? "justify-center" : ""}>{label}</SectionLabel>
      <h2 className="mt-4 font-display text-[1.75rem] font-bold leading-[1.45] text-ink md:text-[2.3rem]">
        {title}
      </h2>
      {lead && <p className="mt-4 leading-relaxed text-sub">{lead}</p>}
    </div>
  );
}
