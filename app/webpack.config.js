const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => ({
  output: {
    filename: argv.mode === 'development' ? 'app.js' : '[name].[contenthash].js',
    chunkFilename: 'vendor.js',
  },
  devtool: argv.mode === 'development' ? 'eval-source-map' : '',
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  watch: argv.mode === 'development',
  watchOptions: {
    ignored: ['node_modules'],
    poll: 1000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }, {
        test: /\.(less|css)$/,
        resolve: {
          extensions: [
            '.less',
            '.css'
          ],
        },
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ]

      }, {
        test: /\.(png|gif|jpe?|eot|svg|ttf|woff|woff2)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      },
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
          chunks: 'all'
        }
      }
    },
  },
  plugins: [
    new CleanWebpackPlugin([
      'dist/*',
    ], {
      exclude: ['.gitignore']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: true
    }),
    new MiniCssExtractPlugin(),
    new OptimizeCSSAssetsPlugin(),
  ]
});
