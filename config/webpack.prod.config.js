const merge = require('webpack-merge');
const path = require('path');

// Plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const baseConfig = require('./webpack.base.config');

const production = env => {
    return merge([{
        optimization: {
            // runtimeChunk: 'single',
            // splitChunks: {
            //     cacheGroups: {
            //         vendor: {
            //             test: /[\\/]node_modules[\\/]/,
            //             name: 'vendors',
            //             chunks: 'all'
            //         }
            //     }
            // },
            minimizer: [new UglifyJsPlugin()],
        },
        plugins: [
            new CleanWebpackPlugin(['dist'], {
                root: path.join(__dirname, '..')
            }),
            new MiniCssExtractPlugin(),
            // new OptimizeCssAssetsPlugin(),
            new Visualizer({
                filename: './statistics.html'
            })
        ],
    }]);
}

module.exports = env => {
    return merge(baseConfig(env), production(env));
}