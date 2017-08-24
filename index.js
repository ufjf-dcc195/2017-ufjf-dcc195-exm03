var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handlers = {};
handlers["/"] = requestHandlers.helloLog;
handlers["/loop"] = requestHandlers.loop;
handlers["/index.html"] = requestHandlers.hello;
handlers["/notfound"] = requestHandlers.naoEncontrado;
handlers["/ls.txt"] = requestHandlers.lista;
handlers["/form.html"] = requestHandlers.form;


server.start(router, handlers);
