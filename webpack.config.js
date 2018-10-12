const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');


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
            minify: true
    }),
    new CopyWebpackPlugin([
            { from: './src/static' }
    ])
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