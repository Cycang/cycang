var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');

module.exports = {
  // 入口
  entry: {
    app: __dirname + '/src/scripts/app.js'
  },

  // 出口
  output: {
    path: __dirname + '/prd',
    // filename: '[name]-[hash].js'
    filename: 'bundle.js'
  },

  // sourcemap
  devtool: 'source-map',

  // devserver配置
  devServer: {
    contentBase: __dirname + '/prd',
    port: 8080,
    inline: true
  },

  // 配置模块
  module: {
    loaders: [
      {
         //加载.js的loader（es6）
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
         //加载.scss文件
        test: /\.scss$/,
        loader: ET.extract('style', 'css!sass')
     },
      {
         //加载.string文件的loader
        test: /\.string$/,
        loader: 'string'
     },
       {
         //加载.vue文件的loader
        test:/\.vue$/,
        loader:'vue'
     }
    ]
  },

  //vue
  vue:{
     loaders:{
        js:'babel'
     }
 },
  //plugins定义
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new ET('bundle.css')
  ]

}
