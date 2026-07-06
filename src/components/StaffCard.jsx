export default function StaffCard({ name, role, bio }) {
  return (
    <div className="panel-card p-7 flex flex-col items-center text-center h-full">
      <div
        className="font-display w-14 h-14 rounded-full flex items-center justify-center text-lg mb-4"
        style={{ background: "rgba(140,47,57,0.16)", color: "#D98891", border: "1px solid var(--rule-strong)" }}
      >
        {name?.charAt(0)}
      </div>

      <h2 className="font-display text-xl" style={{ color: "var(--ink)" }}>
        {name}
      </h2>

      <span className="chip mt-2" style={{ background: "rgba(185,154,75,0.12)", color: "var(--gold-bright)" }}>
        {role}
      </span>

      <p className="text-sm mt-4" style={{ color: "var(--ink-soft)" }}>
        {bio}
      </p>

      <button className="btn-cal btn-cal-outline text-xs px-4 py-1.5 mt-5">Contact</button>
    </div>
  );
}