var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/props5.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'props5_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: 'app/props5.html'
    })
  ]
}
