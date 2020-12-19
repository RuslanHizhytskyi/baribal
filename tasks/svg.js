const { src, dest } = require('gulp');
const { paths } = require('./settings');
const svgmin = require('gulp-svgmin');
const browserSync = require('browser-sync');

function svg() {
  return src(paths.src.svg)
    .pipe(svgmin({
      plugins: [{
        removeViewBox: false
      }]
    }))
    .pipe(dest(paths.build.img))
    .pipe(browserSync.reload({ stream: true }));
}

module.exports = svg;
