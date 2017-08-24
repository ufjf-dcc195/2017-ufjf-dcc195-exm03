var exec = require("child_process").exec;
var qs = require("querystring");

function helloLog(){
  console.log("Olá mundo");
}

function loop(){
  console.log("Iniciando loop...");
  var tempo = (new Date()).getTime()+5*1000;
  while((new Date()).getTime()<tempo){}
  console.log("Fim do looop.");
}

function hello(req, res){
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("Olá mundo! São "+(new Date()));
  res.end();
}

function naoEncontrado(req, res){
  res.writeHead(404, {"Content-Type": "text/plain"});
  res.write("Recurso não encontrado!");
  res.end();
}

function list(req, res){
  exec("ls -la", function(err, stdout, stderr) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<pre>");
    res.write(stdout);
    res.write("</pre>");
    res.end();
  });
}

function formTest(req, res){
  if(req.method == "GET"){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Qual seu nome?</h1>");
    res.write("<form method=post>");
    res.write("<input type=text name=nome />");
    res.write("<input type=submit />");
    res.write("</form>");
    res.end();
  } else {
    var body = '';
    req.on('data', function( data) {
      body += data;
    });
    req.on('end', function() {
      var dados = qs.parse(body);
      console.log(dados);
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<h1>Bem vindo!</h1>");
      res.write("<p> Olá "+dados.nome+"!</p>");
      res.end();
    })

  }
}

exports.helloLog = helloLog;
exports.loop = loop;
exports.hello = hello;
exports.naoEncontrado = naoEncontrado;
exports.lista = list;
exports.form = formTest;
