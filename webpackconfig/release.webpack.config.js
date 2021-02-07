const webpack = require('webpack');
const common = require('../util/common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const pwtConfig = require(common.pwtConfigFile);
const htmlPath = pwtConfig.htmlOutputPath ? pwtConfig.htmlOutputPath : common.defaultHtmlPath;
let entry = require('./entry');
let modules = require('./rule');
let output = require('./output');
let resolve = require('./resolve');
let plugins = require('./plugin');
let htmls = entry.htmls;

plugins.push(new webpack.NoEmitOnErrorsPlugin());
plugins.push(new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: cssnano,
    cssProcessorOptions: { discardComments: {removeAll: true }, safe: true},
    canPrint: true
}));

for (var page in htmls) {
    if (page && htmls.hasOwnProperty(page) && htmls[page]) {
        let tplPath = common.viewPath + '/' + page + '/' + common.htmlFile;
        var chunks = [page, 'common'];
        plugins.push(new HtmlWebpackPlugin({
            template: tplPath,
            filename: `${htmlPath}/${page}/${common.htmlFile}`,
            inject: true,
            chunks: chunks
        }));
    }
}

module.exports = {
    mode: 'production',
    entry: entry.entry,
    output: output.release,
    module: modules,
    resolve: resolve,
    plugins: plugins
};