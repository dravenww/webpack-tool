const common = require('../util/common');
const bwtConfig = require(common.bwtConfigFile);
const jsPath = bwtConfig && bwtConfig.jsOutputPath ? bwtConfig.jsOutputPath : common.defaultJsPath;
const publicPath = bwtConfig && bwtConfig.webpackPublicPath ? bwtConfig.webpackPublicPath : common.defaultPublicPah;

module.exports.output = {
    // output path
    path: common.outputPath,
    // file name
    filename: `${jsPath}/[name].[hash:8].js`,
    chunkFilename: `${jsPath}/chunk/[name].[hash:8].js`,
    // webpack publicPath :https://webpack.js.org/configuration/output/#output-publicpath
    publicPath: publicPath
}
module.exports.release = {
    // output path
    path: common.releasePath,
    // file name
    filename: `${jsPath}/[name].[hash:8].js`,
    chunkFilename: `${jsPath}/chunk/[name].[hash:8].js`,
    // webpack publicPath :https://webpack.js.org/configuration/output/#output-publicpath
    publicPath: publicPath
}