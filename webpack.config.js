const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: __dirname + '/src',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  plugins: [new HtmlWebpackPlugin()]
}
