const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');
const devserver = require('./webpack/devserver');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const files = require('./webpack/files');
const webpack = require('webpack');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            'index': PATHS.source + '/pages/index/index.js',
            'investors': PATHS.source + '/pages/investors/investors.js',
            'team': PATHS.source + '/pages/team/team.js',
            'career': PATHS.source + '/pages/career/career.js'
        },
        output: {
            path: PATHS.build,
            filename: './js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'investors.html',
                chunks: ['investors', 'common'],
                template: PATHS.source + '/pages/investors/investors.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'career.html',
                chunks: ['career', 'common'],
                template: PATHS.source + '/pages/career/career.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'team.html',
                chunks: ['team', 'common'],
                template: PATHS.source + '/pages/team/team.pug'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common',
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    pug(),
    files()
]);

module.exports = function (env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS(),
            uglifyJS()
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            sass(),
            css()
        ]);
    }
};
