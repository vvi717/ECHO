@echo off
setlocal

set "PROJECT_DIR=%~dp0ECHO"
set "HOST=127.0.0.1"
set "PORT=5173"

if not exist "%PROJECT_DIR%\package.json" (
  echo Could not find ECHO\package.json.
  echo Expected project path: "%PROJECT_DIR%"
  pause
  exit /b 1
)

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed or is not available in PATH.
  echo Install Node.js, then run this script again.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo npm is not available in PATH.
  echo Reinstall Node.js or fix PATH, then run this script again.
  pause
  exit /b 1
)

cd /d "%PROJECT_DIR%"

echo Cleaning existing ECHO dev servers...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$project=(Resolve-Path -LiteralPath '%PROJECT_DIR%').Path; Get-CimInstance Win32_Process | Where-Object { $_.Name -eq 'node.exe' -and $_.CommandLine -like '*vite*' -and $_.CommandLine -like ('*' + $project + '*') } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }"

if not exist "node_modules\.bin\vite.cmd" (
  echo Installing dependencies...
  npm install
  if errorlevel 1 (
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)

echo Starting ECHO...
echo Project: %PROJECT_DIR%
echo URL: http://%HOST%:%PORT%/
echo Keep this window open while using the site.
echo Press Ctrl+C in this window to stop the server.

if exist "src\main.js" (
  npm run dev -- --host %HOST% --port %PORT% --strictPort --open
) else if exist "dist\index.html" (
  npm run preview -- --host %HOST% --port %PORT% --strictPort --open
) else (
  echo Could not find src\main.js or dist\index.html.
  echo The project files appear incomplete.
  pause
  exit /b 1
)

pause
