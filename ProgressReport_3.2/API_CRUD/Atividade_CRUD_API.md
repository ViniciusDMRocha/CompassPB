# CRUD API

### Primeiro passo - DynamoDB

Primeiramente criamos nosso banco de dados utilizando o serviço DynamoDB, é um serviço de banco de dados NoSQL que é feito para fornecer desempenho rápido e previsível com escalabilidade automática:

- **Nome da tabela**: `http-crud-tutorial-items`.
- **Chave primária**: `id`.

### Segundo passo - AWS Lambda

O AWS Lambda é um serviço de computação que permite que você execute código sem provisionar ou gerenciar servidores. O Lambda executa seu código somente quando necessário e dimensiona automaticamente, de algumas solicitações por dia a milhares por segundo. Você cria uma função Lambda para o backend da sua API.

- **Nome da função**: `http-crud-tutorial-function`.
- **Nome da Role**: `http-crud-tutorial-role`.
- **Policy templates**: escolha Simple microservice permissions. Esta política concede à função Lambda permissão para interagir com o DynamoDB.
- **Function**: A função utilizada foi a que está no arquivo `index.js`.

### Terceiro passo - HTTP API

O Amazon API Gateway é um serviço totalmente gerenciado que facilita para os desenvolvedores publicar, manter, monitorar, proteger e operar APIs em qualquer escala. COm ele é possível criar APIs RESTful usando APIs HTTP ou APIs REST.

- **Nome da API**: `http-crud-tutorial-api`.

### Quarto passo - Routes

Rotas são uma maneira de enviar solicitações de API de entrada para recursos de backend. Rotas consistem em duas partes: um método HTTP e um caminho de recurso, por exemplo, GET /items. Para esta API de exemplo, criamos quatro rotas:

- **GET** /items/{id}
- **GET** /items
- **PUT** /items
- **DELETE** /items/{id}

### Quinto passo - Create an integration

O papel da integração é conectar uma rota a recursos de backend. Para esta API de exemplo, você cria uma integração Lambda que você usa para todas as rotas.

### Sexto passo - Rotas de Integração

- Choose your API (http-crud-tutorial-api)
- Choose Integrations
- Choose a route
- Under Choose an existing integration, choose `http-crud-tutorial-function`

### Sétimo passo - Testando

Testei a API pelo Postman, utilizando as requisições disponíveis no arquivo: `CRUD_API.postman_collection.json`
