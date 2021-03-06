'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabiliPlugin = require('babel-preset-minify');

const path = require('path');

const pluginsList = [
    new ExtractTextPlugin({ filename: 'main.css', allChunks: true }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development')
        }
    }),
];

// new webpack.DefinePlugin({
//     'process.env': {
//         NODE_ENV: JSON.stringify('production')
//     }
// });

module.exports = {
    entry: {
        main: ['babel-polyfill', './main.js'],
    },
    target: 'node',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'env']
                },
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                use: ['json-loader'],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ use: 'css-loader' }),
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.(eot|woff|woff2|ttf)([?]?.*)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    },
                }],
            },
            {
                test: /\.(png|jpg)([?]?.*)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    },
                }],
                include: path.resolve(__dirname, 'images'),
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                use: ['svg-inline-loader'],
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        mimetype: 'image/svg+xml',
                    },
                }],
                include: /node_modules/,
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: pluginsList,
};
