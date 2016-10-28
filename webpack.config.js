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
// <<<<<<< HEAD
    // port: 80,
// =======
    port: 8080,
    color:true,
// >>>>>>> master
    inline: true
    //mock的配置
   //  proxy:{
   //    '/rest/*':{
   //       target:'http://localhost:8090',
   //       secure:false,
   //       pathRewrite:{
   //          吧/rest开头的文件替换成‘’
   //          '^/rest':''
   //       }
   //    }
   // }
  },

  // 配置模块
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: ET.extract('style', 'css!sass')
     },
   //    },
   //    {
   //      test: /\.string$/,
   //      loader: 'string'
   //   },
       {
        test:/\.vue$/,
        loader:'vue'
     }
    ]
  },

// <<<<<<< HEAD
// =======
  //vue
  vue:{
     loaders:{
        js:'babel',
        css:ET.extract('vue-style-loader','css','sass')
     }
 },
// >>>>>>> master
  //plugins定义
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new ET('bundle.css',{
      allChunks:true
   })
  ]

}
