const path = require("path");

module.exports = {
  entry: {
    app: "./src/basic/js/appEntry.js"
  },
  output: {
    path: path.join(process.cwd(), "dist/js"),
    filename: "bundle.js"
  }
};
