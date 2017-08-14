// var webpack = require("webpack");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: __dirname + "/dist",
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    devServer: {
		inline: true,
		contentBase: "dist/",
		port: 3000
	},
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".html"]
    },
    devtool: "source-map",
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
};