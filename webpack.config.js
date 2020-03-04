const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = [
	{
		entry: {
			vendor: ["@babel/polyfill", "react"],
			app: ["./src/index.js"]
			// client: "./src/index.js"
		},
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "[name].js"
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-react"]
						}
					}
				},
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: "css-loader",
							options: {
								sourceMap: true,
								modules: {
									localIdentName: "[local]___[hash:base64:5]"
								}
							}
						},
						"postcss-loader",
						"sass-loader",
						{
							loader: "sass-resources-loader",
							options: {
								// Provide path to the file with resources
								// resources: "./path/to/resources.scss",

								// Or array of paths
								resources: ["./src/styles/_variables.scss"]
							}
						}
					]
				},
				{
					test: /\.html$/,
					use: [
						{
							loader: "html-loader"
						}
					]
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin(),
			new HtmlWebPackPlugin({
				template: "./src/index.html",
				filename: "./index.html"
			})
		],
		resolve: {
			extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"]
		}
	}
	// {
	// 	target: "node",
	// 	entry: {
	// 		server: "./src/server.js"
	// 	},
	// 	node: {
	// 		dns: "mock",
	// 		fs: "empty",
	// 		path: true,
	// 		url: false,
	// 		net: "empty"
	// 	},
	// 	output: {
	// 		path: path.resolve(__dirname),
	// 		filename: "[name].js"
	// 	},
	// 	module: {
	// 		rules: [
	// 			{
	// 				test: /\.(js|jsx)$/,
	// 				exclude: /node_modules/,
	// 				use: {
	// 					loader: "babel-loader"
	// 				}
	// 			}
	// 		]
	// 	}
	// }
]
