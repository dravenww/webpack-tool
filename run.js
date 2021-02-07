#!/usr/bin/env node
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const common = require('./util/common');
const pwtConfig = require(common.pwtConfigFile);
const port = pwtConfig && pwtConfig.port ? pwtConfig.port : common.defaultPort;
const host = pwtConfig && pwtConfig.host ? pwtConfig.host : common.defaultHost;
let config = require('./webpackconfig/run.webpack.config');

let devServer = {
    hot: true,
    hotOnly: true,
    contentBase: common.outputPath,
    port: port,
    host: "0.0.0.0",
    publicPath: "/",
    disableHostCheck: true,
    proxy: pwtConfig.proxy
}
module.exports = function () {
    console.log('run webpack for your project');
    const compiler = webpack(config);
    const devServerOptions = Object.assign({}, devServer, {
        stats: {
            colors: true
        }
    });
    const server = new WebpackDevServer(compiler, devServerOptions);

    server.listen(port, '127.0.0.1', function() {
        console.log('Starting server on http://'+ host +':' + port);
    });
}
