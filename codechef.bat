@echo off
pushd "<PATH TO CODECHEF NODEJS DIRECTORY>"
if [%1]==[] goto fetchContests
if [%2]==[] goto fetchProblems
goto fetchDetails

:fetchContests
npm start && popd

:fetchProblems
npm run contest %1 && popd

:fetchDetails
npm run contest %1 %2 && popd