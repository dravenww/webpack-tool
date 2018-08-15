/**
 * @file util.js
 * @desc util
 * @date 2018-04-24
 **/
const path = require('path');
const copydir = require('copy-dir');
const notifier = require('node-notifier');

const abs = function (p) {
    return path.join(__dirname, '../../', p);
}
const fsCopy = function(src, dst, cb){
    copydir(src, dst, function (err) {
        cb();
    });
}

const type = function(o) {
    return Object.prototype.toString.call(o);
}

const forEach = function(obj, method) {
    if (type(obj) === '[object Array]') {
        for (let i = 0, l = obj.length; i < l; i++) {
            if (method.call(this, obj[i], i) === false) {
                break;
            }
        }
        return;
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && method.call(this, obj[key], key) === false) {
            return;
        }
    }
}

const transform = (obj, method) => {
    if (!obj) {
        return obj;
    }
    let target = new obj.constructor();
    forEach(obj, function(val, key) {
        method(target, val, key);
    });
    return target;
}

const clone = function (obj, method) {
    return transform(obj, function(target, val, key) {
        target[key] = method ? method(val, key) : val;
    });
}
const extend = function(target, addon, alone) {
    target = (alone ? clone(target) : target) || {};
    forEach(addon, function(val, key) {
        target[key] = val;
    });
    return target;
};

const onError = function (message) {
    console.log('Error:', message);
    notifier.notify({
        title: '构建出错',
        message: message
    });
    process.exit(0);
}

module.exports = {
    abs: abs,
    fsCopy: fsCopy,
    extend: extend,
    onError: onError
}