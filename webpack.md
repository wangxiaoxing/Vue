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
