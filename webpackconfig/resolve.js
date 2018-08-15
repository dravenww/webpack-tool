const common = require('../util/common');
const util = require('../util/util');
const bwtConfig = require(common.bwtConfigFile);
let alias = {
    dep: common.libPath,
    widget: common.vueWidgetPath,
    vue: common.nodeModulesPath + '/vue/dist/vue.common'
};
if (bwtConfig && bwtConfig.webpackAlias) {
    alias = util.extend(alias, bwtConfig.webpackAlias);
}
module.exports = {
    modules: [common.libPath, 'node_modules', common.nodeModulesPath],
    alias: alias,
    extensions: ['.js', '.jsx', '.vue', '.less', '.css', '.scss', '.html', '.tpl', '.png', '.jpg']
}