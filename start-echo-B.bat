@echo off
setlocal

set "PROJECT_DIR=%~dp0ECHO"
set "HOST=127.0.0.1"
set "PORT=5173"

if not exist "%PROJECT_DIR%\package.json" (
  echo Could not find package.json.
  echo Expected Version B project path: "%PROJECT_DIR%"
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

echo Stopping old Version B Vite processes...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$project=(Resolve-Path -LiteralPath '%PROJECT_DIR%').Path; Get-CimInstance Win32_Process | Where-Object { $_.Name -eq 'node.exe' -and $_.CommandLine -like '*vite*' -and $_.CommandLine -like ('*' + $project + '*') } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }"

cd /d "%PROJECT_DIR%"

if not exist "node_modules\.bin\vite.cmd" (
  echo Installing dependencies for Version B...
  npm install
  if errorlevel 1 (
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)

echo Starting Version B...
echo Project: %PROJECT_DIR%
echo URL: http://%HOST%:%PORT%/
echo.
echo Keep this window open while using the site.
echo Press Ctrl+C in this window to stop the server.

npm run dev -- --host %HOST% --port %PORT% --strictPort --open

pause
