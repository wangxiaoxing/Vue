var express = require('express');
var bodyParser = require('body-parser');
var querystring = require('querystring');
var app = express();
var url = require('url');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/user1', function (req, res) {
    console.log(req.url);
    var params = url.parse(req.url, true).query;
    console.log(params);
    res.send('axios的get收到');
});
app.get('/user2', function (req, res) {
    console.log(req.url);
    var params = url.parse(req.url, true).query;
    console.log(params);
    res.send('axios的get收到');
});
//默认编码方式的数据接收方法
app.post('/user1', function (req, res) {
    console.log(req.url);
    req.on('data', function (data) {
        obj = JSON.parse(data);
        console.log(obj);
    });
    res.send('axios的post收到');
});
//后台改变接收参数的方法
app.post('/user2', bodyParser.json(),function (req, res) {
    console.log(req.url);
    console.log(req.body);
    res.send('axios的post收到');
});
//前端修改axios post的编码格式成application/x-www-form-urlencoded
app.post('/user3', function (req, res) {
    console.log(req.url);
    req.on('data', function (data) { 
        console.log(querystring.parse(decodeURIComponent(data)));
    })
    res.send('axios的post收到');
    
 })
app.listen('8088', function () { 
    console.log('服务器启动中');
})
