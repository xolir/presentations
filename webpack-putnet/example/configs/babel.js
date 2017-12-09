const path = require("path");

module.exports = {
  entry: {
    app: "./src/dynamic/js/AppEntry.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
      },
      {
        test: /\.scss?$/,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      }
    ]
  },
  output: {
    path: path.join(process.cwd(), "dist/js"),
    filename: "bundle.js"
  }
};
