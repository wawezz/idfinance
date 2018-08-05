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
            'events': PATHS.source + '/pages/events/events.js',
            'contacts': PATHS.source + '/pages/contacts/contacts.js',
            'career': PATHS.source + '/pages/career/career.js',
            'news': PATHS.source + '/pages/news/news.js',
            'about': PATHS.source + '/pages/about/about.js',
            'principles': PATHS.source + '/pages/principles/principles.js',
            'press': PATHS.source + '/pages/press/press.js',
            'post': PATHS.source + '/pages/post/post.js'
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
            new HtmlWebpackPlugin({
                filename: 'events.html',
                chunks: ['events', 'common'],
                template: PATHS.source + '/pages/events/events.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'contacts.html',
                chunks: ['contacts', 'common'],
                template: PATHS.source + '/pages/contacts/contacts.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'news.html',
                chunks: ['news', 'common'],
                template: PATHS.source + '/pages/news/news.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'post.html',
                chunks: ['post', 'common'],
                template: PATHS.source + '/pages/post/post.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'about.html',
                chunks: ['about', 'common'],
                template: PATHS.source + '/pages/about/about.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'press.html',
                chunks: ['press', 'common'],
                template: PATHS.source + '/pages/press/press.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'principles.html',
                chunks: ['principles', 'common'],
                template: PATHS.source + '/pages/principles/principles.pug'
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
