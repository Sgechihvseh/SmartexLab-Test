const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "./main.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true
  },

  module: {
    rules: [
	{
		test: /\.jsx?$/,
		exclude: /node_modules/,
		use: [{
			loader: 'babel-loader',
			options: {
				presets:['@babel/preset-env','@babel/preset-react']
			}
		}],
	},
	{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
    },
	{
		test: /\.js$/,
		exclude: /node_modules/,
		loader: "babel-loader"
	},
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
	}
    ]
  },
  resolve: {
	extensions: [ '.js', '.jsx', '.css', '.web.js', '.mjs', '.json', '.web.jsx'],
	modules: [
		"node_modules"
	]
  }
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./src/index.html"
//     })
//   ]
};