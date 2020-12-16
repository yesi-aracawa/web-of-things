# web-of-things
WOT has many common elements on web sites, schedule, menu, selectors, etc.

## JSON SCRIPTS

### Run multiple NPM scripts in parallel using parallelshell NPM module.
#### Windows
  * "watch:scss": "onchange \"css/*.scss\" -- npm run scss",
  * "watch:all": "parallelshell \"npm run watch:scss\" \"npm run lite\"",

#### MacOs or Linux
  * "watch:scss": "onchange 'css/*.scss' -- npm run scss",
  * "watch:all": "parallelshell 'npm run watch:scss' 'npm run lite'"
