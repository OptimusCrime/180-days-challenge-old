const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_SRC = path.resolve(__dirname, './src');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(APP_SRC, './index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
        minChunks: module => (
          module.context && module.context.indexOf('node_modules') !== -1
        ),
    }),
    new webpack.NamedModulesPlugin()
  ]
}
