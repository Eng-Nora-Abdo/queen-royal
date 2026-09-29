@echo off
title Queen Royal - Push to GitHub
set "PATH=C:\Users\DELL\AppData\Local\Programs\Git\cmd;%PATH%"
echo Staging changes...
git add .
echo Committing changes...
git commit -m "Migrate project from React to Next.js App Router"
echo Pushing to GitHub...
git push origin master
pause
