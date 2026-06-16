import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';

/* ── Theme Context ─────────────────────────────────────── */
export const ThemeContext = createContext(null);

export function useTheme() {
  return useContext(ThemeContext);
}

/* ── Page transition wrapper ───────────────────────────── */
function PageWrapper({ children }) {
  const location = useLocation();
  return (
    <div
      key={location.pathname}
      style={{ animation: 'pageIn 0.7s cubic-bezier(.23,1,.32,1) both' }}
    >
      {children}
      <style>{`
        @keyframes pageIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ── App ───────────────────────────────────────────────── */
export default function App() {
  const [loaded, setLoaded] = useState(false);

  // Initialise theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  // Apply data-theme attribute to <html> on every change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Cursor />
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <Navbar />
        <main>
          <PageWrapper>
            <Routes>
              <Route path="/"      element={<Home />}  />
              <Route path="/work"  element={<Work />}  />
              <Route path="/about" element={<About />} />
            </Routes>
          </PageWrapper>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}
