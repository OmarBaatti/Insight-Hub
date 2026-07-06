export default function DiscussionCard({ title, description, author, category = "General", replies = 0 }) {
  return (
    <article className="panel-card p-6 flex flex-col h-full">
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-display text-xl leading-snug" style={{ color: "var(--ink)" }}>
          {title}
        </h2>
        <span className="chip shrink-0" style={{ background: "rgba(140,47,57,0.16)", color: "#D98891" }}>
          {category}
        </span>
      </div>

      <p className="text-sm mt-3 line-clamp-3 flex-1" style={{ color: "var(--ink-soft)" }}>
        {description}
      </p>

      <div className="flex items-center justify-between mt-6 pt-4" style={{ borderTop: "1px solid var(--rule)" }}>
        <span className="text-xs" style={{ color: "var(--ink-soft)" }}>
          {author} · {replies} {replies === 1 ? "reply" : "replies"}
        </span>
        <button className="btn-cal btn-cal-outline text-xs px-4 py-1.5">Read</button>
      </div>
    </article>
  );
}