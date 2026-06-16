import { Link } from 'react-router-dom';
import Clock from './Clock';

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export default function Footer() {
  return (
    <>
      <section className="contact-section">
        <div>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>Let's work together</div>
          <h2 className="contact-headline">
            Got a project<br />in mind?
          </h2>
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="mailto:oza.vanshil@gmail.com" className="btn">
              <span>Say Hello</span>
              <span>↗</span>
            </a>
            <a href={`${BACKEND}/api/cv/download`} target="_blank" rel="noreferrer" className="btn btn-accent">
              <span>Download CV</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        <div className="contact-info">
          <div>
            <div className="contact-block-label">Email</div>
            <div className="contact-block-value">
              <a href="mailto:oza.vanshil@gmail.com">oza.vanshil@gmail.com</a>
            </div>
          </div>
          <Clock />
          <div>
            <div className="contact-block-label">Socials</div>
            <div className="socials">
              <a href="https://www.linkedin.com/in/vanshil-oza-b6a008254/" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
              <a href="https://github.com/vanshiloza28" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
              <a href="https://www.instagram.com/vanshiloza_28/" target="_blank" rel="noreferrer" className="social-link">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-bar">
        <div className="footer-copy">© 2026 Vanshil Oza · All rights reserved</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/work" className="footer-cv-link">Work</Link>
          <Link to="/about" className="footer-cv-link">About</Link>
          <a href={`${BACKEND}/api/cv/view`} target="_blank" rel="noreferrer" className="footer-cv-link">View CV ↗</a>
        </div>
      </footer>
    </>
  );
}
