# Vanshil Oza — Personal Portfolio

> **Live portfolio website** built with React, Node.js and Python — showcasing full-stack engineering, cybersecurity work, and open-source projects.

---

## ✦ Overview

A cinematic, dark-minimal personal portfolio inspired by the design language of high-end creative studios. Features scroll-triggered animations, a magnetic custom cursor, real-time IST clock, and a Node.js backend that serves the CV for direct download.

The design takes visual cues from editorial web design — large serif typography, purposeful whitespace, and micro-interactions that reward attention.

---

## ✦ Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, Vite, React Router v6 |
| **Animations** | CSS keyframes, IntersectionObserver, custom RAF cursor |
| **Backend** | Node.js, Express.js |
| **Styling** | Vanilla CSS (no Tailwind / no UI library) |
| **Image Processing** | Python (background removal / rotoscoping) |
| **Environment** | dotenv, CORS |

---

## ✦ Features

- **Cinematic intro loader** — character-by-character name reveal with progress bar
- **Magnetic custom cursor** — lerp-smoothed ring that reacts to hover and click states
- **Split-text hero animation** — staggered line-by-line entrance on page load
- **Scroll-triggered reveals** — IntersectionObserver-based fade+slide for every section
- **Horizontal skills marquee** — infinite ticker that pauses on hover
- **Real-time IST clock** — live local time display in the contact section
- **CV download endpoint** — `/api/cv/download` served directly from the Node backend
- **Page transitions** — fade+translateY between routes
- **Fully responsive** — mobile-first grid layouts

---

## ✦ Featured Work

### 🔐 Kubernetes Policy Visualization Tool
**Tata Consultancy Services — CyberDefense Group (2024)**

Real-time graph rendering of Kubernetes network policies across multi-cluster environments. Built with React, Python, Go, Neo4j, and D3.js. Includes RBAC compliance mapping, threat surface analysis, and automated reporting.

### 📚 Nivikar Publication Platform
**Nivikar Publication — Internship (2024)**

End-to-end digital publishing platform with author manuscript portal, multi-stage editorial review, subscriber management, and a storefront with Razorpay payment integration and AWS S3 media storage.

### 🩸 Digital Outreach Programme
**Indian Red Cross Society — Social Internship (2023)**

Spearheaded digital transformation for the Gujarat chapter. Volunteer management tools, online blood donation drive coordination, and relief communication systems impacting **10,000+ beneficiaries**.

---

## ✦ Project Structure

```
vanshil-portfolio/
├── run.js                  ← Single runnable launcher (node run.js)
├── START.bat               ← Windows one-click launcher
├── README.md
│
├── backend/
│   ├── server.js           ← Express API server
│   ├── .env                ← Environment variables
│   └── CV_Vanshil_Oza.pdf  ← CV served via /api/cv/download
│
└── frontend/
    ├── public/
    │   ├── vanshil_rotoscoped.png
    │   └── CV_Vanshil_Oza.pdf
    └── src/
        ├── components/
        │   ├── Cursor.jsx      ← Magnetic custom cursor
        │   ├── Loader.jsx      ← Cinematic intro loader
        │   ├── Navbar.jsx      ← Fixed nav with blend-mode
        │   ├── Marquee.jsx     ← Infinite skills ticker
        │   ├── Clock.jsx       ← Real-time IST clock
        │   └── Footer.jsx      ← Contact + CV download
        └── pages/
            ├── Home.jsx        ← Hero, stats, projects
            ├── Work.jsx        ← Full project breakdowns
            └── About.jsx       ← Bio, experience, skills grid
```

---

## ✦ Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 9

### Option 1 — Single command *(recommended)*

```bash
node run.js
```

Starts both the backend (port 5000) and frontend dev server (port 5173), then opens the browser automatically. Press `Ctrl+C` to stop everything.

### Option 2 — Windows double-click

Double-click **`START.bat`** in the project root.

### Option 3 — Manual (two terminals)

```bash
# Terminal 1 — Backend
cd backend
node server.js

# Terminal 2 — Frontend
cd frontend
npm run dev
```

Then open **http://localhost:5173**

---

## ✦ Environment Variables

**`backend/.env`**
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
CONTACT_EMAIL=oza.vanshil@gmail.com
CONTACT_PHONE=+91 6351605391
LINKEDIN_URL=https://www.linkedin.com/in/vanshil-oza-b6a008254/
GITHUB_URL=https://github.com/vanshiloza28
INSTAGRAM_URL=https://www.instagram.com/vanshiloza_28/
```

**`frontend/.env`**
```env
VITE_BACKEND_URL=http://localhost:5000
```

---

## ✦ API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Server health check |
| `GET` | `/api/contact` | Contact info JSON |
| `GET` | `/api/projects` | Projects list JSON |
| `GET` | `/api/cv/download` | Download CV as PDF attachment |
| `GET` | `/api/cv/view` | View CV inline in browser |

---

## ✦ Design Principles

- **No CSS frameworks** — every style written by hand for full control
- **No animation libraries** — pure CSS keyframes + `requestAnimationFrame`
- **Minimal palette** — `#080808` background · `#f5f5f0` text · `#c8ff00` accent
- **Typography** — Playfair Display (serif headings) + Inter (body)
- **Performance-first** — IntersectionObserver for lazy reveals, no layout thrash

---

## ✦ License

MIT — free to fork and adapt.

---

## ✦ About

Built and designed by **Vanshil Oza**  
Computer Science & Engineering · Pandit Deendayal Energy University, Gandhinagar

[![LinkedIn](https://img.shields.io/badge/LinkedIn-vanshil--oza-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/vanshil-oza-b6a008254/)
[![GitHub](https://img.shields.io/badge/GitHub-vanshiloza28-black?style=flat-square&logo=github)](https://github.com/vanshiloza28)
[![Instagram](https://img.shields.io/badge/Instagram-vanshiloza__28-E1306C?style=flat-square&logo=instagram)](https://www.instagram.com/vanshiloza_28/)

---

*Structured for clarity · Built for performance · Designed to impress.*
