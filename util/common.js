/**
 * @file common.js
 * @desc common file
 * @date 2018-04-24
 *
 **/
const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
// const baseDir = process.cwd();
const baseDir = path.join(process.cwd(), 'bwttest');
const bwtConfigFile = path.join(baseDir, 'bwt.config.js');

let arguments = process.argv.splice(2);
let entry = process.env.npm_config_entry;
const initStatusCode = {
    INIT_STATUS_SUCCESS : 0,
    INIT_STATUS_FILE_EXIST : 1,
    INIT_STATUS_PACKAGE_JSON : 2,
    INIT_STATUS_BWT_CONFIG : 3,
    INIT_STATUS_COPY_ERROR : 4,
    INIT_STATUS_NO_KNOW : 5,
}
const initStatusTEXT = [
    'success',
    'folder is all ready exist',
    'init package.json error',
    'init bwt.config.js error ',
    'init copy file error',
    'not know error',
]

const mainFile = 'main.js';
const htmlFile = 'index.html';
module.exports = {
    direct : arguments[0],
    isDev: arguments[1] == 'dev',
    isPro: arguments[1] == 'pro',
    entry: entry,
    initStatusCode: initStatusCode,
    initStatusTEXT: initStatusTEXT,
    bwtConfigFile: bwtConfigFile,
    baseDir: baseDir,
    bwtNodeModule: path.join(__dirname, '../node_modules'),
    nodeModulesPath: path.join(baseDir, 'node_modules'),
    libPath: path.join(baseDir, 'libs'),
    vueWidgetPath: path.join(baseDir, 'widget'),
    viewPath: path.join(baseDir, 'view'),
    outputPath: path.join(baseDir, 'output'),
    releasePath: path.join(baseDir, 'release'),
    postcssConfigPath: path.join(__dirname, '../postcss.config.js'),
    audientPath: path.join(__dirname, '../audient/'),
    defaultCssPath: 'css',
    defaultJsPath: 'js',
    defaultHost: 'localhost',
    defaultHtmlPath: 'html',
    defaultPublicPah: '../../',
    defaultPort: 8088,
    mainFile: mainFile,
    htmlFile: htmlFile
}