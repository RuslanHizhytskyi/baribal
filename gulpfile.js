const { series, parallel } = require('gulp');

const serve = require('./tasks/serve');
const markup = require('./tasks/markup');
const style = require('./tasks/style');
const script = require('./tasks/script');
const image = require('./tasks/image');
const video = require('./tasks/video');
const svg = require('./tasks/svg');
const font = require('./tasks/font');
const clean = require('./tasks/clean');
const archive = require('./tasks/archive');
const { dev, prod } = require('./tasks/mode');
const create = require('./tasks/create');

const build = series(clean, dev, parallel(markup, style, script, video, image, svg, font));
const deploy = series(clean, prod, parallel(markup, style, script, video, image, svg, font), archive);
const development = series(clean, dev, parallel(markup, style, script, video, image, svg, font), serve);

module.exports = {
  default: development,
  build,
  deploy,
  create
}
