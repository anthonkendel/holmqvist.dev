// vue.config.js
module.exports = {
  outputDir: 'docs',
  css: {
    loaderOptions: {
      sass: {
        implementation: require('dart-sass'),
      },
    },
  },
};
