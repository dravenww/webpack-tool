/**
 * util.js
 */
function getTitle() {
    return 'hello pwt';
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