import { SectionLabel } from "@/components/SectionHead";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-mist">
      {/* 編集的な透かし */}
      <span
        className="pointer-events-none absolute -right-4 bottom-2 select-none font-display text-[7rem] font-black leading-none text-pine-600/[0.05] md:text-[11rem]"
        aria-hidden
      >
        AULA
      </span>
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="mt-5 font-display text-[2.1rem] font-bold leading-[1.35] text-ink md:text-[3.1rem]">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sub">{lead}</p>
        )}
      </div>
    </section>
  );
}
