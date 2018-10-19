const webpack = require('webpack')
const WebpackOnBuildPlugin = require('on-build-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

process.env.NODE_ENV = 'development';
var onBuildReady = ['echo "dev build is ready"'];

const config = {
    mode: 'development',
    resolve: {
        modules: [
            'node_modules'
        ]
    },
    entry: ['./src/entry.js'],
    output: {
        path: path.join(__dirname, '../../dist/'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    optimization: {
        minimize: false,
        // minimizer: [
        //     new UglifyJsPlugin({ /* config here */ })
        // ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"',
            }
        }),
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            title: 'Test app',
            hash: true,
            template: path.join(__dirname, '../../src/index.ejs'),
            author: {
                name: 'Alexey Kosenko',
                email: 'misterlexa123@gmail.com'
            },
            app: {
              name: 'bla bla'
          },
          inject: true
        }),
        new WebpackOnBuildPlugin(function(stats) {
            // console.log(stats);
        }),
        new WebpackShellPlugin({
            onBuildStart:['echo "Webpack Start"'],
            onBuildEnd: onBuildReady
        }),
        new CopyWebpackPlugin([
            // {from:'static',to:'static'}
        ]),
    ]
}

module.exports = config
