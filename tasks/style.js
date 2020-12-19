//@ts-check
const { src, dest } = require('gulp');
const { paths, dev } = require('./settings');
const plumber = require('gulp-plumber');
const condition = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const mqpacker = require("css-mqpacker");
const postcss = require('gulp-postcss');
const replace = require( 'gulp-replace');

const renameSettings = {
  basename: 'style',
  suffix: '.min'
};
const processors = [
  autoprefixer({
    cascade: false
  }),
  mqpacker({
    sort: function(a, b) {
      a = a.replace(/\D/g, "");
      b = b.replace(/\D/g, "");
      return a - b;
      // replace this with a-b for not Mobile First approach
    }
  })
];
function style() {
  return src(`${paths.src.styles}/main.scss`)
    .pipe(plumber())
    .pipe(condition(dev(), sourcemaps.init()))
    .pipe(sass({ includePaths: ["node_modules/"] }))
    .pipe(postcss(processors))
    .pipe(csso())
    .pipe(condition(dev(), sourcemaps.write()))
    .pipe(rename(renameSettings))
    .pipe( replace( /^[ \t]*\@charset[ \t]+\"UTF\-8\"[ \t]*;/gmi, '' ) )
    .pipe(dest(paths.build.styles))
    .pipe(browserSync.reload({ stream: true }));
}

module.exports = style;
