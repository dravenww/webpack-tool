1、公共方法,util
2、vconsole,在na的时候注入
3、webpack-upload
4、报警,是否需要加入
5、本地二维码（扫码手机访问,启动本地server）

---------------------
bwt init
1、copy文件,生成项目,
2、生成bwt.config.js配置文件
3、项目自带的一些东西,如package.json项目依赖等

---------------------
bwt run
1、加入构建开始时间和构建完成时间
2、启动打开一个首页（如传模块,打开模块,否则打开audient）
3、run na,wap,pc

---------------------
bwt release
1、加入构建开始时间和构建完成时间
2、是否zip,（config文件配置是否需要打成zip包）
3、release na,wap,pc
4、是否推到后端服务器（config文件配置推送地址）

---------------------
webpack 暴露配置入口
1、entry命令行选择模块,默认全部view下面模块 --entry=home,test
2、

---------------------

1.1 入口设计
bwt命令行工具提供init、run、release三个入口，分别可以达到创建项目，本地开发，编译上线的功能。
1.1.1 bwt init
提供init命令，以便于用户创建项目，可选择前端流行的vue和react技术，也可以选择css预处理器less或者sass，同时生成项目目录，和可配置文件bwt.config.js;
1.1.2 bwt run
提供run命令，以便于用户在项目的开发过程中进行本地调试，并且可以在配置文件中配置是否需要proxy，以及proxy到的地址，
同时后面跟entry参数，可以指定编译多个或单个模块。
1.1.3 bwt release
