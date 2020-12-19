const { src, dest } = require('gulp');
const { paths } = require('./settings');
const include = require('gulp-include');

function localization() {
  return src(paths.src.localization)
    .pipe(include())
    .pipe(dest(paths.build.localization));
}

module.exports = localization;
