export default function ResourceCard({ title, type, link }) {
  return (
    <div className="panel-card p-6 flex flex-col h-full">
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-display text-xl leading-snug" style={{ color: "var(--ink)" }}>
          {title}
        </h2>
        <span className="chip shrink-0" style={{ background: "rgba(185,154,75,0.16)", color: "var(--gold-bright)" }}>
          {type || "Resource"}
        </span>
      </div>

      <p className="text-sm mt-3 flex-1" style={{ color: "var(--ink-soft)" }}>
        A resource curated for learning and reflection.
      </p>

      <div className="flex justify-end mt-6 pt-4" style={{ borderTop: "1px solid var(--rule)" }}>
        <a href={link || "#"} target="_blank" rel="noreferrer" className="btn-cal btn-cal-outline text-xs px-4 py-1.5">
          Open
        </a>
      </div>
    </div>
  );
}