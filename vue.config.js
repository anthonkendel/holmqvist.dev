const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// vue.config.js
module.exports = {
  outputDir: 'public',
  chainWebpack(config) {
    config
      .plugin('html')
      .tap(args => {
        return args.map(arg => {
          arg.template = './static/index.html';
          return arg;
        });
      });
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin(
        [{
          from: './static',
          to: './',
          toType: 'dir',
          ignore: ['.DS_Store'],
        }],
      ),
    ],
  },
};