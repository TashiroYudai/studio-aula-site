import { SectionLabel } from "@/components/SectionHead";
import { EucaBranch } from "@/components/euca";

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
    <section className="relative overflow-hidden border-b border-line bg-euca-50">
      {/* ユーカリの透かし */}
      <EucaBranch
        decorative
        className="pointer-events-none absolute -right-8 -bottom-14 h-64 text-euca-400 opacity-20 md:h-80"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="mt-5 font-display text-[2.1rem] font-medium leading-[1.35] text-ink md:text-[3.1rem]">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sub">{lead}</p>
        )}
      </div>
    </section>
  );
}
