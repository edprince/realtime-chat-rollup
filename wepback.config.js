let path = require("path");
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, `./src/${process.env.framework}/index.js`),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/bundle.css",
    })
  ]
};
