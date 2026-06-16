import { useEffect, useState } from 'react';

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 18 + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setExit(true);
          setTimeout(onDone, 700);
        }, 300);
      }
      setPct(Math.round(current));
    }, 60);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div className="loader" style={{
      opacity: exit ? 0 : 1,
      transition: 'opacity 0.7s cubic-bezier(.23,1,.32,1)',
      pointerEvents: exit ? 'none' : 'all'
    }}>
      <div className="loader-name">
        {'Vanshil Oza'.split('').map((ch, i) => (
          <span key={i} style={{
            display: 'inline-block',
            animation: `loaderChar 0.6s cubic-bezier(.23,1,.32,1) ${i * 0.04}s both`
          }}>
            {ch === ' ' ? '\u00a0' : ch}
          </span>
        ))}
      </div>
      <div className="loader-bar" />
      <div className="loader-pct">{pct}%</div>
      <style>{`
        @keyframes loaderChar {
          from { opacity:0; transform: translateY(30px); }
          to   { opacity:1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
