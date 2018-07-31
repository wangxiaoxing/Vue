1.全局安装 cnpm install -g webpack

2.安装webpack-cli:   cnpm install webpack-cli -g

3.检测 webpack -v

生成package.json文件    cnpm init

为项目添加webpack依赖： cnpm install --save-dev webpack

热更新：
1. 设置webpack-dev-server ：cnpm install webpack-dev-server --save-dev 

2.webpack.config.js设置devServer
   devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:1717
    }
    
3.在package.json里配置scripts
"scripts": {
    "server":"webpack-dev-server"
},

4.输入cnpm run server  

5.浏览器打开http://localhost:1717即可打开dist文件夹下的index.html

webpack4.0以上不支持extract -text-webpack-plugin的解决办法

 npm install extract-text-webpack-plugin@next  

5个概念：
1.入口[entry]：指示webpack应该使用哪个模块，来作为构建其内部依赖图的开始。

2.输出[output]:告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。

3.loader(module):让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块.

  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
  
4.插件[plugins]:执行范围更广，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。

5.模式：设置mode参数为development或production，来启用相应模式下的webpack内置的优化。

module.exports = {
  mode: 'production'
};
