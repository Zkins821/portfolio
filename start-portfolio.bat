@echo off
title Zion Portfolio
echo ========================================================
echo   Starting Zion Nishikawa's Portfolio Website...
echo ========================================================
cd /d "%~dp0"

:: Open the browser after 2 seconds
start "" http://localhost:3000

:: Start the Next.js development server
npm.cmd run dev
pause
