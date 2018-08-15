/**
 * util.js
 */
function getTitle() {
    return 'hello bwt';
}
function ready(cb) {
    document.addEventListener('DOMContentLoaded', function () {
        document.removeEventListener("DOMContentLoaded", arguments.callee, false);
        cb();
    })
}
module.exports = {
    getTitle: getTitle,
    ready: ready
}