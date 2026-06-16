import { useEffect, useRef } from 'react';
import Footer from '../components/Footer';

const EXPERIENCE = [
  {
    company: 'Tata Consultancy Services Ltd.',
    role: 'Software Engineering Intern',
    period: 'Feb 2026 – Jun 2026',
    location: 'India',
    desc: 'Developed a Kubernetes Policy Management and Network Observability Platform using Cilium, Hubble Relay, eBPF, React Flow, Node.js, and WebSocket technologies. Built an interactive network topology visualisation dashboard for real-time pod-to-pod monitoring. Implemented backend services for telemetry collection, event processing, and policy management. Integrated Cilium network policies with visualisation workflows and worked with gRPC communication pipelines.',
    tags: ['Kubernetes', 'Cilium', 'eBPF', 'Hubble Relay', 'React Flow', 'Node.js', 'gRPC', 'WebSockets']
  },
  {
    company: 'Nivikar Consultancy Services Ltd.',
    role: 'Full Stack Development Intern (Remote)',
    period: 'Jun 2025 – Jul 2025',
    location: 'Remote',
    desc: 'Designed and developed a complete business website using React.js, Node.js, Express.js, and MongoDB. Created responsive user interfaces optimised for desktop and mobile. Implemented RESTful APIs, database integration, and business workflow automation. Collaborated with stakeholders to convert requirements into scalable web-based solutions.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs']
  }
];

const EDUCATION = [
  {
    institution: 'Xavier Institute of Management, Bhubaneswar (XIMB)',
    degree: 'MBA in Business Management',
    period: '2026 – 2028',
    location: 'Bhubaneswar, India'
  },
  {
    institution: 'Pandit Deendayal Energy University',
    degree: 'B.Tech. in Computer Engineering — CGPA: 8.41 / 10.0',
    period: '2022 – 2026',
    location: 'Gandhinagar, India'
  }
];

const CERTIFICATIONS = [
  'Microsoft Power BI Zero to Hero',
  'Programming with Python 3.X',
  'Cyber Security Fundamentals',
  'Understanding Incubation and Entrepreneurship'
];

