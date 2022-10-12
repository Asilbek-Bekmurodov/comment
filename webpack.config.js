const path = require("path");

module.exports = {
  entry: "./src/movies/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    filename: "counter.html",
  },
  mode: "development",
};
