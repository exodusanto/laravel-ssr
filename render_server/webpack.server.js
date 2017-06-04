const path = require('path')
const webpack = require('webpack')

module.exports = {
    target: 'node',
    devtool: false,
    entry: './resources/assets/js/server-entry.js',
    output: {
        filename: '[name].build.js',
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, '../render_server'),
    },
    context: path.resolve(__dirname, '../'),
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders:  {
                    scss: 'vue-style-loader!css-loader!sass-loader',
                }
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif|svg|ttf|woff|eot)$/,
            loader: 'file-loader',
            query: {
                name: 'file/[name].[ext]'
            }
        }]
    },
    externals: Object.keys(require('../package.json').dependencies),
    plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
          'process.env.VUE_ENV': '"server"',
          'process.BROWSER': false,
        })
    ]
}
