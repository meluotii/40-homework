const path = require('path');
const glob = require("glob");


module.exports = {
    entry: glob.sync("./src/js/*.js"),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                include: [
                    path.resolve(__dirname, 'src/scss')
                ],
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    }
};