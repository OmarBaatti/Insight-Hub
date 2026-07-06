import { Link } from "react-router-dom";

const PAGES = [
  { to: "/articles", label: "Articles" },
  { to: "/resources", label: "Resources" },
  { to: "/team", label: "Team" },
  { to: "/ask", label: "Ask a Scholar" },
];

export default function Footer() {
  return (
    <footer className="mt-24" style={{ borderTop: "1px solid var(--rule)" }}>
      <div className="flex items-center justify-center py-6" style={{ borderBottom: "1px solid var(--rule)" }}>
        <svg width="12" height="12" viewBox="0 0 100 100" fill="none" stroke="var(--gold)" strokeWidth="6" aria-hidden="true">
          <rect x="15" y="15" width="70" height="70" />
          <rect x="15" y="15" width="70" height="70" transform="rotate(45 50 50)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-2xl" style={{ color: "var(--ink)" }}>
            Al-Manarah
          </p>
          <p className="mt-2 text-sm max-w-[30ch]" style={{ color: "var(--ink-soft)" }}>
            A calm space to learn, ask, and grow together in faith and knowledge.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold-bright)" }}>
            Pages
          </p>
          <ul className="space-y-2.5 text-sm">
            {PAGES.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:underline underline-offset-4" style={{ color: "var(--ink-soft)" }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold-bright)" }}>
            Account
          </p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/login" className="hover:underline underline-offset-4" style={{ color: "var(--ink-soft)" }}>
                Sign in
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:underline underline-offset-4" style={{ color: "var(--ink-soft)" }}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="text-xs flex items-center justify-center px-6 py-4"
        style={{ borderTop: "1px solid var(--rule)", color: "var(--ink-soft)" }}
      >
        © {new Date().getFullYear()} Al-Manarah — built with care for the community.
      </div>
    </footer>
  );
}