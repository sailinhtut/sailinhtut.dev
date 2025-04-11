@echo off

:: Check if build.zip exists and delete it
if exist build.zip del /Q build.zip

:: Check if dependencies.zip exists and delete it
if exist dependencies.zip del /Q dependencies.zip

:: Remove build and dependencies directories
rmdir /S /Q build
rmdir /S /Q dependencies

:: Create new build and dependencies directories
mkdir build
mkdir dependencies


:: Copy necessary files
xcopy .next\standalone build /E /H /I /Q
xcopy .next\static build\.next\static /E /H /I /Q 
xcopy public build\public /E /H /I /Q

rmdir /S /Q build\node_modules

:: Copy .next\standalone to dependencies folder
xcopy .next\standalone\node_modules dependencies /E /H /I /Q

:: Create build.zip from the contents inside the build folder (no folder structure)
7z a .\dist\build.zip .\build\*

:: Create dependencies.zip from the contents inside the dependencies folder (no folder structure)
7z a .\dist\dependencies.zip .\dependencies\*


rmdir /S /Q build
rmdir /S /Q dependencies

start .

echo Done.
