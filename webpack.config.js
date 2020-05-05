const path = require("path");

module.exports = [
  ["hacss-plugin-expand.umd.js", "development"],
  ["hacss-plugin-expand.umd.min.js", "production"],
].map(([filename, mode]) => ({
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename,
    library: ["hacssPlugins", "expand"],
    libraryTarget: "umd",
    globalObject: "this",
    libraryExport: "default",
  },
  resolve: {
    alias: {
      "core-js": "core-js-pure",
    },
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }],
  },
  mode,
  devtool: "source-map",
}));
