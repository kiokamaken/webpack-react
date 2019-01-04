const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = env => {
	const { PLATFORM, VERSION } = env;
	return merge([
        {
            devtool: 'source-map',
			entry: ['@babel/polyfill', APP_DIR],
			module: {
				rules: [{
						test: /\.js$/,
						exclude: /node_modules/,
						use: {
							loader: "babel-loader"
						}
					},
					{
						test: /\.scss$/,
                        use: [PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                            "css-loader",
                            "sass-loader"
                        ]
					},
					{
						test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
						use: [{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'fonts/'
							}
						}]
					},
					{
						test: /\.(gif|png|jpe?g|svg)$/i,
						use: [
							{
                                loader: 'file-loader',
                                options: {
                                    name: '[name].[ext]',
                                    outputPath: 'assets/'
                                }
                            }
						]
					}
				]
			},
			plugins: [
				new HtmlWebpackPlugin({
					template: APP_DIR + "/index.html",
					filename: "index.html"
				}),
				new webpack.DefinePlugin({ 
					'process.env.VERSION': JSON.stringify(VERSION),
					'process.env.PLATFORM': JSON.stringify(PLATFORM)
                }),
                new MiniCssExtractPlugin(),
				new CopyWebpackPlugin([ { from: 'static', to: 'static' } ]),
            ],
            resolve: {
                alias: {
                    bootstrap: path.resolve(__dirname, '../node_modules/bootstrap')
                },
                modules: [
                    'node_modules',
                    APP_DIR
                ]
            }
		}
	]);
};