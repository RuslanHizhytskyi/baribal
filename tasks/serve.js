const { paths } = require('./settings');
const browserSync = require('browser-sync');
const { watch } = require('gulp');

const markup = require('./markup');
const style = require('./style');
const script = require('./script');
const image = require('./image');
const font = require('./font');

function serve() {
  browserSync({
    server: {
      baseDir: paths.watch.build
    },
    open: true,
    notify: false,
    tunnel: false,
    port: 8000,
    host: 'localhost'
  });

  watch(paths.watch.templates, markup);
  watch(paths.watch.styles, style);
  watch(paths.watch.scripts, script);
  watch(paths.watch.images, image);
  watch(paths.watch.font, font);
}

module.exports = serve;
