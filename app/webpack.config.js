const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        filename: 'app.js',
        chunkFilename: 'vendor.js'
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    watch: true,
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
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader', options: {
                        paths: [
                            path.resolve(__dirname, 'node_modules')
                        ]
                    }
                }]
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                loader: 'url-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?[a-z0-9=&.]+)?$/,
                loader: 'url-loader',

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
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: true
        }),
    ]
};
