export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container-x pb-20 pt-32">
      <article className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-text/90 [&_h1]:font-display [&_h1]:text-[clamp(2rem,4vw,3rem)] [&_h1]:font-semibold [&_h2]:font-display [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-medium [&_p]:mt-4">
        {children}
      </article>
    </div>
  );
}
