var gulp = require('gulp');
var shell = require('gulp-shell');

require('./scripts.task');
require('./styles.task');

/****************************************************/
/*                                                 */
/*   Gulp Build Task (build.task.js)              */
/*                                               */
/************************************************/
/*

  - Run series of gulp tasks for generating distribution files.
  - The gulp build task runs tasks for processing styles, scripts,
  and then triggers the jekyll build task for generating the jekyll directory ~/_site

  *************
  * Contents: *
  *************

  # Build Task

*/


/**************************************/
/*   # Build Task                    */
/************************************/
gulp.task('build', gulp.series('styles', 'scripts', shell.task(['jekyll build'])));
