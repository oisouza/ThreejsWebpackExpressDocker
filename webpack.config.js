const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    outputPath: 'assets',
                    name: '[name].[ext]'
                },
              },
            ],
          },
        ],
    },
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}