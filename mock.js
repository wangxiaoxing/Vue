import Mock from 'mockjs'
var url = require('url');
//处理post请求
Mock.mock('/regIn', 'post', function () {
    return true;
});
Mock.mock('/loginIn', 'post', function (options) {
    return {
        isLogin: true,
        //获取post传过来的参数.options，里面有url、type 和 body 三个属性
        userInfo: JSON.parse(options.body)
    }
});
//处理get请求,用正则表达式来匹配，用“/searchResult”会报404错误。
Mock.mock(/\/searchResult/, 'get', function (options) {
    //用node的解析方法，得到一个对象
    var params = url.parse(options.url, true).query;
    //用原生的解析方法,得到带等号字符串
    //var params = decodeURI(options.url).slice(options.url.indexOf('?')+1);
    console.log(params);
});
