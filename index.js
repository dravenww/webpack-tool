#!/usr/bin/env node

const common = require('./util/common');
const config = require('./package.json');
const program = require('commander');
if (common.direct == 'run') {
    require('./run.js')();
} else if (common.direct == 'init') {
    require('./init.js')();
} else if (common.direct == 'release') {
    require('./release.js')();
} else {
    program
        .version('v' + config.version)
        .usage('<command>')
        .option('-v, --version', 'output the version number')
        .command('init', 'generate a new pwt project')
        .command('run', 'run the pwt project with development')
        .command('release', 'release the pwt project with production')
        .parse(process.argv);
}