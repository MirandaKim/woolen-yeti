var gulp = require('gulp');
var shell = require('gulp-shell');

require('./scripts.task');
require('./styles.task');

/**************************************/
/*   # Build Task                    */
/************************************/
/*Process working files into files ready to serve via jekyll build.*/
gulp.task('build', gulp.series('styles', 'scripts', shell.task(['jekyll build'])));
