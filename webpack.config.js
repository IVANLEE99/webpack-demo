const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode:'development',
  entry: {
    app: './src/index.js'
    // print: './src/print.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ManifestPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer:{
    contentBase:'./dist',
    hot:true
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },{
        test: /\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  }
};