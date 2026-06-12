@echo off
setlocal

set "HOST=127.0.0.1"
set "PORT=5173"

cd /d "%~dp0"

if not exist "package.json" (
  echo Could not find package.json.
  echo Run this script from the ECHO project folder.
  pause
  exit /b 1
)

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed or is not available in PATH.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo npm is not available in PATH.
  pause
  exit /b 1
)

echo Stopping any dev server currently using port %PORT%...
powershell -NoProfile -ExecutionPolicy Bypass -Command "Get-NetTCPConnection -State Listen -LocalPort %PORT% -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }"

if not exist "node_modules\.bin\vite.cmd" (
  echo Installing dependencies...
  npm install
  if errorlevel 1 (
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)

echo Starting ECHO from:
echo %CD%
echo URL: http://%HOST%:%PORT%/
echo.

npm run dev -- --host %HOST% --port %PORT% --strictPort --open

pause
