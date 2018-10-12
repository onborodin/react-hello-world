const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/react-app.js",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "react-app.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/react-app.html",
            filename: "react-app.html",
            minify: false,
            favicon: './src/favicon.ico',
            inject: true
        }),
        new CopyWebpackPlugin([
            { from: './src/static' }
        ]),
        new CleanWebPackPlugin(
                    [ './build' ], 
                    { root: path.resolve(__dirname)}
        )
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};
