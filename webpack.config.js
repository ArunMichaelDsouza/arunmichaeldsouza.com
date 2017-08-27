// Webpack build script

const webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

// Map of asset entries for all pages
const assetEntries = ['index', 'travelog'];

// Function to create module entries for assets of all pages
const mapAssetsToEntryPoints = assets => {
    let entries = {};

    assets.forEach(asset => {
        let entryArray = []
        entries[asset] = entryArray;

        entryArray.push(path.join(__dirname, `src/js/${asset}.js`));
        entryArray.push(path.join(__dirname, `src/sass/${asset}.scss`));
    });

    return entries;
};

module.exports = {
    entry: mapAssetsToEntryPoints(assetEntries),

    output: {
        path: path.join(__dirname, 'public/js/'),
        filename: '[name].min.js'
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
        new ExtractTextPlugin('../css/[name].min.css'),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     minChunks: 2
        // })
    ]
};