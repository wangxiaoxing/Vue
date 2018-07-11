# Vue
第一次参与Vue项目，把一些知识点记录下来，方便自己以后复习，let's go<br>
1.<style rel="stylesheet/scss" lang="scss" scoped><br>
这句话的意思是vue文件style标签使用scss，scoped表示样式作用于当下的模块，很好的实现了样式私有化的目的<br>
2.@include clearfix;<br>
清除浮动，详见http://www.ruanyifeng.com/blog/2012/11/compass.html<br>
3.mapState 工具函数会将 store 中的 state 映射到局部计算属性中,mapGetters 工具函数会将 store 中的 getter 映射到局部计算属性中,mapActions 工具函数会将 store 中的 dispatch 方法映射到组件的 methods 中,mapMutations 工具函数会将 store 中的 commit 方法映射到组件的 methods 中,详见：http://www.imooc.com/article/14741<br>
4.双向绑定的时候用v-model='',没有:model='';<br>
5.当需要在<input>中利用v-model绑定Vuex store中的state时，一种办法是在<input>中绑定 value，然后侦听input或者change事件，在事件回调中调用action，
  另一种办法是使用带有setter的双向绑定计算属性。第二种办法更加简洁，推荐第二种。https://vuex.vuejs.org/zh-cn/forms.html<br>
6.当需要在组件中获取模板中的某个元素节点时，使用ref属性，方法见CSS3Animaton组件<br>
7.Vue中的计算属性和侦听属性是针对Vue实例上的数据变动的，css中定义的动态样式貌似无法监听？<br>
8.当Vue打包上线的时候，可能会出现资源无法加载的情况，这时需要去检查组件中资源加载路径或设置打包配置文件(config/index.js)<br>
9.绑定img元素的src时，用<img v-bind:src='',更多知识点移步https://www.jianshu.com/p/f82c5ecbd3a5<br>
10.两个具有相同元素的数组==运算符返回false!
 
 
 


NodeJS、npm、cnpm、vue-cli安装配置步骤

1.安装node.js ，一直点击下一步即可。记住安装路径，默认是在C盘，安装完成后打开cmd,输入node -v，npm -v查看是否正常<br>
2.进入node.js安装路径，在nodejs文件夹下新建"node_global"及"node_cache"两个文件夹。<br>
打开cmd,输入<br>
npm config set prefix "C:\Program Files\nodejs\node_global"（换成你电脑上的目录）<br>
npm config set cache "C:\Program Files\nodejs\node_cache"（换成你电脑上的目录）<br>
这样你全局安装的模块就放在了node_global\node_modules文件夹下，可以安装express看下效果<br>
（注意：这里安装完执行require('express')还会报错，请执行下面的操作）<br>
3.系统变量下新建"NODE_PATH"，输入<br>
”C:\Program Files\nodejs\node_global\node_modules“（换成你电脑上的目录）<br>
4.增加用户变量"PATH"：“C:\Program Files\nodejs\node_global\”（换成你电脑上的目录）<br>
5.以上步骤都OK的话，我们可以再次开启cmd命令行，进入node，输入“require('express')”来测试下node的模块全局路径是否配置正确了。正确的话cmd会列出express的相关信息。<br>
6.接下来就可以安装cnpm了。打开cmd,输入<br>
npm install -g cnpm --registry=https://registry.npm.taobao.org<br>
安装完毕后执行cnpm -v查看是否成功。<br>
7.安装vue-cli 	<br>
 cnpm n install vue-cli -g<br>
安装完成后，输入vue -V查看是否成功。<br>
备注：设置环境变量的时候除了在高级系统设置中设置外还可以用cmd 中setx命令，不清楚的百度一下即可。<br>



