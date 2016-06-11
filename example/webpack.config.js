const Path = require('path');

module.exports = {
  entry: [
     'babel-polyfill',
     Path.join(__dirname, './src/index.jsx')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: Path.join(__dirname, './lib/index.js')
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-runtime'],
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  }
}
