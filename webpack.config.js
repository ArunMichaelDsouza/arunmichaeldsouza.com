// Webpack build script

const webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src/js/app.js')
    },

    output: {
        path: path.join(__dirname, 'public/js/'),
        filename: '[name].js'
    },

    module: {
        loaders: [{
            test: /\.scss?$/,
            use: ExtractTextPlugin.extract({
                use: [{ 
                    loader: 'css-loader', 
                    options: { 
                        minimize: true 
                    }
                }, { 
                    loader: 'sass-loader' 
                }]
            })
        }]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ExtractTextPlugin('../css/styles.min.css'),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     minChunks: 2
        // })
    ]
};