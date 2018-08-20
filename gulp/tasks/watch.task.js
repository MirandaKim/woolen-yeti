const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

require('./styles.task');
require('./scripts.task');

/**************************************/
/*   # Config                        */
/************************************/

let htmlWatchFiles = [
  './index.md',
  './_includes/**/*.html',
  './_layouts/**/*.html'
];

let jsWatchFiles = [
  './src/scripts/**/*.js'
];

let stylesWatchFiles = [
  './src/styles/**/*.scss'
];

let stylesInjectDest = './_site/assets/styles.css';

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

  watch(htmlWatchFiles, gulp.series('build', () => {
    browserSync.reload();
  }));

  /****************
  *   > Scripts   *
  *****************
  If any of the working script files are modified, jekyll build and reload the browser(s)
  */
  watch(jsWatchFiles, gulp.series('scripts', 'build', () => {
    browserSync.reload();
  }));

  /***************
  *   > Styles   *
  ****************
  If any of the working style files are modified, jekyll build and sync the css
  (this will update the browser window to the current css WITHOUT refreshing)
  */

  watch(stylesWatchFiles, gulp.series('styles', 'build', () => {
    return gulp.src(stylesInjectDest)
    .pipe(browserSync.stream());
  }));
});
