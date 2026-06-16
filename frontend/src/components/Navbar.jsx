import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTheme } from '../App';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <NavLink to="/" className="nav-logo">V.OZA</NavLink>

      <div className="nav-links">
        <NavLink
          to="/work"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Work
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          About
        </NavLink>
        <a
          href="/api/cv/download"
          className="nav-link"
          target="_blank"
          rel="noreferrer"
        >
          CV
        </a>

        {/* ── Theme toggle ── */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-label="Toggle colour theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}
