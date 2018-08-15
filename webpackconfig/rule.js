const common = require('../util/common');
const bwtConfig = require(common.bwtConfigFile);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let rules = [
    {
        test: /\.html$/,
        loader: 'html-loader'
    }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=img/[hash].[ext]'
    }, {
        test: /\.json$/i,
        use: 'json-loader'
    }
];

if (bwtConfig.css == 'less') {
    rules.push({
        test: /\.less|css$/i,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
                loader: 'postcss-loader',
                options: {
                    path: common.postcssConfigPath,
                    sourceMap: true
                }
            },
            "resolve-url-loader",
            "less-loader"
        ]
    })
} else if (bwtConfig.css == 'scss') {
    rules.push({
        test: /\.scss|css$/i,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
                loader: 'postcss-loader',
                options: {
                    path: common.postcssConfigPath,
                    sourceMap: true
                }
            },
            "resolve-url-loader",
            "sass-loader"
        ]
    })
}

if (bwtConfig.view == 'vue') {
    rules.push({
        test: /\.vue$/,
        loader: 'vue-loader'
    });
    rules.push({
        test: /\.js$/,
        use: [
            {
                options: {
                    presets: [
                        "es2015",
                        "stage-2"
                    ],
                    babelrc: false,
                    compact: false
                },
                loader: "babel-loader"
            }
        ]
    });
} else if (bwtConfig.view == 'react') {
    rules.push({
        test: /\.js/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015','stage-2', 'react'],
            babelrc: false,
            compact: false
        }
    });
}
module.exports = {
    rules: rules
}