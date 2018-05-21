const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports= {
	devtool: 'eval-source-map',
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'), //打包后的文件存放的地方
		filename: 'bundle.js' //打包后的文件名
	},
	devServer: {
		contentBase: __dirname + './dist',//本地服务器加载页面的所在目录
    compress: true,
    hot: true,
    port: 9000
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.js'
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
        template: __dirname + '/index.html'
    }),
    new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
	]
}