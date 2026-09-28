export function TestimonialCard({
  quote,
  author,
  since,
}: {
  quote: string;
  author: string;
  since: string;
}) {
  return (
    <div className="relative flex flex-col justify-between border border-border bg-[#111111] p-8 rounded-sm hover:border-primary/30 transition-colors duration-300">
      {/* Large decorative quote mark */}
      <div
        className="absolute top-5 right-6 font-heading text-8xl text-primary/10 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-6" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="w-3.5 h-3.5 text-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground/80 leading-relaxed text-sm italic flex-grow mb-8">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center bg-primary/10 shrink-0">
          <span className="font-heading text-xs text-primary">{author.charAt(0)}</span>
        </div>
        <div>
          <p className="font-heading text-base leading-none mb-0.5">{author}</p>
          <p className="text-xs text-primary tracking-wider">{since}</p>
        </div>
      </div>
    </div>
  );
}
