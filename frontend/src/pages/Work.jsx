import { useEffect, useRef } from 'react';
import Footer from '../components/Footer';

const WORKS = [
  {
    id: 'kube-policy',
    title: 'Kubernetes Policy Management & Network Observability Platform',
    category: 'DevSecOps · Cloud Infrastructure',
    year: '2026',
    employer: 'Tata Consultancy Services Ltd.',
    desc: 'Developed a Kubernetes Policy Management and Network Observability Platform using Cilium, Hubble Relay, eBPF, React Flow, Node.js, and WebSocket technologies. Built an interactive network topology visualization dashboard enabling real-time monitoring of pod-to-pod communication, backend services for telemetry collection, policy management, and gRPC communication pipelines.',
    tags: ['Kubernetes', 'Cilium', 'eBPF', 'Hubble Relay', 'React Flow', 'Node.js', 'gRPC', 'WebSockets'],
    color: '#080808',
    accent: 'rgba(255,255,255,0.03)'
  },
  {
    id: 'nivikar',
    title: 'Nivikar Publication Platform',
    category: 'Full Stack · Web Development',
    year: '2025',
    employer: 'Nivikar Consultancy Services Ltd.',
    desc: 'Designed and developed a complete business website and digital publication platform. Created highly responsive user interfaces optimized for desktop and mobile devices. Implemented secure RESTful APIs, database integration, and business workflow automation.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Web Development'],
    color: '#080808',
    accent: 'rgba(255,255,255,0.03)'
  },
  {
    id: 'sign-translator',
    title: 'Indian Sign Language Translator',
    category: 'Machine Learning · Computer Vision',
    year: '2023',
    employer: 'Personal Project',
    desc: 'Built a real-time gesture interpretation system using MediaPipe\'s landmark detection framework with precise 21-point hand tracking. Developed and tuned a TensorFlow-based classifier capable of identifying multiple Indian Sign Language gestures, with preprocessing, feature generation, model training, and webcam-based inference.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'MediaPipe', 'Machine Learning'],
    color: '#080808',
    accent: 'rgba(255,255,255,0.03)'
  },
  {
    id: 'kanban',
    title: 'Kanban Task Management System',
    category: 'Full-Stack · Real-Time Dashboard',
    year: '2024',
    employer: 'Personal Project',
    desc: 'Designed a collaborative Kanban interface supporting drag-and-drop flows, multilevel tasks, priority markers, and due-date monitoring. Utilized Redux for state handling, authored secure REST APIs using Express and PostgreSQL through Prisma ORM, and integrated Socket.IO for real-time synchronization.',
    tags: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Socket.IO', 'Prisma ORM'],
    color: '#080808',
    accent: 'rgba(255,255,255,0.03)'
  },
  {
    id: 'sales-analysis',
    title: 'Product Sales Analysis',
    category: 'Data Insights & Visual Analytics',
    year: '2025',
    employer: 'Personal Project',
    desc: 'Processed raw sales datasets by cleaning, restructuring, and extracting relevant indicators to prepare analysis-ready data. Produced analytical scripts using Pandas and NumPy to derive revenue patterns and product performance metrics, and crafted visual reports using Matplotlib and Seaborn.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Analytics'],
    color: '#080808',
    accent: 'rgba(255,255,255,0.03)'
  },
  {
    id: 'red-cross',
    title: 'Social Work & Volunteering',
    category: 'Social Impact · Community',
    year: '2023',
    employer: 'Indian Red Cross Society',
    desc: 'Volunteered in organizing and managing large-scale blood donation camps for the Indian Red Cross Society Ahmedabad District Branch. Supported donor registration, coordination, and on-ground operations, maintaining safe protocols and accurate records.',
    tags: ['Community', 'Volunteer Work', 'Coordination', 'Social Impact'],
    color: '#080808',
    accent: 'rgba(255,255,255,0.03)'
  }
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

function WorkCard({ work, index }) {
  const ref = useReveal();
  return (
    <div
      className="reveal"
      ref={ref}
      style={{
        borderTop: '1px solid var(--border)',
        padding: '4rem 0',
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        {/* Left: info */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '0.5rem' }}>{String(index + 1).padStart(2, '0')}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--white-dim)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {work.employer}
              </div>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--white-dim)', letterSpacing: '0.1em' }}>{work.year}</div>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
            fontWeight: 700, lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--white)'
          }}>{work.title}</h2>
          <div className="section-label" style={{ marginBottom: '0.4rem' }}>{work.category}</div>
          <p style={{ color: 'var(--white-dim)', fontSize: '0.875rem', lineHeight: 1.75 }}>{work.desc}</p>
          <div className="project-tags" style={{ marginTop: '1.5rem' }}>
            {work.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>

        {/* Right: visual */}
        <div style={{
          aspect: '4/3',
          aspectRatio: '4/3',
          background: `linear-gradient(135deg, var(--bg-2) 0%, var(--bg-3) 100%)`,
          border: '1.5px solid var(--accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
          boxShadow: '0 8px 30px var(--accent-dim)'
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'var(--accent-dim)',
            transition: 'opacity 0.4s'
          }} />
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{
              fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 6rem)',
              fontWeight: 900, opacity: 0.12, lineHeight: 1,
              color: 'var(--accent)'
            }}>
              {String(index + 1).padStart(2, '0')}
            </div>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginTop: '1rem' }}>
              {work.category.split('·')[0].trim()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const heroRef = useRef(null);
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.opacity = '0';
      heroRef.current.style.transform = 'translateY(60px)';
      setTimeout(() => {
        if (heroRef.current) {
          heroRef.current.style.transition = 'all 0.9s cubic-bezier(.23,1,.32,1)';
          heroRef.current.style.opacity = '1';
          heroRef.current.style.transform = 'translateY(0)';
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <div className="work-hero">
        <div ref={heroRef}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Portfolio</div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.02em',
            color: 'var(--white)'
          }}>
            Selected<br /><em style={{ color: 'var(--white)' }}>works &amp;</em><br />experiences.
          </h1>
        </div>
      </div>

      <div className="section">
        <div className="container">
          {WORKS.map((w, i) => <WorkCard key={w.id} work={w} index={i} />)}
        </div>
      </div>

      <Footer />
    </>
  );
}
