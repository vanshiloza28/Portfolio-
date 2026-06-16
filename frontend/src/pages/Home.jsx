import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';

const SKILLS = [
  'React.js', 'Node.js', 'Python', 'JavaScript', 'Kubernetes', 'Docker',
  'PostgreSQL', 'MongoDB', 'Power BI', 'TensorFlow', 'Socket.IO', 'Redux',
  'D3.js', 'Cilium', 'eBPF', 'Pandas', 'NumPy', 'Express.js', 'Vue.js', 'Full Stack'
];

const PROJECTS = [
  {
    id: 1, num: '01',
    title: 'Kubernetes Policy & Network Observability Platform',
    category: 'DevSecOps · Cloud Infrastructure',
    employer: 'Tata Consultancy Services — Software Engineering Intern',
    year: '2026',
    tags: ['Kubernetes', 'Cilium', 'eBPF', 'Hubble Relay', 'React Flow', 'Node.js', 'gRPC'],
    desc: 'Real-time network topology visualisation and policy management platform for Kubernetes multi-cluster environments.'
  },
  {
    id: 2, num: '02',
    title: 'Indian Sign Language Translator',
    category: 'Machine Learning · Computer Vision',
    employer: 'Personal Project',
    year: '2023',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'MediaPipe'],
    desc: 'Real-time ISL gesture recognition system using MediaPipe 21-point hand tracking and a TensorFlow classifier.'
  },
  {
    id: 3, num: '03',
    title: 'Kanban Task Management System',
    category: 'Full Stack · Real-Time',
    employer: 'Personal Project',
    year: '2024',
    tags: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Socket.IO', 'Prisma ORM'],
    desc: 'Collaborative Kanban board with drag-and-drop, real-time sync via Socket.IO, and role-based REST APIs.'
  }
];

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function HeroSection() {
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const sub = useRef(null);

  useEffect(() => {
    const els = [line1, line2, line3, sub];
    els.forEach((r, i) => {
      if (r.current) {
        r.current.style.opacity = '0';
        r.current.style.transform = 'translateY(80px)';
        setTimeout(() => {
          if (r.current) {
            r.current.style.transition = 'opacity 0.9s cubic-bezier(.23,1,.32,1), transform 0.9s cubic-bezier(.23,1,.32,1)';
            r.current.style.opacity = '1';
            r.current.style.transform = 'translateY(0)';
          }
        }, 200 + i * 140);
      }
    });
  }, []);

  return (
    <section className="hero">
      {/* Subtle ambient grain */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.03) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      <div ref={line1}>
        <div className="hero-tag">
          Software Engineer &amp; MBA Candidate · XIMB
        </div>
      </div>

      <div className="hero-headline">
        <div ref={line2} style={{ overflow: 'hidden' }}>
          <span>Engineering Digital</span>
        </div>
        <div ref={line3} style={{ overflow: 'hidden' }}>
          <span><em>Solutions</em> that</span>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <span>Matter.</span>
        </div>
      </div>

      <div className="hero-sub" ref={sub}>
        <p className="hero-desc">
          Full-stack development, cloud infrastructure, and data analytics —
          building secure, scalable software. Based in Ahmedabad, Gujarat.
        </p>
        <div className="hero-ctas">
          <Link to="/work" className="btn"><span>View Work</span><span>→</span></Link>
          <Link to="/about" className="btn btn-accent"><span>About Me</span></Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem'
      }}>
        <div style={{ width: '1px', height: '60px', background: 'var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%',
            height: '40%', background: 'var(--accent)',
            animation: 'scrollDot 2s cubic-bezier(.23,1,.32,1) infinite'
          }} />
        </div>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--white-dim)' }}>scroll</span>
        <style>{`@keyframes scrollDot { 0%{top:-40%} 100%{top:140%} }`}</style>
      </div>
    </section>
  );
}

function StatsSection() {
  const ref = useReveal(0.3);
  return (
    <div className="stats-row reveal" ref={ref}>
      <div className="stat-item">
        <div className="stat-number">2+</div>
        <div className="stat-label">Years Experience</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">5+</div>
        <div className="stat-label">Projects Shipped</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">2</div>
        <div className="stat-label">Industry Internships</div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const titleRef = useReveal();
  return (
    <section className="section">
      <div className="container">
        <div className="work-header">
          <div>
            <div className="section-label">Selected Work</div>
            <h2 className="section-title reveal" ref={titleRef}>Featured Projects</h2>
          </div>
          <Link to="/work" className="btn" style={{ alignSelf: 'flex-end' }}>
            <span>All Work</span><span>→</span>
          </Link>
        </div>

        <div className="project-list">
          {PROJECTS.map((p, i) => {
            const itemRef = useReveal(0.1);
            return (
              <div key={p.id} className={`project-item reveal reveal-delay-${i + 1}`} ref={itemRef}>
                <div className="project-num">{p.num}</div>
                <div className="project-info">
                  <div className="project-title">{p.title}</div>
                  <div className="project-meta">{p.category} · {p.employer}</div>
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <div className="project-arrow">↗</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <Marquee items={SKILLS} />
      <ProjectsSection />
      <Footer />
    </>
  );
}
