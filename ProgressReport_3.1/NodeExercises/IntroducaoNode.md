# Anotações sobre Node.js

## Introdução ao Node.js
Node.JS is a JavaScript runtime built on Google's open-source V8 JavaScript engine. É basicamente uma maneira que acharam para fazer com que o JavaScript executasse fora do navegador, sem limitações.

Um dos pontos positivos é o NPM, o fato de ser usado por diversas empresas, e com ele o JavaScript é a linguagem tanto do front, quanto do back-end.

![Node.JS](Imagens/NodePros.png)

---
Usamos o módulo File System para realizar escritas e leituras em arquivos. Mais conteúdo sobre esse assunto clicando [aqui](https://www.w3schools.com/nodejs/nodejs_filesystem.asp 'File System Module').
```
const fs = require('fs');
```
---
Usamos o módulo HTTP para trabalharmos com Servers. Mais conteúdo sobre esse assunto clicando [aqui](https://www.w3schools.com/nodejs/nodejs_http.asp 'HTTP Module').
```
const http = require('http');
```
---
Usamos o módulo URL para trabalharmos com Routing. Mais conteúdo sobre esse assunto clicando [aqui](https://www.w3schools.com/nodejs/nodejs_url.asp 'URL Module').
```
const url = require('url');
```

## API's

Uma API é basicamente um serviço no qual iremos solicitar algumtipo de dado.


