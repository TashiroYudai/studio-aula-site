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
    <section className="relative overflow-hidden bg-sand">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sun-200/50 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-20">
        <p className="font-display text-sm font-bold tracking-[0.2em] text-sun-500">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sub">{lead}</p>
        )}
      </div>
    </section>
  );
}
