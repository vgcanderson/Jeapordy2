const path = require("path");
const webpack = require("webpack");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  entry: {
    main: path.resolve(process.cwd(), "src", "main.js")
  },
  output: {
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/"
  },
  watchOptions: {
    // ignored: /node_modules/,
    aggregateTimeout: 300, // After seeing an edit, wait .3 seconds to recompile
    poll: 500 // Check for edits every 5 seconds
  },
    module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images/',
                  publicPath: 'images/'
                }
              }
            ]
      }
    ],
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), "public", "index.html")
    })
  ]
}