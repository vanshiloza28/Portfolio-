import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
      }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <div className="contact-block-label">Local Time · IST</div>
      <div className="clock-display">{time}</div>
      <div style={{ fontSize: '0.7rem', color: 'var(--white-dim)', marginTop: '0.3rem', letterSpacing: '0.1em' }}>
        Gandhinagar, Gujarat, India
      </div>
    </div>
  );
}
