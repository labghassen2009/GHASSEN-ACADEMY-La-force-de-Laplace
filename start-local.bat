@echo off
setlocal
cd /d "%~dp0"

call npm.cmd run build
if errorlevel 1 (
  echo.
  echo Build failed. Install dependencies with npm.cmd install, then try again.
  pause
  exit /b 1
)

start "GHASSEN Academy preview" /D "%~dp0" cmd /k "npm.cmd run preview -- --host 127.0.0.1 --port 4173"
start "" "http://127.0.0.1:4173/"
