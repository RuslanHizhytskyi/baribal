const { src, dest } = require('gulp');
const { paths } = require('./settings');
const browserSync = require('browser-sync');

function font() {
  return src(paths.src.fonts)
    .pipe(dest(paths.build.fonts))
    .pipe(browserSync.reload({ stream: true }));
}

module.exports = font;
