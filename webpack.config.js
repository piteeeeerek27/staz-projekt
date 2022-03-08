const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/ts/index.ts",
	mode: "production",
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.html$/,
				loader: "html-loader",
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "src"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
	],
	devServer: {
		static: path.resolve(__dirname, "./src/index.html"),
		port: 8080,
		open: true,
		hot: true,
	},
};
