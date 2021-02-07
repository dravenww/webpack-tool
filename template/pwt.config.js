const path = require('path');
const libPath = path.join(__dirname, 'libs');
module.exports = {
    projectName:'%projectName%',
    view:'%view%',
    css:'%css%',
    cssOutputPath: 'static/css', // 'css文件输出前缀目录',
    htmlOutputPath: 'html', // 'html文件输出目录前缀',
    webpackPublicPath: '../../', // 'webpack配置中的publicpath',
    jsOutputPath: 'static/js', // 'js文件输出目录前缀',
    host:'localhost', // 页面访问的host,默认为localhost
    port: '8082', // 端口
    webpackAlias: {//'webpack编译中import对象的别名',
        '@': libPath
    },
    proxy: [{
        // 接口代理
        context: ['/phasterse'],
        // xuyi
        target: 'http://cp01-rdqa-dev427-xuyi05.epc.baidu.com:8480',
        headers: {
            Host: 'cp01-rdqa-dev427-xuyi05.epc.baidu.com',
            'Access-Control-Allow-Origin': '*'
        },
        secure: false
    }],
    needOpenBrowser: false, // 是否需要打开浏览器,默认false
    needUpload: false, //'是否需要上传到远程,default: false',
    uploadOption: {  //如果需要上传，此参数必传
        receiver: '上传服务接口地址，用于接受上传的文件资源',
        to: '上传文件时指定文件路径'
    }
}