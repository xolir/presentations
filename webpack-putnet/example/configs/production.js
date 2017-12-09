const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: "./src/production/js/AppEntry.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        options: {
          presets: ["env"]
        }
      },
      {
        test: /\.scss?$/,
        loaders: ExtractTextPlugin.extract([
          "css-loader",
          "sass-loader"
        ]),
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.UglifyJsPlugin()
  ],
  output: {
    path: path.join(process.cwd(), "dist/js"),
    filename: "bundle.js"
  }
};
