import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';

function PageWrapper({ children }) {
  const location = useLocation();
  return (
    <div
      key={location.pathname}
      style={{
        animation: 'pageIn 0.7s cubic-bezier(.23,1,.32,1) both'
      }}
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

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Cursor />
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <Navbar />
        <main>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </PageWrapper>
        </main>
      </div>
    </>
  );
}
