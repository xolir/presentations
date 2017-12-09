const path = require("path");

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
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
    ]
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "bundle.js"
  }
};
