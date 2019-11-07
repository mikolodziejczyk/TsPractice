const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');


module.exports = {
    entry: {
        await: "./AppScripts/await/main.ts",
        classes: "./AppScripts/classes/main.ts"
    },
    output: {
        filename: "./dist/MyApp/Scripts/[name].js"
    },
    devtool: 'source-map',
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {

        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ],
    externals: {
        "../../../node_modules/moment/moment": "moment",
        "../moment": "moment",
        "moment": "moment"
    }
}