const SKILLS_GRID = [
  { cat: 'Languages', items: ['Python', 'JavaScript', 'Java'] },
  { cat: 'Frontend', items: ['React.js', 'Vue.js', 'Redux', 'Socket.IO', 'Tailwind CSS'] },
  { cat: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Prisma ORM'] },
  { cat: 'Data & Analytics', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI'] },
  { cat: 'Cloud & DevOps', items: ['Kubernetes', 'Docker', 'Cilium', 'eBPF', 'gRPC'] },
  { cat: 'Databases', items: ['MongoDB', 'PostgreSQL', 'SQL'] },
];

function useReveal(threshold = 0.12) {
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

export default function About() {
  const heroRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    [heroRef, photoRef].forEach((r, i) => {
      if (r.current) {
        r.current.style.opacity = '0';
        r.current.style.transform = i === 0 ? 'translateY(60px)' : 'translateY(40px)';
        setTimeout(() => {
          if (r.current) {
            r.current.style.transition = 'all 1s cubic-bezier(.23,1,.32,1)';
            r.current.style.opacity = '1';
            r.current.style.transform = 'translateY(0)';
          }
        }, 150 + i * 200);
      }
    });
  }, []);

  const expRef = useReveal();
  const eduRef = useReveal();
  const skillsRef = useReveal();
  const certRef = useReveal();

  return (
    <>
      {/* Hero */}
      <div className="about-hero">
        <div ref={heroRef}>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>About Me</div>
          <h1 className="about-headline">
            Engineering ideas<br />
            into <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>meaningful</em><br />
            digital products.
          </h1>
        </div>
      </div>

      {/* Bio + Photo */}
      <section className="section">
        <div className="container">
          <div className="about-body" ref={photoRef}>
            {/* Photo */}
            <div className="about-photo">
              <img
                src="/vanshil_photo.jpeg"
                alt="Vanshil Oza"
                onError={e => { e.target.src = '/vanshil_photo.jpeg'; }}
              />
              <div className="about-photo-label">Vanshil Oza · 2026</div>
            </div>

            {/* Text */}
            <div>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                fontWeight: 700, lineHeight: 1.3, marginBottom: '2rem'
              }}>
                I build practical, scalable software — blending full-stack depth with data-driven thinking.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--white-dim)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                <p>
                  I'm Vanshil Oza — a Computer Science &amp; Engineering graduate from Pandit Deendayal Energy University, Gandhinagar (CGPA 8.41), now pursuing my MBA at Xavier Institute of Management, Bhubaneswar (XIMB).
                </p>
                <p>
                  At TCS, I built a Kubernetes Policy Management and Network Observability Platform for the engineering team. At Nivikar Consultancy Services, I delivered a full production-grade web platform. My personal projects range from real-time ML systems to full-stack event dashboards.
                </p>
                <p>
                  I believe great software is not just functional — it's secure, scalable, and intuitive. When I'm not coding or studying, my hobbies include gaming, travelling to new places, and binge-watching great shows.
                </p>
              </div>

              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="mailto:oza.vanshil@gmail.com" className="btn">
                  <span>Get in Touch</span><span>→</span>
                </a>
                <a href="/api/cv/download" target="_blank" rel="noreferrer" className="btn btn-accent">
                  <span>Download CV</span><span>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }} className="reveal" ref={expRef}>
            <div className="section-label">Experience</div>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Where I've Worked</h2>
          </div>
          <div className="experience-list">
            {EXPERIENCE.map((exp, i) => {
              const r = useReveal();
              return (
                <div key={i} className={`exp-item reveal reveal-delay-${i + 1}`} ref={r}>
                  <div>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-role">{exp.role}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--white-dim)', letterSpacing: '0.08em', marginTop: '0.2rem' }}>{exp.location}</div>
                    <p className="exp-desc">{exp.desc}</p>
                    <div className="project-tags" style={{ marginTop: '1rem' }}>
                      {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                  <div className="exp-year">{exp.period}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }} className="reveal" ref={eduRef}>
            <div className="section-label">Education</div>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Academic Background</h2>
          </div>
          <div className="experience-list">
            {EDUCATION.map((edu, i) => {
              const r = useReveal();
              return (
                <div key={i} className={`exp-item reveal reveal-delay-${i + 1}`} ref={r}>
                  <div>
                    <div className="exp-company">{edu.institution}</div>
                    <div className="exp-role">{edu.degree}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--white-dim)', letterSpacing: '0.08em', marginTop: '0.2rem' }}>{edu.location}</div>
                  </div>
                  <div className="exp-year">{edu.period}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }} className="reveal" ref={skillsRef}>
            <div className="section-label">Expertise</div>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Skills &amp; Stack</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '0',
            border: '1px solid var(--border)'
          }}>
            {SKILLS_GRID.map((cat, i) => {
              const r = useReveal(0.05);
              return (
                <div key={i} className="reveal" ref={r} style={{
                  padding: '2rem',
                  borderRight: '1px solid var(--border)',
                  borderBottom: '1px solid var(--border)',
                  animationDelay: `${i * 0.08}s`
                }}>
                  <div style={{
                    fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: 'var(--white-dim)', marginBottom: '1rem'
                  }}>{cat.cat}</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {cat.items.map(item => (
                      <li key={item} style={{ fontSize: '0.875rem', color: 'var(--white)' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }} className="reveal" ref={certRef}>
            <div className="section-label">Credentials</div>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Certifications</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {CERTIFICATIONS.map((cert, i) => {
              const r = useReveal();
              return (
                <div key={i} className={`reveal reveal-delay-${i + 1}`} ref={r} style={{
                  padding: '1.5rem 0',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', gap: '1.5rem'
                }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--white-dim)', letterSpacing: '0.1em', minWidth: '28px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--white)' }}>{cert}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
