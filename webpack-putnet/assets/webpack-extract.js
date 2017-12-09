const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  entry: {
    app: "./src/js/AppEntry.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, "src/js"),
        loader: "babel-loader",
        options: {
          presets: ["env"]
        }
      },
      {
        test: /\.scss?$/,
        include: path.resolve(__dirname, "src/scss"),
        loaders: ExtractTextPlugin.extract([
          "css-loader",
          "sass-loader"
        ])
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.UglifyJsPlugin()
  ],
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "bundle.js"
  }
};
