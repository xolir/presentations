const path = require("path");

module.exports = {
  entry: {
    app: "./src/js/AppEntry.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        options: {
          presets: ["env"]
        },
        include: path.resolve(__dirname, "src/js")
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[hash].bundle.js"
  }
};
