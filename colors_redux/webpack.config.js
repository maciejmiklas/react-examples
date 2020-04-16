module.exports = {
    entry: {
        index: "./src/index.js",
        test: "./src/test.js",
    },
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: ['babel-loader']
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: () => [require('autoprefixer')]
                }
            }]
        }, {
            test: /\.scss/,
            use: ['style-loader', 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: () => [require('autoprefixer')]
                }
            }, 'sass-loader']
        }]
    }
};