require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Serve static files from public folder
app.use('/static', express.static(path.join(__dirname, 'public')));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact info API
app.get('/api/contact', (req, res) => {
  res.json({
    name: 'Vanshil Oza',
    email: process.env.CONTACT_EMAIL || 'oza.vanshil@gmail.com',
    phone: process.env.CONTACT_PHONE || '+91 6351 605391',
    location: 'Ahmedabad, Gujarat, India',
    timezone: 'Asia/Kolkata',
    socials: {
      linkedin: process.env.LINKEDIN_URL || 'https://www.linkedin.com/in/vanshil-oza-b6a008254/',
      github: process.env.GITHUB_URL || 'https://github.com/vanshiloza28',
      instagram: process.env.INSTAGRAM_URL || 'https://www.instagram.com/vanshiloza_28/'
    }
  });
});

// CV Download endpoint
app.get('/api/cv/download', (req, res) => {
  const cvPath = path.join(__dirname, 'CV_Vanshil_Oza.pdf');
  if (fs.existsSync(cvPath)) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="CV_Vanshil_Oza.pdf"');
    res.sendFile(cvPath);
  } else {
    res.status(404).json({ error: 'CV not found' });
  }
});

// CV View endpoint (inline)
app.get('/api/cv/view', (req, res) => {
  const cvPath = path.join(__dirname, 'CV_Vanshil_Oza.pdf');
  if (fs.existsSync(cvPath)) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="CV_Vanshil_Oza.pdf"');
    res.sendFile(cvPath);
  } else {
    res.status(404).json({ error: 'CV not found' });
  }
});

// Projects API
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 'kube-policy',
      title: 'Kubernetes Policy Visualization Tool',
      category: 'CyberSecurity · DevSecOps',
      year: '2026',
      description: 'Engineered a full-stack visualization platform for Kubernetes network policies at TCS CyberDefense Group. Features real-time policy graph rendering, threat surface analysis, and automated compliance reporting across multi-cluster environments.',
      tags: ['Kubernetes', 'React', 'Python', 'Go', 'Neo4j', 'D3.js', 'CyberDefense'],
      employer: 'Tata Consultancy Services',
      featured: true
    },
    {
      id: 'nivikar-publication',
      title: 'Nivikar Consultancy Services',
      category: 'Full Stack · Web Development',
      year: '2025',
      description: 'Built end-to-end digital publication platform for Nivikar Consultancy Services. Includes author dashboard, manuscript submission workflow, editorial review system, and public-facing storefront with payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'AWS S3'],
      employer: 'Nivikar Consultancy Services',
      featured: true
    },
    {
      id: 'red-cross',
      title: 'Indian Red Cross Society',
      category: 'Social Impact · Community',
      year: '2023',
      description: 'Served to the noble initiative of blood donationfor Indian Red Cross Society Gujarat chapter. Coordinated blood donation drives and volunteer management systems impacting 10,000+ beneficiaries.',
      tags: ['Community', 'Volunteer Management', 'Social Impact'],
      employer: 'Indian Red Cross Society',
      featured: true
    }
  ]);
});

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Serve React frontend in production
if (process.env.NODE_ENV === 'production') {
  const frontendBuild = path.join(__dirname, '..', 'frontend', 'dist');
  if (fs.existsSync(frontendBuild)) {
    app.use(express.static(frontendBuild));
    app.get('*', (req, res) => {
      res.sendFile(path.join(frontendBuild, 'index.html'));
    });
  }
}

app.listen(PORT, () => {
  console.log(`\n  ✦ Vanshil Oza Portfolio Backend`);
  console.log(`  ✦ Server running at http://localhost:${PORT}`);
  console.log(`  ✦ CV endpoint: http://localhost:${PORT}/api/cv/download`);
  console.log(`  ✦ Environment: ${process.env.NODE_ENV || 'development'}\n`);
});
