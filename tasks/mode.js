const process = require('process');

function setModeToDevelopment() {
  process.env.NODE_ENV = 'development';
  return Promise.resolve('Done!');
}

function setModeToProduction() {
  process.env.NODE_ENV = 'production';
  return Promise.resolve('Done!');
}

module.exports = {
  dev: setModeToDevelopment,
  prod: setModeToProduction
};
