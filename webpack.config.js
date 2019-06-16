// webpack.config.js
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
    ],
  },
  resolve: {
    modules: [
      'node_modules'
    ]
  },
};