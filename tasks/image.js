const { src, dest } = require('gulp');
const { paths } = require('./settings');
const browserSync = require('browser-sync');

function image() {
  return src(paths.src.img)
    .pipe(dest(paths.build.img))
    .pipe(browserSync.reload({ stream: true }));
}

module.exports = image;
