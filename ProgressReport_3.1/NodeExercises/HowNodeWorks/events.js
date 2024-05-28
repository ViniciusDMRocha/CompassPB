const EventEmitter = require("events");
const http = require("http");

class Vendas extends EventEmitter {
  constructor() {
    super();
  }
}

const emitter = new Vendas();
const estoque = 1000;

emitter.on("novaVenda", () => {
  console.log("Primeiro emitter");
});

emitter.on("novaVenda", () => {
  console.log("Segundo emitter");
});

emitter.on("novaVenda", (qtd) => {
  console.log(estoque - qtd);
});

emitter.emit("novaVenda", 100);

///////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request recebido");
  //   console.log(req.url);
  res.end("Request recebido");
});

server.on("request", (req, res) => {
  console.log("Outro request recebido");
});

server.on("close", () => {
  console.log("Servidos fechado");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Esperando por request");
});
