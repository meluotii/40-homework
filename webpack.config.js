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
                    'style-loader',
                    'css-loader',
<<<<<<< HEAD
                    'sass-loader',
=======
                    'sass-loader'
>>>>>>> 3afbaf7bdca67d85340296ba5c0658ebf5b8d97c
                ],
            },
        ],
    }
};
