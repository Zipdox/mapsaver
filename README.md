# Map Saver
A script for minecraft that saves all maps within loading distance (in item frames).

# Instructions
  * Install nodejs & npm
  * Download and extract this repo
  * Open a terminal/cmd in the extracted folder and run `npm install`
  * Rename credentials_example.js to credentials.js and edit it to include your minecraft login and server IP
  * Optional: Create a file called skip.txt with a list of map IDs (one each line) to not download.
  * Run `node index.js`
  * Afer you stop receiving maps for 5 second the script will exit automatically.
  * A list of downloaded maps will be in `maps.json` and the map images will be save in the maps folder.
