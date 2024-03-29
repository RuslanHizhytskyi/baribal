const process = require('process');

const paths = {
  rollup: {
    entry: 'src/js/main.js',
    bundle: 'build/js/main.js'
  },
  src: {
    templates: 'src/templates',
    styles: 'src/styles',
    scripts: 'src/js',
    img: 'src/img/*.+(jpg|jpeg|png|svg|ico|gif|webp)',
    video: 'src/video/*.+(mp4|mov)',
    svg: 'src/img/**/*.svg',
    fonts: 'src/fonts/**/*'
  },
  build: {
    main: 'build',
    markup: 'build',
    styles: 'build/css',
    scripts: 'build/js',
    img: 'build/img',
    video: 'build/video',
    fonts: 'build/fonts'
  },
  watch: {
    build: 'build',
    templates: 'src/templates/**/*.+(pug|html)',
    styles: 'src/styles/**/*.+(sass|scss)',
    scripts: 'src/js/**/*.js',
    images: 'src/img/**/*.+(jpg|jpeg|png|svg|ico|gif|webp)',
    video: 'src/video/*.+(mp4|mov)',
    svg: 'src/img/**/*.svg',
    font: 'src/fonts/**/*'
  }
}

const isDevelopmentMode = () => {
  return process.env.NODE_ENV === 'development';
}

const isProductionMode = () => {
  return process.env.NODE_ENV === 'production';
}

module.exports = {
  paths,
  dev: isDevelopmentMode,
  prod: isProductionMode
};
