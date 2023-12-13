# API de videos feita em Node.js

Aplicação criada em conjunto com a Rocketseat, link do video:   
https://www.youtube.com/watch?v=hHM-hr9q4mo&t=587s

# Bibliotecas:

## Biblioteca fastify utilizada para criar a API:

```npm install fastify```

## Biblioteca para servidor http:

```import {} from 'node:http'```

# Anotações

Comando do node para atualizar sempre que salvar o projeto:

```node --watch arquivo.js```

## Biblioteca para manipulação de arquivo:

``` import {} from 'node:fs' ```

## Biblioteca de Criptografia:

```import {} from 'node:crypto'```


# Métodos para API (CRUD - Create, Read, Update, Delete):

 POST (Create) - Método para criação de um recurso  
 *POST localhost:3333/videos*

 GET (Read) - Método para solicitar a representação de um recurso espefico  
 *GET localhost:3333/videos/1*

 PUT (Update) - Método para alteração  
 *PUT localhost:3333/videos*

 PATH (Update) - Método para alterar algo em especifico de um registro  
 *PATH localhost:3333/videos/1*

 DELETE (Delete) - Método para deletar um registro   
 *DELETE localhost:3333/videos/1*


# Banco de dados PostgreSQL

Repositório de referência:
[Postgres](https://github.com/porsager/postgres)

## Comando para criação do banco de dados no arquivo create-table.js