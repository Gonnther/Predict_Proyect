module.exports = {
	entry: ['regenerator-runtime/runtime.js', './src/app/index.js'],
	module: {
		rules: [
				{
					test:/\.js/,
					exclude:/node_modules/,
					use:["babel-loader"],
				},
				{
					test: /\.css/i,
					exclude:/node_modules/,
					use: ["style-loader", "css-loader"]
					
				},
			]
	},
	output: {
		path: __dirname + '/src/public',
		filename: 'bundle.js'
	}

};