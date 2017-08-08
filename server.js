
var express = require('express')
,http = require('http')
,bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());
app.post("/", function( req, res){
res.writeHead(200,{"Content-Type" : "text/plain"});
//post데이터확인
console.log(req.param('nickname',null));
console.log(req.param('job',null));
res.end('test');
});
app.use(function( req, res){
res.writeHead(404,{"Content-Type" : "text/plain"});
res.end('404 ERROR');
});
http.createServer(app).listen(process.env.PORT);

