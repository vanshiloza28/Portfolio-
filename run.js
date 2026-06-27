#!/usr/bin/env node
/**
 * run.js — Single entry point for Vanshil Oza Portfolio
 * Usage:  node run.js
 */

const { spawn } = require('child_process');
const path = require('path');
const http = require('http');

const ROOT = __dirname;
const BACKEND_DIR  = path.join(ROOT, 'backend');
const FRONTEND_DIR = path.join(ROOT, 'frontend');
const FRONTEND_PORT = 5173;
const BACKEND_PORT  = 5000;

const isWin = process.platform === 'win32';
const npm   = isWin ? 'npm.cmd' : 'npm';
const node  = isWin ? 'node.exe' : 'node';

const CYAN  = '\x1b[36m';
const GREEN = '\x1b[32m';
const YEL   = '\x1b[33m';
const RESET = '\x1b[0m';
const BOLD  = '\x1b[1m';

function log(tag, msg) { console.log(`${CYAN}[${tag}]${RESET} ${msg}`); }

function waitForPort(port, retries = 30, delay = 1000) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const check = () => {
      const req = http.get(`http://localhost:${port}`, () => resolve()).on('error', () => {
        if (++attempts >= retries) return reject(new Error(`Port ${port} not ready`));
        setTimeout(check, delay);
      });
      req.setTimeout(800, () => { req.destroy(); });
    };
    check();
  });
}

function spawnProc(label, cmd, args, cwd) {
  const proc = spawn(cmd, args, {
    cwd,
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: isWin   // required on Windows for .cmd executables
  });
  proc.stdout.on('data', d => d.toString().trim().split('\n').forEach(l => log(label, l)));
  proc.stderr.on('data', d => d.toString().trim().split('\n').forEach(l => log(label, l)));
  proc.on('close', code => log(label, `exited with code ${code}`));
  return proc;
}

async function openBrowser(url) {
  const opener = isWin ? 'start' : (process.platform === 'darwin' ? 'open' : 'xdg-open');
  spawn(opener, [url], { shell: isWin, stdio: 'ignore', detached: true }).unref();
}

async function main() {
  console.log(`\n${BOLD}${GREEN}  ✦  Vanshil Oza — Portfolio Launcher${RESET}\n`);

  // 1. Start backend
  log('backend', 'Starting Express server...');
  const backend = spawnProc('backend', node, ['server.js'], BACKEND_DIR);

  log('backend', `Waiting for port ${BACKEND_PORT}...`);
  try { await waitForPort(BACKEND_PORT); } catch { /* might already be running */ }
  log('backend', `${GREEN}Ready on http://localhost:${BACKEND_PORT}${RESET}`);

  // 2. Start frontend
  log('frontend', 'Starting Vite dev server...');
  const frontend = spawnProc('frontend', npm, ['run', 'dev'], FRONTEND_DIR);

  log('frontend', `Waiting for port ${FRONTEND_PORT}...`);
  try { await waitForPort(FRONTEND_PORT); } catch { /* continue anyway */ }
  log('frontend', `${GREEN}Ready on http://localhost:${FRONTEND_PORT}${RESET}`);

  // 3. Open browser
  await openBrowser(`http://localhost:${FRONTEND_PORT}`);

  console.log(`
${BOLD}${GREEN}  ╔══════════════════════════════════════╗
  ║   Portfolio is live!                ║
  ║   Frontend → http://localhost:${FRONTEND_PORT}  ║
  ║   Backend  → http://localhost:${BACKEND_PORT}   ║
  ║   CV       → /api/cv/download       ║
  ╚══════════════════════════════════════╝${RESET}

  ${YEL}Press Ctrl+C to stop all servers.${RESET}
`);

  // Graceful shutdown
  const shutdown = () => {
    log('run', 'Shutting down...');
    backend.kill();
    frontend.kill();
    process.exit(0);
  };
  process.on('SIGINT',  shutdown);
  process.on('SIGTERM', shutdown);
}

main().catch(err => { console.error(err); process.exit(1); });
