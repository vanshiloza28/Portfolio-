import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar" style={{
      borderBottom: scrolled ? '1px solid rgba(245,245,240,0.06)' : 'none',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      background: scrolled ? 'rgba(8,8,8,0.6)' : 'transparent',
      mixBlendMode: scrolled ? 'normal' : 'difference',
      transition: 'all 0.4s ease'
    }}>
      <NavLink to="/" className="nav-logo">V.OZA</NavLink>
      <div className="nav-links">
        <NavLink to="/work" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Work</NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
        <a href="/api/cv/download" className="nav-link" target="_blank" rel="noreferrer">CV</a>
      </div>
    </nav>
  );
}
