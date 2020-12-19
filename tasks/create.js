const process = require('process');
const fs = require('fs');
const { paths } = require('./settings');

function create() {
  const name = process.argv[process.argv.length - 1].split('--')[1];
  if (name) {
    fs.writeFileSync(`${paths.src.templates}/components/${name}.pug`, '');
    fs.writeFileSync(`${paths.src.styles}/components/${name}.scss`, '');
    fs.writeFileSync(`${paths.src.scripts}/modules/${name}.js`, '');
  }
  return Promise.resolve('Done!');
}

module.exports = create;
