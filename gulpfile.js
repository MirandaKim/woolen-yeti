var gulp = require('gulp');
var shell = require('gulp-shell');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

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

  # Build Task
  # Watch Task
    > HTML
    > Scripts
    > Styles
  # Default Task

*/

/**************************************/
/*   # Build Task                    */
/************************************/
/*Process working files into files ready to serve via jekyll build.*/
gulp.task('build', shell.task(['jekyll build']));


/**************************************/
/*   # Watch Task                    */
/************************************/
/*Serve files to :3000 and watch for changes.
When specified working files are changes jekyll build will run
and the browser will be refreshed or synced (file changed w/o refresh).*/

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "_site"
    }
  });

  /*************
  *   > HTML   *
  **************
  If the working html files are modified, jekyll build and reload the browser(s)
  */

  watch(['./index.html', './_includes/**/*.html', './_layouts/**/*.html'], gulp.series('build', () => {
    browserSync.reload();
  }));

  /****************
  *   > Scripts   *
  *****************
  If any of the working script files are modified, jekyll build and reload the browser(s)
  */
  watch('./js/*.js', gulp.series('build', () => {
    browserSync.reload();
  }));

  /***************
  *   > Styles   *
  ****************
  If any of the working style files are modified, jekyll build and sync the css
  (this will update the browser window to the current css WITHOUT refreshing)
  */

  watch(['./css/**.scss', './_sass/**/*.scss'], gulp.series('build', () => {
    return gulp.src('./_site/css/styles.css')
    .pipe(browserSync.stream());
  }));
});

/**************************************/
/*   # Default                       */
/************************************/
/*run task 'gulp' to run default tasks*/

gulp.task('default', gulp.series('build', 'watch'));
