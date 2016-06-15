const path = require('path');

module.exports = {
  entry: [
     'babel-polyfill',
     path.join(__dirname, './src/index.jsx')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      react: path.resolve('./node_modules/react'),
    }
  },
  output: {
    filename: path.join(__dirname, './lib/index.js')
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['transform-runtime']
      }
    }]
  }
}
