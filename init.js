#!/usr/bin/env node
// sudo chmod o+w index.js
const co = require('co');
const prompt = require('co-prompt');
const fs = require('fs');
const path = require('path');
const common = require('./util/common');
const util = require('./util/util');
const config = require('./package.json');
let templatePath = __dirname + '/template/';
let projectName;
let viewName;
let cssName = "less";
/**
 * @return promise
 */
function buildPackageJson() {
    let readPath = templatePath + viewName + '.package.json';
    let content = fs.readFileSync(readPath, 'utf8');
    let str = content.replace(/%projectname%/, projectName);
    return new Promise(function (resolve, reject) {
        let writePath = path.join(common.baseDir, projectName + '/package.json');
        fs.writeFile(writePath, str, 'utf8', function () {
            resolve();
        });
    })
}
/**
 * @return promise
 */
function buildPwtConfig() {
    let readPath = templatePath + 'pwt.config.js';
    let content = fs.readFileSync(readPath, 'utf8');
    let str = content.replace(/%css%/, cssName)
        .replace(/%view%/, viewName)
        .replace(/%projectName%/, projectName);
    return new Promise(function (resolve, reject) {
        let writePath = path.join(common.baseDir, projectName + '/pwt.config.js');
        fs.writeFile(writePath, str, 'utf8', function () {
            resolve();
        });
    })
}

function copyAndGenarate(fromSrc, toSrc, cb) {
    let cpPromise = new Promise(function (resolve, reject) {
        util.fsCopy(fromSrc, toSrc, function () {
            resolve();
        });
    });
    let packageJsonPromise = buildPackageJson(toSrc);
    let pwtConfigPromise = buildPwtConfig(toSrc);
    Promise.all([cpPromise, packageJsonPromise, pwtConfigPromise]).then(function (res) {
        cb(common.initStatusCode.INIT_STATUS_SUCCESS);
    }, function (res) {
        if (res[0]) {
            cb(common.initStatusCode.INIT_STATUS_COPY_ERROR);
        } else if (res[1]) {
            cb(common.initStatusCode.INIT_STATUS_PACKAGE_JSON);
        } else if (res[2]) {
            cb(common.initStatusCode.INIT_STATUS_PWT_CONFIG);
        } else {
            cb(common.initStatusCode.INIT_STATUS_NO_KNOW);
        }
    })
}

function excel(cb) {
    let fromSrc = templatePath + viewName + '-' + cssName + '/';
    let toSrc = common.baseDir + '/' + projectName;

    fs.exists(toSrc, function(exists) {
        if(exists) {
            cb(common.initStatusCode.INIT_STATUS_FILE_EXIST);
        }else {
            fs.mkdir(toSrc,function() {
                copyAndGenarate(fromSrc, toSrc, cb);
            });
        }
    })
}


module.exports = function () {
    console.log('hello init')
    co(function *() {
        projectName = yield prompt('INPUT your project name(default: pwttest):');
        if (projectName == '') {
            projectName = 'pwttest';
        }
        viewName = yield prompt('INPUT your render technology(vue or react,default: vue):');
        if (viewName == '') {
            viewName = 'vue';
        }
        while(true) {
            if (viewName != 'react' && viewName != 'vue') {
                console.log('your render technology is not support! please retry');
                viewName = yield prompt('INPUT your render technology(vue or react):');
            } else {
                break;
            }
        }
        excel(function (status) {
            if (status == common.initStatusCode.INIT_STATUS_SUCCESS) {
                console.log('init project ' + projectName + ' is ok');
            } else {
                util.onError('init project error: ' + common.initStatusTEXT[status]);
            }
            process.exit(0);
        })
    });
}