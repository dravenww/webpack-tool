const common = require('../util/common');
const util = require('../util/util');
const pwtConfig = require(common.pwtConfigFile);
let alias = {
    dep: common.libPath,
    widget: common.vueWidgetPath,
    vue: common.nodeModulesPath + '/vue/dist/vue.common'
};
if (pwtConfig && pwtConfig.webpackAlias) {
    alias = util.extend(alias, pwtConfig.webpackAlias);
}
module.exports = {
    modules: [common.libPath, 'node_modules', common.nodeModulesPath],
    alias: alias,
    extensions: ['.js', '.jsx', '.vue', '.less', '.css', '.scss', '.html', '.tpl', '.png', '.jpg']
}