const path = require("path");

module.exports = {
  entry: {
    app: "./src/js/AppEntry.js"
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "bundle.js"
  }
};
