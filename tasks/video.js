const { src, dest } = require('gulp');
const { paths } = require('./settings');
const browserSync = require('browser-sync');

function video() {
  return src(paths.src.video)
    .pipe(dest(paths.build.video))
    .pipe(browserSync.reload({ stream: true }));
}

module.exports = video;