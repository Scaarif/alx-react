const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, './src/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		static: path.join(__dirname, './dist'),
		open: true,
		// port: 8564,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader", ],
			},
			{
				test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
				type: 'asset/resource',
				use: [
					"file-loader",
					{
						loader: "image-webpack-loader",
						options: {
								bypassingOnDebug: true,
								disable: true,
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		],
	},
};
