@echo off
echo Starting Facebook Login Server...
echo.
echo Please keep this window open while testing the app.
echo.
start http://localhost:3000/index.html
node server.js
pause
