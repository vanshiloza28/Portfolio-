import { useEffect, useRef } from 'react';
import Footer from '../components/Footer';

const WORKS = [
  {
    id: 'kube-policy',
    title: 'Kubernetes Policy Management & Network Observability Platform',
    category: 'DevSecOps · Cloud Infrastructure',
    year: '2026',
    employer: 'Tata Consultancy Services Ltd.',
    bullets: [
      'Architected a Kubernetes Policy Management & Network Observability Platform using Cilium, Hubble Relay, eBPF, React Flow, Node.js, and WebSocket, enabling security teams to visualise and enforce network policies in real time.',
      'Built an interactive network topology dashboard for live pod-to-pod communication monitoring across Kubernetes clusters, reducing mean-time-to-diagnose network issues for cluster operators.',
      'Designed backend microservices for telemetry collection, event processing, and policy management using Node.js and Express.js; integrated gRPC pipelines for low-latency data streams.',
      'Implemented Cilium network policy visualisation workflows, simplifying Kubernetes security operations and significantly reducing manual policy review overhead.',
      'Applied Kubernetes-native networking concepts including eBPF-based observability and gRPC communication pipelines in a production-grade environment.'
    ],
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
    bullets: [
      'Designed and delivered an end-to-end business website (React.js, Node.js, Express.js, MongoDB) from requirements gathering to deployment, meeting all stakeholder milestones on schedule.',
      'Built responsive, mobile-first UIs and RESTful APIs, improving page-load performance and enabling automated business workflow features that reduced manual data-entry effort.',
      'Implemented RESTful APIs, database integration, and business workflow automation features, translating stakeholder requirements into scalable, maintainable web solutions.',
      'Enhanced website performance, usability, and overall user experience through modern frontend development practices and iterative stakeholder feedback cycles.'
    ],
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
    bullets: [
      'Built a real-time gesture recognition system using MediaPipe\'s 21-point hand-landmark detection framework, classifying multiple ISL gestures (hello, food, walk, you, water) with high accuracy over live webcam feeds.',
      'Engineered a complete ML pipeline: data preprocessing -> feature engineering -> TensorFlow model training -> live inference; improved accuracy through frame normalisation and optimised video-stream handling.',
      'Constructed modular, reusable pipeline components covering preprocessing, feature generation, model training, and real-time webcam-based inference.',
      'Enhanced prediction robustness through landmark visualisation, frame-level normalisation, and adaptive video-stream management.'
    ],
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
    bullets: [
      'Developed a full-stack collaborative Kanban board with drag-and-drop task flows, multilevel tasks, priority markers, and due-date tracking; Redux ensures predictable state and offline persistence.',
      'Authored secure REST APIs with Express.js and PostgreSQL via Prisma ORM, enabling efficient data operations and role-based access control.',
      'Integrated Socket.IO for real-time board synchronisation across concurrent users and team activities.',
      'Implemented local persistence strategies to ensure offline task continuity and seamless re-sync on reconnection.'
    ],
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
    bullets: [
      'Processed and cleaned raw sales datasets; derived revenue patterns, product performance metrics, and purchasing trends using Pandas and NumPy analytical scripts.',
      'Crafted visual reports using Matplotlib and Seaborn to illustrate temporal spikes, category-level correlations, and business insights for stakeholder review.',
      'Automated recurring data evaluation and summary generation pipelines, streamlining business intelligence reporting workflows and reducing ad-hoc analysis time.',
      'Prepared analysis-ready data through systematic restructuring and indicator extraction, enabling downstream modelling and forecasting.'
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Analytics'],
    color: '#080808',
    accent: 'rgba(255,255,255,0.03)'
  },
  {
    id: 'iot-encryption',
    title: 'Lightweight Image Encryption for IoT',
    category: 'Cybersecurity · IoT',
    year: '2024',
    employer: 'Personal Project',
    bullets: [
      'Engineered a lightweight, chaotic map-based image encryption & decryption system using high-entropy Logistic and Tent maps, optimised for constrained IoT environments.',
      'Implemented rigorous security evaluation metrics — NPCR, UACI, and Shannon Entropy — to quantitatively validate cipher strength against differential and statistical attacks.',
      'Built an interactive glassmorphic React dashboard with dual light/dark modes, providing real-time visualisation of encryption pipelines and security metric outputs.',
      'Integrated live MQTT stream decryption to simulate real-world IoT data pipelines, enabling end-to-end encrypted image transmission and recovery demonstrations.'
    ],
    tags: ['Python', 'React', 'MQTT', 'Cryptography', 'IoT', 'Logistic Map', 'Tent Map'],
    color: '#080808',
    accent: 'rgba(255,255,255,0.03)',
    github: 'https://github.com/vanshiloza28/Lightweight-Image-Encryption-for-IoT'
  },
  {
    id: 'red-cross',
    title: 'Social Work & Volunteering',
    category: 'Social Impact · Community',
    year: '2023',
    employer: 'Indian Red Cross Society',
    bullets: [
      'Co-organised and managed large-scale blood donation camps, overseeing donor registration, flow coordination, and on-ground operations alongside medical teams.',
      'Ensured adherence to safety protocols and maintained accurate participation records, demonstrating attention to detail and accountability under pressure.',
      'Demonstrated teamwork, community leadership, and stakeholder coordination while contributing to public health and humanitarian initiatives.'
    ],
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
          <div className="section-label" style={{ marginBottom: '0.6rem' }}>{work.category}</div>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', color: 'var(--white-dim)', fontSize: '0.875rem', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
            {work.bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
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
              fontWeight: 900, opacity: 0, lineHeight: 1,
              color: 'var(--accent)'
            }}>
              {String(index + 1).padStart(2, '0')}
            </div>
            <div style={{ fontSize: '1rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#FF6B00', fontWeight: 800, marginTop: '1rem' }}>
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
