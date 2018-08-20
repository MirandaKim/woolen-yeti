
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');

/****************************************************/
/*                                                 */
/*   Styles Gulp Task                             */
/*                                               */
/************************************************/
/*

  - Process the src style files using sass!

  *************
  * Contents: *
  *************

  # Configs
  # Style Task

*/

/*************************************/
/*   # Configs                      */
/***********************************/

let fileSrc = ['./src/styles/styles.scss'];
let fileDest = './assets';

/*************************************/
/*   # Style Task                   */
/***********************************/

gulp.task('styles', () => {
  return gulp.src(fileSrc)
  .pipe(sass())
  .pipe(cssnano()) // minimize resulting css
  .on('error', function(errorInfo){ // handle error
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest(fileDest));
});
