var http = require("http")
var fs = require("fs")
var url = require("url")

// 使用http模块创建一个服务器
var server = http.createServer()

// 创建文件系统模块的对应读取方式
var HtmlDir = __dirname + '/html/';

// 将服务器启动,并传入相应的信息
server.on('request', function( req, res ) {
    // 定义一个urlStr来保存用户的请求路径
    var urlStr = url.parse( req.url );
    // 在不同的情况下,返回给用户不同的文件
    switch (urlStr.pathname) {
        case "/":
            sendData( HtmlDir + 'index.html', req, res );
            break;
        // case "/":
        //     res.writeHead(200, {
        //         sendData(htmlDir + "index.html", req, res)
        //     })
        //     break;
        default:
            res.writeHead(404, {
                "content-type": "text/html;charset=utf-8"
            })
            res.end("<h1>404 页面被吃掉了</h1>")
    }

    
});
function sendData(file, req, res) {
    fs.readFile( file, function(err, data) {

        if (err) {
            res.writeHead(404, {
                'content-type' : 'text/html;charset=utf-8'
            });
            res.end('<h1>页面被LEO吃掉了</h1>');
        } else {
            res.writeHead(200, {
                'content-type' : 'text/html;charset=utf-8'
            });
            res.end(data);
        }

    } );
}


server.listen(8080, 'localhost')