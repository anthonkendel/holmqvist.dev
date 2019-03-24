// vue.config.js
module.exports = {
  outputDir: 'build',
  chainWebpack(config) {
    config
      .plugin('copy')
      .tap((args) => {
        return args.map(arg => {
          arg.from = './static/'
        });
      });

    config
      .plugin('html')
      .tap(args => {
        return args.map(arg => {
          arg.template = './static/index.html'
        });
      });
  },
}