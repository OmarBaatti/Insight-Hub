import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 mt-20">
      
      {/* BRAND */}
      <div>
        <p className="font-bold text-lg">DevHub</p>
        <p className="opacity-70">
          Learn. Build. Share knowledge.
        </p>
      </div>

      {/* LINKS */}
      <div>
        <span className="footer-title">Pages</span>
        <Link to="/articles" className="link link-hover">Articles</Link>
        <Link to="/resources" className="link link-hover">Resources</Link>
        <Link to="/team" className="link link-hover">Team</Link>
        <Link to="/ask" className="link link-hover">Ask Mentor</Link>
      </div>

      {/* SOCIALS */}
      <div>
        <span className="footer-title">Community</span>

        <a
          href="https://discord.com"
          target="_blank"
          rel="noreferrer"
          className="link link-hover"
        >
          Discord
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="link link-hover"
        >
          GitHub
        </a>
      </div>

      {/* COPYRIGHT */}
      <div>
        <span className="footer-title">Legal</span>
        <p className="opacity-60">
          © {new Date().getFullYear()} DevHub
        </p>
      </div>
    </footer>
  );
}