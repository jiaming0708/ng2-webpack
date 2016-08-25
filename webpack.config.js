var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
  entry: {
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },
  output: {
    path: __dirname,
    filename: './dist/[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      },{
        test: /\.css$/,
        loader: 'style!css'
      },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }, {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [path.resolve(__dirname, "index.html")]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./dist/vendor.bundle.js"),
    new ExtractTextPlugin("./dist/style.css"),
    new HtmlWebpackPlugin({ template: 'index.html' })
  ]
}
