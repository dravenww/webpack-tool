#!/usr/bin/env node
let config = require('./webpackconfig/release.webpack.config');
const child_process = require('child_process');
const webpack = require('webpack');
const util = require('./util/util');
module.exports = function () {

    console.log('release webpack for your project');
    webpack(config, function (err, stats) {
        if (err || stats.hasErrors()) {
            util.onError(err);
        }
        console.log('release your project is ok');
    })
}
