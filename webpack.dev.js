const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: [
        // 'react-hot-loader/patch',
        './src/index.tsx'
    ],
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // filename: './dist/[name].js',
        clean: true //removes old files from build/dist folder
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                options: {
                    compilerOptions: {noEmit: false}
                },
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: 'file-loader'
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        'static': {
            directory: './dist'
        }
    },
    plugins: [
        // new CopyPlugin({
        //     patterns: [{ from: './public/index.html' }],
        // }),
        new HtmlWebpackPlugin({
            templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
            filename: 'index.html',
            template: __dirname + '/public/index.html',
            inject: 'body'
        })
    ],
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js',
            '.jsx'
        ]
    }
};

module.exports = config;