/*

npm install webpack-dev-server -D

 */

module.exports = {
  // ...
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
  },
  // ...
};

/*

> webpack-dev-server

 */
