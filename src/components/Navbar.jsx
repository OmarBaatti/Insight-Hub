import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/articles", label: "Articles" },
  { to: "/resources", label: "Resources" },
  { to: "/team", label: "Team" },
  { to: "/ask", label: "Ask a Scholar" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{ background: "rgba(11,10,8,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid var(--rule)" }}
    >
      <div className="flex items-center justify-between px-4 md:px-8 h-16">
        <Link to="/" className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 100 100" fill="none" stroke="var(--gold)" strokeWidth="5" aria-hidden="true">
            <rect x="15" y="15" width="70" height="70" />
            <rect x="15" y="15" width="70" height="70" transform="rotate(45 50 50)" />
          </svg>
          <span className="font-display text-2xl tracking-wide" style={{ color: "var(--ink)" }}>
            Al-Manarah
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm tracking-wide rounded-full transition-colors"
              style={({ isActive }) => ({
                color: isActive ? "var(--gold-bright)" : "var(--ink-soft)",
                background: isActive ? "rgba(185,154,75,0.08)" : "transparent",
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <NavLink to="/login" className="btn-cal btn-cal-outline">
            Sign in
          </NavLink>
          <NavLink to="/register" className="btn-cal btn-cal-solid">
            Sign up
          </NavLink>
        </div>

        <button
          className="md:hidden text-sm px-2 py-1"
          style={{ color: "var(--ink)" }}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col px-4 pb-4" style={{ borderTop: "1px solid var(--rule)" }}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="py-3 text-sm"
              style={({ isActive }) => ({
                color: isActive ? "var(--gold-bright)" : "var(--ink-soft)",
                borderBottom: "1px solid var(--rule)",
              })}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/login" onClick={() => setOpen(false)} className="py-3 text-sm" style={{ color: "var(--ink-soft)", borderBottom: "1px solid var(--rule)" }}>
            Sign in
          </NavLink>
          <NavLink to="/register" onClick={() => setOpen(false)} className="btn-cal btn-cal-solid mt-4 justify-center">
            Sign up
          </NavLink>
        </nav>
      )}
    </header>
  );
}