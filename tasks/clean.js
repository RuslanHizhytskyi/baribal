const del = require('del');
const { paths } = require('./settings');

function clean() {
  del.sync(`${paths.build.main}/*`);
  return Promise.resolve('Done!');
}

module.exports = clean;
