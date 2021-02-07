const webpack = require('webpack');
const fs = require('fs');
const VueLoader = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('../util/common');
const pwtConfig = require(common.pwtConfigFile);
const cssOutputPath = pwtConfig && pwtConfig.cssOutputPath ? pwtConfig.cssOutputPath : common.defaultCssPath;
let plugins = [];


let cssPlugin = new MiniCssExtractPlugin({
    filename: `${cssOutputPath}/[name].css`,
    chunkFilename: `${cssOutputPath}/[id].css`
});
plugins.push(cssPlugin);


let definePlugin = new webpack.DefinePlugin({
    __DEV__: common.isDev,
    __PRO__: common.isPro
});
plugins.push(definePlugin);

if (pwtConfig.view == 'vue') {
    let vueLoaderPlugin = new VueLoader.VueLoaderPlugin();
    plugins.push(vueLoaderPlugin);
}

let providePlugin = new webpack.ProvidePlugin({
    setImmediate: ['setimmediate', 'setImmedate'],
    clearImmediate: ['setimmediate', 'clearImmedate']
});
plugins.push(providePlugin);

module.exports = plugins