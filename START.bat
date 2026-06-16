@echo off
title Vanshil Oza Portfolio
color 0A
cls
echo.
echo  ============================================
echo   V A N S H I L   O Z A  --  Portfolio
echo  ============================================
echo.
echo  [1/3] Checking dependencies...

cd /d "%~dp0"

if not exist "backend\node_modules" (
    echo  [*] Installing backend packages...
    cd backend
    npm install --silent
    cd ..
)
if not exist "frontend\node_modules" (
    echo  [*] Installing frontend packages...
    cd frontend
    npm install --silent
    cd ..
)

echo  [2/3] Starting backend server on port 5000...
start "Backend - Vanshil Portfolio" cmd /k "cd /d %~dp0backend && node server.js"

timeout /t 2 /nobreak >nul

echo  [3/3] Starting frontend dev server on port 5173...
start "Frontend - Vanshil Portfolio" cmd /k "cd /d %~dp0frontend && npm run dev"

timeout /t 4 /nobreak >nul

echo.
echo  ============================================
echo   Portfolio is running!
echo   Frontend : http://localhost:5173
echo   Backend  : http://localhost:5000
echo   CV       : http://localhost:5000/api/cv/download
echo  ============================================
echo.

start http://localhost:5173

echo  Press any key to shut down all servers...
pause >nul

taskkill /FI "WINDOWTITLE eq Backend - Vanshil Portfolio" /F >nul 2>&1
taskkill /FI "WINDOWTITLE eq Frontend - Vanshil Portfolio" /F >nul 2>&1
echo  Servers stopped. Goodbye!
