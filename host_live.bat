@echo off
echo ========================================================
echo    FACEBOOK PROJECT - LIVE HOSTING
echo ========================================================
echo.
echo 1. Starting Local Server...
start "Facebook Server" node server.js
echo    Server running.
echo.
echo 2. Creating Public Link...
echo    Please wait...
echo.
echo ========================================================
echo COPY THE URL BELOW (It looks like https://....loca.lt)
echo SHARE THIS URL WITH YOUR ASSESSOR
echo ========================================================
echo.
call npx localtunnel --port 3000
pause
