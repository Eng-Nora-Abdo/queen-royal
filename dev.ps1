$nodeBinDir = "C:\Users\DELL\AppData\Local\Programs\nodejs\node-v22.14.0-win-x64"
$env:PATH = "$nodeBinDir;$env:PATH"
& "$nodeBinDir\npm.cmd" run dev
