var path = require("path");
var webpack = require("webpack");


var gsapPath = "/node_modules/gsap/src/uncompressed/";

module.exports = {
    watch: true,
    context: __dirname,
    entry: {
        'app': '../assets/static/js/app.js',
        'styles': '../assets/static/scss/app.scss'
    },

    output: {
        path: "/",
        publicPath: "/assets/static/gen",
        filename: "[name].js"
    },

    devtool: '#cheap-module-source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!autoprefixer-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            TweenMax: "gsap"
        })
    ],

    resolve: {
        modulesDirectories: ['node_modules'],

        extensions: ["", ".js"],

        alias: {
            "TweenLite": "gsap",
            "CSSPlugin": "gsap",
            "Draggable": path.join(root, gsapPath + "utils/Draggable.js"),
            "ScrollToPlugin": path.join(root, gsapPath + "plugins/ScrollToPlugin.js")
        }
    }
};
