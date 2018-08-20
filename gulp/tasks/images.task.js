const gulp  = require('gulp');
const imagemin = require('gulp-imagemin');
/****************************************************/
/*                                                 */
/*   Images Gulp Task                             */
/*                                               */
/************************************************/
/*

  - Gulp task for optimizing image files for the destination directory

  *************
  * Contents: *
  *************

  # Configs
  # Images Task

*/

/*************************************/
/*   # Configs                      */
/***********************************/

let imgDest = 'assets/images'; // assets destination

let imageSrc = [
    /* Images to optimize */
    `./src/images/**/*`
    /* Exclude from optimization */
    //`!./src/assets/images/icons/**/*`, // consider excluding this path if there is a separarate task for sprite icons
    //`!./src/assets/images/icons/**/*` // consider excluding this path if there is a separarate task for sprite icons
  ];

let imageConfig = { // gulp-imagemin configuration
      progressive: true, // optimize jpg
      interlaced: true, // optimize gif
      multipass: true // optimize svg
}

/*************************************/
/*   # Images Task                  */
/***********************************/

/*
  Copy optimized versions of images files to the assets destination
*/
gulp.task('images', gulp.series(() => {
  console.log('Optimizing images...')
  return gulp.src(imageSrc)
    .pipe(imagemin(imageConfig))
    .pipe(gulp.dest(imgDest));
}));
