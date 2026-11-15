@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"
if exist "runtime\node.exe" (
  "runtime\node.exe" server.mjs --lan --key-file .room-server-key
) else (
  node server.mjs --lan --key-file .room-server-key
)
pause
