'use strict'

const gulp = require('gulp');

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

  - Default gulp task: run gulp build then watch
  - NOTE: all gulp files are written for gulp version 4+
  - Create any new gulp tasks in their own file (~/gulp/tasks/<task-name>.task.js)
    then import that file above.

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
