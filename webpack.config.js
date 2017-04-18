// @AngularClass

/*
 * Helper: root(), and rootDir() are defined at the bottom
 */
var path = require('path');
var webpack = require('webpack');

var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin({
	path: path.join(__dirname, 'frontend')
});

// Webpack Plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

/*
 * Config
 */
module.exports = {
	// for faster builds use 'eval'
	devtool: 'source-map',
	// debug: true, // remove in production

	entry: {
		'app': './frontend/src/main.ts', 
		'vendor': './frontend/src/vendor.ts'
	},
	resolve: {
		// ensure loader extensions match
		extensions: ['.ts', '.js', '.json', '.css', '.html']
	},

	// Config for our build files
	output: {
		path: path.join(__dirname, "public", "wassets"),
		filename: '[name]_[hash].bundle.js',
		sourceMapFilename: '[name]_[hash].map',
		chunkFilename: '[id].chunk.js',
		publicPath: "wassets/"
	},

	module: {
		rules: [{
				enforce: 'pre',
				test: /\.ts$/,
				use: 'tslint-loader'
			},
			{
				test: /\.css$/,
				use: 'css-loader'
			},
			{
				test: /\.ts$/,
				use: 'ts-loader'
			},
			{
				test: /\.html$/,
				use: 'file-loader'
			}
		]
	},

	plugins: [
		assetsPluginInstance
	],

	// for vagrant
	watchOptions: {
		poll: 1000
	}
};

// Helper functions