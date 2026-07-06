export default function Hero() {
  return (
    <section
      className="relative overflow-hidden px-4 md:px-6 py-20 md:py-28 text-center"
      style={{ background: "var(--bg)" }}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="starTile" width="50" height="50" patternUnits="userSpaceOnUse">
            <rect x="10" y="10" width="30" height="30" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
            <rect x="10" y="10" width="30" height="30" fill="none" stroke="var(--gold)" strokeWidth="1.5" transform="rotate(45 25 25)" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#starTile)" />
      </svg>

      <div className="relative max-w-2xl mx-auto">
        <svg width="140" height="90" viewBox="0 0 200 140" className="mx-auto mb-6" aria-hidden="true">
          <path
            d="M20,140 L20,65 C20,25 70,15 100,15 C130,15 180,25 180,65 L180,140"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="2"
          />
        </svg>

        <p className="font-arabic text-xl mb-3" style={{ color: "var(--gold-bright)" }}>
          السلام عليكم
        </p>

        <h1 className="font-display text-5xl md:text-6xl font-semibold leading-tight" style={{ color: "var(--ink)" }}>
          Welcome to Al-Manarah
        </h1>

        <p className="mt-6 text-base md:text-lg max-w-xl mx-auto" style={{ color: "var(--ink-soft)" }}>
          A community built for learning, asking, and growing together — through
          discussions, resources, and guidance from our staff.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-9">
          <button className="btn-cal btn-cal-solid justify-center">Ask a Question</button>
          <button className="btn-cal btn-cal-outline justify-center">Browse Discussions</button>
        </div>
      </div>
    </section>
  );
}