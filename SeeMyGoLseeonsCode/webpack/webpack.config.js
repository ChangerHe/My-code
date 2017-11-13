// 引入webpack
var webpack = require('webpack')
// 引入html打包插件
var htmlWebpackPlugin = require('html-webpack-plugin')

// 暴露配置信息
module.exports = {
  // 入口文件, 相对路径的写法
  entry: {
    'b': './js/b.js'
  },

  // 声明出口文件(最终生成的文件名)
  output: {
    // 出口文件路径
    path: './output',
    // 声明出口文件名
    filename: 'bundle.js',
    publicPath: 'output/'
  },

  // 声明加载器
  module: {
    loaders: [
      // css加载器
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      // less加载器
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      // 图片加载器
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url?name=[path][name].[ext]&limit=8192'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('打包制作'),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      }
    }),
	new htmlWebpackPlugin({
		filename: 'index.html',
		template: 'index.html',
		title: 'webpack is good',
		date: new Date()
		
	})
  ]
}