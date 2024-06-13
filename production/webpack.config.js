const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
    loger: path.resolve(__dirname, "src/loger.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFileName: "[name].[ext}",
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3333,
    open: true,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resourse",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Main File",
      filename: "index.html",
      template: "src/template.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      title: "Loger File",
      filename: "loger.html",
      template: "src/logerTemplate.html",
      chunks: ["loger"],
    }),
  ],
};
