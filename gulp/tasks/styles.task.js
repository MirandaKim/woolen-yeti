const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');

/****************************************************/
/*                                                 */
/*   Styles Gulp Task (styles.task.js)            */
/*                                               */
/************************************************/
/*

  - Process the scss style files using css
    and move them to the assets dir for jekyll to use!

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
  .pipe(autoprefixer('last 6 version'))
  .pipe(cssnano()) // minimize resulting css
  .on('error', function(errorInfo){ // handle error
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest(fileDest));
});
