var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.coffee']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ]
};
