const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
};
