const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');


module.exports = {
    entry: "./src/react-app.jsx",
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
        ),
        new HardSourceWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true
                    }
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
