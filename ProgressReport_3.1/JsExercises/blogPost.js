// Parte 1 do exercicio

let blogPost = {
  titulo: "Post do Vinicius",
  conteudo: "Hoje o assunto é sobre...",
  autor: "Vinicius Dias",
  visualizacoes: 10,
  comentarios: [
    { autor: "Ana", conteudo: "Aaaa" },
    { autor: "Joao", conteudo: "Aa" },
    { autor: "Gustavo", conteudo: "A" },
  ],
  ativo: true,
};

console.log(blogPost);

// Parte 2 do exercicio

function Blog(titulo, conteudo, autor) {
  this.titulo = titulo;
  this.conteudo = conteudo;
  this.autor = autor;
  this.visualizacoes = 0;
  this.comentarios = [];
  this.ativo = false;
}
let blogTest = new Blog(
  "Teste",
  "Testando a segunda parte do exercicio",
  "Vinicius"
);
console.log(blogTest);
