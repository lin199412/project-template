/*
 * @Author: linweibin
 * @Description: 
 * @props: 
 * @event: 
 * @Date: 2019-11-19 10:27:46
 * @LastEditors: linweibin
 * @LastEditTime: 2019-11-20 17:22:00
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path")

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  context: path.resolve(__dirname, "../"),
  // webpack入口
  entry: {
    app: "./src/main.js",
  },
  // webpack出口
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash].js"
  },
  module: {
    // 配置webpack各种loader
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [resolve("src")]
      },
      {
        test: /\.less$/,
        use:[
            // "style-loader",
            MiniCssExtractPlugin.loader,
            {loader: "css-loader",options:{sourceMap: true, importLoaders: 1}},
            "postcss-loader",
            "less-loader"
        ]
      },
      {
        test: /\.css$/,
        use:[
            // "style-loader",
            MiniCssExtractPlugin.loader,
            {loader: "css-loader",options:{sourceMap: true, importLoaders: 1}},
            "postcss-loader"
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: {

  }
};
