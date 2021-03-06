var http = require("http");
var url = require("url");

function start(router, handlers){
  http.createServer(function (req, res){
    var urlParsed  = url.parse(req.url, true);
    console.log("Requisição recebida em"+(new Date()), "no caminho ", urlParsed.pathname);
    router.route(urlParsed.pathname, handlers, req, res);
  }).listen(8888);
  console.log("Servidor rodando em http://localhost:8888");
}

module.exports.start = start;
