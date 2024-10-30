# Welcome KaapstadBrauhaus 👋

## Get started
1. Install dependencies
   npm install

2. Start the app
    npx expo start

In the output, you'll find options to open the app in a
- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).


HOW TO MERGE SUB BRANCH WITH MAIN BRANCH

*Important - You first have to commit and push the changes made in your branch before you can merge it with the main branch*

Switch to main branch - git checkout main
Pull the latest changes - git pull origin main
merge the sub branch into the main branch - git merge sub-branch-name
complete merge - git commit -m "message"
Push the updated main branch to the remote repo - git push origin main

TO ADD A BRANCH
git checkout -b new-branch-name
git add .
git commit -m "message"
git push --set-upstream origin new-branch-name

GIT COMMANDS
git branch -a (checks all branches)
git checkout branch-name (switches to branch)


MYSQL DATABASE CONNECTION
Installed Extention - SQLTools (Yellow icon)
Username - admin
Database - kaapstadbrauhaus
for password and endpoint check teams

CONNECT TO DATABASE
cd into the server folder in kaapstadbrauhaus. check if npm is installed 'npm install' and then run 'node index.js' to start the server that connects to the database. 



