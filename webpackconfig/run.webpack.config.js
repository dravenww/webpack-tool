const common = require('../util/common');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackdevOutput = require('webpack-dev-server-output');
const WebpackUploadPlugin = require('webpack-upload');
const pwtConfig = require(common.pwtConfigFile);
const port = pwtConfig && pwtConfig.port ? pwtConfig.port : common.defaultPort;
const host = pwtConfig && pwtConfig.host ? pwtConfig.host : common.defaultHost;
let defaultEntry = require('./entry');
let rule = require('./rule');
let output = require('./output');
let resolve = require('./resolve');
let plugins = require('./plugin');
let htmls = {};
let entry = {};
// 添加两个server
let webpackDevServerClient = `./node_modules/webpack-dev-server/client/index.js?http://${host}:${port}/`;
entry['webpack-dev-server'] = (webpackDevServerClient);


let pages = {};
if (common.entry) {
    let arr = common.entry.split(',');
    arr.forEach(function(item, index){
        pages[item] = defaultEntry.entry[item];
    });
} else {
    pages = defaultEntry.entry;
}
let openPage;
entry['common'] = defaultEntry.entry['common'];
if(pages.length == 1) {
    openPage = `html/${pages[0]}/index.html`;
    entry[pages[0]] = defaultEntry.entry[pages[0]];
    htmls[pages[0]] = defaultEntry.htmls[pages[0]];
} else {
    for(page in pages) {
        if (page != 'common') {
            entry[page] = defaultEntry.entry[page];
            htmls[page] = defaultEntry.htmls[page];
        }
    }
    openPage = 'html/audient/index.html';
    entry.audient = common.audientPath + common.mainFile;
    plugins.push(new HtmlWebpackPlugin({
        template: common.audientPath + common.htmlFile,
        filename: `html/audient/index.html`,
        inject: true,
        chunks: ['audient', 'common']
    }));
}
let url = 'http://'+ host +':' + port + '/' + openPage;
if (pwtConfig.needOpenBrowser) {
    plugins.push(new OpenBrowserPlugin({url: url}));
}

plugins.push(new WebpackdevOutput({
    path: common.outputPath,
    isDel: true
}));

// todo upload
if (pwtConfig.needUpload && pwtConfig.uploadOption.receiver && pwtConfig.uploadOption.to) {
    plugins.push(new WebpackUploadPlugin({
        receiver: pwtConfig.uploadOption.receiver,
        to: pwtConfig.uploadOption.to
    }))
}

for (var page in htmls) {
    if (page && htmls.hasOwnProperty(page) && htmls[page]) {
        let tplPath = common.viewPath + '/' + page + '/' + common.htmlFile;
        var chunks = ['webpack-dev-server', page, 'common'];
        plugins.push(new HtmlWebpackPlugin({
            template: tplPath,
            filename: `html/${page}/${common.htmlFile}`,
            inject: true,
            chunks: chunks
        }));
    }
}

module.exports = {
    mode: 'development',
    entry: entry,
    output: output.output,
    module: rule,
    resolve: resolve,
    plugins: plugins,
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
}