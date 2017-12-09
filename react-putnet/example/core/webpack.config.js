/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: './App.js',
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel-loader",
    }]
  }
};
