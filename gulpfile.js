'use strict'

const gulp = require('gulp');
// var shell = require('gulp-shell');


require('./gulp/tasks/build.task');
require('./gulp/tasks/images.task');
require('./gulp/tasks/scripts.task');
require('./gulp/tasks/styles.task');
require('./gulp/tasks/watch.task');

/****************************************************/
/*                                                 */
/*   Gulp Tasks (gulpfile.js)                     */
/*                                               */
/************************************************/
/*

  - List of gulp tasks
  - NOTE: this file is for gulp version 4+
  - gulp (default): run jekyll build then gulp watch
  - gulp build: run jekyll build
  - gulp watch: serve files to :3000 and watch for changes.
                When specified working files are changes jekyll build will run
                and the browser will be refreshed or synced (file changed w/o refresh).

  *************
  * Contents: *
  *************

  # Default

*/


/**************************************/
/*   # Default                       */
/************************************/
/*run task 'gulp' to run default tasks*/

gulp.task('default', gulp.series('build', 'watch'));
