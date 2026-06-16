import { useEffect, useRef } from 'react';
import Footer from '../components/Footer';

const EXPERIENCE = [
  {
    company: 'Tata Consultancy Services Ltd.',
    role: 'Software Engineering Intern',
    period: 'Feb 2026 – Jun 2026',
    location: 'India',
    bullets: [
      'Architected a Kubernetes Policy Management & Network Observability Platform using Cilium, Hubble Relay, eBPF, React Flow, Node.js, and WebSocket, enabling security teams to visualise and enforce network policies in real time.',
      'Built an interactive network topology dashboard for live pod-to-pod communication monitoring across Kubernetes clusters, reducing mean-time-to-diagnose network issues for cluster operators.',
      'Designed backend microservices for telemetry collection, event processing, and policy management using Node.js and Express.js; integrated gRPC pipelines for low-latency data streams.',
      'Implemented Cilium network policy visualisation workflows, simplifying Kubernetes security operations and significantly reducing manual policy review overhead.',
      'Applied Kubernetes-native networking concepts including eBPF-based observability and gRPC communication pipelines in a production-grade environment.'
    ],
    tags: ['Kubernetes', 'Cilium', 'eBPF', 'Hubble Relay', 'React Flow', 'Node.js', 'gRPC', 'WebSockets']
  },
  {
    company: 'Nivikar Consultancy Services Ltd.',
    role: 'Full Stack Development Intern',
    period: 'Jun 2025 – Jul 2025',
    location: 'Remote',
    bullets: [
      'Designed and delivered an end-to-end business website (React.js, Node.js, Express.js, MongoDB) from requirements gathering to deployment, meeting all stakeholder milestones on schedule.',
      'Built responsive, mobile-first UIs and RESTful APIs, improving page-load performance and enabling automated business workflow features that reduced manual data-entry effort.',
      'Implemented RESTful APIs, database integration, and business workflow automation features, translating stakeholder requirements into scalable, maintainable web solutions.',
      'Enhanced website performance, usability, and overall user experience through modern frontend development practices and iterative stakeholder feedback cycles.'
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs']
  }
];

const EDUCATION = [
  {
    institution: 'Xavier Institute of Management, Bhubaneswar (XIMB)',
    degree: 'MBA in Business Management — One of India\'s premier B-schools (AICTE accredited)',
    period: '2026 – 2028',
    location: 'Bhubaneswar, India'
  },
  {
    institution: 'Pandit Deendayal Energy University',
    degree: 'B.Tech. in Computer Engineering — CGPA: 8.5/10.0',
    period: '2022 – 2026',
    location: 'Gandhinagar, India'
  },
  {
    institution: 'Higher Secondary Education (12th Grade)',
    degree: 'Percentage: 83.54%',
    period: '2021 – 2022',
    location: 'Ahmedabad, India'
  },
  {
    institution: 'Secondary Education (10th Grade)',
    degree: 'Percentage: 88%',
    period: '2019 – 2020',
    location: 'Ahmedabad, India'
  }
];

const CERTIFICATIONS = [
  'Microsoft Power BI Zero to Hero',
  'Programming with Python 3.X',
  'Cyber Security Fundamentals',
  'Understanding Incubation and Entrepreneurship'
];

const SKILLS_GRID = [
  { cat: 'Programming Languages', items: ['Python', 'JavaScript', 'Java'] },
  { cat: 'Data Analytics', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Data Visualization', 'EDA'] },
  { cat: 'Web Development', items: ['React.js', 'Vue.js', 'Node.js', 'Express.js', 'Redux', 'Socket.IO', 'REST APIs'] },
  { cat: 'Cloud & DevOps', items: ['Kubernetes', 'Cilium', 'Hubble Relay', 'eBPF', 'Docker', 'gRPC', 'WebSockets'] },
  { cat: 'Databases', items: ['MongoDB', 'PostgreSQL', 'SQL'] },
  { cat: 'Tools & Platforms', items: ['Git', 'Prisma ORM', 'JWT Authentication', 'Tailwind CSS', 'Vite', 'React Flow'] }
];

const HOBBIES = [
  { emoji: '🎮', label: 'Gaming', desc: 'Strategy & open-world adventures' },
  { emoji: '✈️', label: 'Travelling', desc: 'Exploring new cultures & landscapes' },
  { emoji: '📺', label: 'Binge-watching', desc: 'Series, films & documentaries' },
];

/* ─── Shared reveal hook ─── */
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

/* ─── Each experience row is its own component (hooks rule) ─── */
function ExpRow({ exp, index }) {
  const ref = useReveal();
  return (
    <div
      className="exp-item reveal"
      ref={ref}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div>
        <div className="exp-company">{exp.company}</div>
        <div className="exp-role">{exp.role}</div>
        <div style={{ fontSize: '0.72rem', color: 'var(--white-dim)', letterSpacing: '0.08em', marginTop: '0.2rem' }}>{exp.location}</div>
        <ul className="exp-desc" style={{ listStyleType: 'disc', paddingLeft: '1.2rem', marginTop: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {exp.bullets.map((b, idx) => (
            <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--white-dim)', lineHeight: 1.6 }}>{b}</li>
          ))}
        </ul>
        <div className="project-tags" style={{ marginTop: '1.2rem' }}>
          {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
      <div className="exp-year">{exp.period}</div>
    </div>
  );
}

/* ─── Each education row ─── */
function EduRow({ edu, index }) {
  const ref = useReveal();
  return (
    <div
      className="exp-item reveal"
      ref={ref}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div>
        <div className="exp-company">{edu.institution}</div>
        <div className="exp-role">{edu.degree}</div>
        <div style={{ fontSize: '0.72rem', color: 'var(--white-dim)', letterSpacing: '0.08em', marginTop: '0.2rem' }}>{edu.location}</div>
      </div>
      <div className="exp-year">{edu.period}</div>
    </div>
  );
}

/* ─── Each skill card ─── */
function SkillCard({ cat, index }) {
  const ref = useReveal(0.05);
  return (
    <div
      className="reveal skill-card"
      ref={ref}
      style={{
        padding: '2rem',
        borderRight: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        animationDelay: `${index * 0.08}s`,
        transition: 'background 0.4s, transform 0.4s cubic-bezier(0.175,0.885,0.32,1.1)',
        cursor: 'default'
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-dim)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{
        fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'var(--accent)', marginBottom: '1rem'
      }}>{cat.cat}</div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {cat.items.map(item => (
          <li key={item} style={{ fontSize: '0.875rem', color: 'var(--white)' }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Each cert row ─── */
function CertRow({ cert, index }) {
  const ref = useReveal();
  return (
    <div
      className="reveal"
      ref={ref}
      style={{
        padding: '1.5rem 0',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', gap: '1.5rem',
        animationDelay: `${index * 0.1}s`,
        transition: 'color 0.3s'
      }}
    >
      <span style={{ fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.1em', minWidth: '28px' }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <span style={{ fontSize: '0.95rem', color: 'var(--white)' }}>{cert}</span>
    </div>
  );
}

/* ─── Hobby card ─── */
function HobbyCard({ hobby, index }) {
  const ref = useReveal(0.1);
  return (
    <div
      className="reveal"
      ref={ref}
      style={{
        animationDelay: `${index * 0.15}s`,
        padding: '2rem',
        border: '1px solid var(--border)',
        borderRadius: '4px',
        display: 'flex', flexDirection: 'column', gap: '0.8rem',
        transition: 'background 0.4s, transform 0.4s cubic-bezier(0.175,0.885,0.32,1.1), border-color 0.4s',
        cursor: 'default'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--accent-dim)';
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
      }}
    >
      <div style={{ fontSize: '2rem' }}>{hobby.emoji}</div>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700 }}>{hobby.label}</div>
      <div style={{ fontSize: '0.82rem', color: 'var(--white-dim)', lineHeight: 1.6 }}>{hobby.desc}</div>
    </div>
  );
}

/* ─── Page ─── */
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
  const hobbyRef = useReveal();

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

      {/* Hobbies */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }} className="reveal" ref={hobbyRef}>
            <div className="section-label">Beyond Code</div>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Hobbies &amp; Interests</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem'
          }}>
            {HOBBIES.map((h, i) => <HobbyCard key={h.label} hobby={h} index={i} />)}
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
            {EXPERIENCE.map((exp, i) => <ExpRow key={i} exp={exp} index={i} />)}
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
            {EDUCATION.map((edu, i) => <EduRow key={i} edu={edu} index={i} />)}
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
            {SKILLS_GRID.map((cat, i) => <SkillCard key={i} cat={cat} index={i} />)}
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
            {CERTIFICATIONS.map((cert, i) => <CertRow key={i} cert={cert} index={i} />)}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
