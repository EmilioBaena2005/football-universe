$git = 'C:\Program Files\Git\cmd\git.exe'
$gh = 'C:\Program Files\GitHub CLI\gh.exe'
$id = (& $gh api user --jq .id)
$login = (& $gh api user --jq .login)
$email = "$id+$login@users.noreply.github.com"

& $git init -b main
& $git add .
& $git -c "user.name=$login" -c "user.email=$email" commit -m "Esqueleto inicial de FOOTBALL UNIVERSE (Next.js 16, React 19, Tailwind 4)"
& $gh repo create football-universe --public --source . --remote origin --push --description "FOOTBALL UNIVERSE: la historia del futbol"
Write-Output ("EXIT=" + $LASTEXITCODE)
