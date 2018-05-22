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
9.绑定img元素的src时，用<img v-bind:src='',更多知识点移步https://www.jianshu.com/p/f82c5ecbd3a5
 






