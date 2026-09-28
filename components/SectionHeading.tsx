interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  /** When true, renders the eyebrow text above the title */
  eyebrow?: string;
  /** Alignment — defaults to center */
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "center",
}: SectionHeadingProps) {
  const isLeft = align === "left";

  return (
    <div className={`mb-14 ${isLeft ? "text-left" : "text-center"}`}>
      {eyebrow && (
        <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-none mb-5">
        {title}
      </h2>
      {/* Gold accent rule */}
      <div className={`flex ${isLeft ? "justify-start" : "justify-center"} mb-5`}>
        <div className="h-px w-16 bg-primary" />
      </div>
      {subtitle && (
        <p
          className={`text-muted-foreground text-lg leading-relaxed ${
            isLeft ? "" : "max-w-2xl mx-auto"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
