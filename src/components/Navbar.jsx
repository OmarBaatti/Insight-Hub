import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "btn btn-primary btn-sm"
      : "btn btn-ghost btn-sm";

  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-6">

      {/* LEFT */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
          DevHub
        </Link>
      </div>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex gap-2 items-center">
        <NavLink to="/articles" className={linkClass}>
          Articles
        </NavLink>

        <NavLink to="/resources" className={linkClass}>
          Resources
        </NavLink>

        <NavLink to="/team" className={linkClass}>
          Team
        </NavLink>

        <NavLink to="/ask" className={linkClass}>
          Ask
        </NavLink>
      </div>

      {/* RIGHT */}
      <div className="hidden md:flex gap-2">
        <a
          href="https://discord.com"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline btn-sm"
        >
          Discord
        </a>

        <NavLink to="/login" className="btn btn-primary btn-sm">
          Login
        </NavLink>
      </div>

      {/* MOBILE BUTTON */}
      <button
        className="btn btn-ghost md:hidden"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-md flex flex-col gap-2 p-4 md:hidden z-50">

          <NavLink to="/articles" onClick={() => setOpen(false)}>
            Articles
          </NavLink>

          <NavLink to="/resources" onClick={() => setOpen(false)}>
            Resources
          </NavLink>

          <NavLink to="/team" onClick={() => setOpen(false)}>
            Team
          </NavLink>

          <NavLink to="/ask" onClick={() => setOpen(false)}>
            Ask
          </NavLink>

          <NavLink to="/login" onClick={() => setOpen(false)}>
            Login
          </NavLink>

          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>

        </div>
      )}
    </div>
  );
}