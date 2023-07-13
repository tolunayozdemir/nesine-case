/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
};
