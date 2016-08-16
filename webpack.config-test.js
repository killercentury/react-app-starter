const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node', // ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // ignore node_modules
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
};
