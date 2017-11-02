const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: __dirname + '/src',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: process.env.NODE_ENV === 'production' ? '/background' : '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  devtool: 'source-map',
  plugins: [new HtmlWebpackPlugin({ title: 'SDG BG' })]
}
