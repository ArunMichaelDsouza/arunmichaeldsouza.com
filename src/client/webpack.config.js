// Webpack build script

const webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

// Map of asset entries for all pages
const assetEntries = ['index', 'travelog', 'cms', 'editor'];

// Function to create module entries for assets of all pages
const mapAssetsToEntryPoints = assets => {
    let entries = {};

    assets.forEach(asset => {
        let entryArray = []
        entries[asset] = entryArray;

        entryArray.push(path.join(__dirname, `js/${asset}.js`));
        entryArray.push(path.join(__dirname, `sass/${asset}.scss`));
    });

    return entries;
};

module.exports = {
    entry: mapAssetsToEntryPoints(assetEntries),

    output: {
        path: path.join(__dirname, '../server/public/js/'),
        filename: '[name].min.js'
    },

    module: {
        loaders: [
            {
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
            },
            {
                test: require.resolve('blueimp-file-upload'),
                loader: 'imports-loader?define=>false'
            },
            {
                test: require.resolve('medium-editor-insert-plugin'),
                loader: 'imports-loader?define=>false'
            }
        ]
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