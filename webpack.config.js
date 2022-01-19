module.exports = {
  mode: "production",
  entry: {
    "index-entry": "./index.js",
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "sourceMaps/[name].map.js",
  },
  target: "node",
  devtool: "source-map",
  watchOptions: {
    ignored: ["node_modules/**"],
  },
  resolve: {
    unsafeCache: true,
    modules: ["./node_modules"],
    extensions: [".js", ".ts", ".json"],
  },
};
