var http = require("http")
var url = require("url")

var server = http.createServer()

server.on("request", function(req, res) {

    // res.write("hello")

    // req的返回信息的url就是我们访问的子域的地址
    // ?后面的部分称为查询字符串
    console.log(req.url)

    // 可以使用url.parse方法来解析url地址
    var urlStr = url.parse(req.url)
    // var urlStr = url.parse("http://www.baidu.com/a/b/index.html?name=2")
    console.log(urlStr)

    // 因此我们就可以使用urlStr的返回对象的不同来向客户端返回不同的值
    switch (urlStr.pathname) {
        case "/":
            res.writeHead(200, {
                "content-type" : "text/html;charset=utf-8"
            })
            res.write("<h1>个人主页</h1>");
            break;
        case "news.html":
            res.writeHead(200, {
                "content-type" : "text/html;charset=utf-8"
            })
            res.write("<h1>新闻主页</h1>");
            break;
        case "vip.html":
            res.writeHead(200, {
                "content-type" : "text/html;charset=utf-8"
            })
            res.write("<h1>会员中心</h1>");
            break;
        default:
            res.writeHead(404, {
                "content-type" : "text/html;charset=utf-8"
            })
            res.write("404 您访问的页面不存在")

    }


    res.end()

})

server.listen(8080)